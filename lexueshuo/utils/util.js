const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function imageUtil(e){
  var imageSize = {};
  var originalWidth = e.detail.width;
  var originalHeight = e.detail.height;
  var originalScale = originalHeight/originalWidth;
  wx.getSystemInfo({
    success: function(res) {
      var windowWidth = res.windowWidth;
      var windowHeight = res.windowHeight;
      var windowscale = windowHeight/windowWidth;
      if(originalScale < windowscale){
        imageSize.imageWidth = windowWidth;
        imageSize.imageHeight = (windowWidth * originalHeight)/originalWidth;
      }else{
        imageSize.imageHeight = windowHeight;
        imageSize.imageWidth = (windowHeight * originalWidth)/originalHeight;
      }
    },
  });
  return imageSize;
}

module.exports = {
  formatTime: formatTime,
  imageUtil:imageUtil
}
