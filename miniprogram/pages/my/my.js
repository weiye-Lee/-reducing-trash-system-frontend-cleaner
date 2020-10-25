// miniprogram/pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:null
  },
  gotoUserSetting(){
      wx.navigateTo({
        url: '../userSetting/userSetting',
      })
  },
  gotoFCOrder(){
      wx.navigateTo({
        url: '../fcOrder/fcOrder',
      })
  },
  gotoCDOrder(){
    wx.navigateTo({
      url: '../cdOrder/cdOrder',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that  = this;
    var link = 'http://localhost:8080/api/user/index';
    var Token = wx.getStorageSync('token');
    wx.request({
      url: link,
      header: {
        'Authorization':Token,
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res.data)
        if(res.data.code==200){
          wx.setStorageSync('user',res.data);
          //正式开发环境从此开始：
          that.setData({
            user: wx.getStorageSync('user')
          })
        }
      },
      fail(){
        console.log("fail");
      }
    })
  },
  show:function(){
    console.log(this.data.user);
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
