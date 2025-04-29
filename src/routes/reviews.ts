import express from 'express';

import {
  addReviewController,
  getAllReviewsController,
  getReviewController,
  deleteReviewController,
  updateReviewController,
} from '@/controllers/reviews';
import {
  middlewareAuth,
  middlewareAddReview,
  middlewareUpdateReview,
} from '@/middlewares';

const router = express.Router();

/**
 * @swagger
 * /reviews:
 *   get:
 *     tags: [Reviews]
 *     summary: "Get all reviews"
 *     parameters: []
 *     security: []
 *     responses:
 *       200:
 *         description: "Success"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ReviewsGetAllResponse"
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.get('/', getAllReviewsController);
/**
 * @swagger
 * /reviews/own:
 *   get:
 *     tags: [Reviews]
 *     summary: "Get user's review"
 *     parameters: []
 *     security: [{ Bearer: [] }]
 *     responses:
 *       200:
 *         description: "Success"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/GetOwnReviewResponse"
 *       401:
 *         description: "Not authorized"
 *         content: {}
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.get('/own', middlewareAuth, getReviewController);
/**
 * @swagger
 * /reviews/own:
 *   post:
 *     tags: [Reviews]
 *     summary: "Add user's review"
 *     parameters: []
 *     security: [{ Bearer: [] }]
 *     requestBody:
 *       description: "User's new review object"
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/PostOwnReviewRequest"
 *     responses:
 *       201:
 *         description: "Success"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/PostOwnReviewResponse"
 *       400:
 *         description: "Joi validation error"
 *         content: {}
 *       401:
 *         description: "Not authorized"
 *         content: {}
 *       403:
 *         description: "Forbidden. You can not leave more than 1 review"
 *         content: {}
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.post('/own', middlewareAuth, middlewareAddReview, addReviewController);
/**
 * @swagger
 * /reviews/own:
 *   patch:
 *     tags: [Reviews]
 *     summary: "Update user's review"
 *     parameters: []
 *     security: [{ Bearer: [] }]
 *     requestBody:
 *       description: "Edited review data object"
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/PatchOwnReviewRequest"
 *     responses:
 *       200:
 *         description: "Success"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/PatchOwnReviewResponse"
 *       400:
 *         description: "Joi validation error"
 *         content: {}
 *       401:
 *         description: "Not authorized"
 *         content: {}
 *       404:
 *         description: "User ${name} have no any review"
 *         content: {}
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.patch(
  '/own',
  middlewareAuth,
  middlewareUpdateReview,
  updateReviewController,
);
/**
 * @swagger
 * /reviews/own:
 *   delete:
 *     tags: [Reviews]
 *     summary: "Delete user's review"
 *     parameters: []
 *     security: [{ Bearer: [] }]
 *     responses:
 *       200:
 *         description: "Success"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/DeleteOwnReviewResponse"
 *       401:
 *         description: "Not authorized"
 *         content: {}
 *       404:
 *         description: "Review to delete doesn't exist for ${name} user"
 *         content: {}
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.delete('/own', middlewareAuth, deleteReviewController);

export default router;
