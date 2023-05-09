import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import taskRouter from './domain/task/task.controller.js';
import { connectMongoDB } from './configs/db.config.js';
import { FE_URL } from './configs/config.js';
import { handlingResponseError } from './util/utility.js';

connectMongoDB();
const app = express();

// If need to apply middleware for request/response
// Apply it here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
  origin: FE_URL,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use('/api/v1/tasks', taskRouter);

app.use((req, res) => {
  return res.status(404).json({
    message: 'Not Found',
  });
});

app.use((error, req, res, next) => handlingResponseError(error, req, res));

export default app;
