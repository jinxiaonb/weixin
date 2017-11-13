// pages/person/favorite/favorite.js

var imageUtil = require('../../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  onReachBottom: function () {
    console.log("上拉");
    var that = this;

    this.setData({
      loadmoreflag: true
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  activedetail: function (event) {
    console.log(event);
    wx.navigateTo({
      url: '/pages/details/details',
    });
  }
})