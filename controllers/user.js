const wxConfig = require('../config/wxConfig')
const superagent = require('superagent') 
const qs = require('querystring');
const WXBizDataCrypt = require('../util/WXBizDataCrypt') //解密文件


class userController {
    /**
     * 获取小程序unionId
     * @param data
     * @returns {Promise<*>}
     */
    static async wxLogin(ctx) {
        let req = ctx.request.body;
        let js_code = req.code
        let params = wxConfig;
        params.js_code = js_code;
        params = qs.stringify(params)
        let url = 'https://api.weixin.qq.com/sns/jscode2session?' + params;
        await superagent.get(url)
            .then(res => {
               
                let result = JSON.parse(res.text)
                let sessionKey = result.session_key
                let pc = new WXBizDataCrypt(wxConfig.appid, sessionKey)
                let data = pc.decryptData(req.encryptedData, req.iv);//解密得到小程序uid等信息
               
                ctx.body = {
                    code: 200,
                    msg: '登录成功',
                    data
                }

            })
            .catch(res => {
                console.log(res)
            })

    }

  
}

module.exports = userController