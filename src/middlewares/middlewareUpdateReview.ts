import { Request, Response, NextFunction } from 'express';

import { updateReviewJoiSchema } from '@/models/review';

export const middlewareUpdateReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await updateReviewJoiSchema.validateAsync(req.body);
    next();
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Validation error';
    res.status(400).json({
      status: 400,
      message: `Validation error: ${message}`,
    });
  }
};
