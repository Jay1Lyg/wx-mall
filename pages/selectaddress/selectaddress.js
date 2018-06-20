// pages/selectaddrress/selectaddress.js
const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
		address:[
	
		]
  },
	select:function(res){
		var that=this;
		var address = that.data.address;
		var id = res.target.dataset.id;
		console.log(res)
		for(var i=0;i<address.length;i++){
			if (address[i].address_id===id){
				// console.log(address[i].active);
				if (address[i].active===1){
					address[i].active=0;
					that.setData({
						address: address
					})
				}else{
					for (var j = 0; j < address.length; j++) {
						address[j].active = 0;
					}
						address[i].active = 1;
						var addressid = address[i].address_id
						wx.request({
							url: App.globalData.urlHead + '/program/p_chooseAddress',
							method: 'POST',
							data: {
								address_id: addressid,
								customer_id: that.data.customer_id
							},
							header: {
								'content-type': 'application/json' // 默认值
							},
							success: function (res) {
								console.log(res)
								if(that.data.select){
									console.log(55555);
									wx.navigateTo({ url: '../submitorder/submitorder?address_id=' + addressid})
								}else{
									console.log(88888)
								}
							}
						})
						that.setData({
							address: address
						})
				}
			}
		}
	},
	editaddress:function(res){
		console.log(res)
		var address_id=res.target.dataset.id;
		wx.navigateTo({ url: '../addaddress/addaddress?address_id='+address_id })
	},
	deladdress:function(res){
		console.log('删除')
		var that=this;
		var address_id = res.target.dataset.id;
		wx.showModal({
			title: '删除！！！',
			content: '确定删除此地址吗？',
			success: function (res) {
				if (res.confirm) {
					console.log('用户点击确定')
					wx.request({
						url: App.globalData.urlHead + '/program/p_deleteAddress',
						method: 'POST',
						data: {
							address_id: address_id,
						},
						header: {
							'content-type': 'application/json' // 默认值
						},
						success: function (res) {
							console.log(res)
							that.alladdress()
						}
					})
				} else if (res.cancel) {
					console.log('用户点击取消')
				}
			}
		})
		
	},
	address:function(res){
		console.log(res)
		console.log('添加地址');
		wx.navigateTo({ url: '../addaddress/addaddress' })
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(options)
		var that=this;
		that.setData({
			select: options.select
		})
		this.alladdress()
	
  },
	alladdress:function(){
		var that = this;
		wx.getStorage({
			key: 'customer_id',
			success: function (res) {
				that.setData({
					customer_id:res.data
				})
				console.log(res)
				wx.request({
					url: App.globalData.urlHead + '/program/p_searchAllAddress',
					method: 'POST',
					data: {
						customer_id: res.data,

					},
					header: {
						'content-type': 'application/json' // 默认值
					},
					success: function (res) {
						console.log(res)
						for (var i = 0; i < res.data.length; i++) {
							res.data[i].active=0;
							if(res.data[i].ifUsed==true){
								res.data[i].active=1;
								console.log(8)
							}else{
								console.log(9)
							}
						}
						that.setData({
							address: res.data
						})
					}
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