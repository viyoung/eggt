'use strict';
const Service = require('egg').Service;
class User extends Service {
  async add(userInfo) {
    const ctx = this.ctx;
    return ctx.model.User.save(userInfo).then(() => {
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
    return ctx.model.User.find({ name }).then(res => {
      console.log(res);
      return res;
    }).catch(err => {
      console.log(err);
      return false;
    });
  }
}
module.exports = User;
