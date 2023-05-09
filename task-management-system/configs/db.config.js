import mongoose from 'mongoose';
import { MONGO_DB_URL } from './config.js';

async function connectMongoDB() {
  try {
    await mongoose.connect(MONGO_DB_URL);
    console.log('Connected MongoDB Success');
  } catch (error) {
    console.error(error);
  }
}

export { connectMongoDB };
