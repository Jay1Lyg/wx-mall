// pages/searchresult/searchresult.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
		index:1,
		sales:1,
		recommend: [

		]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(options)
		this.setData({
			name: options.name
		})
		var value = wx.getStorageSync('product')

		if (value) {
			// Do something with return value
			console.log(value)
			if (!value.results){
				wx.showToast({
					title: '无此商品',
					icon: 'none',
					duration: 2000
				})
				this.setData({
					recommend: value.results,
					currentPage: value.currentPage,
					totalPages: value.totalPages
				})
			}else{
				this.setData({
					recommend: value.results,
					currentPage: value.currentPage,
					totalPages: value.totalPages
				})
			}
			

	
		}
		// this.sertData({
		// 	recommend: Production,
		// 	currentPage: currentPage,
		// 	totalPages: totalPages

		// })
		// console.log(Production)

  },
	searchInput: function (e) {
		console.log(e);
		this.setData({
			name: e.detail.value
		})
	},
	search: function (res) {
		var that = this;
		if (!that.data.name) {
			// console.log('空');
			wx.showToast({
				title: '请输入关键词',
				icon: 'none',
				duration: 2000
			})
		} else {
			wx.request({
				url: App.globalData.urlHead + '/program/p_searchProductionByName',
				method: 'POST',
				data: {
					appid: App.globalData.appid,
					name: that.data.name,
					page: 1
				},
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: function (res) {
					console.log(555)
					console.log(res.data);
					if (!res.data.results){
						console.log('空')
						wx.showToast({
							title: '无此商品',
							icon: 'none',
							duration: 2000
						});
						wx.setStorageSync('product', res.data)
						that.setData({
							recommend: res.data.results,
							currentPage: res.data.currentPage,
							totalPages: res.data.totalPages

						})
					}else{
						console.log('666空')
						wx.setStorageSync('product', res.data)
						that.setData({
							recommend: res.data.results,
							currentPage: res.data.currentPage,
							totalPages: res.data.totalPages

						})
					}
				

				}
			})

		}

	},
	price:function(e){
		var that=this;
		console.log(e);
		console.log(that.data.name);
		var index=that.data.index;
		if(index===1){
			console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
			wx.request({
				url: App.globalData.urlHead + '/program/p_searchProductionSortByPrice',
				method: 'POST',
				data: {
					appid: App.globalData.appid,
					name: that.data.name,
					page: 1,
					index: 2
				},
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: function (res) {
					console.log(555)
					console.log(res.data);
					wx.setStorageSync('product', res.data)
					that.setData({
						recommend: res.data.results,
						currentPage: res.data.currentPage,
						totalPages: res.data.totalPages,
						index:2
					})

				}
			})
		}else{
			console.log(222222222222222222222222)
			wx.request({
				url: App.globalData.urlHead + '/program/p_searchProductionSortByPrice',
				method: 'POST',
				data: {
					appid: App.globalData.appid,
					name: that.data.name,
					page: 1,
					index: 1
				},
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: function (res) {
					console.log(555)
					console.log(res.data);
					wx.setStorageSync('product', res.data)
					that.setData({
						recommend: res.data.results,
						currentPage: res.data.currentPage,
						totalPages: res.data.totalPages,
						index: 1
					})

				}
			})
		}
		
	},
	sales: function (e) {
		var that = this;
		console.log(e);
		console.log(that.data.name);
		var sales = that.data.sales;
		if (sales === 1) {
			console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
			wx.request({
				url: App.globalData.urlHead + '/program/p_searchProductionSortBySaleNum',
				method: 'POST',
				data: {
					appid: App.globalData.appid,
					name: that.data.name,
					page: 1,
					index: 2
				},
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: function (res) {
					console.log(555)
					console.log(res.data);
					wx.setStorageSync('product', res.data)
					that.setData({
						recommend: res.data.results,
						currentPage: res.data.currentPage,
						totalPages: res.data.totalPages,
						sales: 2
					})

				}
			})
		} else {
			console.log(222222222222222222222222)
			wx.request({
				url: App.globalData.urlHead + '/program/p_searchProductionSortByPrice',
				method: 'POST',
				data: {
					appid: App.globalData.appid,
					name: that.data.name,
					page: 1,
					index: 1
				},
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: function (res) {
					console.log(555)
					console.log(res.data);
					wx.setStorageSync('product', res.data)
					that.setData({
						recommend: res.data.results,
						currentPage: res.data.currentPage,
						totalPages: res.data.totalPages,
						sales: 1
					})

				}
			})
		}
	},
	newproduct: function (e) {
		console.log(e)
		var that=this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchNewProduction',
			method: 'POST',
			data: {
				appid: App.globalData.appid,
				name: that.data.name,
				page: 1,
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				console.log(555)
				console.log(res.data);
				wx.setStorageSync('product', res.data)
				that.setData({
					recommend: res.data.results,
					currentPage: res.data.currentPage,
					totalPages: res.data.totalPages,
				
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