/**
 * Created on 2018/10/1.
 */

'use strict';

export default {
  /**
   * 环境判断
   */
  judgeEnv: () => {
    // console.log(navigator);
    // console.log(navigator.userAgent);
    wx.miniProgram.getEnv(function(res) {
      console.log(res.miniprogram) // true
    })
    if (ua.indexof('MicroMessage') == -1) {//说明不在微信中
      console.log('非微信');
      // 走不在小程序的逻辑
    } else {
      wx.miniProgram.getEnv(function(res) {
        if (res.miniProgram) {
          // 走在小程序的逻辑
          console.log('微信')
        } else {
          // 走不在小程序的逻辑
          console.log('小程序')
        }
      })
    }
    /*if(navigator.userAgent.toLowerCase().indexOf('miniprogram') != -1){
      console.log('微信小程序')
      return 'xcx'
    } else if (navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1){
      console.log('微信内置浏览器')
      return 'wx'
    } else {
      console.log('其它浏览器')
      return 'qt'
    }*/
  }
}


