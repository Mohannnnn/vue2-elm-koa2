/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-29 16:16:40 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-09-29 20:29:47
 */

const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const koaBodyparser = require('koa-bodyparser')
const proxy = require('http-proxy-middleware')
// const router = require('./server/routers/index.js');
const app = new Koa();

// app.use(router.routes() , router.allowedMethods());
app.use(static(path.join(__dirname , '/dist')))

// 因中间件中需要解析body中的参数，故先添加该中间件
app.use(koaBodyparser())

app.use(async (ctx , next)=> {
  if(ctx.url.startsWith('/restapi') || ctx.url.startsWith('/pizza')) {
    ctx.respond = false;
    const a =  await proxy({
        target: 'https://h5.ele.me:443', // 服务器地址
        changeOrigin: true,
        secure: false,
        // pathRewrite: {
        //     '^/v1' : '/mobile/v1'
        // }
    })(ctx.req, ctx.res, next)
 }
})
app.listen(9000 , () => {
    console.log("----------服务开启,端口9000------------");
})
