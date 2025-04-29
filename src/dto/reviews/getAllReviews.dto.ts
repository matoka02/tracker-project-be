/**
 * @swagger
 * components:
 *   schemas:
 *     ReviewsGetAllResponse:
 *       type: object
 *       required: [status, message, reviews]
 *       properties:
 *         status:
 *           type: number
 *           description: "Response status"
 *           example: 200
 *         message:
 *           type: string
 *           description: "Response message"
 *           example: "Success"
 *         reviews:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: "Backend-generated unique identifier"
 *                 example: "642fdf8745ab73b2aeuuae7b"
 *               content:
 *                 type: string
 *                 description: "Review text"
 *                 example: "Very nice useful and convenient app. Thanks!"
 *               rating:
 *                 type: number
 *                 description: "Number of stars"
 *                 minimum: 1
 *                 maximum: 5
 *                 example: 4
 *               owner:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: "Reviewer's name"
 *                     example: "Kateryna Hilcher"
 *                   role:
 *                     type: string
 *                     description: "Reviewer's role"
 *                     example: "user"
 *                   avatarURL:
 *                     type: string
 *                     description: "Reviewer's avatar URL"
 *                     example: "https://res.cloudinary.com/dquabwb70/image/upload/v1693154941/avatars/64eb7e128621908512127fff.jpg"
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: "Review creation timestamp"
 *                 example: "2025-04-29T12:39:57.288Z"
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: "Review last update timestamp"
 *                 example: "2025-04-29T12:39:57.288Z"
 *       example:
 *         status: 200
 *         message: "Success"
 *         reviews:
 *           - _id: "642fdf8745ab73b2aeuuae7b"
 *             content: "Very nice useful and convenient app. Thanks!"
 *             rating: 5
 *             owner:
 *               name: "Kateryna Hilcher"
 *               role: "user"
 *               avatarURL: "https://res.cloudinary.com/dquabwb70/image/upload/v1693154941/avatars/64eb7e128621908512127fff.jpg"
 *             createdAt: "2025-04-27T22:02:11.566Z"
 *             updatedAt: "2025-04-28T22:02:11.566Z"
 */
export class GetReviewsDto {}
