Page({
  data:{
    refresh: {
      degree: 720,
      animation: null
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  bindAccountTap: function () {
    wx.navigateTo({url: 'account'})
  },
  bindRefreshTap: function () {
    var self = this

    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease-in',
      transformOrigin: '50% 55% 0'
    })
    
    this.setData({
      'refresh.degree': this.data.refresh.degree + 720,
      'refresh.animation': animation.rotate(this.data.refresh.degree).step().export()
    })

    setTimeout(function () {
      wx.showToast({
        title: '已完成同步',
        icon: 'success',
        duration: 1000
      });
    }, 1000)
  },
  bindStatTap: function () {
    wx.navigateTo({url: 'stat'})
  },
  bindReciteTab: function () {
    wx.navigateTo({url: 'recite/start'})
  },
  bindOrderTab: function () {
    wx.showModal({
      title: '尚未解锁该课程',
      content: '您还未解锁该课程，请前往支付购买',
      showCancel: true,
      confirmText: '购买',
      success: function(res) {
        if (res.confirm) {
          wx.navigateTo({url: 'order'})
        }
      }
    })
  }
})