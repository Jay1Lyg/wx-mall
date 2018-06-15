// pages/addaddress/addaddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		region: ['北京市', '北京市', '东城区'],
		customItem: '全部',
		contactNumber:'',
		detailedAddress:'',
		contact:'',
		areaCode:''
  },
	bindRegionChange:function(res){
		var that=this;
		var newadderss=res.detail.value;
		that.setData({
			region: newadderss
		})
		console.log(res)
	},
	inputname:function(e){
		console.log(e)
		var that=this;
		that.setData({
			contact: e.detail.value
		})
	},
	inputtel: function (e) {
		console.log(e)
		var that = this;
		that.setData({
			contactNumber: e.detail.value
		})
	},
	detailaddress: function (e) {
		console.log(e)
		var that = this;
		that.setData({
			detailedAddress: e.detail.value
		})
	},
	saveaddress:function(e){
		console.log(e)
		var that=this;
		var data={
			customer_id: that.data.customer_id,
			contactNumber: that.data.contactNumber,
			detailedAddress: that.data.detailedAddress,
			contact: that.data.contact,
			areaCode: that.data.region,
		}
		console.log(data)
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var that=this;
		wx.getStorage({
			key: 'customer_id',
			success: function (res) {
				console.log(res.data)
				that.setData({
					customer_id:res.data
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