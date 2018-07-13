// pages/quitDetail/quitDetail.js
const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quitType: "仅退款",
    taste: "麻辣",
    count: "1",
    money: "39.3",
    productName: "房间打开是否好看教案和第三方尽快哈东佳反后端接口辅导教师咖啡",
    quitReason:"不想拍了，过量发货单书法家的，风华绝代挥洒积分搞活动",
    orderNum:"1212545121154",
    createTime:"2018-05-01     12:51",
    payTime:"2018-05-01     12:51",
    applyTime:"2018-05-01    12:51",
    quittimes:"1天7小时20分",
    imgUrl: "../../images/u1222.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(options);
		var that=this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchRefundOrderDetailInfo',
			method: 'POST',
			data: {
				refund_id: options.refund_id
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				console.log(res);
				if (res.data.refundsType==='1'){
					res.data.refundsType='仅退款'
				}else{
					res.data.refundsType = '退货退款'
				}
			 that.setData({
				 data:res.data
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