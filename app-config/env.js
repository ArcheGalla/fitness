'use strict';

module.exports = function (env) {
  let port;

  switch (env) {
    case 'develop':
    {
      port = 3000;
      break;
    }
    case 'production':
    {
      port = 80;
      break;
    }
    default:
    {
      console.info('env variable is not defined');
      port = 4000;
    }
  }

  return port;
};