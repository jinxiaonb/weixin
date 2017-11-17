// pages/apply/apply.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personinfo:{},
    img:"../../images/selection.png",
    upload_picture_list: [{ path: "../../images/bg.jpg" }],
    regenddate:"2017-09-13",
    regendtime:"23:59",
    startdate:"2017-09-13",
    enddate:"2017-09-13",
    starttime:"11:12",
    endtime:"11:14",
    contentList:[{
      path:"../../images/selection.png"
    }],
    markflag:{flag0:true,flag1:true,flag2:false,flag3:false},
    imgUrls: [{
      flag:true,
      img: "../../images/life.png",
      imgSelected:"../../images/lifeactive.png",
      text: "生活"
    }, {
      flag:false,
      img: "../../images/education.png",
      imgSelected: "../../images/educationactive.png",
      text: "教育"
    }, {
      flag:false,
      img: "../../images/job.png",
      imgSelected: "../../images/jobactive.png",
      text: "职场"
    }, {
      flag:false,
      img: "../../images/finance.png",
      imgSelected: "../../images/financeactive.png",
      text: "金融"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    if (app.globalData.personInfo){
      this.setData({
        personinfo:app.globalData.personInfo
      });
    }
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
  
  },
  bindRegendTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      regendtime: e.detail.value
    })
  },
  bindRegendDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      regenddate: e.detail.value
    })
  },
  bindStartTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      starttime: e.detail.value
    })
  },
  bindEndTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      endtime: e.detail.value
    })
  },
  bindStartDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      startdate: e.detail.value
    })
  },
  bindEndDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      enddate: e.detail.value
    });
  }, 
  wxbgimage:function(e){//微信图片上传
    var _self = this;
    wx.chooseImage({
      count:1,
      success:function(res){
        var tempFilePaths = res.tempFilePaths;
        // _self.setData({
        //   img:tempFilePaths[0]
        // });
        // console.log(tempFilePaths);
        _self.uploadIcon(_self,tempFilePaths);
      }
    });
  },
  uploadIcon:function(_self,tempFilePaths){
    //console.log(_self);
    //console.log(tempFilePaths);
    // wx.uploadFile({
    //   url: '',
    //   filePath: '',
    //   name: '',
    //   success:function(res){

    //   }
    // });
  },
  wxbgdelimage:function(e){
    console.log(e);
  },
  moneychange:function(e){//是否收费开关
    console.log(e);
    console.log(e.detail.value);
  },
  markChoise0:function(e){
    var flag = this.data.imgUrls[0].flag;
    if (flag) return false;
    this.setData({
      'imgUrls[0].flag': !flag,
      'imgUrls[1].flag': false,
      'imgUrls[2].flag': false,
      'imgUrls[3].flag': false
    });
  },
  markChoise1: function (e) {
    var flag = this.data.imgUrls[1].flag;
    if (flag) return false;
    this.setData({
      'imgUrls[1].flag': !flag,
      'imgUrls[0].flag': false,
      'imgUrls[2].flag': false,
      'imgUrls[3].flag': false,
    });
  },
  markChoise2: function (e) {
    var flag = this.data.imgUrls[2].flag;
    if (flag) return false;
    this.setData({
      'imgUrls[2].flag': !flag,
      'imgUrls[0].flag': false,
      'imgUrls[1].flag': false,
      'imgUrls[3].flag': false
    });
  },
  markChoise3: function (e) {
    var flag = this.data.imgUrls[3].flag;
    if (flag) return false;
    this.setData({
      'imgUrls[3].flag': !flag,
      'imgUrls[0].flag': false,
      'imgUrls[1].flag': false,
      'imgUrls[2].flag': false
    });
  },
  formsubmit: function (e) {
    console.log(e);
    var galleries = "../../images/bg.jpg",
      thumbnail  = "../../images/bg.jpg",
      tags = "生活",
      detail = e.detail.value,
      _json = {
        tags:tags,
        galleries:galleries,
        thumbnail:thumbnail,
        avalis:detail.avalis,
        contact:detail.contack,
        desc:detail.desc,
        endtime:detail.endtime,
        endyear:detail.endyear,
        isswitch:detail.isswitch,
        lecturer:detail.lecturer,
        price:detail.price
      };
      var _jsondemo = detail ;
      _jsondemo["tags"] = tags;
      _jsondemo.galleries = galleries;
      _jsondemo.thumbnail = thumbnail;
      _jsondemo.signend = detail.signendate+" "+detail.signedtime;
      _jsondemo.start = detail.startyear + " " + detail.startime;
      _jsondemo.end = detail.endyear + " "+detail.endtime;
      _jsondemo.openid = this.data.personinfo.openId;
      if(detail.isswitch){
        _jsondemo.price = "0";
      }
      //console.log(this.data.personinfo);
      console.log(_jsondemo);

      wx.request({
        url: 'https://ssl.xt.cn/lexue/lexue.ajax.php?action=postact',
        data:_jsondemo,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }, // 设置请求的 header
        success: function (res) {
          // success
          //wx.hideToast();
          //self.globalData.personInfo = res.data.userinfo;
          // console.log('服务器返回' + res.data);
          console.log(res.data);
        },
        fail: function () {
          // fail
          // wx.hideToast();
        }, complete: function () {
          // complete
        }
      })




  },
  uploadpic: function (e) {
    console.log(e);
    var that = this;
    var upload_picture_list = that.data.img;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths[0]);
        //upload_picture_list.push(tempFiles[0]);
        // that.setData({
        //   upload_picture_list:upload_picture_list
        // });
        //console.log(that.data.upload_picture_list);
        wx.uploadFile({
          url: 'https://ssl.xt.cn/lexue/lexue.ajax.php?action=imageupload',
          filePath: tempFilePaths[0],
          name: 'file', 
          formData: {
            'openid': that.data.personinfo.openId
          },
          success: function (res) {
            console.log(res)
            //var data = JSON.parse(res.data);
            //console.log(data);
          }
        })
      }
    });
  },
  contentImgUpload:function(e){
    var that = this;
    //var contentList = that.data.contentList;
    wx.chooseImage({
      count: 9,
      success: function (res) {
        var contentList = res.tempFilePaths;
        console.log(contentList);
        // that.setData({
        //   contentList:contentList
        // });
        for(var i=0;i<contentList.length;i++){
          (function(i){
            console.log(contentList[i]);
              wx.uploadFile({
              url: 'https://ssl.xt.cn/lexue/lexue.ajax.php?action=imageupload',
              filePath: contentList[i],
              name: 'file',
              formData: {
                'openid': that.data.personinfo.openId
              },
              success: function (res) {
                //console.log(res.data)
                var data = JSON.parse(res.data);
                console.log(data);
              }
            })
          })(i);
        }
        //upload_picture_list.push(tempFiles[0]);
        // that.setData({
        //   upload_picture_list:upload_picture_list
        // });
        //console.log(that.data.upload_picture_list);
        // wx.uploadFile({
        //   url: 'https://ssl.xt.cn/lexue/lexue.ajax.php?action=imageupload',
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     'openid': that.data.personinfo.openId
        //   },
        //   success: function (res) {
        //     console.log(res)
        //     //var data = JSON.parse(res.data);
        //     //console.log(data);
        //   }
        // })
      }
    });
  }
});