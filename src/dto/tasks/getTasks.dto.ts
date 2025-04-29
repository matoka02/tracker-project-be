/**
 * @swagger
 * components:
 *   schemas:
 *     GetTasksResponse:
 *       type: object
 *       required: [status, message]
 *       properties:
 *         status:
 *           type: number
 *           description: "Response status"
 *           example: 200
 *         message:
 *           type: string
 *           description: "Response message"
 *           example: "Success"
 *         tasks:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: "Backend-generated unique identifier"
 *                 example: "64ede71dc35f467491e1e669"
 *               title:
 *                 type: string
 *                 description: "Task title"
 *                 example: "Homework"
 *               start:
 *                 type: string
 *                 description: "Task start time"
 *                 example: "09:00"
 *               end:
 *                 type: string
 *                 description: "Task end time"
 *                 example: "12:00"
 *               priority:
 *                 type: string
 *                 enum: [low, medium, high]
 *                 default: "low"
 *                 description: "Task priority level"
 *                 example: "low"
 *               date:
 *                 type: string
 *                 match: dateRegexp
 *                 description: "Task date in YYYY-MM-DD format"
 *                 example: "2025-04-28"
 *               category:
 *                 type: string
 *                 enum: [to-do, in-progress, done]
 *                 description: "Task category"
 *                 example: "to-do"
 *               owner:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: "Owner's name"
 *                     example: "Name Surname"
 *                   email:
 *                     type: string
 *                     description: "Owner's email"
 *                     example: "user@example.com"
 *                   avatarURL:
 *                     type: string
 *                     description: "Owner's avatar URL"
 *                     example: "https://s.gravatar.com/avatar/93e9084ab289b7f1f5e4ab6716a56c3b?s=100&r=x&d=retro"
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: "Backend-generated date and time of task creating"
 *                 example: "2025-04-29T12:39:57.288Z"
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: "Task last update timestampBackend-generated date and time of task updating"
 *                 example: "2025-04-29T12:39:57.288Z"
 *       example:
 *         status: 200
 *         message: "Success"
 *         tasks:
 *           - _id: "64ede71dc35f467491e1e669"
 *             title: "Homework"
 *             start: "09:00"
 *             end: "12:00"
 *             priority: "low"
 *             date: "2025-04-28"
 *             category: "to-do"
 *             owner:
 *               name: "Name Surname"
 *               email: "user@example.com"
 *               avatarURL: "https://s.gravatar.com/avatar/93e9084ab289b7f1f5e4ab6716a56c3b?s=100&r=x&d=retro"
 *             createdAt: "2025-04-29T12:39:57.288Z"
 *             updatedAt: "2025-04-29T12:39:57.288Z"
 */
export class GetTasksDto {}
