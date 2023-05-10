import mongoose from 'mongoose';
import { MONGO_DB_URL } from './config.js';
import logger from './log.config.js';

async function connectMongoDB() {
  try {
    await mongoose.connect(MONGO_DB_URL);
    logger.info('Connected MongoDB Success');
  } catch (error) {
    logger.error(error);
  }
}

export { connectMongoDB };
