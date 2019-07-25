# koa-unionid
Koa 获取小程序unionId、openId的服务端代码，[查看文章](https://www.w3cways.com/2331.html)


## 安装运行
下载修改`config/wxConfig.js`中的 `appid`和`secret`

终端中输入命令
```js
npm install
```
下载完对应的包后，终端输入
```js
node app.js
```

启动成功后，即可在小程序首页访问，就能看到`http://localhost:3000/wxlogin`接口返回了unionId、openId
