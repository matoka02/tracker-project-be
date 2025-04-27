import express from 'express';

import {
  addReviewController,
  getAllReviewsController,
  getReviewController,
  deleteReviewController,
  updateReviewController,
} from '../controllers/reviews';
import {
  middlewareAuth,
  middlewareAddReview,
  middlewareUpdateReview,
} from '../middlewares';

const router = express.Router();

router.get('/', getAllReviewsController);
router.get('/own', middlewareAuth, getReviewController);
router.post('/own', middlewareAuth, middlewareAddReview, addReviewController);
router.delete('/own', middlewareAuth, deleteReviewController);
router.patch(
  '/own',
  middlewareAuth,
  middlewareUpdateReview,
  updateReviewController,
);

export default router;
