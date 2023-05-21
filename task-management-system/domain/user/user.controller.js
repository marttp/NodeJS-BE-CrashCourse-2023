import express from 'express';
import passport from 'passport';
import { schemaValidator } from '../../middleware/validator.js';
import { createUserSchema } from './user.validator.js';
import {
  createUser,
  validateUser,
  signToken,
} from './user.service.js';
import logger from '../../configs/log.config.js';
import { JWT_OPTIONS } from '../../configs/config.js';

const userRouter = express.Router();

// Register
userRouter.post(
  '/register',
  schemaValidator(createUserSchema),
  async (req, res) => {
    const userDetail = req.body;
    logger.debug('Start register user');
    const { _id: id, username } = await createUser(userDetail);
    logger.debug('Done register user');
    return res.json({
      message: 'Register user success',
      data: {
        id,
        username,
      },
    });
  }
);

// Login
userRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await validateUser(username, password);
  if (!user) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }
  const token = await signToken(user);
  return res
    .cookie(JWT_OPTIONS.jwtCookieName, token, { httpOnly: true, secure: false })
    .json({
      token: token,
    });
});

// User Profile -> ME
userRouter.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    return res.json({
      message: 'Success',
    });
  }
);

userRouter.post('/logout', (req, res) => {
  if (req.cookies['jwt']) {
    res.clearCookie('jwt').status(200).json({
      message: 'You have logged out',
    });
  } else {
    res.status(401).json({
      error: 'Invalid jwt',
    });
  }
});

export default userRouter;
