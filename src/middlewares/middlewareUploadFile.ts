import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import { Request } from 'express';
import type { Express } from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const cloudStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req: Request, file: Express.Multer.File) => {
    console.log(' Processing file:', {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
    });
    const folder = file.fieldname === 'avatarURL' ? 'avatars' : 'temp';

    return {
      folder,
      allowed_formats: ['jpg', 'png', 'webp'],
      public_id: (req.user as { _id: string })._id,
      transformation: [{ width: 260, height: 260, crop: 'thumb' }],
    };
  },
});

const upload = multer({
  storage: cloudStorage,
  limits: {
    fileSize: 3 * 1024 * 1024,
  },
});

export const middlewareUploadFile = upload.single('avatarURL');
