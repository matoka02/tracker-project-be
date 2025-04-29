/**
/**
 * @swagger
 * components:
 *   schemas:
 *     DeleteOwnReviewResponse:
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
 *           example: "Your review deleted successfully"
 */
export class DeleteOwnReviewDto {}
