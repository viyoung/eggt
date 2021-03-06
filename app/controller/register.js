'use strict';
const Controller = require('egg').Controller;
const md5 = require('./../util/tools');

class Register extends Controller {
  async register() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    console.log(body);
    const account = body.account;
    const password = body.password;
    const userInfo = {
      account,
      password,
    };
    const isHave = await ctx.service.register.findUser(userInfo.account);
    if (isHave && isHave.length > 0) {
      ctx.response.body = {
        succes: false,
        msg: '你注册的账号已存在',
        code: 1,
      };
    } else {
      userInfo.password = await md5.MD5(userInfo.password);
      console.log(userInfo);
      const res = await ctx.service.register.add(userInfo);
      ctx.response.body = res;
    }
  }
}
module.exports = Register;
