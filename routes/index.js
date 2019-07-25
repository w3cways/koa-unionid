const Router = require('koa-router');
const koaBody = require('koa-body');
const UserController = require('../controllers/user')


const router = new Router()
router.post('/wxLogin',koaBody(),UserController.wxLogin)




module.exports = router