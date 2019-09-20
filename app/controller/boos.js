'use strict';
const Controller = require('egg').Controller;

class Boos extends Controller {
    async publisjob() {
        const ctx = this.ctx;
        const body = ctx.request.body;
        console.log(body);
        const insert = await ctx.service.boos.publishjob(body);
        if (insert && insert.state === 1) {
            ctx.respond.body = {
                state: insert.state,
                msg: '发布成功',
            }
        } else {
            ctx.respond.body = {
                state: insert.state,
                msg: '发布失败',
            }

        }
    }
};
module.exports = Boos;