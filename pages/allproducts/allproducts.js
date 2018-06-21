// pages/allproducts/allproducts.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
		index: 1,
		sales: 1,
		page:2,
		pricestate: 0,
		salesstate: 0,
		newstate: 0,
		recommend: [	
		]
  },
	price: function (e) {
		var that = this;
		that.setData({
			pricestate:1,
			salesstate:0,
			newstate:0,
			page: 2
		})
		console.log(e);
		var index = that.data.index;
		console.log(index)
		if (index === 1) {
			console.log('iiiiiiiiiiiiiiiioooooiiiiiiiiiiiiiiiii')
			that.loadprice(1,2,2)
		
		} else {
			console.log(222222222222222222222222)
			that.loadprice(1, 1, 1)
		}

	},
	sales: function (e) {
		var that = this;
		that.setData({
			pricestate: 0,
			salesstate: 1,
			newstate: 0,
			page:2
		})
		console.log(e);
		console.log(that.data.name);
		var sales = that.data.sales;
		if (sales === 1) {
			console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
			that.loadsales(1,2,2)
			
		} else {
			console.log(222222222222222222222222)
			that.loadsales(1, 1, 1)
		}
	},
	newproduct: function (e) {
		console.log(e)
		var that=this;
		that.setData({
			pricestate: 0,
			salesstate: 0,
			newstate: 1,
			page: 2
		})
		that.loadnew(1)
	},
	producedetail: function (res) {
		console.log(res)
		var production_id = res.currentTarget.dataset.id;
		wx.navigateTo({ url: '../productdetails/productdetails?production_id=' + production_id })
	},
  /**
   * 生命周期函数--监听页面加载
   */
	loadprice:function(page,index,state){
		var that=this;
		console.log(5656)
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchProductionSortByPrice2',
			method: 'POST',
			data: {
				appid: App.globalData.appid,
			
				page: page,
				index: index
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
					index: state
				})

			}
		})
	},
	loadsales: function (page,index,state) {
		var that=this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchProductionSortBySaleNum2',
			method: 'POST',
			data: {
				appid: App.globalData.appid,
				name: that.data.name,
				page: page,
				index: index
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
					sales: state
				})

			}
		})
	},
	loadnew: function (page) {
		var that = this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchNewProduction2',
			method: 'POST',
			data: {
				appid: App.globalData.appid,
				name: that.data.name,
				page: page,
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
  onLoad: function (options) {
		this.allproduct(1)
  },
	allproduct:function(page){
		var that=this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchAllProduction',
			method: 'POST',
			data: {
				appid: App.globalData.appid,
				page: page
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				console.log(res.data)
				// console.log(that.data.recommend);
				var recommend = that.data.recommend;
				var array;
				for (var i of res.data.results){
					 array = recommend.push(i);
				}
				// console.log(recommend)
				that.setData({
					recommend: recommend,
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
		var that=this;
		var pricestate = that.data.pricestate;
		var salesstate = that.data.salesstate ;
		var newstate = that.data.newstate;
		if (pricestate === 0 && salesstate === 0 && newstate === 0 ){
			console.log('全部商品')
			var page=that.data.page++;
			console.log(page)
			if (page >that.data.totalPages){
				console.log(that.data.totalPages)
				wx.showToast({
					title: '没数据了',
					icon: 'none',
					duration: 2000
				})

			}else{
				that.allproduct(page)
			}
			
		} else if (pricestate === 1 && salesstate === 0 && newstate === 0){
				console.log('价格')
				var page = that.data.page++;
				console.log(page)
				if (page > that.data.totalPages) {
					console.log(that.data.totalPages)
					wx.showToast({
						title: '没数据了',
						icon: 'none',
						duration: 2000
					})

				} else {
					var index = that.data.index;
					console.log(index)
					if (index === 1) {
						console.log('iiiiiiiiiiiiiiiioooooiiiiiiiiiiiiiiiii')
						that.loadprice(page, 2, 2)

					} else {
						console.log(222222222222222222222222)
						that.loadprice(page, 1, 1)
					}
				
				}
		} else if (pricestate === 0 && salesstate === 1 && newstate === 0) {
			console.log('销量')
			var page = that.data.page++;
			console.log(page)
			if (page > that.data.totalPages) {
				console.log(that.data.totalPages)
				wx.showToast({
					title: '没数据了',
					icon: 'none',
					duration: 2000
				})

			} else {
				var sales = that.data.sales;
				if (sales === 1) {
					console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
					that.loadsales(page, 2, 2)

				} else {
					console.log(222222222222222222222222)
					that.loadsales(page, 1, 1)
				}
				
			}
		} else if (pricestate === 0 && salesstate === 0 && newstate === 1) {
			console.log('新品')
			var page = that.data.page++;
			console.log(page)
			if (page > that.data.totalPages) {
				console.log(that.data.totalPages)
				wx.showToast({
					title: '没数据了',
					icon: 'none',
					duration: 2000
				})

			} else {
				that.loadnew(page)
			}
		}
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})