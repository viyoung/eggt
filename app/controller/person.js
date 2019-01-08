'use strict';

const Controller = require('egg').Controller;

class PersonController extends Controller {
  async findAll() {
    const dataList = await this.ctx.service.person.findAll();
    this.ctx.body = dataList;
  }
  async add() {
    const ctx = this.ctx;
    const name = ctx.request.body.name;
    const age = ctx.request.body.age;
    const title = ctx.request.body.title;
    const userInfo = {
      _id: new this.app.mongoose.Types.ObjectId(),
      name,
      age,
    };
    const bookInfo = {
      title,
      author: userInfo._id,
    };
    const isHave = await ctx.service.person.findUserName(name);
    if (isHave && isHave.length > 0) {
      ctx.response.body = {
        succes: false,
        msg: '重复名字不能添加',
        code: 1,
      };
    } else {
      const res = await ctx.service.person.add(userInfo);
      const resStory = await ctx.service.story.add(bookInfo);
      ctx.response.body = {
        res,
        resStory,
      };
    }

  }
  async removeUser() {
    const ctx = this.ctx;
    const name = ctx.request.body.name;
    const res = await ctx.service.person.removeUser(name);
    ctx.response.body = res;
  }
  async update() {
    const ctx = this.ctx;
    const name = ctx.request.body.name;
    const _id = ctx.request.body._id;
    const res = await ctx.service.person.update(_id, name);
    ctx.response.body = res;
  }
  async titleGetAuthor() {
    const ctx = this.ctx;
    const title = ctx.request.body.title;
    const res = await ctx.service.story.titleGetAuthor({ title });
    ctx.response.body = res;
  }
}

module.exports = PersonController;
