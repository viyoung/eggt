'use strict';

const jwt = require('jsonwebtoken');
function verifyToken(token) {
  const secret = 'mytokenPrivateKey';
  const res = '';
  try {
    const result = jwt.verify(token, secret);
    const{}
  } catch (error) {

  }

}
module.exports = (option, app) => {
  return async function userInterceptor(ctx, next) {
    // 获取token
    const token = ctx.request.headers.token;
    // 验证token是否为空

    if (token) {
      verifyToken(token);
    }
  };
};
