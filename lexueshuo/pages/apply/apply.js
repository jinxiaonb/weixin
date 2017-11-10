// pages/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    upload_picture_list:[{path:"../../images/bg.jpg"}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  }
})