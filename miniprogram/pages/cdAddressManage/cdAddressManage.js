// miniprogram/pages/cdAddressManage/cdAddressManage.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    tele:'',
    address:''
  },
  // 表单值改变
  onNameChange(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
    this.setData({
      name: event.detail
    })
  },
  onTeleChange(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
    var ret = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
    if(!((event.detail.value).match(ret))){
      wx.showToast({
        title: '请输入正确的手机号码',
        icon:'none',
        duration:1000,
      })
    }
    else{
      this.setData({
        tele: event.detail.value
      })
    }
  },
  onAddressChange(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
    this.setData({
      address: event.detail
    })
  },
  gotoAppointment(){
    var ret = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
    if(!(this.data.tele).match(ret)){
      wx.showToast({
        title: '请输入正确的手机号码',
        icon:'none',
        duration:1000,
      })
    }
    else if(this.data.name==''){
      wx.showToast({
        title: '请填写联系人姓名',
        icon:'none',
        duration:1000,
      })
    }
    else if(this.data.address==''){
      wx.showToast({
        title: '请填写详细地址',
        icon:'none',
        duration:1000,
      })
    }
    else{
      app.globalData.user.name = this.data.name
      app.globalData.user.phoneNumber = this.data.tele
      app.globalData.user.address = this.data.address
      wx.navigateTo({
        url: '../cdAppointment/cdAppointment',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var user = wx.getStorageSync('user').user;
    console.log(user);
    this.setData({
      name:user.name,
      tele:user.phoneNumber,
      address:user.address,
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