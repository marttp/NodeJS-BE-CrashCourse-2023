import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from './user.schema.js';
import logger from '../../configs/log.config.js';
import { SALT_ROUND, JWT_OPTIONS } from '../../configs/config.js';

export async function createUser(userDetail) {
  const { username, password, email } = userDetail;
  logger.debug(`Register username: ${username}`);
  const newPassword = await hashPassword(password);
  const prepareUser = new UserModel({
    username,
    password: newPassword,
    email,
  });
  const newlyUser = await prepareUser.save();
  logger.debug(`Register username: ${username} success`);
  return newlyUser;
}

export async function validateUser(username, password) {
  const user = await UserModel.findOne({ username });
  // If doesn't exists
  if (!user) {
    logger.debug(`User ${username} not found`);
    return null;
  }
  // If exists, Check password
  const userPassword = user.password;
  const isMatched = await bcrypt.compare(password, userPassword);
  if (!isMatched) {
    logger.debug(`User ${username} filled wrong password`);
    return null;
  }
  return user;
}

export async function signToken(user) {
  const { username } = user;
  const privateKey = JWT_OPTIONS.private;
  const token = jwt.sign({ sub: username }, privateKey, {
    expiresIn: '1h',
    algorithm: JWT_OPTIONS.algorithm,
    issuer: JWT_OPTIONS.issuer
  });
  return token;
}

export async function findUserByUsername(username) {
  const user = await UserModel.findOne({ username });
  // If doesn't exists
  if (!user) {
    logger.debug(`User ${username} not found`);
    return null;
  }
  return user;
}

async function hashPassword(password) {
  const hashResult = await bcrypt.hash(password, SALT_ROUND);
  return hashResult;
}
