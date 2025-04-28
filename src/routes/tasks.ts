import express from 'express';

import {
  getTasksController,
  addTaskController,
  removeTaskController,
  updateTaskController,
} from '@/controllers/tasks';
import {
  middlewareAuth,
  middlewareAddTask,
  middlewareUpdateTask,
  isValidId,
} from '@/middlewares';

const router = express.Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     tags: [Tasks]
 *     summary: "Get all tasks (without search query) and Get tasks per month (with search query in format YYYY-MM)"
 *     parameters:
 *       - name: month
 *         in: query
 *         required: false
 *         description: "Month in format YYYY-MM"
 *         schema:
 *           type: string
 *         example: "2025-04"
 *     security: [{ Bearer: [] }]
 *     responses:
 *       200:
 *         description: "Success"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/GetTasksResponse"
 *       401:
 *         description: "Not authorized"
 *         content: {}
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.get('/', middlewareAuth, getTasksController);
/**
 * @swagger
 * /tasks:
 *   post:
 *     tags: [Tasks]
 *     summary: "Add user's task"
 *     parameters: []
 *     security: [{ Bearer: [] }]
 *     requestBody:
 *       description: "User's new task object"
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/PostOwnTaskRequest"
 *     responses:
 *       201:
 *         description: "Success"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/PostOwnTaskResponse"
 *       400:
 *         description: "Joi validation error"
 *         content: {}
 *       401:
 *         description: "Not authorized"
 *         content: {}
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.post('/', middlewareAuth, middlewareAddTask, addTaskController);
/**
 * @swagger
 * /tasks/{id}:
 *   patch:
 *     tags: [Tasks]
 *     summary: "Update user's task by id"
 *     parameters:
 *       - name: month
 *         in: path
 *         required: false
 *         description: "Task id"
 *         schema:
 *           type: string
 *         example: "64ed2156127207102d86a0fd"
 *     security: [{ Bearer: [] }]
 *     requestBody:
 *       description: "Patched task object"
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/PatchOwnTaskRequest"
 *     responses:
 *       200:
 *         description: "Success"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/PatchOwnTaskResponse"
 *       400:
 *         description: "Joi validation error"
 *         content: {}
 *       401:
 *         description: "Not authorized"
 *         content: {}
 *       404:
 *         description: "Not Found"
 *         content: {}
 *       403:
 *         description: "Forbidden. You have no necessary permissions to update task owner"
 *         content: {}
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.patch(
  '/:id',
  middlewareAuth,
  isValidId,
  middlewareUpdateTask,
  updateTaskController,
);
/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     tags: [Tasks]
 *     summary: "Delete user's task by id"
 *     parameters:
 *       - name: month
 *         in: path
 *         required: false
 *         description: "Task id"
 *         schema:
 *           type: string
 *         example: "64ed2156127207102d86a0fd"
 *     security: [{ Bearer: [] }]
 *     responses:
 *       200:
 *         description: "Task deleted"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/DeleteTaskResponse"
 *       400:
 *         description: "Id is not valid"
 *         content: {}
 *       401:
 *         description: "Not authorized"
 *         content: {}
 *       404:
 *         description: "Not Found"
 *         content: {}
 *       423:
 *         description: "Locked. You have no necessary permissions to remove this task"
 *         content: {}
 *       500:
 *         description: "Internal Server Error"
 *         content: {}
 */
router.delete('/:id', middlewareAuth, isValidId, removeTaskController);

export default router;
