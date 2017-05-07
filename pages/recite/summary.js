var dict = require('../../utils/dict_unit.js')

Page({
  data:{
    list: 0,
    unit: 0,
    words: [],
    wordsCount: 0
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
      title: 'List ' + list + ' Unit ' + unit + ' 小结'
    })
  },
  bindReciteTap: function () {
    wx.redirectTo({
      url: 'list?list=' + this.data.list + '&unit=' + this.data.unit
    })
  }
})