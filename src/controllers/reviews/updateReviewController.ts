import { Request, Response } from 'express';

import { Review } from '@/models/review';

export const updateReviewController = async (req: Request, res: Response) => {
  try {
    const { _id, name } = req.user as { _id: string; name: string };
    const updatedReview = await Review.findOneAndUpdate(
      { owner: _id },
      req.body,
      { new: true },
    ).populate({
      path: 'owner',
      select: 'name role avatarURL -_id',
    });

    if (!updatedReview) {
      res.status(404).json({
        status: 404,
        message: `User ${name} have no any review`,
      });
      return;
    }

    res.status(200).json({
      status: 200,
      message: 'Success',
      review: updatedReview,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};
