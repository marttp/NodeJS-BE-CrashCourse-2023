import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from './user.schema.js';
import logger from '../../configs/log.config.js';
import { JWT_OPTIONS, SALT_ROUNDS } from '../../configs/config.js';

export async function createUser(userDetail) {
  const { username, password, email } = userDetail;
  logger.debug(`Register username: ${username}`);
  const passwordHashed = await bcrypt.hash(password, SALT_ROUNDS);
  const prepareUser = new UserModel({
    username,
    password: passwordHashed,
    email,
  });
  const newlyUser = await prepareUser.save();
  logger.debug(`Register username: ${username} Success`);
  return {
    id: newlyUser._id,
    username: newlyUser.username,
  };
}

export async function validateUser(username, password) {
  const user = await findUserByUsername(username);
  if (!user) {
    return null;
  }
  const userStoredPassword = user.password;
  const isMatched = await bcrypt.compare(password, userStoredPassword);
  if (!isMatched) {
    logger.debug(`User: ${username} password incorrect`);
    return null;
  }
  return user;
}

// HS256 -> Symmetric -> Same key or secret text
// RS256 -> Asymetric -> 2 keys -> private/public -> private (sign), public (verify)
export async function signToken(user) {
  const { username } = user;
  const token = jwt.sign({ sub: username }, JWT_OPTIONS.privateKey, {
    algorithm: JWT_OPTIONS.algorithm,
    expiresIn: '1h',
    issuer: 'nodejs.tpcoder.dev',
  });
  return token;
}

export async function findUserByUsername(username) {
  const user = await UserModel.findOne({ username });
  if (!user) {
    logger.debug(`User: ${username} doesn't exists`);
    return null;
  }
  return user;
}
