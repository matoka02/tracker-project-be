import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { IAuthUser, User } from '../models/user';

declare global {
  namespace Express {
    interface Request {
      user?: IAuthUser;
    }
  }
}

export const middlewareAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  if (!authorization || bearer !== 'Bearer') {
    res.status(401).json({ status: 401, message: 'Not authorized' });
    return;
  }

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as {
      id: string;
    };
    // const user = await User.findById(id);
    const user = await User.findById(id).lean().exec();

    if (!user || !user.token || user.token !== token) {
      res.status(401).json({ status: 401, message: 'Not authorized' });
      return;
    }
    const authUser: IAuthUser = {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      avatarURL: user.avatarURL,
      phone: user.phone,
      skype: user.skype,
      birthday: user.birthday,
      role: user.role,
      theme: user.theme,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    req.user = authUser;

    next();
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Authorization error';
    res.status(401).json({ status: 401, message });
  }
};
