// miniprogram/pages/cdOrder/cdOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    unFinishedList: [],
    finishedList: [],
  },
  gotoOrderDetail(event){
    var id =  event.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../cdOrderDetail/cdOrderDetail?id='+id,
    })
  },
// 滑动切换tab
bindChange: function (e) {
  var that = this;
  that.setData({
    currentTab: e.detail.current
  });
},
// 点击tab切换
swichNav: function (e) {
  var that = this;
  if (this.data.currentTab === e.target.dataset.current) {
    return false;
  } else {
    that.setData({
      currentTab: e.target.dataset.current
    })
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var link1 = 'http://localhost:8080/api/cleaner/getCDOrder/Checking';
    var link2 = 'http://localhost:8080/api/cleaner/getCDOrder/Checked';
    var Token = wx.getStorageSync('token');
    wx.request({
      url: link1,
      header: {
        'Authorization': Token,
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        if(res.data.code==200){
          that.setData({
          unFinishedList:res.data.data
        })
        }
      }
    });
    wx.request({
      url: link2,
      header: {
        'Authorization': Token,
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        if(res.data.code==200){
          that.setData({
          finishedList:res.data.data
        })
        }
      }
    });
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