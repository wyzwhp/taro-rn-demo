import Taro from '@tarojs/taro';
import { reqParams, reqConfig } from '../typings/request'
const CODE_SUCCESS = '000'
const CODE_AUTH_EXPIRED = '600'


function updateStorage(data = {}) {
    return Promise.all([
        Taro.setStorage({ key: 'token', data: data['3rdSession'] || '' }),
        Taro.setStorage({ key: 'uid', data: data['uid'] || '' })
    ])
}

export async function fetch(params: reqParams, config: reqConfig = {
    showToast: true,
    autoLogin: true
}) {
    //const token = Taro.getStorageSync('token')
    //config.data.token = "jRmmlzLFrtWPzVosMP5POuh-YzYraReG"
        //config.data.token = "8DYjitmPZWz9Wrsl4eL4bKHHI-iCSzWn"
    let token='jRmmlzLFrtWPzVosMP5POuh-YzYraReG'
    const {
        url,
        data,
        method = 'POST',
        header
    } = params
    console.log(url,{ ...data, token })
    return Taro.request({
        url: url.indexOf('http') == 0 ? url : 'https://javaport.hybbtree.com' + url,
        method,
        data: { ...data, token },
        header: {
            'content-type': 'application/json',
            ...header
        }
    }).then(async (res) => {
        
        const { code, data } = res.data
        if (code !== CODE_SUCCESS) {
            if (code === CODE_AUTH_EXPIRED) {
                await updateStorage({})
            }
            return Promise.reject(res.data)
        }

        // if (url === API_USER_LOGIN) {
        //     await updateStorage(data)
        // }

        // // XXX 用户信息需展示 uid，但是 uid 是登录接口就返回的，比较蛋疼，暂时糅合在 fetch 中解决
        // if (url === API_USER) {
        //     const uid = await getStorage('uid')
        //     return { ...data, uid }
        // }

        return data
    }).catch((err) => {
        console.log(err)
        const defaultMsg = err.code === CODE_AUTH_EXPIRED ? '登录失效' : '请求异常'
        if (config.showToast) {
            Taro.showToast({
                title: err && err.errorMsg || defaultMsg,
                icon: 'none'
            })
        }

        if (err.code === CODE_AUTH_EXPIRED && config.autoLogin) {
            Taro.navigateTo({
                url: '/pages/user-login/user-login'
            })
        }

        return Promise.reject({ message: defaultMsg, ...err })
    })
}
