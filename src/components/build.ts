import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    transports: [
        new winston.transports.File({ filename: `./.logs/error.log`, level: 'error' }),
        new winston.transports.Console({ eol: '\r\n' }),
    ],
});

logger.info('🦄 Все закончилось хорошо');
