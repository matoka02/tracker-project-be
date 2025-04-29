/**
 * @swagger
 * components:
 *   schemas:
 *     PatchOwnReviewRequest:
 *       type: object
 *       required: []
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
 *     PatchOwnReviewResponse:
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
 *         review:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: "Backend-generated unique identifier"
 *               example: "642fdf8745ab73b2aeuuae7b"
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
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: "Reviewer's name"
 *                   example: "Name Surname"
 *                 role:
 *                   type: string
 *                   enum: [user, admin]
 *                   description: "Reviewer's role"
 *                   example: "user"
 *                 avatarUrl:
 *                   type: string
 *                   description: "Reviewer's image"
 *                   example: "https://s.gravatar.com/avatar/93e9084ab289b7f1f5e4ab6716a56c3b?s=100&r=x&d=retro"
 *             createdAt:
 *               type: string
 *               format: date-time
 *               description: "Review creation timestamp"
 *               example: "2025-04-27T07:28:49.493Z"
 *             updatedAt:
 *               type: string
 *               format: date-time
 *               description: "Review update timestamp"
 *               example: "2025-04-27T07:28:49.493Z"
 *       example:
 *         status: 200
 *         message: "Success"
 *         review:
 *           _id: "64ed2156127207102d86a0fd"
 *           content: "Very nice useful and convenient app. Thanks!"
 *           rating: 4
 *           owner:
 *             name: "Name Surname"
 *             role: "user"
 *             avatarUrl: "https://s.gravatar.com/avatar/93e9084ab289b7f1f5e4ab6716a56c3b?s=100&r=x&d=retro"
 *           createdAt: "2025-04-27T07:28:49.493Z"
 *           updatedAt: "2025-04-27T07:28:49.493Z"
 */
export class PatchOwnReviewDto {}
