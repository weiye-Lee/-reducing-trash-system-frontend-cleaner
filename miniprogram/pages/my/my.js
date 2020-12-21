// miniprogram/pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:null,
    score:0,
    times:0,
  },
  gotoCROrder(){
    wx.navigateTo({
      url: '../crOrder/crOrder',
    })
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
  gotoFCManage(){
    wx.navigateTo({
      url: '../fcManage/fcManage',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      user: wx.getStorageSync('user')
    })
    var that = this;
    var link2 = app.globalData.http +'/api/cleaner/getOrderInfo';
    var Token = wx.getStorageSync('token');
    wx.request({
      url: link2,
      header: {
        'Authorization': Token,
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if(res.data.code==200){
          that.setData({
            score:res.data.data[0].score,
            times:res.data.data[1].times,
          })
        }
      },
      fail() {
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
