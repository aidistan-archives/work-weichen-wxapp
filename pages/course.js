function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  data: {
    hidden: true,
    danmuList: [
    {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
    },
    {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
    }]
  },
  bindTap: function () {
    this.setData({hidden: !this.data.hidden})
  }
})