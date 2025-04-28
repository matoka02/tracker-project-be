/**
 * @swagger
 * components:
 *   schemas:
 *     PatchOwnTaskRequest:
 *       type: object
 *       required: []
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
 *         priority: "medium"
 *         date: "2025-04-28"
 *         category: "in-progress"
 *
 *     PatchOwnTaskResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: number
 *           description: "Response status"
 *           example: 200
 *         message:
 *           type: string
 *           description: "Response message"
 *           example: "Success"
 *         task:
 *           type: object
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
 *               enum: [low, medium, high]
 *               default: "low"
 *               example: "low"
 *             date:
 *               type: string
 *               format: date
 *               description: "Task date in YYYY-MM-DD format"
 *               example: "2025-04-28"
 *             category:
 *               type: string
 *               enum: [to-do, in-progress, done]
 *               example: "to-do"
 *       example:
 *         status: 200
 *         message: "Success"
 *         task:
 *           title: "Homework"
 *           start: "09:00"
 *           end: "12:00"
 *           priority: "medium"
 *           date: "2025-04-28"
 *           category: "in-progress"
 */
export class PatchTaskDto {}
