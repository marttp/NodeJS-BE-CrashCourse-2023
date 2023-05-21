import * as dotenv from 'dotenv';
dotenv.config();

const ENV = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = ENV === 'production';

const APPLICATION_NAME = 'task-management-service';

const PORT = process.env.PORT || 8080;

const MONGO_USER = process.env.MONGO_USER || 'root';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '123456789';
const MONGO_DOMAIN = process.env.MONGO_DOMAIN || 'localhost:27017';
const DB_NAME = process.env.DB_NAME || 'task_mgmt';

const MONGO_DB_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_DOMAIN}/${DB_NAME}?authSource=admin`;

const FE_URL = process.env.FE_URL || 'http://localhost:5173';

const LOG_SEV_LEVEL = process.env.LOG_SEV_LEVEL || 'debug';

const BASE_PATH = process.cwd();

const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;

const JWT_OPTIONS = {
  algorithm: 'RS256',
  issuer: 'nodejs.tpcoder.dev',
  privateKey: process.env.PRIVATE_KEY_BASE64 || 'private',
  publicKey: process.env.PUBLIC_KEY_BASE64 || 'public',
  jwtCookieName: 'access_token',
};

JWT_OPTIONS.privateKey = Buffer.from(JWT_OPTIONS.privateKey, 'base64');
JWT_OPTIONS.publicKey = Buffer.from(JWT_OPTIONS.publicKey, 'base64');

export {
  ENV,
  PORT,
  APPLICATION_NAME,
  MONGO_DB_URL,
  FE_URL,
  LOG_SEV_LEVEL,
  BASE_PATH,
  SALT_ROUNDS,
  JWT_OPTIONS,
  IS_PRODUCTION,
};
