import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { User } from '@/models/user';

export const registerController = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;

    if (!process.env.JWT_SECRET_KEY) {
      throw new Error('JWT_SECRET_KEY is not configured');
    }

    const hashPassword = await bcrypt.hash(password, 9);

    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
    });

    const payload = {
      id: newUser._id.toString(),
    };
    console.log(payload);

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    } as jwt.SignOptions);

    const newAuthUser = await User.findByIdAndUpdate(
      newUser._id,
      { token },
      { new: true },
    )
      .lean()
      .exec();

    if (!newAuthUser) {
      res.status(500).json({
        status: 500,
        message: 'Failed to create user',
      });
      return;
    }

    res.status(201).json({
      status: 201,
      message: 'Success',
      user: {
        name: newAuthUser.name,
        email: newAuthUser.email,
        token: newAuthUser.token,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error && 'code' in error && error.code === 11000) {
      const duplicateError = error as {
        code: number;
        keyValue?: Record<string, unknown>;
      };

      const email = duplicateError.keyValue?.email
        ? String(duplicateError.keyValue.email)
        : 'unknown';

      res.status(409).json({
        status: 409,
        message: `Email ${email} is in use`,
      });

      return;
    }

    const message =
      error instanceof Error ? error.message : 'Registration failed';
    res.status(400).json({
      status: 400,
      message: `MongoDB validation error: //${message}//`,
    });
  }
};
