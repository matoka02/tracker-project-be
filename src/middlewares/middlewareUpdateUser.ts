import { Request, Response, NextFunction } from 'express';

import { updateUserJoiSchema } from '@/models/user';
import { validateDate } from '@/services';

export const middlewareUpdateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.body.role && (req.user as { role: string }).role !== 'admin') {
    res.status(403).json({
      status: 403,
      message: "Forbidden. You don't have permissions to update user role",
    });
    return;
  }

  try {
    await updateUserJoiSchema.validateAsync(req.body);

    if (req.body.birthday && !validateDate(req.body.birthday)) {
      res.status(400).json({
        status: 400,
        message: 'Invalid date format',
      });
      return;
    }

    next();
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Validation error';
    res.status(400).json({
      status: 400,
      message: `Validation error: ${message}`,
    });
  }
};
