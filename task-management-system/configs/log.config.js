import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { BASE_PATH, LOG_SEV_LEVEL, APPLICATION_NAME } from './config.js';

const { combine, json, timestamp } = winston.format;

const LOG_DIRECTORY = `${BASE_PATH}/logs`;

const defaultFormat = combine(
  timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }),
  json()
);

function generateWinstonRotateConfig(level) {
  let fileName = `${LOG_DIRECTORY}/${APPLICATION_NAME}-%DATE%.log`;
  if (level === 'error') {
    fileName = `${LOG_DIRECTORY}/${APPLICATION_NAME}-error-%DATE%.log`;
  }
  return new DailyRotateFile({
    filename: fileName,
    datePattern: 'YYYY-MM-DD-HHmm',
    maxSize: '10m',
    level,
  });
}

const logger = winston.createLogger({
  level: LOG_SEV_LEVEL,
  format: defaultFormat,
  defaultMeta: { service: APPLICATION_NAME },
  transports: [
    generateWinstonRotateConfig(LOG_SEV_LEVEL),
    generateWinstonRotateConfig('error'),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: defaultFormat,
    })
  );
}

export default logger;
