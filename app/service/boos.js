'use strict';
const Service = require('egg').Service;

class Boos extends Service {
  async publishjob(info) {
    const ctx = this.ctx;
    return ctx.model.User.find({ account: info.account })
      .then(res => {
        console.log(res);
        if (res) {
          ctx.model.User.
        }
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  }

}
module.exports = Boos;