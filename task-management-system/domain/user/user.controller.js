import express from 'express';
import passport from 'passport';
import {
  createUser,
  validateUser,
  signToken,
  findUserByUsername,
} from './user.service.js';
import { schemaValidator } from '../../middleware/validator.js';
import { createUserSchema, loginSchema } from './user.validator.js';
import logger from '../../configs/log.config.js';
import { JWT_OPTIONS, IS_PRODUCTION } from '../../configs/config.js';

const userRouter = express.Router();

// Register
// -> username, password | information
userRouter.post(
  '/register',
  schemaValidator(createUserSchema),
  async (req, res) => {
    const userDetail = req.body;
    logger.debug('Start register user');
    const newUser = await createUser(userDetail);
    logger.debug('Done register user');
    return res.json(newUser);
  }
);

// Login -> Get credential to access protected resources
// -> JWT (JSON Web Token)
userRouter.post('/login', schemaValidator(loginSchema), async (req, res) => {
  const { username, password } = req.body;
  const user = await validateUser(username, password);
  if (!user) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }
  const token = await signToken(user);
  return res
    .cookie(JWT_OPTIONS.jwtCookieName, token, {
      httpOnly: true,
      secure: IS_PRODUCTION,
    })
    .json({
      token,
    });
});

// Get Protected resource -> aware credential
// User detail -> ME
userRouter.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const {
      username,
      email,
      _id: id,
    } = await findUserByUsername(req.user.username);
    return res.json({ username, email, id });
  }
);

// Logout -> Remove credential
userRouter.post(
  '/logout',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    if (req.cookies[JWT_OPTIONS.jwtCookieName]) {
      res.clearCookie(JWT_OPTIONS.jwtCookieName).json({
        message: 'You have logged out!',
      });
    } else {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }
  }
);

export default userRouter;
