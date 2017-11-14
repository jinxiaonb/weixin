// pages/active/active.js
var imageUtil = require('../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab1flag:true,//tab标签切换
    tab2flag:false,
    char_lt:"<",//字符串
    char_gt:">",
    detail:"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
    imagewidth:0,//居中图片大小初始化宽度
    imageheight:0,
    imageleft:0,//左边偏移量
    freeImgUrls: [{
      flag: true,
      img: "../../images/life.png",
      imgSelected: "../../images/lifeactive.png",
      text: "生活"
    }, {
        flag: false,
        img: "../../images/education.png",
        imgSelected: "../../images/educationactive.png",
        text: "教育"
    }, {
        flag: false,
        img: "../../images/job.png",
        imgSelected: "../../images/jobactive.png",
        text: "职场"
    }, {
        flag: false,
        img: "../../images/finance.png",
        imgSelected: "../../images/financeactive.png",
        text: "金融"
    }],
    freeList:[{
      title:"标题1",
      img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      id:"11"
    },{
      title: "标题2",
      img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      id: "12"
      }, 
      {
        title: "标题3",
        img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        id: "13"
      }],

    nofreeList: [{
      title: "标题1",
      img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      id: "11",
      money:"50"
    }, {
      title: "标题2",
      img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      id: "12",
      money: "150"
    },
    {
      title: "标题3",
      img: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      id: "13",
      money: "350"
    }],
    chargesImgUrls: [{
      flag: true,
      img: "../../images/life.png",
      imgSelected: "../../images/lifeactive.png",
      text: "生活"
    }, {
      flag: false,
      img: "../../images/education.png",
      imgSelected: "../../images/educationactive.png",
      text: "教育"
    }, {
      flag: false,
      img: "../../images/job.png",
      imgSelected: "../../images/jobactive.png",
      text: "职场"
    }, {
      flag: false,
      img: "../../images/finance.png",
      imgSelected: "../../images/financeactive.png",
      text: "金融"
    }],
    loadmoreflag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getfreeList();//免费活动列表
    this.getnofreeList();//收费活动列表
  },
  getfreeList(){//
    var that = this;
    wx.request({
      url: 'https://ssl.xt.cn/lexue/lexue.ajax.php?action=getactlist',
      data: {
        isfree: 1  //1免费，0收费
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, // 设置请求的 header
      success: function (res) {
        // success
        // console.log('服务器返回' + res.data);
        console.log(res.data);
        that.setData({
          nofreeList: res.data.list
        });
        //console.log(that.data.nofreeList);
      },
      fail: function () {
        // fail
        // wx.hideToast();
      }, complete: function () {
        // complete
      }
    });
  },
  getnofreeList() {
    var that = this;
    wx.request({
      url: 'https://ssl.xt.cn/lexue/lexue.ajax.php?action=getactlist',
      data: {
        isfree: 0  //1免费，0收费
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, // 设置请求的 header
      success: function (res) {
        // success
        // console.log('服务器返回' + res.data);
        that.setData({
          nofreeList:res.data.list
        });
        //console.log(that.data.nofreeList);
      },
      fail: function () {
        // fail
        // wx.hideToast();
      }, complete: function () {
        // complete
      }
    });
  },
  imageLoad:function(e){
    var imageSize = imageUtil.imageUtil(e);
    this.setData({
      imagewidth:imageSize.imageWidth*0.8,
      imageheight:imageSize.imageHeight*0.8,
      imageleft:imageSize.imageWidth*0.05
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
    this.setData({
      loadmoreflag:true
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  tab:function(event){
    console.log(event);
    console.log(event.target.id);
    if(event.target.id == "tab1"){
      this.setData({ tab1flag:true,tab2flag:false});
    }else{
      this.setData({ tab1flag: false, tab2flag: true });
    }
  },
  activedetail:function(event){
    console.log(event);
    wx.navigateTo({
      url: '/pages/details/details?act_id='+event.currentTarget.id,
    });
  },
  setFreeLife:function(flag){
    this.setData({
      'freeImgUrls[0].flag': !flag,
      'freeImgUrls[1].flag': false,
      'freeImgUrls[2].flag': false,
      'freeImgUrls[3].flag': false
    });
  },
  setFreeEducation:function(flag){
    this.setData({
      'freeImgUrls[1].flag': !flag,
      'freeImgUrls[0].flag': false,
      'freeImgUrls[2].flag': false,
      'freeImgUrls[3].flag': false,
    });
  },
  setFreeJob:function(flag){
    this.setData({
      'freeImgUrls[2].flag': !flag,
      'freeImgUrls[0].flag': false,
      'freeImgUrls[1].flag': false,
      'freeImgUrls[3].flag': false
    });
  },
  setFreeFinance:function(flag){
    this.setData({
      'freeImgUrls[3].flag': !flag,
      'freeImgUrls[0].flag': false,
      'freeImgUrls[1].flag': false,
      'freeImgUrls[2].flag': false
    });
  },
  freeFilter:function(e){//免费筛选
    console.log(e);
    var desc = e.currentTarget.dataset.desc,
    val = e.currentTarget.dataset.val;
    console.log(desc);
    //if(desc == "")
    if(val == "0"){
      var flag = this.data.freeImgUrls[0].flag;
      if(flag) return false;
      this.setFreeLife(flag);
    }else if(val == "1"){
      var flag = this.data.freeImgUrls[1].flag;
      if (flag) return false;
      this.setFreeEducation(flag);
    }else if(val == "2"){
      var flag = this.data.freeImgUrls[2].flag;
      if (flag) return false;
      this.setFreeJob(flag);
    }else if(val == "3"){
      var flag = this.data.freeImgUrls[3].flag;
      if (flag) return false;
      this.setFreeFinance(flag);
    }
  },
  setNoFreeLife: function (flag) {
    this.setData({
      'chargesImgUrls[0].flag': !flag,
      'chargesImgUrls[1].flag': false,
      'chargesImgUrls[2].flag': false,
      'chargesImgUrls[3].flag': false
    });
  },
  setNoFreeEducation: function (flag) {
    this.setData({
      'chargesImgUrls[1].flag': !flag,
      'chargesImgUrls[0].flag': false,
      'chargesImgUrls[2].flag': false,
      'chargesImgUrls[3].flag': false,
    });
  },
  setNoFreeJob: function (flag) {
    this.setData({
      'chargesImgUrls[2].flag': !flag,
      'chargesImgUrls[0].flag': false,
      'chargesImgUrls[1].flag': false,
      'chargesImgUrls[3].flag': false
    });
  },
  setNoFreeFinance: function (flag) {
    this.setData({
      'chargesImgUrls[3].flag': !flag,
      'chargesImgUrls[0].flag': false,
      'chargesImgUrls[1].flag': false,
      'chargesImgUrls[2].flag': false
    });
  },
  chargesFilter: function (e) {//收费筛选
    console.log(e);
    var desc = e.currentTarget.dataset.desc,
      val = e.currentTarget.dataset.val;
    console.log(desc);
    //if(desc == "")
    if (val == "0") {
      var flag = this.data.chargesImgUrls[0].flag;
      if (flag) return false;
      this.setNoFreeLife(flag);
    } else if (val == "1") {
      var flag = this.data.chargesImgUrls[1].flag;
      if (flag) return false;
      this.setNoFreeEducation(flag);
    } else if (val == "2") {
      var flag = this.data.chargesImgUrls[2].flag;
      if (flag) return false;
      this.setNoFreeJob(flag);
    } else if (val == "3") {
      var flag = this.data.chargesImgUrls[3].flag;
      if (flag) return false;
      this.setNoFreeFinance(flag);
    }
  }
})