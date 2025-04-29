/**
 * @swagger
 * components:
 *   schemas:
 *     UsersUpdateRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: "User's name"
 *           example: "Name Surname"
 *         email:
 *           type: string
 *           description: "User's email"
 *           example: "user@example.com"
 *         avatarURL:
 *           type: file
 *           description: "User's avatar file"
 *           example: "*.jpg || *.png || *.gif || *.webp"
 *         phone:
 *           type: string
 *           description: "User's phone number"
 *           example: "+38 (067) 111-2345"
 *         skype:
 *           type: string
 *           description: "User's skype"
 *           example: "ExAmPle123eXaMpLe"
 *         birthday:
 *           type: string
 *           format: date
 *           description: "User's birthday"
 *           example: "2000-12-31"
 *         role:
 *           type: string
 *           enum: ["user", "admin"]
 *           description: "User's role"
 *           example: "user"
 *         theme:
 *           type: string
 *           enum: ["light", "dark"]
 *           description: "User's theme"
 *           example: "light"
 *       example:
 *         name: "Name Surname"
 *         email: "user@example.com"
 *         avatarURL: "566tghyuji.jpg"
 *         phone: "+38 (067) 111-2345"
 *         skype: "ExAmPle123eXaMpLe"
 *         birthday: "2000-12-31"
 *         role: "user"
 *         theme: "light"
 *
 *     UsersUpdateResponse:
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
 *           example: "Success. User update controller"
 *         user:
 *           type: object
 *           properties:
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
 *               example: "+38 (067) 111-2345"
 *             skype:
 *               type: string
 *               description: "User's skype"
 *               example: "ExAmPle123eXaMpLe"
 *             birthday:
 *               type: string
 *               format: date
 *               description: "User's birthday"
 *               example: "2000-12-31"
 *             role:
 *               type: string
 *               description: "User's role"
 *               example: "user"
 *             theme:
 *               type: string
 *               description: "User's theme"
 *               example: "light"
 *             createdAt:
 *               type: string
 *               description: "Date of user creation"
 *               example: "2025-04-27T06:55:05.960Z"
 *             updatedAt:
 *               type: string
 *               description: "Date of user update"
 *               example: "2025-04-27T08:30:34.756Z"
 *       example:
 *         status: 200
 *         message: "Success"
 *         user:
 *           name: "Name Surname"
 *           email: "user@example.com"
 *           avatarURL: "https://s.gravatar.com/avatar/93e9084ab289b7f1f5e4ab6716a56c3b?s=100&r=x&d=retro"
 *           phone: "+38 (067) 111-2345"
 *           skype: "ExAmPle123eXaMpLe"
 *           birthday: "2000-12-31"
 *           role: "user"
 *           theme: "light"
 *           createdAt: "2025-04-27T06:55:05.960Z"
 *           updatedAt: "2025-04-27T08:30:34.756Z"
 */
export class UserUpdateDto {}
