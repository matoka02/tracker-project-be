/**
 * @swagger
 * components:
 *   schemas:
 *     DeleteTaskResponse:
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
 *           example: "Task deleted"
 */
export class DeleteTaskDto {}
