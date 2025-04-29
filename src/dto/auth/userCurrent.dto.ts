/**
 * @swagger
 * components:
 *   schemas:
 *     UsersCurrentResponse:
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
 *             _id:
 *               type: string
 *               description: "User's id"
 *               example: "64f147f395ed4c02510fa24c"
 *             name:
 *               type: string
 *               description: "User's name"
 *               example: "Name Surname"
 *             email:
 *               type: string
 *               description: "User's email"
 *               example: "user@example.com"
 *             avatarURL:
 *               type: string
 *               description: "User's avatar url"
 *               example: "https://s.gravatar.com/avatar/93e9084ab289b7f1f5e4ab6716a56c3b?s=100&r=x&d=retro"
 *             phone:
 *               type: string
 *               description: "User's phone number"
 *               example: "!!!!!"
 *             skype:
 *               type: string
 *               description: "User's skype"
 *               example: "!!!!!"
 *             birthday:
 *               type: string
 *               description: "User's birthday"
 *               example: "!!!!!"
 *             role:
 *               type: string
 *               description: "User's role"
 *               example: "!!!!!"
 *             theme:
 *               type: string
 *               description: "User's theme"
 *               example: "!!!!!"
 *             createdAt:
 *               type: string
 *               format: date-time
 *               description: "Date of user creation"
 *               example: "!!!!!"
 *             updatedAt:
 *               type: string
 *               format: date-time
 *               description: "Date of user update"
 *               example: "!!!!!"
 *       example:
 *         status: 200
 *         message: "Success"
 *         user:
 *           _id: "64f147f395ed4c02510fa24c"
 *           name: "Name Surname"
 *           email: "user@example.com"
 *           avatarURL: "https://s.gravatar.com/avatar/93e9084ab289b7f1f5e4ab6716a56c3b?s=100&r=x&d=retro"
 *           phone: ""
 *           skype: ""
 *           birthday: ""
 *           role: "user"
 *           theme: "light"
 *           createdAt: "2023-08-27T07:40:05.960Z"
 *           updatedAt: "2023-08-28T09:30:34.756Z"
 *
 */
export class UserCurrentDto {}
