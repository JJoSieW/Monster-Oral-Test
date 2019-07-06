Page({
  data: {
    slider: 1.0,
  },
  changeSlider3(e) {
    this.setData({ slider: e.detail.value })
  },
  changescoeff(e){
    var app = getApp();
    var getscoeff = app.globalData.score_coeff;
    app.globalData.score_coeff = slider;
  },
   go: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  },

})

