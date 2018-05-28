// pages/submitorder/submitorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		goodes: [
			{
				active: 0,
				id: 0,
				image: '../../image/14.png',
				name: '不成熟的计划',
				guige: '麻辣',
				num: 1,
				price: 123
			},
			{
				active: 0,
				id: 2,
				image: '../../image/14.png',
				name: '不成熟的计划',
				guige: '麻辣',
				num: 1,
				price: 123
			},
		]
  },
	addaddress:function(res){
		var that=this;
		wx.navigateTo({ url: '../addaddress/addaddress' })
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