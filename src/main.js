import Vue from 'vue'
import App from './App'
import store from './store'
import wxService from './api/wxService'

import API from './common/api.js'
import http from './common/http.js'
import util from './common/util.js'

// 设置api为全局变量
Vue.use(API)
Vue.use(http)

// 把工具函数定义为全局
Vue.prototype.util = util

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store

Vue.mixin({
  data() {
    return {
      service: '',
      router: '/',
      imgSrc: '/',
      env: 'xcx'
    }
  },
  methods: {
      newroot () {
        return this.$root.$mp
      },
      navigatePageTo (url) {
        wx.navigateTo({url: url})
      },
      reLaunchPageTo (url) {
        wx.reLaunch({url: url})
      },
      setStorageSync (name, data) {
        wx.setStorageSync(name, data)
      },
      getStorageSync (name) {
        return wx.getStorageSync(name)
      }
  },
  created() {
      // console.log('wx')
      // this.service = wxService
  }
})

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'mpvue demo',
      navigationBarTextStyle: 'black'
    }
  }
}
