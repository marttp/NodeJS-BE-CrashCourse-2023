import express from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from './task.service.js';
const taskRouter = express.Router();

taskRouter.get('/', async (req, res) => {
  // Extract enough data for using with service
  const data = await getTasks();
  res.json({ data });
});

taskRouter.post('/', async (req, res) => {
  const task = req.body;
  const data = await createTask(task);
  res.json(data);
});

taskRouter.patch('/:id', async (req, res) => {
  const { id: taskId } = req.params;
  const prepareUpdateData = req.body;
  try {
    const data = await updateTask({ taskId, data: prepareUpdateData });
    res.json(data);
  } catch (error) {
    console.log(error);
    if (error.businessCode === 'NOT_FOUND') {
      res.status(404).json({
        message: 'Task not found',
      });
    }
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

taskRouter.delete('/:id', async (req, res) => {
  const { id: taskId } = req.params;
  try {
    await deleteTask(taskId);
    res.status(204).send();
  } catch (error) {
    if (error.businessCode === 'NOT_FOUND') {
      res.status(404).json({
        message: 'Task not found',
      });
    }
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});

export default taskRouter;
