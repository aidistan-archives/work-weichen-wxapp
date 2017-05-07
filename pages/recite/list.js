var dict = require('../../utils/dict_unit.js')

Page({
  data:{
    list: 0,
    unit: 0,
    words: [],
    wordsCount: 0,
    percentage: 0
  },
  onLoad: function (options) {
    var list = options.list || '1'
    var unit = options.unit || '2'
    var words = new Object()

    for (var word in dict[list][unit]) {
      words[word] = dict[list][unit][word].split('；')
    }

    var wordsCount = Object.getOwnPropertyNames(words).length

    this.setData({
      list: list,
      unit: unit,
      words: words,
      wordsCount: wordsCount
    })

    wx.setNavigationBarTitle({
      title: 'Unit ' + unit + ' ' + 1 + '/' + wordsCount
    })
  },
  bindSwiperChange: function (e) {
    if (e.detail.current < this.data.wordsCount) {
      this.setData({
        percentage: e.detail.current / this.data.wordsCount * 100
      })

      wx.setNavigationBarTitle({
        title: 'Unit ' + this.data.unit + ' ' + (e.detail.current+1) + '/' + this.data.wordsCount
      })
    } else {
      wx.redirectTo({
        url: 'summary?list=' + this.data.list + '&unit=' + this.data.unit
      })
    }
  }
})