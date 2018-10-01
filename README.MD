### vue2-elm-koa2后端系统
> 前端github地址:[https://github.com/Mohannnnn/vue2-elm](https://github.com/Mohannnnn/vue2-elm)
> 整个开发是前后端分离，所有的都是走的接口开发，不使用后端模板输出。

### 技术栈
`koa2` + `node.js`

### 开始
```bash
npm install

npm install nodemon -g  //本地开发监听文件变化
npm run dev             //本地开发测试

npm run server          //上线开启服务
```
### 目录结构
```
|-dist                      //打包上传的前端静态文件路径
|-server
|       controller
|       midddleware
|       routers
|       utils
|-config.js                 //配置文件       
|-index.js                  //koa服务入口文件
|-README.MD
```