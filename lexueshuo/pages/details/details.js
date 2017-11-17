// pages/details/details.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topimg: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
    collect:{
      flag:true,
      img:"../../images/collect.png",
      imgSelected:"../../images/collectactive.png"
    },
    detail:{
      personinfo: {},//个人信息，主要是openid
      flag:true,
      img:"../../images/collect.png",
      imgSelected:"../../images/collectactive.png",
      title:"合乎你天性的生活",
      endDate:"2017-11-10",
      startTime:"2017-11-11 12:00",
      endTime:"2017-11-11 14:00",
      hasNum:"22",
      lessNum:"20",
      money:50,
      desc:"就疯狂的撒雷锋精神多了咖啡机放声大哭雷锋精神多啦发生的。带饭卡的髋关节阿斯利康地方，富士康大家发拉萨的感觉。",
      imgList:['../../images/bg.png','../../images/bg.png']
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    if (app.globalData.personInfo) {
      this.setData({
        personinfo: app.globalData.personInfo
      });
    }
    this.getDetail(options);
  },
  getDetail:function(options){
    var that = this;
    var _json = {
      act_id: options.act_id,
      openid: that.data.personinfo.openId
    };

    wx.request({
      url: 'https://ssl.xt.cn/lexue/lexue.ajax.php?action=getactdetail',
      data: {
        actid: options.act_id,  //
        openid:that.data.personinfo.openId
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, // 设置请求的 header
      success: function (res) {
        // success
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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  getfreeList(){
    console.log("....");
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
  
  },
  collectActivity:function(e){
    var flag = this.data.collect.flag;
    this.setData({
      "collect.flag":!flag
    });
  },
  uploadpic:function(e){
    console.log(e);
    var that = this;
    var upload_picture_list = that.data.upload_picture_list;
    wx.chooseImage({
      count:1,
      success:function(res){
        var tempFiles = res.tempFiles;
        console.log(tempFiles[0]);
        upload_picture_list.push(tempFiles[0]);
        // that.setData({
        //   upload_picture_list:upload_picture_list
        // });
        console.log(that.data.upload_picture_list);
        wx.uploadFile({
          url: 'https://ssl.xt.cn/lexue.ajax.php?action=imageupload',
          filePath: tempFiles[0]['path'],
          name: 'file',
          formData:{'path':'wxchat'},
          success:function(res){
            var data = JSON.parse(res.data);
            console.log(data);
          }
        })
      }
    });
  },
  activityEvent:function(){
    var that = this;

    wx.request({
      url: 'https://ssl.xt.cn/lexue/lexue.ajax.php?action=wxpay',
      data: {
        fee:'1',  //
        openid: that.data.personinfo.openId,
        desc:'商品描述'
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, // 设置请求的 header
      success: function (res) {
        // success
        // console.log('服务器返回' + res.data);

        console.log(res.data);
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