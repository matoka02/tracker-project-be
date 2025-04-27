import { Request, Response } from 'express';

import { Review } from '@/models/review';

export const getReviewController = async (req: Request, res: Response) => {
  try {
    const { _id, name } = req.user as { _id: string; name: string };
    const ownReview = await Review.findOne({ owner: _id }).populate({
      path: 'owner',
      select: 'name email role avatarURL -_id',
    });

    if (!ownReview) {
      res.status(200).json({
        status: 200,
        message: `User ${name} have no review`,
        review: {},
      });
      return;
    }

    res.status(200).json({
      status: 200,
      message: 'Success',
      review: ownReview,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};
