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
    http: 'http://localhost:8080',
    userInfo: null,
    token: "",
    user:{
      id:'',
      name:'',
      phoneNumber:'',
      address:'',
      sex:'',
      role:'',
      province:'',
      city:'',
      area:'',
      street:'',
      village:''
    },
    remark: '',
    recycleGarbage:[],
    unRecycleGarbage:[],
    soil:[],
    garbageChooses:[],
    fcOrder:{
      name:'',
      tele:'',
      address:'',
      remark:'',
      garbageChooses:[],
    },
    updateFlag:0,//控制订单审核界面订单的初始化，值为0时订单对象从后端取，值为1时订单对象从前端全局变量取
    cdGarbageChooses:[],
  },
  getToken: function () {
    try {
      var value = wx.getStorageSync('token')
      if (value) {
        return value;
      } else {
        // 返回登录页面
        wx.navigateTo({
          url: 'login2/login2',
        })
      }
    } catch (e) {
      // 获取缓存失败，手机的问题
    }
  },
  getUser:function(){
    try{
      var value = wx.getStorageSync('user')
      if(value){
        return value;
      }else{
        wx.navigateTo({
          url: 'login2/login2',
        })
      }
    }catch(e){
       // 获取缓存失败，手机的问题
    }
  },
})