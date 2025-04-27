import { Request, Response, NextFunction } from 'express';

import { addTaskJoiSchema } from '../models/task';
import { validateDate, convertTimeToMinutes } from '../services';

export const middlewareAddTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await addTaskJoiSchema.validateAsync(req.body);

    const { start, end, date } = req.body;

    if (convertTimeToMinutes(start) >= convertTimeToMinutes(end)) {
      res.status(400).json({
        status: 400,
        message: 'Start time must be before end time',
      });
      return;
    }

    if (!validateDate(date)) {
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
