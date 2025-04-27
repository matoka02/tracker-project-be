import { Request, Response, NextFunction } from 'express';

import { addReviewJoiSchema } from '../models/review';
import { Review } from '../models/review';

export const middlewareAddReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = (req.user as { _id: string })._id;
    const userReviews = await Review.find({ owner: userId });

    if (userReviews.length >= 1) {
      res.status(403).json({
        status: 403,
        message: 'You can only leave one review',
      });
      return;
    }

    await addReviewJoiSchema.validateAsync(req.body);
    next();
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Validation error';
    res.status(400).json({
      status: 400,
      message: `Validation error: ${message}`,
    });
  }
};
