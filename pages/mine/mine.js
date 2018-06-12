// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
		userInfo: {},
		order:[
			{
				image:'../../image/alldingdan.png',
				text:'全部订单',
				active:1
			},
			{
				image: '../../image/daifu.png',
				text: '待付款',
				active: 0
			},
			{
				image: '../../image/daifa.png',
				text: '待发货',
				active: 0
			},
			{
				image: '../../image/daishou.png',
				text: '待收货',
				active: 0
			},
			{
				image: '../../image/daiping.png',
				text: '待评价',
				active: 0
			},
			{
				image: '../../image/shouhou.png',
				text: '售后单',
				active: 0
			},
	
		]
		
  },
	address:function(e){
		wx.navigateTo({ url: '../selectaddrress/selectaddress' })
	},
	card:function(e){
		wx.navigateTo({ url: '../cardvoucher/cardvoucher' })
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		// wx.login({
		// 	success: res => {
		// 		// 发送 res.code 到后台换取 openId, sessionKey, unionId
		// 	}
		// })
		// 获取用户信息

		var userInfo = wx.getStorageSync('userInfo');
		this.setData({
			userInfo: userInfo,
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