import express from 'express';
import bodyParser from 'body-parser';
import taskRouter from './domain/task/task.controller.js';

const app = express();

// If need to apply middleware for request/response
// Apply it here
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/v1/tasks', taskRouter);

app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

export default app;
