'use strict';

const Service = require('egg').Service;

class Login extends Service {
  async login(loginInfo) {
    console.log(loginInfo);
    const ctx = this.ctx;
    let insertObject = {};
    if (loginInfo.role === 1) {
      insertObject = { genuis: {} };
    } else {
      insertObject = { boos: {} };
    }
    console.log(insertObject);
    return ctx.model.User.find({ account: loginInfo.account })
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  }
}

module.exports = Login;
