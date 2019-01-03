'use strict';

module.exports = appInfo => {
  const config = exports = {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1546400957198_392',
    // add your config here
    middleware: [],
    // add mongodb
    mongoose: {
      url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1:27017/test',
      options: {
        server: {
          poolSize: 20,
        },
      },
    },
    // disabled csrf
    security: {
      csrf: {
        enable: false,
      },
    },
  };
  return config;
};
