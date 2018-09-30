/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-29 16:16:40 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-30 18:35:49
 */
const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const koaBodyparser = require('koa-bodyparser')
const proxy = require('http-proxy-middleware')
const router = require('./server/routers/index.js');
const config = require('./config.js');

const app = new Koa();

// 因中间件中需要解析body中的参数，故先添加该中间件
app.use(router.routes() , router.allowedMethods());

app.use(koaBodyparser());
app.use(static(path.join(__dirname , config.staticDirectory)));

app.listen(config.port , () => {
    console.log(`Server start , Listening in ${config.port}`);
});
