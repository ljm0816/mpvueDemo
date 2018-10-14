// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './AppH5'
import router from './router'
import wxService from './api/wxService'
import httpService from './api/httpService'
import store from './store'

import API from './common/api.js'
import http from './common/http.js'
import util from './common/util.js'

// 设置api为全局变量
Vue.use(API)
Vue.use(http)

// 把工具函数定义为全局
Vue.prototype.util = util

Vue.config.productionTip = false
Vue.use(Vuex)

window.env = 'other'

Vue.mixin({
  data () {
    return {
      service: '', // 服务
      router: '/', // 路由路径
      imgSrc: '' ,// 图片路径
      env: 'other'
    }
  },
  methods: {
      newroot () {
          return  this.$route
      },
      navigatePageTo (url) {
          this.$router.push(url)
      },
      reLaunchPageTo (url) {
          this.$router.replace(url)
      },
      setStorageSync (name, data) {
          sessionStorage.setItem(name, JSON.stringify(data))
      },
      getStorageSync (name) {
          return JSON.parse(sessionStorage.getItem(name))
      }
  },
  created () {
      console.log('chrome')
      this.service = httpService
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
