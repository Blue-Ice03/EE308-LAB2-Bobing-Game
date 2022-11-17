// random/random.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yixiu: 20,
    erju: 10,
    sanhong: 4,
    sijin: 4,
    duitang: 2,
    zhuangyuan: 1,
    gamerarr1: [],
    gamerarr2: [],
    gamerarr3: [],
    gamerarr4: [],
    gamerarr5: [],
    gamerarr6: [],
    score1: [],
    score2: [],
    score3: [],
    score4: [],
    score5: [],
    score6: [],
    //成绩判断 
    recode: true,
    Gamernum: 1,
    Gamernumc: 0,
    ejectdef : true
  },

  bingNum(arr){
    var a = 0; var b = 0; var c = 0; var d = 0; var e = 0; var f = 0;
    for (let index = 0; index < arr.length; index++) {
      var element = arr[index];
      if (element == "一秀") {
        a += 1;
      }
      if (element == "二举") {
        b += 1;
      }
      if (element == "三红") {
        c += 1;
      }
      if (element == "四进") {
        d += 1;
      }
      if (element == "对堂") {
        e += 1;
      }
      if (element == "状元") {
        f += 1;
      }
    }
    var arr1 = [a, b, c, d, e, f]
    return arr1;
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
        return '对堂';
      }else{
        return '一秀';
      }
    }
    if (four === 2 && one < 4 && two < 4 && three < 4 && five < 4 && six < 4) {
      return '二举';
    }
    if (four === 3) {
      return '三红';
    }
    if (two === 4 || three === 4 || one === 4 || five === 4 || six === 4) {
      return '四进';
    }
    if (four === 4 && one !== 2) {
      return '状元';
    }
    if (five == 5 || three == 5 || two == 5 || one == 5 || six == 5) {
      return '状元';
    }
    if (four == 5) {
      return '状元';
    }
    if (six == 6 || five == 6 || three == 6 || two == 6) {
      return '状元';
    }
    if (one == 6) {
      return '状元';
    }
    if (four == 6) {
      return '状元';
    }
    if (four == 4 && one == 2) {
      return '状元';
    }
    if (four == 0 && one < 4 && two < 4 && four < 4 && five < 4 && six < 4 && three < 4) {
      return '谢谢参与';
    }
  },

  // 将写好的define bobing函数传入
  countbing(n) {

    if (n == '一秀') {
      if (this.data.yixiu != 0) {
        var temp = this.data.yixiu - 1
        this.setData({
          yixiu: temp
        })
      }
    }

    if (n == '二举') {
      if (this.data.erju != 0) {
        var temp = this.data.erju - 1
        this.setData({
          erju: temp
        })
      }
    }

    if (n == '三红') {
      if (this.data.sanhong != 0) {
        var temp = this.data.sanhong - 1
        this.setData({
          sanhong: temp
        })
      }

    }

    if (n == '四进') {
      if (this.data.sijin != 0) {
        var temp = this.data.sijin - 1
        this.setData({
          sijin: temp
        })
      }
    }

    if (n == '对堂') {
      if (this.data.duitang != 0) {
        var temp = this.data.duitang - 1
        this.setData({
          duitang: temp
        })
      }
    }
    if (n == '状元') {
      if (this.data.zhuangyuan != 0) {
        var temp = this.data.zhuangyuan - 1
        this.setData({
          zhuangyuan: temp
        })
      }
    }
  },

  random() {
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
  },

  sumbing() {
    var sum = this.data.yixiu + this.data.erju + this.data.sanhong + this.data.sijin + this.data.duitang + this.data.zhuangyuan
    return sum;
  },


  judge(n,bobing){
    if (bobing == '一秀') {
      if (this.data.yixiu != 0) {
        this.write(n,bobing)
      }
    }
    if (bobing == '二举') {
      if (this.data.erju != 0) {
        this.write(n,bobing)
      }
    }
    if (bobing == '三红') {
      if (this.data.sanhong  != 0) {
        this.write(n,bobing)
      }
    }
    if (bobing == '四进') {
      if (this.data.sijin != 0) {
        this.write(n,bobing)
      }
    }
    if (bobing == '对堂') {
      if (this.data.对堂 != 0) {
        this.write(n,bobing)
      }
    }
    if (bobing == '状元') {
      if (this.data.zhuangyuan != 0) {
        this.write(n,bobing)
      }
    }
  },


  write(n, bobing) {
    if (bobing == '一秀') {
      if (this.data.yixiu != 0) {
        
      }
    }
    if (n == 1) {
      this.data.gamerarr1.push(bobing)
    }
    if (n == 2) {
      this.data.gamerarr2.push(bobing)
    }
    if (n == 3) {
      this.data.gamerarr3.push(bobing)
    }
    if (n == 4) {
      this.data.gamerarr4.push(bobing)
    }
    if (n == 5) {
      this.data.gamerarr5.push(bobing)
    }
    if (n == 6) {
      this.data.gamerarr6.push(bobing)
    }

  },

  reload() {
    var audio = wx.createInnerAudioContext()
    var url = "audio/audio.mp3"
    audio.src = url 
    audio.play()

    //重新摇色子
    this.random()
    var bobing = this.Def_bobing();//计算博饼大小
   
    this.judge(this.data.Gamernum, bobing)
    this.countbing(bobing)//计算奖池
    //终结逻辑
    if (this.sumbing() != 0) {
      // 玩家更替的逻辑
      if (this.data.Gamernum < this.data.Gamernumc) {
        var temp = this.data.Gamernum + 1
        this.setData({
          Gamernum: temp,
        })
      } else {
        this.setData({
          Gamernum : 1
        })
      }
    } else {
      this.data.score1 = this.bingNum(this.data.gamerarr1)
      this.data.score2 = this.bingNum(this.data.gamerarr2)
      this.data.score3 = this.bingNum(this.data.gamerarr3)
      this.data.score4 = this.bingNum(this.data.gamerarr4)
      this.data.score5 = this.bingNum(this.data.gamerarr5)
      this.data.score6 = this.bingNum(this.data.gamerarr6)
      this.setData({
        score1 : this.bingNum(this.data.gamerarr1),
        score2 : this.bingNum(this.data.gamerarr2),
        score3 : this.bingNum(this.data.gamerarr3),
        score4 : this.bingNum(this.data.gamerarr4),
        score5 : this.bingNum(this.data.gamerarr5),
        score6 : this.bingNum(this.data.gamerarr6),
        recode: false
      })
    }

  },
  to_index(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      Gamernumc: app.globalData.People,
    })
    
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

  },
})