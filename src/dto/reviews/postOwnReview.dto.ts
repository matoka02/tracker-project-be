/**
 * @swagger
 * components:
 *   schemas:
 *     PostOwnReviewRequest:
 *       type: object
 *       required: [content, rating]
 *       properties:
 *         content:
 *           type: string
 *           description: "Review text"
 *           example: "Very nice useful and convenient app. Thanks!"
 *         rating:
 *           type: number
 *           description: "Number of stars"
 *           minimum: 1
 *           maximum: 5
 *           example: 4
 *       example:
 *         content: "Very nice useful and convenient app. Thanks!"
 *         rating: 4
 *
 *     PostOwnReviewResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: number
 *           description: "Response status"
 *           example: 201
 *         message:
 *           type: string
 *           description: "Response message"
 *           example: "Success"
 *         review:
 *           type: object
 *           properties:
 *             content:
 *               type: string
 *               description: "Review text"
 *               example: "Very nice useful and convenient app. Thanks!"
 *             rating:
 *               type: number
 *               description: "Number of stars"
 *               minimum: 1
 *               maximum: 5
 *               example: 4
 *             owner:
 *               type: string
 *               description: "Owner ID"
 *               example: "64f25b6348e8d48f8f75b47c"
 *             _id:
 *               type: string
 *               description: "Review ID"
 *               example: "64e883dd67a3af5a9ddcc3e6"
 *             createdAt:
 *               type: string
 *               format: date-time
 *               description: "Backend-generated date and time of task creating"
 *               example: "2025-04-28T22:36:06.580Z"
 *             updatedAt:
 *               type: string
 *               format: date-time
 *               description: "Backend-generated date and time of task creating"
 *               example: "2025-04-28T22:36:06.580Z"
 *       example:
 *         status: 201
 *         message: "Success"
 *         review:
 *           content: "I like this app so much"
 *           rating: 5
 *           owner: "64f25b6348e8d48f8f75b47c"
 *           _id: "64e883dd67a3af5a9ddcc3e6"
 *           createdAt: "2025-04-28T22:36:06.580Z"
 *           updatedAt: "2025-04-28T22:36:06.580Z"
 */
export class PostOwnReviewDto {}
