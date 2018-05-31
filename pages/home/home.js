// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		offer:'全场满199包邮',
		message:20,
		image:[
			'../../image/red.png',
			'../../image/red.png',
			'../../image/red.png',
			'../../image/red.png',
			'../../image/red.png',
		],
		classes:[
			{
				image:'../../image/14.png',
				text:'坚果'
			},
			{
				image: '../../image/15.png',
				text: '坚果'
			},
			{
				image: '../../image/15.png',
				text: '坚果'
			},
			{
				image: '../../image/15.png',
				text: '坚果'
			},
			{
				image: '../../image/15.png',
				text: '坚果'
			},
			{
				image: '../../image/15.png',
				text: '坚果'
			},
			{
				image: '../../image/15.png',
				text: '坚果'
			},
			{
				image: '../../image/15.png',
				text: '坚果'
			},
		],
		
			recommend:[
			{
				image: '../../image/14.png',
				text: '尽快改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了个',
				price:100
			},
			{
				image: '../../image/14.png',
				text: '尽快改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了个',
				price: 100
			},
			{
				image: '../../image/14.png',
				text: '尽快改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了个',
				price: 100
			},
			{
				image: '../../image/14.png',
				text: '尽快改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了个',
				price: 100
			},
		
		],
		card:[
			{
				voucher:10,
				least:188,
				start:'2018.03.21',
				end:'2018.06.21'
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
	search:function(res){
		wx.navigateTo({ url: '../search/search' })
	},
	producedetail:function(res) {
		wx.navigateTo({ url: '../productdetails/productdetails' })
	},
	classification:function(res){
		wx.navigateTo({ url: '../classification/classification' })
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