// miniprogram/pages/cdAppointment/cdAppointment.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    remark: '',
    name: '',
    tele: '',
    address: '',
    garbageChooses: [],
  },
  gotoCDAddressManage() {
    wx.navigateTo({
      url: '../cdAddressManage/cdAddressManage',
    })
  },
  onRemarkChange(event) {
    this.setData({
      remark: event.detail
    })
  },
  gotoUnRecycle() {
    wx.navigateTo({
      url: '../cdUnRecycle/cdUnRecycle',
    })
  },
  submit() {
    if (this.data.name == '' || this.data.tele == '' || this.data.address == '') {
      wx.showToast({
        title: '请完善发起人信息',
        icon: 'none',
        duration: 1000,
      })
    } else {
      var t = this.data.garbageChooses;
      console.log(this.data.garbageChooses);
      var newGarbageChooses = new Array();
      for (var i = 0; i < t.length; i++) {
        if (t[i] != null && t[i].amount != 0) {
          delete t[i].garbage.category;
          delete t[i].garbage.name;
          delete t[i].garbage.score;
          delete t[i].garbage.type;
          delete t[i].garbage.unit;
          newGarbageChooses.push(t[i]);
        }
      }
      console.log(newGarbageChooses);
      var myBaseOrder = {
        name: this.data.name,
        phoneNumber: this.data.tele,
        address: this.data.address,
        remark: this.data.remark,
        garbageChooses: newGarbageChooses,
      }
      var link = 'http://localhost:8080/api/cleaner/addCDOrder';
      var Token = wx.getStorageSync('token');
     var StringBaseOrder = JSON.stringify(myBaseOrder);
     wx.request({
      url: link,
     method: 'POST',
      data:StringBaseOrder,
      header: {
       'Authorization':Token,
       'content-type': 'application/json' // 默认值
     },
     success(res){
       console.log(res.data)
       app.globalData.score=0.0;
       app.globalData.cdGarbageChooses=[];
       wx.showToast({
         title: '提交成功',
         icon: 'success',
         duration: 2000,
       })
       setTimeout(function(){
        wx.switchTab({
          url: '../homePage/homePage',
        })
       },1500)
     }
    })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: app.globalData.user.name,
      tele: app.globalData.user.phoneNumber,
      address: app.globalData.user.address,
      garbageChooses: app.globalData.cdGarbageChooses,
      remark: app.globalData.remark,
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