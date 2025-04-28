/**
 * @swagger
 * components:
 *   schemas:
 *     PostOwnTaskRequest:
 *       type: object
 *       required: [title, start, end, priority, category, date]
 *       properties:
 *         title:
 *           type: string
 *           description: "Task title"
 *           example: "Homework"
 *         start:
 *           type: string
 *           description: "Task start time"
 *           example: "09:00"
 *         end:
 *           type: string
 *           description: "Task end time"
 *           example: "12:00"
 *         priority:
 *           type: string
 *           enum: [low, medium, high]
 *           default: "low"
 *           example: "low"
 *         date:
 *           type: string
 *           match: dateRegexp
 *           example: "2025-04-28"
 *         category:
 *           type: string
 *           enum: [to-do, in-progress, done]
 *           example: "to-do"
 *       example:
 *         title: "Homework"
 *         start: "09:00"
 *         end: "12:00"
 *         priority: "low"
 *         date: "2025-04-28"
 *         category: "to-do"
 *
 *     PostOwnTaskResponse:
 *       type: object
 *       required: [status, message]
 *       properties:
 *         status:
 *           type: number
 *           description: "Response status"
 *           example: 201
 *         message:
 *           type: string
 *           description: "Response message"
 *           example: "Success"
 *         task:
 *           type: object
 *           required: [title, start, end, priority, date, category]
 *           properties:
 *             title:
 *               type: string
 *               description: "Task title"
 *               example: "Homework"
 *             start:
 *               type: string
 *               description: "Task start time"
 *               example: "09:00"
 *             end:
 *               type: string
 *               description: "Task end time"
 *               example: "12:00"
 *             priority:
 *               type: string
 *               enum: [low, medium, hight]
 *               default: "low"
 *               example: "low"
 *             date:
 *               type: string
 *               match: dateRegexp
 *               example: "2025-04-28"
 *             category:
 *               type: string
 *               enum: [to-do, in-progress, done]
 *               example: "to-do"
 *       example:
 *         status: 201
 *         message: "Success"
 *         task:
 *           title: "Homework"
 *           start: "09:00"
 *           end: "12:00"
 *           priority: "low"
 *           date: "2025-04-28"
 *           category: "to-do"
 */
export class PostTaskDto {}
