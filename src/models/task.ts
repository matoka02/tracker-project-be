import Joi from 'joi';
import { Model, model, models, Schema } from 'mongoose';

import { validateJoiStartEndTime } from '../services';

import { IAuthUser } from './user';

// ------------------------------------ INTERFACES --------------------------------------
interface ITask {
  title: string;
  start: string;
  end: string;
  priority: 'low' | 'medium' | 'high';
  date: string;
  category: 'to-do' | 'in-progress' | 'done';
  owner: IAuthUser;
  createdAt: Date;
  updatedAt: Date;
}

const dateRegexp = /^\d{4}-\d{2}-\d{2}$/;
const timeRegexp = /^\d{2}:\d{2}$/;

// ------------------------------------ MONGOOSE SCHEMA --------------------------------------
const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: [true, 'Task is required'],
    },
    start: {
      type: String,
      match: timeRegexp,
      required: true,
    },
    end: {
      type: String,
      match: timeRegexp,
      required: true,
      validate: {
        validator: function (this: ITask, value: string) {
          return value >= this.start;
        },
        message: 'START TIME must be less than END TIME!',
      },
    },
    priority: {
      type: String,
      required: true,
      enum: ['low', 'medium', 'high'],
      default: 'low',
    },
    date: {
      type: String,
      match: dateRegexp,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['to-do', 'in-progress', 'done'],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  { versionKey: false, timestamps: true },
);

// const Task = model<ITask>("task", taskSchema);
const Task: Model<ITask> = models?.Task || model('tasks', taskSchema);

// -------------------------------------- JOI SCHEMA -------------------------------------------
const addTaskJoiSchema = Joi.object({
  title: Joi.string().max(250).required(),
  start: Joi.string().pattern(timeRegexp).required().empty(false).messages({
    'string.base': 'The start time must be a string.',
    'any.required': 'The start time field is required.',
    'string.empty': 'The start time must not be empty.',
    'string.pattern.base':
      'The start time must be in format hh:mm (example: 12:50)',
  }),
  end: Joi.string().pattern(timeRegexp).required().empty(false).messages({
    'string.base': 'The end time must be a string.',
    'any.required': 'The end time field is required.',
    'string.empty': 'The end time must not be empty.',
    'string.pattern.base':
      'The end time must be in format hh:mm (example: 12:50)',
  }),
  priority: Joi.string().valid('low', 'medium', 'high').required().messages({
    'any.required': 'Priority is required',
    'string.base': 'Priority must be a string',
    'any.only': 'Priority must be one of: low, medium, high',
  }),
  date: Joi.date().iso().min('2025-01-01').required().messages({
    'date.format': 'Date in ISO 8601 format (YYYY-MM-DD).',
    'date.min': 'Date after 2025-01-01.',
  }),
  category: Joi.string()
    .valid('to-do', 'in-progress', 'done')
    .required()
    .messages({
      'any.required': 'Category is required',
      'string.base': 'Category must be a string',
      'any.only': 'Category must be one of: to-do, in-progress, done',
    }),
})
  .custom(validateJoiStartEndTime)
  .messages({
    'any.invalid': 'Start time must be less than end time',
  });

const updateTaskJoiSchema = Joi.object({
  title: Joi.string().max(250),
  start: Joi.string().pattern(timeRegexp).empty(false).messages({
    'string.base': 'The start time must be a string.',
    'string.empty': 'The start time must not be empty.',
    'string.pattern.base':
      'The start time must be in format hh:mm (example: 12:50)',
  }),
  end: Joi.string().pattern(timeRegexp).empty(false).messages({
    'string.base': 'The end time must be a string.',
    'string.empty': 'The end time must not be empty.',
    'string.pattern.base':
      'The end time must be in format hh:mm (example: 12:50)',
  }),
  priority: Joi.string().valid('low', 'medium', 'high').messages({
    'any.only': 'Priority must be one of: low, medium, high',
  }),
  date: Joi.date().iso().min('2025-01-01').messages({
    'date.format': 'Date in ISO 8601 format (YYYY-MM-DD).',
    'date.min': 'Date after 2025-01-01.',
  }),
  category: Joi.string().valid('to-do', 'in-progress', 'done').messages({
    'any.only': 'Category must be one of: to-do, in-progress, done',
  }),
});

// ------------------------------------ EXPORTS --------------------------------------
export { Task, addTaskJoiSchema, updateTaskJoiSchema };
export type { ITask };
