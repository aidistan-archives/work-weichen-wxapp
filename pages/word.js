var dict = require('../utils/dict.js')

Page({
  data:{
    word: '',
    lines: []
  },
  onLoad:function(options){
    var word = options.word || 'abandon'

    this.setData({
      word: word,
      lines: dict[word].split('；')
    })
  },
  bindPreviousTap: function () {
    var words = Object.getOwnPropertyNames(dict)
    var index = words.indexOf(this.data.word)

    index = index > 0 ? index - 1 : words.length - 1
    wx.redirectTo({url: 'word?word=' + words[index]})
  },
  bindNextTap: function () {
    var words = Object.getOwnPropertyNames(dict)
    var index = words.indexOf(this.data.word)

    index = (index + 1) % words.length
    wx.redirectTo({url: 'word?word=' + words[index]})
  }
})