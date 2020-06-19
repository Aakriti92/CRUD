/**
 * Developed by: Dushyant Sengar
 * Created at: 06-11-2019
 * Purpose: Activity Loggs
*/
import appRoot from 'app-root-path';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

// define the custom settings for each transport (file, console)
const MESSAGE = Symbol.for('message');
const jsonFormatter = (logEntry) => {
  const base = { timestamp: new Date() };
  const json = Object.assign(base, logEntry)
  logEntry[MESSAGE] = JSON.stringify(json);
  return logEntry;
}
const d = new Date();
const curDate = `${(d.getDate() < 10) ? '0'+d.getDate() : d.getDate()}-${(d.getMonth()+1 < 10) ? '0'+(d.getMonth()+1) : d.getMonth()+1}-${d.getFullYear()}`;
let options = {
  file: {
    filename: `${appRoot}/logs/app-${curDate}.log`,
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
  },
  console: {  
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
let logger: winston.Logger = winston.createLogger({
  format: winston.format(jsonFormatter)(),
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

let cronLogOptions = {
  filename: `${appRoot}/logs/cron_logs/cron-log-%DATE%.log`,
  datePattern: 'YYYY-MM-DD',
  maxSize: '5m'
};
let cronLogger: winston.Logger = winston.createLogger({
  format: winston.format(jsonFormatter)(),
  transports: [
    new DailyRotateFile(cronLogOptions),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
});
// create a stream object with a 'write' function that will be used by `morgan`
// logger.stream = {
//   write: (message, encoding) => {
//     // use the 'info' log level so the output will be picked up by both transports (file and console)
//     logger.info(message);
//   }
// };
export default logger;
export {cronLogger};