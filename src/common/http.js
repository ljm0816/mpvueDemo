/**
 * Created on 2018/10/1.
 */

'use strict';

/**
 * 通过判断浏览器来选择引入哪种fly
 * @type {null}
 */

// var Fly = require('flyio/dist/npm/wx')  //小程序环境启用
// var Fly = require('flyio/dist/npm/fly') // 非微信环境启用
var Fly = null
if (window.evn === 'xcx') {
  Fly = require('flyio/dist/npm/wx') //小程序环境启用
} else {
  Fly = require('flyio/dist/npm/fly') //非微信环境启用
}

var fly = new Fly

/**
 *  状态码
 */
const CODE = {
  SUCCESS: 200,
  ERROR: 400
}

/**
 * 请求类型
 * @type {{form: string, json: string}}
 */
const CONTENT_TYPES = {
  form: 'application/x-www-form-urlencoded',
  json: 'application/json;charset=UTF-8'
}

let is_weixn = () => {
  let ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true
  } else {
    return false
  }
}

export default {
  install(Vue, options) {
    Vue.prototype.httpGet = (url, params = {}) => {
      return fly.get(url, params).then((res) => {
        console.log(res)
        if (res.data && res.data.code === CODE.SUCCESS) {
          return res.data
        } else if (res.data.errcode === 2) {
          if (is_weixn()) {
            window.location.href = res.data.data
          } else {
            window.router.push({name: 'login'})
          }
        }
        if (res.data && res.data.code === CODE.ERROR) {
          alert(res.data.error)
          return Promise.reject(res.data.error)
        }
        return Promise.reject(res.data)
      }).catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
    }

    Vue.prototype.httpPost = (url, params = {}, contentType = 'json') => {
      return fly.post(url, params).then((res) => {
        console.log(res)
        if (res.data && res.data.code === CODE.SUCCESS) {
          return res.data
        } else if (res.data.errcode === 2) {
          if (is_weixn()) {
            window.location.href = res.data.data
          } else {
            window.router.push({name: 'login'})
          }
        }
        if (res.data && res.data.code === CODE.ERROR) {
          alert(res.data.error)
          return Promise.reject(res.data.error)
        }
        return Promise.reject(res.data)
      }).catch((error) => {
        console.log(error)
      })
    }

    Vue.prototype.httpDelete = (url, params = {}) => {
      return fly.delete(url, params).then((res) => {
        console.log(res)
        if (res.data && res.data.code === CODE.SUCCESS) {
          return res.data
        } else if (res.data.errcode === 2) {
          if (is_weixn()) {
            window.location.href = res.data.data
          } else {
            window.router.push({name: 'login'})
          }
        }
        if (res.data && res.data.code === CODE.ERROR) {
          alert(res.data.error)
          return Promise.reject(res.data.error)
        }
        return Promise.reject(res.data)
      }).catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
    }

    Vue.prototype.httpPut = (url, params = {}) => {
      return fly.put(url, params).then((res) => {
        console.log(res)
        if (res.data && res.data.code === CODE.SUCCESS) {
          return res.data
        } else if (res.data.errcode === 2) {
          if (is_weixn()) {
            window.location.href = res.data.data
          } else {
            window.router.push({name: 'login'})
          }
        }
        if (res.data && res.data.code === CODE.ERROR) {
          alert(res.data.error)
          return Promise.reject(res.data.error)
        }
        return Promise.reject(res.data)
      }).catch((error) => {
        console.log(error)
        return Promise.reject(error)
      })
    }
  }
}
