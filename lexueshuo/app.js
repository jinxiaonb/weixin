//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //var appid = 'wx188a89962b8fc17e'; //填写微信小程序appid  
        //var secret = 'c23bb500489156e2b5a36774d5a38be0'; //填写微信小程序secret
        var self = this;
        if (res.code) {
          var code = res.code;
          wx.getUserInfo({//getUserInfo流程
            success: function (res2) {//获取userinfo成功
              //console.log(res2);
              //var encryptedData = encodeURIComponent(res2.encryptedData);//一定要把加密串转成URI编码
              var encryptedData = res2.encryptedData;
              var iv = res2.iv;
              wx.showToast({
                title: '正在登录...',
                icon: 'loading',
                duration: 10000
              });
              //请求自己的服务器
              wx.request({
                url: 'https://ssl.xt.cn/lexue/lexue.ajax.php?action=wxlogin',
                data: {
                  code: code,
                  encryptedData: encryptedData,
                  iv: iv
                },
                method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                header: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }, // 设置请求的 header
                success: function (res) {
                  // success
                  wx.hideToast();
                  self.globalData.personInfo = res.data.userinfo;
                  // console.log('服务器返回' + res.data);
                  console.log(res);
                },
                fail: function () {
                  // fail
                  // wx.hideToast();
                }, complete: function () {
                  // complete
                }
              });
            }
          })

        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})