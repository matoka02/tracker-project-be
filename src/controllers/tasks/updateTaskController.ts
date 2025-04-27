import { Request, Response } from 'express';

import { Task } from '../../models/task';

export const updateTaskController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTask) {
      res.status(404).json({
        status: 404,
        message: 'Task not found',
      });
      return;
    }

    res.status(200).json({
      status: 200,
      message: 'Success',
      task: updatedTask,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({
      status: 500,
      message,
    });
  }
};
