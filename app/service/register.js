'use strict';
const Service = require('egg').Service;

class Register extends Service {
  async add(userInfo) {
    const ctx = this.ctx;
    console.log(userInfo);
    return ctx.model.User.create(userInfo).then(() => {
      return {
        success: true,
        msg: '注册成功',
        code: 0,
      };
    }).catch(() => {
      return {
        success: false,
        msg: '注册失败',
        code: 1,
      };
    });
  }
  async findUserName(name) {
    const ctx = this.ctx;
    return ctx.model.User.find({ userName: name }).then(res => {
      console.log(res);
      return res;
    }).catch(err => {
      console.log(err);
      return false;
    });
  }
}
module.exports = Register;
