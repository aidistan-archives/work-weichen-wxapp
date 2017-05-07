//app.js
App({
  onLaunch: function () {
    // //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
  },
  globalData:{
    code: null,
    userInfo: null
  },
  login: function (cb) {
    var self = this
    if (this.globalData.code) {
      typeof cb === 'function' && cb()
    } else {    
      wx.login({
        success: function (res) {
          self.globalData.code = res.code
          typeof cb === 'function' && cb()
        }
      })
    }
  },
  getUserInfo:function(cb){
    var self = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      this.login(function () {
        wx.getUserInfo({
          success: function (res) {
            self.globalData.userInfo = res.userInfo
            typeof cb == "function" && cb(self.globalData.userInfo)
          }
        })
      })
    }
  },
})