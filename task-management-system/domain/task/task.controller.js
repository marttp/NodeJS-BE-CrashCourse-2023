import express from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from './task.service.js';
import { schemaValidator } from '../../middleware/validator.js';
import { createTaskSchema, updateTaskSchema } from './task.validator.js';
import logger from '../../configs/log.config.js';

const taskRouter = express.Router();

taskRouter.get('/', async (req, res) => {
  logger.debug('Start get Tasks');
  // Extract enough data for using with service
  const data = await getTasks();
  logger.debug('Done get Tasks');
  return res.json({ data });
});

taskRouter.post(
  '/',
  await schemaValidator(createTaskSchema),
  async (req, res) => {
    logger.debug('Start create Task');
    const task = req.body;
    const data = await createTask(task);
    logger.debug('Done create Task');
    return res.json(data);
  }
);

taskRouter.patch(
  '/:id',
  await schemaValidator(updateTaskSchema),
  async (req, res, next) => {
    logger.debug('Start update Task');
    const { id: taskId } = req.params;
    const prepareUpdateData = req.body;
    try {
      const data = await updateTask({ taskId, data: prepareUpdateData });
      logger.debug('Done update Task');
      return res.json(data);
    } catch (error) {
      next(error);
    }
  }
);

taskRouter.delete('/:id', async (req, res, next) => {
  logger.debug('Start delete Task');
  const { id: taskId } = req.params;
  try {
    await deleteTask(taskId);
    logger.debug('Done delete Task');
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default taskRouter;
