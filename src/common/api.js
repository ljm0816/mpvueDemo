/**
 * Created on 2018/10/1.
 */

'use strict';

const baseURL = 'http://test.gdfangpin.com/' // 连接到测试环境
// const baseURL = 'https://m.gdfangpin.com/' // 连接到正式环境

export default{
  install(Vue, options) {
    Vue.prototype.API = {
      school: baseURL + 'weixin/school',
      getSignPackage: baseURL + 'weixin/Weixin/getSignPackage'
    }
  }
}




