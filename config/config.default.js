'use strict';

module.exports = appInfo => {
  const config = exports = {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1546400957198_392',
    // add your config here
    middleware: [ 'userInterceptor' ],
    userInterceptor: { ignore: [ '/register', '/login' ] },
    cors: {
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    },
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
        ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
      },
    },
    redis: {
      client: {
        port: 6379,
        host: '127.0.0.1',
        password: '',
        db: 0,
      },
    },
  };
  return config;
};
