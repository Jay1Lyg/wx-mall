// pages/home/home.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
		offer:'',
		message:20,
		image:[
		
		],
		classes:[
		
		
			{
				image: '../../image/15.png',
				text: '坚果'
			},
		],
		
			recommend:[
		
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
		
		]
		
  },
	search:function(res){
		wx.navigateTo({ url: '../search/search' })
	},
	producedetail:function(res) {
		console.log(res)
		var production_id=res.currentTarget.dataset.id;
		wx.navigateTo({ url: '../productdetails/productdetails?production_id=' + production_id })
	},
	classification:function(e){
		var firstclass_id = e.currentTarget.dataset.firstclassid;
		console.log(e)
		console.log(firstclass_id)
		wx.navigateTo({ url: `../classification/classification?firstclass_id=${firstclass_id}` })
	},
	receivecard:function(e){
		console.log(e)
		var coupon_id=e.target.dataset.id;
		var that=this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_receiveCoupons',
			method: 'POST',
			data: {
				customer_id: that.data.customer_id,
				coupon_id: coupon_id,
				
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				console.log('领取优惠')
				console.log(res);
				wx.showToast({
					title: '领取成功',
					icon: 'success',
					duration: 2000
				})
				
			}
		})

	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(App.globalData.urlHead)
		var userInfo = wx.getStorageSync('userInfo');
		wx.login({
			success: res => {
				// 发送 res.code 到后台换取 openId, sessionKey, unionId
				console.log(res)
			
				wx.request({
					url: App.globalData.urlHead + '/program/p_getUserInfo',
					method: 'POST',
					data: {
						code: res.code,
						appid: App.globalData.appid,
						appSecret: App.globalData.appSecret,
						nickname: userInfo.nickName,
						headImage: userInfo.avatarUrl,
					},
					header: {
						'content-type': 'application/json' // 默认值
					},
					success: function (res) {
						console.log(555878787878)
						console.log(res);
						that.setData({
							customer_id: res.data.customer_id
						})
						wx.setStorage({
							key: "customer_id",
							data: res.data.customer_id
						})


					}
				})
			}
		})
		console.log(userInfo)
		var that=this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchHomePageInfo',
			method: 'POST',
			data: {
				appid: App.globalData.appid,
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				console.log(555)
				console.log(res.data);
				for (var i = 0; i < res.data.coupon.length;i++){
				var start=	res.data.coupon[i].start_time.slice(0,10)
				var end=	res.data.coupon[i].end_time.slice(0,10)
				res.data.coupon[i].start_time=start;
				res.data.coupon[i].end_time=end;
					that.setData({
						card: res.data.coupon,
					})
				};
				console.log(res.data.coupon)
				that.setData({
					
					image: res.data.carouselProduction,
					offer: res.data.activity_setting[0].freeShiping_num,
					classes:res.data.category,
					recommend: res.data.hotSellGoods,
				})
			}
		});
		
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