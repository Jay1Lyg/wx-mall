// pages/quitMsg/quitMsg.js
const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quitType:"仅退款",
    taste:"麻辣",
    count:"1",
    money:"39.3",
    productName:"房间打开是否好看教案和第三方尽快哈东佳反后端接口辅导教师咖啡",
    imgUrl: ["../../images/u1222.png"],
    height:"235rpx",
		array: ['退货退款', '仅退款'],
		index:0,
		refundsReason:''
  },
  addHeight: function () {
   this.setData({
      height:"auto"
   });
  },
  reduceHeight: function () {
    this.setData({
      height: "235rpx"
    })
  },
	bindPickerChange:function(e){
		console.log(e)
		var index=parseInt(e.detail.value);
		console.log(index)
		this.setData({
			index:index
		})
	},
	reason:function(e){
		console.log(e)
		this.setData({
			refundsReason:e.detail.value
		})
	},
	submitbtn:function(e){
    var that=this;
		var refundsType=that.data.index+1;
		var data= {
			orderProduction_id: that.data.orderProduction_id,
			production_id: that.data.production_id,
			refundsReason: that.data.refundsReason,
			refundsAmount: that.data.price,
			refundsType: refundsType,
			customer_id: that.data.customer_id,
		};
		console.log(data)
		wx.showModal({
			title: '退款',
			content: '确定要退款吗？',
			success: function (res) {
				if (res.confirm) {
					console.log('用户点击确定')
					wx.request({
						url: App.globalData.urlHead + '/program/p_applyRefund',
						method: 'POST',
						data: data,
						header: {
							'content-type': 'application/json' // 默认值
						},
						success: function (res) {
							console.log(res);
							wx.navigateTo({
								url: '../quitDetail/quitDetail?refund_id=' + res.data.refund_id })
							
						}
					})
				} else if (res.cancel) {
					console.log('用户点击取消')
				}
			}
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(options)
		wx.getStorage({
			key: 'customer_id',
			success: function (res) {
				that.setData({
					customer_id: res.data,
				});
			}
		})
		this.setData({
			production_id: options.production_id,
			orderProduction_id: options.orderProduction_id,
			price: options.price
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