/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: "User's email"
 *           format: email
 *           example: "user@example.com"
 *         password:
 *           type: string
 *           description: "User's password"
 *           example: "qwerty123"
 *       example:
 *         email: "user@example.com"
 *         password: "qwerty123"
 *
 *     LoginResponse:
 *       type: object
 *       required:
 *         - status
 *         - message
 *       properties:
 *         status:
 *           type: number
 *           description: "Response status"
 *           example: 200
 *         message:
 *           type: string
 *           description: "Response message"
 *           example: "Success"
 *         user:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "Name Surname"
 *             email:
 *               type: string
 *               format: email
 *               example: "user@example.com"
 *         token:
 *           type: string
 *           description: "User's token"
 *           example: "String"
 *       example:
 *         status: 200
 *         message: "Success"
 *         user:
 *           name: "Name Surname"
 *           email: "user@example.com"
 *         token: "string"
 */
export class LoginDto {}
