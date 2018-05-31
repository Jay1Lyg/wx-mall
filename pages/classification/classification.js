// pages/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		tab: {
			list: [
				{
					tabdetail: '见过',
					id: '122',
				},
				{
					tabdetail: '见过',
					id: '152'
				},
				{
					tabdetail: '见过',
					id: '12252'
				},
				{
					tabdetail: '见过',
					id: '124'
				},
				{
					tabdetail: '见过',
					id: '127'
				},
				{
					tabdetail: '见过',
					id: '125'
				},
				{
					tabdetail: '见过',
					id: '128'
				},
				{
					tabdetail: '见过',
					id: '129'
				},
				{
					tabdetail: '见过',
					id: '1222'
				},

			]
		},
		recommend: [
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
			{
				image: '../../image/14.png',
				text: '尽快改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了改变了个',
				price: 100
			},

		]
  },
	qiehuan:function(res){
		console.log(res);
		var that=this;
		var id=res.target.dataset.id;
		console.log(id)
		for (var i = 0; i < that.data.tab.list.length;i++){
			that.data.tab.list[i].active=0;
			if (that.data.tab.list[i].id===id){
				console.log(i)
				that.data.tab.list[i].active = 1;
				
			}
		}
		that.setData({
			tab: that.data.tab
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var that = this;
		
	
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