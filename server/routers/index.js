/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-29 17:44:57 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-29 19:38:48
 */

const Router = require('koa-router');
const fs = require('fs');

let router = new Router();
router.get('/' , async ctx => {
    ctx.body = '';
})

module.exports = router;