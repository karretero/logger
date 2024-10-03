const timezoned = () => new Date().toLocaleString('es-ES', { timeZoneName: 'short' });

const log = (level) => {
  const memoria = Math.round(((process.memoryUsage().rss / 1024) / 1024) * 100) / 100;
  const memoriaText = `${memoria} MB`;
  if (level.headers && level.headers.referer) {
    // eslint-disable-next-line no-param-reassign
    level.headers = level.headers.referer;
  } else {
    // eslint-disable-next-line no-param-reassign
    level.headers = undefined;
  }
  level.message = ''+level.message
  const formatMessage = Object.assign(level, { timezone: timezoned() }, { app: 'app', memory: memoriaText });
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(formatMessage));
};

const logger = {
  info(message, service, headers) {
    log({
      level: 'info',
      message,
      service,
      headers,
    });
  },
  debug(message, headers) {
    log({ level: 'debug', message, headers });
  },
  error(message, service, headers) {
    log({
      level: 'error',
      message,
      service,
      headers,
    });
  },
  log(object) {
    log(object);
  },
};

module.exports = logger;
