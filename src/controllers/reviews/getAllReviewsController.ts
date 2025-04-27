import { Request, Response } from 'express';

import { Review } from '../../models/review';

export const getAllReviewsController = async (req: Request, res: Response) => {
  try {
    const reviewsList = await Review.find().populate({
      path: 'owner',
      select: 'name email role avatarURL -_id',
    });

    res.status(200).json({
      status: 200,
      message: 'Success',
      reviews: reviewsList,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({
      status: 500,
      message,
    });
  }
};
