import express from 'express';

import {
  getTasksController,
  addTaskController,
  removeTaskController,
  updateTaskController,
} from '../controllers/tasks';
import {
  middlewareAuth,
  middlewareAddTask,
  middlewareUpdateTask,
  isValidId,
} from '../middlewares';

const router = express.Router();

router.get('/', middlewareAuth, getTasksController);
router.post('/', middlewareAuth, middlewareAddTask, addTaskController);
router.delete('/:id', middlewareAuth, isValidId, removeTaskController);
router.patch(
  '/:id',
  middlewareAuth,
  isValidId,
  middlewareUpdateTask,
  updateTaskController,
);

export default router;
