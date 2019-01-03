'use strict';
const Service = require('egg').Service;
class PostService extends Service {
  async findAll() {
    return this.ctx.model.Post.find({ });
  }
  async add(userInfo) {
    const ctx = this.ctx;
    return ctx.model.Post.create(userInfo).then(() => {
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
    return ctx.model.Post.remove({ name }).then(() => {
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
    return ctx.model.Post.findOneAndUpdate({ _id }, { name }).then(() => {
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
    return ctx.model.Post.find({ name }).then(res => {
      console.log(res);
      return res;
    }).catch(err => {
      console.log(err);
      return false;
    });
  }
}
module.exports = PostService;
