const Koa = require('koa')
const Path = require('path');

const router = require('./routes/index')

const app = new Koa()




app.use(router.routes()).use(router.allowedMethods());

 
app.listen(3000)
console.log("启动成功")
