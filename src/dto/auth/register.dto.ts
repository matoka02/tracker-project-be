/**
 * @swagger
 * components:
 *   schemas:
 *     RegistrationRequest:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: "User's name"
 *           example: "Name Surname"
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
 *         name: "Name Surname"
 *         email: "user@example.com"
 *         password: "qwe12345"
 *     RegistrationResponse:
 *       type: object
 *       required:
 *         - status
 *         - message
 *       properties:
 *         status:
 *           type: number
 *           description: "Response status"
 *           example: 201
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
 *         status: 201
 *         message: "Success"
 *         user:
 *           name: "Name Surname"
 *           email: "user@example.com"
 *         token: "string"
 */
export class RegisterDto {}
