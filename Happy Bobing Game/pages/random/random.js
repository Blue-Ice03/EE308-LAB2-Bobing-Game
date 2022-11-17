// random/random.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 9,
    strarr: []

  },
  Go_Back() {
    this.setData({
      recode: true
    })
  },
  oneNum(arr) {
    var n = 0
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element == 1) {
        n += 1;
      }
    }
    return n;
  },

  twoNum(arr) {
    var n = 0
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element == 2) {
        n += 1;
      }
    }
    return n;
  },

  threeNum(arr) {
    var n = 0
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element == 3) {
        n += 1;
      }
    }
    return n;
  },

  fourNum(arr) {
    var n = 0
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element == 4) {
        n += 1;
      }
    }
    return n;
  },

  fiveNum(arr) {
    var n = 0
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element == 5) {
        n += 1;
      }
    }
    return n;
  },

  sixNum(arr) {
    var n = 0
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element == 6) {
        n += 1;
      }
    }
    return n;
  },
  Def_bobing() {
    var
      one = this.data.one,
      two = this.data.two,
      three = this.data.three,
      four = this.data.four,
      five = this.data.five,
      six = this.data.six
    if (four === 1 && one < 4 && two < 4 && three < 4 && five < 4 && six < 4) {
      if (one == 1 && two == 1 && three == 1 && four == 1 && five == 1 && six == 1) {
        this.data.strarr.push('对堂')
      }else{
        this.data.strarr.push('一秀')
      }
    }
    if (four === 2 && one < 4 && two < 4 && three < 4 && five < 4 && six < 4) {
      this.data.strarr.push('二举')
    }
    if (four === 3) {
      this.data.strarr.push('三红')
    }
    if (two === 4 || three === 4 || one === 4 || five === 4 || six === 4) {
      this.data.strarr.push('四进')
    }
   
    if (four === 4 && one !== 2) {
      this.data.strarr.push('状元')
    }
    if (five == 5 || three == 5 || two == 5 || one == 5 || six == 5) {
      this.data.strarr.push('五子登科')
    }
    if (four == 5) {
      this.data.strarr.push('五红')
    }
    if (six == 6 || five == 6 || three == 6 || two == 6) {
      this.data.strarr.push('六杯黑')
    }
    if (one == 6) {
      this.data.strarr.push('遍地锦')
    }
    if (four == 6) {
      this.data.strarr.push('六杯红')
    }
    if (four == 4 && one == 2) {
      this.data.strarr.push('金花')
    }
    if (four == 0 && one < 4 && two < 4 && four < 4 && five < 4 && six < 4 && three < 4) {
      this.data.strarr.push('谢谢参与')
    }
    this.setData({
      strarr: this.data.strarr
    })
  },

  reload() {
    var audio = wx.createInnerAudioContext()
    var url = "audio/audio.mp3"
    audio.src = url 
    audio.play()

    if (this.data.count > 0) {
      var
        a = Math.floor(Math.random() * 6) + 1,
        b = Math.floor(Math.random() * 6) + 1,
        c = Math.floor(Math.random() * 6) + 1,
        d = Math.floor(Math.random() * 6) + 1,
        e = Math.floor(Math.random() * 6) + 1,
        f = Math.floor(Math.random() * 6) + 1;
      var arr = [a, b, c, d, e, f]
      this.setData({
        a: a,
        b: b,
        c: c,
        d: d,
        e: e,
        f: f
      })
      this.setData({
        one: this.oneNum(arr),
        two: this.twoNum(arr),
        three: this.threeNum(arr),
        four: this.fourNum(arr),
        five: this.fiveNum(arr),
        six: this.sixNum(arr)
      })
      var temp = this.data.count - 1;

      this.setData({
        count: temp
      })
      this.Def_bobing()
    } else {
      this.setData({
        recode: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var
      a = Math.floor(Math.random() * 6) + 1,
      b = Math.floor(Math.random() * 6) + 1,
      c = Math.floor(Math.random() * 6) + 1,
      d = Math.floor(Math.random() * 6) + 1,
      e = Math.floor(Math.random() * 6) + 1,
      f = Math.floor(Math.random() * 6) + 1;
    var arr = [a, b, c, d, e, f]


    this.setData({
      a: a,
      b: b,
      c: c,
      d: d,
      e: e,
      f: f
    })
    this.setData({
      one: this.oneNum(arr),
      two: this.twoNum(arr),
      three: this.threeNum(arr),
      four: this.fourNum(arr),
      five: this.fiveNum(arr),
      six: this.sixNum(arr),
    })
    this.Def_bobing()
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})