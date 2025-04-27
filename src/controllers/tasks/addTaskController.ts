import { Request, Response } from 'express';

import { Task } from '../../models/task';

export const addTaskController = async (req: Request, res: Response) => {
  const { _id: owner } = req.user as { _id: string };

  try {
    const task = await Task.create({
      ...req.body,
      owner,
    });

    res.status(201).json({
      status: 201,
      message: 'Task created successfully',
      task,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Validation error';
    res.status(400).json({
      status: 400,
      message,
    });
  }
};
