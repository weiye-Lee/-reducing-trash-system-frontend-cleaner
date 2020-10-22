// miniprogram/pages/login2/login2.js
var app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: '',
  },
  phoneOnChange: function (e) {
    this.setData({
      phone: e.detail
    })
  },
  passwordOnChange: function (e) {
    this.setData({
      password: e.detail
    })
  },
  bindLogin() {
    var user = {
      phoneNumber: this.data.phone,
      password: this.data.password,
    }
    var my = JSON.stringify(user);
    var link = "http://localhost:8080/api/user/login";
    wx.request({
      url: link,
      method: 'POST',
      data: my,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res.data.code == 200) {
          wx.setStorageSync('token', res.header.Authorization)
          wx.setStorageSync('user',res.data.data.user)
          app.globalData.token=res.header.Authorization
          app.globalData.user =res.data.data.user
          wx.showToast({
              title: '登录成功',
              icon: "success",
              duration: 2000,
          })
          wx.switchTab({
              url: '../homePage/homePage',        
              });
        } else {
          // 验证码错误
          wx.showToast({
            title: '用户名或密码错误',
            icon:"none",
            duration: 2000,
        })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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