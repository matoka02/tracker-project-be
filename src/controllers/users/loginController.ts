import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { User } from '../../models/user';

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    //   ------------------------------------- CHECK USER ----------------------------------
    if (!user) {
      res
        .status(400)
        .json({ status: 400, message: 'Email or password is wrong' });
      return;
    }

    //   ------------------------------------- CHECK PASSWORD --------------------------------
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res
        .status(400)
        .json({ status: 400, message: 'Email or password is wrong' });
      return;
    }

    //   ------------------------------------- CREATE TOKEN ----------------------------------
    if (!process.env.JWT_SECRET_KEY) {
      throw new Error('JWT_SECRET_KEY is not configured');
    }

    const payload = {
      id: user._id.toString(),
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    } as jwt.SignOptions);

    await User.findByIdAndUpdate(user._id, { token });

    //   ------------------------------------- RESPONSE -------------------------------------
    res.status(200).json({
      status: 200,
      message: 'Success',
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error: any) {
    const message = error instanceof Error ? error.message : 'Login failed';
    res.status(400).json({
      status: 400,
      // message: 'Email or password is wrong',
      message,
    });
  }
};
