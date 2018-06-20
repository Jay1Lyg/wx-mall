// pages/submitorder/submitorder.js
const App = getApp()
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
		wx.navigateTo({ url: '../selectaddress/selectaddress?select=1' })
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(2);
		var that=this;
		console.log(options);
		if (JSON.stringify(options)==='{}' ){
			console.log(4545455)
			var value = wx.getStorageSync('orders');
			if (value) {
				console.log(value)
				for (var i = 0; i < value.production.length; i++) {

					var d = {
						number: value.production[i].number,
						production_id: value.production[i].production_id,
						specification_id: value.production[i].specification_id
					}
					console.log(d)
				}
				that.setData({
					goodes: value.production,
					freight: value.freight,
					price: value.totalPrice,
					coupon: value.coupon,
					address: value.address,
					activity_id: value.activity_id
				})
			};
			
		}else{
			console.log(9899)
			var value = wx.getStorageSync('orders');
			if (value) {
				console.log(value)
				for (var i = 0; i < value.production.length; i++) {

					var d = {
						number: value.production[i].number,
						production_id: value.production[i].production_id,
						specification_id: value.production[i].specification_id
					}
					console.log(d)
				}
				that.setData({
					goodes: value.production,
					freight: value.freight,
					price: value.totalPrice,
					coupon: value.coupon,
					address: value.address,
					activity_id: value.activity_id
				})
			};
			that.address(options.address_id)
		}
		
		var userInfo = wx.getStorageSync('userInfo');
		that.setData({
			userInfo: userInfo,
		})
		wx.getStorage({
			key: 'customer_id',
			success: function (res) {
				that.setData({
					customer_id: res.data,
				})
			}
		})

  },
	remark:function(e){
			console.log(e);
			this.setData({
				remark:e.detail.value
			})
	},
	submit:function(e){
		var that=this;
		console.log(e);
		// console.log(that.data.openid)
		if(that.data.address){
			console.log(123456);
			wx.getStorage({
				key: 'openid',
				success: function (res) {
					console.log(res.data);
					wx.request({
						url: App.globalData.urlHead + '/program/p_payTheProductions',
						method: 'POST',
						data: {
							appid: App.globalData.appid,
							openid: res.data,
							total_fee: that.data.price
						},
						header: {
							'content-type': 'application/json' // 默认值
						},
						success: function (res) {
							console.log(res);
							var goodes = that.data.goodes;
							var arr = [];
							for (var i = 0; i < goodes.length; i++) {
								var specification_id = 'specification_id' in goodes[i] ? goodes[i].specification_id : '';
								var b = {
									number: goodes[i].number,
									production_id: goodes[i].production_id,
									specification_id: specification_id,

								}
								arr.push(b)

							}
							console.log(arr)
							var out_trade_no = res.data.out_trade_no;
							var timeStamp = res.data.timeStamp + "";
							var prepay_id = 'prepay_id=' + res.data.prepay_id;
							console.log(prepay_id);
							var date = Date.parse(new Date());
							var nickName = that.data.userInfo.nickName
							var coupon_id = that.data.coupon ? that.data.coupon : '';
							var activity_id = that.data.activity_id ? that.data.activity_id : '';
							var remark = that.data.remark ? that.data.remark : '';
							var data = {
								address_id: that.data.address.address_id,
								customer_id: that.data.customer_id,
								coupon_id: coupon_id,
								activity_id: activity_id,
								remark: remark,
								orderNumber: out_trade_no,
								order_status: 2,
								totalAmount: that.data.price,
								production: arr
							};
							console.log(data)
							wx.requestPayment({
								'timeStamp': timeStamp,
								'nonceStr': res.data.nonceStr,
								'package': prepay_id,
								'signType': 'MD5',
								'paySign': res.data.paySign,
								'success': function (res) {
									console.log(8989898);
									console.log(res)
									wx.request({
										url: App.globalData.urlHead + '/program/p_generateOrder',
										data: data,
										method: 'POST',
										header: {
											'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
										},
										success: function (res) {
											console.log('-------------------------------')
											console.log(res);
											console.log('-------------------------------')


										}
									})
								},
								'fail': function (res) {
									console.log(res)
								}
							})
						}
					})
				}
			})
		}else(
			
			wx.showToast({
				title: '请选择收货地址',
				icon: 'none',
				duration: 2000
			})
		)
	
	
	},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
	address: function (address_id){
		var that=this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchSingleAddress',
			method: 'POST',
			data: {
				address_id: address_id,
			
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				that.setData({
					address:res.data
				})
			}
		})
	},
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