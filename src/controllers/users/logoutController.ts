import { Request, Response } from 'express';

import { User } from '../../models/user';

export const logoutController = async (req: Request, res: Response) => {
  const { _id } = req.user as { _id: string };

  try {
    const user = await User.findByIdAndUpdate(_id, { token: null });

    if (!user) {
      res.status(401).json({ status: 401, message: 'Not authorized' });
      return;
    }

    res.status(204).end();
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Logout failed';
    res.status(500).json({ status: 500, message });
  }
};
