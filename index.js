/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-29 16:16:40 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-29 16:36:01
 */

 const Koa = require('koa');
 const app = new Koa();

 app.use(async ctx => {
     ctx.body = JSON.stringify(ctx);
 })

 app.listen(9000 , () => {
     console.log("----------服务开启,端口9000------------");
 })
