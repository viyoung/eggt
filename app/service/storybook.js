'use strict';
const Service = require('egg').Service;
const mongoose = require('egg').mongoose;
class Population extends Service {
  async findStoryAuthor(obj) {
    const ctx = this.ctx;
    const curObj = {
      _id: new mongoose.Types.ObjectId(),
      name: obj.name,
      age: obj.age,
    };
    return ctx.model.Person.save(curObj);
  }
}

module.exports = Population;
