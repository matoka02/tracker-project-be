import { Request, Response } from 'express';

import { Task } from '../../models/task';

interface GetTasksQuery {
  month?: string;
}

export const getTasksController = async (
  req: Request<{}, {}, {}, GetTasksQuery>,
  res: Response,
) => {
  const { _id: owner } = req.user as { _id: string };
  const { month } = req.query;

  const searchCriteria = month
    ? {
        owner,
        date: { $regex: month },
      }
    : { owner };

  try {
    const tasks = await Task.find(searchCriteria).populate({
      path: 'owner',
      select: 'name email avatarURL -_id',
    });

    res.status(200).json({
      status: 200,
      message: 'Success',
      tasks,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({
      status: 500,
      message,
    });
  }
};
