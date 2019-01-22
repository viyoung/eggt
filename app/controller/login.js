'use strict';
const Controller = require('egg').Controller;
const tools = require('./../util/tools');

class Login extends Controller {
  async login() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    const loginInfo = {
      account: body.account || '',
      password: body.password || '',
    };
    const passwordSalt = tools.MD5(loginInfo.password, 10);
    if (passwordSalt) {
      loginInfo.password = passwordSalt;
    }
    const DBUserInfo = await ctx.service.login.login(loginInfo);
    if (DBUserInfo.length && DBUserInfo.length > 0) {
      console.log(DBUserInfo[0].password, loginInfo.password);
      if (DBUserInfo[0].password === loginInfo.password) {
        const token = tools.generateToken(loginInfo, 60 * 60);
        // 保存在redis中
        this.app.redis.set(loginInfo.account, token);
        ctx.response.body = {
          code: 0,
          msg: '登录成功',
          token,
        };
      } else {
        ctx.response.body = {
          code: 1,
          msg: '密码不正确',
        };
      }
    }
  }
}
module.exports = Login;
