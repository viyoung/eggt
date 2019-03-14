'use strict';

const Service = require('egg').Service;

class Login extends Service {
  async login(loginInfo) {
    const ctx = this.ctx;
    return ctx.model.User.find({ account: loginInfo.account }).then(res => {
      console.log(res);
      return res;
    }).catch(err => {
      console.log(err);
      return false;
    });
  }
}

module.exports = Login;
