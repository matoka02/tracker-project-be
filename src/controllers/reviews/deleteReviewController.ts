import { Request, Response } from 'express';

import { Review } from '@/models/review';

export const deleteReviewController = async (req: Request, res: Response) => {
  try {
    const { _id, name } = req.user as { _id: string; name: string };
    const ownReview = await Review.findOneAndDelete({ owner: _id });

    if (!ownReview) {
      res.status(404).json({
        status: 404,
        message: `User ${name} have no any review to delete`,
      });
      return;
    }

    res.status(200).json({
      status: 200,
      message: `Your review deleted successfully`,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({ message });
  }
};
