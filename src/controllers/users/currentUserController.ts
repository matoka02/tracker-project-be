import { Request, Response } from 'express';

export const currentUserController = async (req: Request, res: Response) => {
  res.status(200).json({
    status: 200,
    message: 'Success',
    user: req.user,
  });
};
