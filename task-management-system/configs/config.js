const PORT = process.env.PORT || 8080;

const MONGO_USER = process.env.MONGO_USER || 'root';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '123456789';
const MONGO_DOMAIN = process.env.MONGO_DOMAIN || 'localhost:27017';
const DB_NAME = process.env.DB_NAME || 'task_mgmt';

const MONGO_DB_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_DOMAIN}/${DB_NAME}?authSource=admin`;

const FE_URL = 'http://localhost:5173';

export { PORT, MONGO_DB_URL, FE_URL };
