// pages/cardvoucher/cardvoucher.js
const App = getApp();
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
	switchtabing:function(e){
		var that = this;
		var display= that.data.display;
		console.log(display)
			that.setData({
				display: 1
			})
	},
	switchtabed: function (e) {
		var that = this;
		var display = that.data.display;
		console.log(display)
			that.setData({
				display: 0
			})
		
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		this.cartload(1)
		this.cartloaded(2)
		
  },
	cartload: function (index){
		var that = this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchUserCoupons',
			method: 'POST',
			data: {
				appid: App.globalData.appid,
				index: index,
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				console.log(res)
				for (var i = 0; i < res.data.length; i++) {
					var start = res.data[i].start_time.slice(0, 10)
					var end = res.data[i].end_time.slice(0, 10)
					res.data[i].start_time = start;
					res.data[i].end_time = end;
					that.setData({
						card: res.data,
					})
				};
				
			}
		})
	},
	cartloaded: function (index) {
		var that = this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchUserCoupons',
			method: 'POST',
			data: {
				appid: App.globalData.appid,
				index: index,
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				console.log(res)
				for (var i = 0; i < res.data.length; i++) {
					var start = res.data[i].start_time.slice(0, 10)
					var end = res.data[i].end_time.slice(0, 10)
					res.data[i].start_time = start;
					res.data[i].end_time = end;
					that.setData({
						carded: res.data,
					})
				};

			}
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})