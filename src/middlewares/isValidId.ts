import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';

import { AppError } from '../services/appError';

export const isValidId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (!id || !isValidObjectId(id)) {
    return next(new AppError(400, `${id} is not a valid ID`));
  }
  next();
};
