// pages/person/activity/activity.js
var imageUtil = require('../../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attendList:[],
    sendList:[],
    personinfo:{},
    tab1flag: true,//tab标签切换
    tab2flag: false,
    char_lt: "<",//字符串
    char_gt: ">",
    detail: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
    imagewidth: 0,//居中图片大小初始化宽度
    imageheight: 0,
    imageleft: 0,//左边偏移量
    loadmoreflag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.personInfo) {
      this.setData({
        personinfo: app.globalData.personInfo
      });
    }
    this.attendActivityList();
    this.sendActivityList();
  },
  attendActivityList:function(){
    var that = this;
    wx.request({
      url: 'https://ssl.xt.cn/lexue/lexue.ajax.php?action=getmysignlist',
      data: {
        //showall:1,
        openid: that.data.personinfo.openId
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
  sendActivityList:function(){
    var that = this;
    wx.request({
      url: 'https://ssl.xt.cn/lexue/lexue.ajax.php?action=getactlist',
      data: {
        openid: that.data.personinfo.openId
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
  imageLoad: function (e) {
    var imageSize = imageUtil.imageUtil(e);
    this.setData({
      imagewidth: imageSize.imageWidth * 0.8,
      imageheight: imageSize.imageHeight * 0.8,
      imageleft: imageSize.imageWidth * 0.05
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
  onReachBottom: function (event) {
    console.log("上拉");
    var that = this;

    console.log(that.data.tab1flag);
    console.log(that.data.tab2flag);
    this.setData({
      loadmoreflag: true
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  tab: function (event) {
    console.log(event);
    console.log(event.target.id);
    if (event.target.id == "tab1") {
      this.setData({ tab1flag: true, tab2flag: false });
    } else {
      this.setData({ tab1flag: false, tab2flag: true });
    }
  },
  activedetail: function (event) {
    console.log(event);
    wx.navigateTo({
      url: '/pages/details/details',
    });
  },
  cancelActivity:function(event){//取消
    console.log(event);
  },
  underActivity:function(event){//下架
    console.log(event);
  },
  editActivity:function(event){//编辑
    console.log(event);
  }
})