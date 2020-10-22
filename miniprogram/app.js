//app.js
App({
  onLaunch: function () {
    // 通过获取token有无判断登录状态
    wx.getStorage({
      key: 'token',
      success(res) {
        console.log("登录成功")
        console.log(res)
      },
      fail(res) {
        console.log("登录过期，请重新登录")
      }
    })
  },
  globalData: {
    userInfo: null,
    token: "",
    user:'',
    remark: '',
    recycleGarbage:[],
    unRecycleGarbage:[],
    soil:[],
    garbageChooses:[],
    fcOrder:'',
    updateFlag:0,//控制订单审核界面订单的初始化，值为0时订单对象从后端取，值为1时订单对象从前端全局变量取
  }
})