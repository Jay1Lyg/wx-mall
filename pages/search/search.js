// pages/search/search.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
		historical: []
  },
	historical:function(e){
		console.log(e)
		var value=e.target.dataset.value;
		this.setData({
			name:value
		})
		this.search()
	},
	searchInput:function(e){
		console.log(e);
		this.setData({
			name: e.detail.value
		})
	},
	search:function(res){
		var that = this;
		if (!that.data.name){
			console.log('空');
			wx.showToast({
				title: '请输入关键词',
				icon: 'none',
				duration: 2000
			})
		}else{
			var historical = that.data.historical;
			for (var i = 0; i < historical.length; i++) {
				if (historical[i] === that.data.name) {
					console.log('有了')
					that.setData({
						have:true
					})
				} else {
					console.log('没有')
					
				}
			}
			if (historical.length < 10&&!that.data.have) {
				historical.push(that.data.name);
				console.log(historical)
				wx.setStorageSync('historical', historical)
				
			} else {
				console.log(5557999999999999999999999999999999987878)
			}
			
			
		
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
					wx.setStorageSync('product', res.data)
					wx.navigateTo({ url: `../searchresult/searchresult?name=${that.data.name}`})
						
				}
			})
		
		}
		
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	
		var historical = wx.getStorageSync('historical')
		console.log(historical)
		if (historical) {
			console.log(111)
			this.setData({
				historical: historical
			})
		}
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