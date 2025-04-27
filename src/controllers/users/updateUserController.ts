import { Request, Response } from 'express';

import { User } from '@/models/user';

export const updateUserController = async (req: Request, res: Response) => {
  const { _id } = req.user as { _id: string };

  if (!req.file?.path && (!req.body || Object.keys(req.body).length === 0)) {
    res.status(400).json({
      status: 400,
      message: 'No data provided for update',
    });
    return;
  }

  if (req.file?.path) {
    req.body.avatarURL = req.file.path;
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { ...req.body },
      { new: true },
    );

    if (!updatedUser) {
      res.status(404).json({
        status: 404,
        message: 'User not found',
      });
      return;
    }

    await updatedUser.save();

    res.status(200).json({
      status: 200,
      message: 'Success. User updated',
      user: {
        name: updatedUser.name,
        email: updatedUser.email,
        avatarURL: updatedUser.avatarURL,
        phone: updatedUser.phone,
        skype: updatedUser.skype,
        birthday: updatedUser.birthday,
        role: updatedUser.role,
        theme: updatedUser.theme,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({
      status: 500,
      message,
    });
  }
};
