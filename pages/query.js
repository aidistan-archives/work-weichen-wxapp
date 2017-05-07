Page({
  data: {
    tabs: ['单元排序', '字母排序'],
    activeTab: 'unit',
    words: {
      unit: require('../utils/dict_unit.js'),
      alphabet: require('../utils/dict_alphabet.js')
    }
  },
  bindTabClick: function (e) {
    this.setData({
      activeTab: e.currentTarget.id
    });
  },
  bindWordTap: function (e) {
    wx.navigateTo({url: 'word?word=' + e.currentTarget.dataset.word})
  }
});