'use strict';
const Service = require('egg').Service;
class StoryService extends Service {
  async findAll() {
    return this.ctx.model.Story.find({ });
  }
  async add(bookInfo) {
    const ctx = this.ctx;
    return ctx.model.Story.create(bookInfo).then(() => {
      return {
        success: true, msg: '插入成功', code: 0,
      };
    }).catch(() => {
      return {
        success: false, msg: '插入数据失败', code: 1,
      };
    });
  }
  async removeBook(title) {
    const ctx = this.ctx;
    return ctx.model.Story.remove({ title }).then(() => {
      return {
        success: true, msg: '删除成功', code: 0,
      };
    }).catch(() => {
      return {
        success: false, msg: '删除失败', code: 1,
      };
    });
  }
  async update(_id, title) {
    const ctx = this.ctx;
    return ctx.model.Story.findOneAndUpdate({ _id }, { title }).then(() => {
      return {
        success: true, msg: '更新成功', code: 0,
      };
    }).catch(() => {
      return {
        success: false, msg: '更新失败', code: 1,
      };
    });
  }
  async findBookTitle(title) {
    const ctx = this.ctx;
    return ctx.model.Story.find({ title }).then(res => {
      console.log(res);
      return res;
    }).catch(err => {
      console.log(err);
      return false;
    });
  }
  async titleGetAuthor(obj) {
    const ctx = this.ctx;
    return ctx.model.Story.findOne(obj).populate('author').then(res => {
      return res;
    })
      .catch(() => {
        return {
          success: false, msg: '查找失败', code: 1,
        };
      });
  }
}
module.exports = StoryService;
