// // index.js
// // 获取应用实例
// const app = getApp()

// Page({
//   data: {
//     motto: 'Enjoy Bobing',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo'),
//     canIUseGetUserProfile: false,
//     canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
//   },
//   // 事件处理函数
//   bindViewTap() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad() {
//     if (wx.getUserProfile) {
//       this.setData({
//         canIUseGetUserProfile: true
//       })
//     }
//   },
//   getUserProfile(e) {
//     // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
//     wx.getUserProfile({
//       desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
//       success: (res) => {
//         console.log(res)
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     })
//   },
//   getUserInfo(e) {
//     // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
//     console.log(e)
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })



const app = getApp()


Page({
  data: {
    motto: 'Enjoy Bobing',
    muti: 0,
    RoomName: "",
    Roomcode: "",
    People: 0,

  },
 
  to_home_name() {
    this.setData({
      muti: 1
    })
  },
  to_StandAloneGame() {
    wx.navigateTo({
      url: '../Console_game/Console_game',
    })
  },
  to_rule() {
    wx.navigateTo({
      url: '../regulation/regulation',
    })
  },

  Go_Back() {
    this.setData({
      muti: 0
    })
    this.setData({
      RoomName: "",
      Roomcode: "",
      People: 0
    })
  },

  to_Multiplayer_game(){
    if (app.globalData.People>0&&app.globalData.People<=6) {
      wx.navigateTo({
        url: '../Multiplayer_game/Multiplayer_game',
      })
    }
    
  },

  Input_3: function (e) {
    var temp = e.detail.value
    this.setData({
      RoomName: temp
    })
    app.globalData.RoomName = this.data.RoomName
    console.log(app.globalData.RoomName)
  },
  Input_2: function (e) {
    var temp = e.detail.value
    this.setData({
      Roomcode: temp
    })
    app.globalData.Roomcode = this.data.Roomcode
    console.log(app.globalData.Roomcode)
  },
  Input_1: function (e) {
    var temp = e.detail.value
    this.setData({
      People: temp
    })
    app.globalData.People = this.data.People
    console.log(app.globalData.People)
  },
 
  onShow: function (options) {
  
    app.globalData.People = 0
    app.globalData.Namearr = []

},

})