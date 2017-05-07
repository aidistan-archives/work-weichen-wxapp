var app = getApp()

Page({
  data:{
    userInfo: {},
    date: '2017-05-07'
  },
  onLoad: function () {
    var self = this
    app.getUserInfo(function (userInfo) {
      self.setData({userInfo:userInfo})
    })
  },
  bindDateChange: function (e) {
    this.setData({date: e.detail.value})
  }
})