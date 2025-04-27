import Joi from 'joi';
import { Model, model, models, Schema } from 'mongoose';

// ------------------------------------ INTERFACES --------------------------------------
interface IUser {
  name: string;
  password: string;
  email: string;
  avatarURL: string;
  phone: string;
  skype: string;
  birthday: string;
  role: 'user' | 'admin';
  theme: 'light' | 'dark';
  token?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IAuthUser extends Omit<IUser, 'password'> {
  _id: string;
}

// ------------------------------------ CONSTANTS --------------------------------------
const nameRegexp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegexp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
const DEFAULT_AVATAR =
  'https://res.cloudinary.com/dquabwb70/image/upload/v1693433481/avatars/x9qsndlni4bflvs2it4i.svg';

// ------------------------------------ MONGOOSE SCHEMA --------------------------------------
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      match: nameRegexp,
      required: [true, 'Enter user name'],
    },
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    avatarURL: {
      type: String,
      default: DEFAULT_AVATAR,
    },
    phone: {
      type: String,
      match: phoneRegexp,
      default: '',
    },
    skype: {
      type: String,
      default: '',
    },
    birthday: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    theme: {
      type: String,
      enum: ['light', 'dark'],
      default: 'light',
    },
    token: String,
  },
  { versionKey: false, timestamps: true },
);

// const User = model<IUser>('users', userSchema);
const User: Model<IUser> = models?.User || model('users', userSchema);

// ------------------------------------ JOI SCHEMAS --------------------------------------
const registerUserJoiSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .pattern(nameRegexp)
    .empty(false)
    .required()
    .messages({
      'string.base': 'The name field must be a string.',
      'any.required': 'The name field is required.',
      'string.empty': 'The name field must not be empty.',
      'string.pattern.base':
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    }),
  email: Joi.string().email().empty(false).required(),
  password: Joi.string().min(3).max(30).empty(false).required(),
});

const loginUserJoiSchema = Joi.object({
  email: Joi.string().email().empty(false).required(),
  password: Joi.string().min(3).max(30).empty(false).required(),
});

const updateUserJoiSchema = Joi.object({
  name: Joi.string().min(3).max(30).empty(false).messages({
    'string.base': 'The name field must be a string.',
    'string.empty': 'The name field must not be empty.',
    'string.pattern.base':
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  }),
  email: Joi.string().email().empty(false),
  avatarURL: Joi.any(),
  phone: Joi.string().min(13).max(20).pattern(phoneRegexp).messages({
    'string.base': 'The phone number must be a string.',
    'string.pattern.base':
      'The phone number must be in format: +38 (000) 111-2345',
  }),
  skype: Joi.string().min(3),
  birthday: Joi.date()
    .iso()
    .messages({ 'date.format': 'Date in ISO 8601 format (YYYY-MM-DD).' }),
  role: Joi.string().valid('admin', 'user'),
  theme: Joi.string().valid('light', 'dark'),
});

// ------------------------------------ EXPORTS --------------------------------------

export { User, registerUserJoiSchema, loginUserJoiSchema, updateUserJoiSchema };
export type { IUser, IAuthUser };
