// pages/classresults/classresults.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  page:1,
	priceindex:1,
	salesindex:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var id = options.id;
		console.log(options);
		
		if (options.index==='1'){
			console.log(4)
			this.firstclass(this.data.page, id, '')
			this.setData({
				firstclass_id:id,
				secondclass_id:''
		})
		}else{
			console.log(5)
			this.setData({
				firstclass_id: '',
				secondclass_id: id
			})
			this.firstclass('/program/p_searchProductionbyClassId',this.data.page, '', id)
		}
		
	
  },
	producedetail: function (res) {
		console.log(res)
		var production_id = res.currentTarget.dataset.id;
		wx.navigateTo({ url: '../productdetails/productdetails?production_id=' + production_id })
	},
	price:function(e){
		console.log(22)
		var that=this;
		if(that.data.priceindex){
			this.sort('/program/p_searchProductionSortByPrice', that.data.page, that.data.firstclass_id, that.data.secondclass_id,1)
			that.setData({
				priceindex:0
			})
		}else{
			this.sort('/program/p_searchProductionSortByPrice', that.data.page, that.data.firstclass_id, that.data.secondclass_id, 2)
			that.setData({
				priceindex: 1
			})
		}
		
	},
	sales: function (e) {
		console.log(22)
		var that = this;
		if (that.data.salesindex) {
			console.log(555555555)
			this.sort('/program/p_searchProductionSortBySaleNum1', that.data.page, that.data.firstclass_id, that.data.secondclass_id, 1)
			that.setData({
				salesindex: 0
			})
		} else {
			console.log(88888888888888)
			this.sort('/program/p_searchProductionSortBySaleNum1', that.data.page, that.data.firstclass_id, that.data.secondclass_id, 2)
			that.setData({
				salesindex: 1
			})
		}
	},
	newproduce: function (e) {
		var that=this;
		that.firstclass('/program/p_searchNewProduction1', that.data.page, that.data.firstclass_id, that.data.secondclass_id)
	},
	firstclass: function (url,page, firstclass_id, secondclass_id) {
		var that = this;

		wx.request({
			url: App.globalData.urlHead + url,
			method: 'POST',
			data: {
				appid: App.globalData.appid,
				page: page,
				firstclass_id: firstclass_id,
				secondclass_id: secondclass_id
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {

				console.log(res);
				// that.data.tab.list = res.data.classInfo
				that.setData({
					recommend: res.data.results
				})
			}
		})
	},
	sort: function (url,page, firstclass_id, secondclass_id,index) {
		
		var that=this;
		wx.request({
			url: App.globalData.urlHead + url,
			method: 'POST',
			data: {
				appid: App.globalData.appid,
				page: page,
				firstclass_id: firstclass_id,
				secondclass_id: secondclass_id,
				index:index
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {

				console.log(res);
				// that.data.tab.list = res.data.classInfo
				that.setData({
					recommend: res.data.results
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