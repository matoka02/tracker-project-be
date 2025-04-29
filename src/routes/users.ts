import express from 'express';

import {
  registerController,
  loginController,
  logoutController,
  currentUserController,
  updateUserController,
} from '@/controllers/users';
import {
  middlewareRegister,
  middlewareLogin,
  middlewareAuth,
  middlewareUpdateUser,
  middlewareUploadFile,
} from '@/middlewares';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Test endpoint' });
});
/**
 * @swagger
 * /users/register:
 *   post:
 *     tags: [Users]
 *     summary: "User registration"
 *     parameters: []
 *     security: []
 *     requestBody:
 *       description: "Registration request body object"
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/RegistrationRequest"
 *     responses:
 *       201:
 *         description: "Success"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/RegistrationResponse"
 *       400:
 *         description: "Joi validation error"
 *         content: {}
 *       409:
 *         description: "Email example@example.com is in use"
 *         content: {}
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.post('/register', middlewareRegister, registerController);
/**
 * @swagger
 * /users/login:
 *   post:
 *     tags: [Users]
 *     summary: "User authentication"
 *     parameters: []
 *     security: []
 *     requestBody:
 *       description: "Login request body object"
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/LoginRequest"
 *     responses:
 *       200:
 *         description: "Success"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/LoginResponse"
 *       400:
 *         description: "Joi validation error || Email or password is wrong"
 *         content: {}
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.post('/login', middlewareLogin, loginController);
/**
 * @swagger
 * /users/logout:
 *   post:
 *     tags: [Users]
 *     summary: "User logout"
 *     parameters: []
 *     security: [{ Bearer: [] }]
 *     responses:
 *       204:
 *         description: "No content (logged out successfully)"
 *         content: {}
 *       401:
 *         description: "Not authorized"
 *         content: {}
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.post('/logout', middlewareAuth, logoutController);
/**
 * @swagger
 * /users/current:
 *   get:
 *     tags: [Users]
 *     summary: "Get current user"
 *     parameters: []
 *     security: [{ Bearer: [] }]
 *     responses:
 *       200:
 *         description: "Success"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/UsersCurrentResponse"
 *       401:
 *         description: "Not authorized"
 *         content: {}
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.get('/current', middlewareAuth, currentUserController);
/**
 * @swagger
 * /users/edit:
 *   patch:
 *     tags: [Users]
 *     summary: "User update"
 *     parameters: []
 *     security: [{ Bearer: [] }]
 *     requestBody:
 *       description: "User's update object"
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: "#/components/schemas/UsersUpdateRequest"
 *     responses:
 *       200:
 *         description: "Success. User updated"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/UsersUpdateResponse"
 *       400:
 *         description: "Bad Request"
 *         content: {}
 *       401:
 *         description: "Not authorized"
 *         content: {}
 *       423:
 *         description: "Locked. You have no necessary permissions to update user role"
 *         content: {}
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.patch(
  '/edit',
  middlewareAuth,
  middlewareUploadFile,
  middlewareUpdateUser,
  updateUserController,
);

export default router;
