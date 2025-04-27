import Joi from 'joi';
import { Model, model, models, Schema } from 'mongoose';

import { IAuthUser } from './user';

// ------------------------------------ INTERFACES --------------------------------------
interface IReview {
  content: string;
  rating: 1 | 2 | 3 | 4 | 5;
  owner: IAuthUser;
  createdAt: Date;
  updatedAt: Date;
}

// ------------------------------------ MONGOOSE SCHEMA --------------------------------------

const reviewSchema = new Schema<IReview>(
  {
    content: { type: String, required: true },
    rating: { type: Number, enum: [1, 2, 3, 4, 5] },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  { versionKey: false, timestamps: true },
);

// const Review = model<IReview>('review', reviewSchema);
const Review: Model<IReview> = models?.Review || model('reviews', reviewSchema);

// -------------------------------------- JOI SCHEMA -------------------------------------------

const addReviewJoiSchema = Joi.object({
  content: Joi.string().min(10).max(300).required().messages({
    'string.min': 'The message must at least 10 characters long.',
    'string.max': 'The message must be no more than 300 characters.',
  }),
  rating: Joi.number().valid(1, 2, 3, 4, 5).required().messages({
    'number.base': 'Rating must be a number',
    'any.only': 'The rating must be from 1 to 5.',
  }),
});

const updateReviewJoiSchema = Joi.object({
  content: Joi.string().min(10).max(300).messages({
    'string.min': 'The message must at least 10 characters long.',
    'string.max': 'The message must be no more than 300 characters.',
  }),
  rating: Joi.number().valid(1, 2, 3, 4, 5).messages({
    'number.base': 'Rating must be a number',
    'any.only': 'The rating must be from 1 to 5.',
  }),
});

// ------------------------------------ EXPORTS --------------------------------------
export { Review, addReviewJoiSchema, updateReviewJoiSchema };
export type { IReview };
