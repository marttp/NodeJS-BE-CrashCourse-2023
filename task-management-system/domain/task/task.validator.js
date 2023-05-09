import Joi from 'joi';
import { TASK_STATE } from '../../constants/constant.js';

const validState = Object.values(TASK_STATE);

const createTaskSchema = Joi.object({
  title: Joi.string().alphanum().min(3).max(30).required(),
  status: Joi.string()
    .valid(...validState)
    .required(),
});

const updateTaskSchema = Joi.object({
  status: Joi.string()
    .valid(...validState)
    .required(),
});

export { createTaskSchema, updateTaskSchema };
