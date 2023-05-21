import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import taskRouter from './domain/task/task.controller.js';
import userRouter from './domain/user/user.controller.js';
import { connectMongoDB } from './configs/db.config.js';
import { FE_URL } from './configs/config.js';
import { handlingResponseError } from './util/utility.js';
import './configs/passport.config.js';

connectMongoDB();
const app = express();

// If need to apply middleware for request/response
// Apply it here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());

const corsOptions = {
  origin: FE_URL,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(compression());
app.use(helmet());

app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/users', userRouter);

app.use((req, res) => {
  return res.status(404).json({
    message: 'Not Found',
  });
});

app.use((error, req, res, next) => handlingResponseError(error, req, res));

export default app;
