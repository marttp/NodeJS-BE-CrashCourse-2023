const ENV = process.env.NODE_ENV || 'dev';

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

export {
  PORT,
  APPLICATION_NAME,
  MONGO_DB_URL,
  FE_URL,
  LOG_SEV_LEVEL,
  BASE_PATH,
};
