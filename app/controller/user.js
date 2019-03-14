'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async findAll() {
    const dataList = await this.ctx.service.post.findAll();
    this.ctx.body = dataList;
  }
  async add() {
    const ctx = this.ctx;
    const name = ctx.request.body.name;
    const age = ctx.request.body.age;
    const gender = ctx.request.body.gender;
    const hobby = ctx.request.body.hobby;
    const userInfo = {
      name,
      age,
      gender,
      hobby,
    };
    const isHave = await ctx.service.register.findUserName(name);
    if (isHave && isHave.length > 0) {
      ctx.response.body = {
        succes: false,
        msg: '重复名字不能添加',
        code: 1,
      };
    } else {
      const res = await ctx.service.register.add(userInfo);
      ctx.response.body = res;
    }

  }
  async removeUser() {
    const ctx = this.ctx;
    const name = ctx.request.body.name;
    const res = await ctx.service.post.removeUser(name);
    ctx.response.body = res;
  }
  async update() {
    const ctx = this.ctx;
    const name = ctx.request.body.name;
    const _id = ctx.request.body._id;
    const res = await ctx.service.post.update(_id, name);
    ctx.response.body = res;
  }
}

module.exports = UserController;
