import express from 'express';

import {
  registerController,
  loginController,
  logoutController,
  currentUserController,
  updateUserController,
} from '../controllers/users';
import {
  middlewareRegister,
  middlewareLogin,
  middlewareAuth,
  middlewareUpdateUser,
  middlewareUploadFile,
} from '../middlewares';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Test endpoint' });
});
router.post('/register', middlewareRegister, registerController);
router.post('/login', middlewareLogin, loginController);
router.post('/logout', middlewareAuth, logoutController);
router.get('/current', middlewareAuth, currentUserController);
router.patch(
  '/edit',
  middlewareAuth,
  middlewareUploadFile,
  middlewareUpdateUser,
  updateUserController,
);

export default router;
