const app = getApp()

Page({
/**
   * 页面的初始数据
   */
  data: {
    muti: 0,
    message: "",
    People : 0,
    muti1 : 0,
    gamer: 0,
    Name:''
  },

  to_index(){
    wx.navigateTo({
      url: '../index/index',
    })
  },

  naming(){
    this.setData({
      muti1 : 1
    })
  },

  to_chat(){
    this.setData({
      muti: 1
    })
  },

  Go_Back() {
    this.setData({
      muti: 0,
      muti1 :0
    })
  },
  Adding_gamer(){
    var temp
    temp = this.data.gamer -1
    this.setData({
      gamer : temp,
    })
    app.globalData.Namearr.push(this.data.Name)
    console.log(app.globalData.Namearr)
    if (this.data.gamer == 0 ) {
      var audio = wx.createInnerAudioContext()
      var url = "audio/audio.mp3"
      audio.src = url 
      audio.play()

      //转到博饼页面
      wx.navigateTo({
        url: '../random1/random1',
      })
    }
    if (this.data.gamer < 0) {
      wx.navigateTo({
        url: '../Multiplayer_game/Multiplayer_game',
      })
    }
   
  },

  Input_name: function (e) {
    var temp = e.detail.value
    this.setData({
      Name: temp
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      People : app.globalData.People,
      gamer : app.globalData.People,
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
    app.globalData.Namearr = []
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