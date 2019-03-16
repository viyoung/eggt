'use strict';
const Controller = require('egg').Controller;
const tools = require('./../util/tools');

class Login extends Controller {
  async login() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    const time = 10 * 60;
    const loginInfo = {
      account: body.account || '',
      password: body.password || '',
    };
    const passwordSalt = await tools.MD5(loginInfo.password);
    const DBUserInfo = await ctx.service.login.login(loginInfo);
    if (DBUserInfo.length && DBUserInfo.length > 0) {
      console.log(DBUserInfo[0].password, passwordSalt);
      if (DBUserInfo[0].password === passwordSalt) {
        console.log(DBUserInfo[0]._id);
        const token = tools.generateToken({ _id: DBUserInfo[0]._id }, time);
        // 保存在redis中
        this.app.redis.set(loginInfo.account, token);
        ctx.cookies.set('token', token, {
          maxAge: time * 1000,
          path: '/',
          domain: 'localhost',
          httpOnly: false,
        });
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
