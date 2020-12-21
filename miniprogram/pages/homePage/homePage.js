// miniprogram/pages/farmerHomePage/farmerHomePage.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: null,
    garbageChooses: [],
    score:0,
    times:0,
  },
  gotoStore(){
    wx.switchTab({
      url: '../store/store',
    })
  },
  gotoFarmerAppoint: function () {
    wx.navigateTo({
      url: '../farmerAppointment/farmerAppointment',
    })
  },
  gotoFCOrder() {
    wx.navigateTo({
      url: '../fcOrder/fcOrder',
    })
  },
  gotoCDAppointment() {
    var that = this;
    var link2 = app.globalData.http +'/api/user/getUnRecycleGarbage';
    var Token = wx.getStorageSync('token');
    //请求不可回垃圾
    wx.request({
      url: link2,
      header: {
        'Authorization': Token,
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res.data.code == 200) {
          //正式开发环境从此开始：
          app.globalData.unRecycleGarbage = res.data.data.unRecycleGarbage
          // that.setData({
          //   recycleGarbage: res.data.data.recycleGarbage
          // })
          var t = res.data.data.unRecycleGarbage;
          console.log(t);
          var a = t.metal.length;
          var b = t.pesticide.length;
          //制造订单数组
          for (var i = 0; i < a; i++) {
            var id = t.metal[i].id;
            // if (that.data.garbageChooses[id] == null) {
              var index = "garbageChooses[" + id + "].garbage";
              var index2 = "garbageChooses[" + id + "].amount";
              var index3 = "garbageChooses[" + id + "].id";
              that.setData({
                [index]: t.metal[i],
                [index2]: 0,
              })
            // }
          }
          for (var i = 0; i < b; i++) {
            var id = t.pesticide[i].id;
            // if (that.data.garbageChooses[id] == null) {
              var index = "garbageChooses[" + id + "].garbage";
              var index2 = "garbageChooses[" + id + "].amount";
              var index3 = "garbageChooses[" + id + "].id";
              that.setData({
                [index]: t.pesticide[i],
                [index2]: 0,
              })
            // }
          }
          console.log(that.data.garbageChooses);
          app.globalData.cdGarbageChooses = that.data.garbageChooses;
        }
      },
      fail() {
        console.log("fail");
      }
    })
    wx.navigateTo({
      url: '../cdAppointment/cdAppointment',
    })
  },
  gotoRank(){
    wx.navigateTo({
      url: '../rank/rank',
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
    var link2 =app.globalData.http + '/api/cleaner/getOrderInfo';
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