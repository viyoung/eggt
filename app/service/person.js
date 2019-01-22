'use strict';
const Service = require('egg').Service;
class PersonService extends Service {
  async findAll() {
    return this.ctx.model.Person.find({ });
  }
  async add(userInfo) {
    const ctx = this.ctx;
    return ctx.model.Person.create(userInfo).then(() => {
      return {
        success: true, msg: '插入成功', code: 0,
      };
    }).catch(() => {
      return {
        success: false, msg: '插入数据失败', code: 1,
      };
    });
  }
  async removeUser(name) {
    const ctx = this.ctx;
    return ctx.model.Person.remove({ name }).then(() => {
      return {
        success: true, msg: '删除成功', code: 0,
      };
    }).catch(() => {
      return {
        success: false, msg: '删除失败', code: 1,
      };
    });
  }
  async update(_id, name) {
    const ctx = this.ctx;
    return ctx.model.Person.findOneAndUpdate({ _id }, { name }).then(() => {
      return {
        success: true, msg: '更新成功', code: 0,
      };
    }).catch(() => {
      return {
        success: false, msg: '更新失败', code: 1,
      };
    });
  }
  async findUserName(name) {
    const ctx = this.ctx;
    return ctx.model.Person.find({ name }).then(res => {
      ctx.logger.debug('debug info from service:' + res);
      return res;
    }).catch(err => {
      ctx.logger.debug('debug info from service:' + err);
      return false;
    });
  }
}
module.exports = PersonService;
