import { PORT } from './configs/config.js';
import app from './app.js';
import logger from './configs/log.config.js';

app.listen(PORT, () => {
  logger.info('Started...');
  logger.info(`Server start on port: ${PORT}`);
});
