export function handlingResponseError(error, req, res) {
  const response = {
    errorCode: 'ER_0001',
    message: 'Something went wrong',
  };
  switch (error.message) {
    case 'NF_0001':
      response.errorCode = 'NF_0001';
      response.message = 'Task not found';
      break;
    default:
      console.error(error.message);
  }
  return res.status(500).json(response);
}
