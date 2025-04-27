import { Request, Response } from 'express';

import { Task } from '@/models/task';

export const removeTaskController = async (req: Request, res: Response) => {
  if (!req.user) {
    res.status(401).json({
      status: 401,
      message: 'Not authorized',
    });
    return;
  }
  const { id } = req.params;
  const userId = req.user._id.toString();

  try {
    const currentTask = await Task.findById(id);

    if (!currentTask) {
      res.status(404).json({
        status: 404,
        message: 'Task not found',
      });
      return;
    }

    if (currentTask.owner.toString() !== userId) {
      res.status(403).json({
        status: 403,
        message: "Forbidden. You don't have permission to remove this task",
      });
      return;
    }

    await Task.findByIdAndDelete(id);

    res.status(200).json({
      status: 200,
      message: `Task '${currentTask.title}' deleted successfully`,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error';
    res.status(500).json({
      status: 500,
      message,
    });
  }
};
