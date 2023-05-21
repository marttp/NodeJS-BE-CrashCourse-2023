import Joi from 'joi';

export const createUserSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(10).required(),
  password: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'dev'] },
    })
    .required(),
});

export const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(10).required(),
  password: Joi.string().alphanum().min(3).max(30).required(),
});
