import { Request, Response, NextFunction } from 'express';

import { updateTaskJoiSchema } from '@/models/task';
import { Task } from '@/models/task';
import { validateDate, convertTimeToMinutes } from '@/services';

export const middlewareUpdateTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await updateTaskJoiSchema.validateAsync(req.body);

    const { start, end, date, owner } = req.body;
    const { id } = req.params;
    const userId = (req.user as { _id: string })._id;

    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({ status: 404, message: 'Task not found' });
      return;
    }

    if (task.owner.toString() !== userId) {
      res.status(403).json({
        status: 403,
        message: "Forbidden. You don't have permissions to update this task",
      });
      return;
    }

    if (owner) {
      res.status(403).json({
        status: 403,
        message: "Forbidden. You can't change task owner",
      });
      return;
    }

    // Time validation
    const startTime = start
      ? convertTimeToMinutes(start)
      : convertTimeToMinutes(task.start);
    const endTime = end
      ? convertTimeToMinutes(end)
      : convertTimeToMinutes(task.end);

    if (startTime >= endTime) {
      res.status(400).json({
        status: 400,
        message: 'Start time must be before end time',
      });
      return;
    }

    if (date && !validateDate(date)) {
      res.status(400).json({
        status: 400,
        message: 'Invalid date format',
      });
      return;
    }

    next();
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Validation error';
    res.status(400).json({
      status: 400,
      message: `Validation error: ${message}`,
    });
  }
};
