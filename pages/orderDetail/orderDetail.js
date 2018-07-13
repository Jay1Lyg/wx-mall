// pages/orderDetail/orderDetail.xml.js
const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  bindOpen:function(){
   this.setData({
     Show:"none",
     Hide:"block",
     height:"auto"
   });
   
  },
  bindDown:function(){
    this.setData({
      Show: "block",
      Hide: "none",
      height: "150rpx"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
	quitbtn:function(e){
		var production_id = e.target.dataset.production_id ,
			orderProduction_id = e.target.dataset.orderproduction_id ,
			price = e.target.dataset.price;
			console.log(e)
		console.log(orderProduction_id)
			wx.navigateTo({
				url: '../quitMsg/quitMsg?production_id=' + production_id + '&&orderProduction_id=' + orderProduction_id+'&&price='+price })
		
	},
  onLoad: function (options) {
		console.log(options);
		var orderid = options.orderid;
		var that=this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchOrderDetailInfo',
			method: 'POST',
			data: {
				order_id: orderid,
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				console.log(res)
				that.setData({
					address:res.data.address,
					remark: res.data.remark,
					production: res.data.production,
					orderNumber: res.data.orderNumber,
					placeOrder_time: res.data.placeOrder_time


				})
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