import logger from '../configs/log.config.js';

export function handlingResponseError(error, req, res) {
  const response = {
    errorCode: 'ER_0001',
    message: 'Something went wrong',
  };
  let statusCode = 500;
  switch (error.message) {
    case 'NF_0001':
      statusCode = 404;
      response.errorCode = 'NF_0001';
      response.message = 'Task not found';
      break;
    default:
      logger.error(error.message);
  }
  return res.status(statusCode).json(response);
}
