// pages/cardvoucher/cardvoucher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		display:1,
		card: [
			{
				voucher: 10,
				least: 188,
				start: '2018.03.21',
				end: '2018.06.21'
			},
			{
				voucher: 10,
				least: 188,
				start: '2018.03.21',
				end: '2018.06.21'
			},
			{
				voucher: 10,
				least: 188,
				start: '2018.03.21',
				end: '2018.06.21'
			},
			{
				voucher: 10,
				least: 188,
				start: '2018.03.21',
				end: '2018.06.21'
			},
		]
  },
	switchtab:function(e){
		console.log(1)
		var that = this;
		var display= that.data.display;
		if (display){
			that.setData({
				display: 0
			})
		}else{
			that.setData({
				display: 1
			})
		}
		
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
  
  }
})