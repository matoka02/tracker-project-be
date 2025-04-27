import { Request, Response } from 'express';

import { Review } from '../../models/review';

export const addReviewController = async (req: Request, res: Response) => {
  const { _id: owner } = req.user as { _id: string };

  try {
    const newReview = await Review.create({ ...req.body, owner });

    res.status(201).json({
      status: 201,
      message: 'Success',
      review: newReview,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Validation error';
    res.status(400).json({
      status: 400,
      message,
    });
  }
};
