// miniprogram/pages/farmerHomePage/farmerHomePage.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: null,
    garbageChooses:[],
  },
  gotoFarmerAppoint: function () {
    wx.navigateTo({
      url: '../farmerAppointment/farmerAppointment',
    })
  },
  gotoFCOrder(){
    wx.navigateTo({
      url: '../fcOrder/fcOrder',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var link = 'http://localhost:8080/api/user/index';
    var Token = wx.getStorageSync('token');
    // console.log("1:"+Token)
    //JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。
    wx.request({
      url: link,
      header: {
        'Authorization': Token,
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data)
        wx.setStorageSync('user', res.data);
        //正式开发环境从此开始：
        that.setData({
          user: wx.getStorageSync('user')
        })
      },
      fail() {
        console.log("fail");
      }
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

  }
})