// pages/orders/orders.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
		tab: [
			{
				tab: '全部',
				active:'0',
				display:1
			},
			{
				tab: '待付款',
				active: '1',
				display: 0
			},
			{
				tab: '待发货',
				active: '2',
				display: 0
			},
			{
				tab: '待收货',
				active: '3',
				display: 0
			},
			{
				tab: '售后单',
				active:'4' ,
				display: 0
			},
			{
				tab: '已完成',
				active: '5',
				display: 0
			},
			
			],
			active:0,
		goodes: [
		],
		page:1
  },
	ordertab:function(e){
		console.log(e)
		var that=this;
		var id=e.target.dataset.id;
		var tab=that.data.tab;
		for (let i = 0; i < tab.length; i++) {
			that.data.tab[i].display = 0;
		}
		for (let i=0;i<tab.length;i++){
			that.data.tab[i].display = 0;
		
			if(tab[i].active===id){
				var index = i;
				console.log(index)
				console.log(that.data.customer_id)
				if(index===0){
					that.allorder(1)
				}else if(index===4){
					console.log('index====4')
					that.saleorder(1)
				}else{
					console.log('不是售后')
					that.variousOrders(parseInt(index),1)
				}
				that.data.tab[index].display=1;
				// console.log(tab)
				that.setData({
					tab: tab,
					active:index,
					page:1
				})
			}
			
		};
		
	},
	orderdetail:function(e){
		console.log(e)
		var orderid = e.currentTarget.dataset.orderid;
		wx.navigateTo({ url: '../orderDetail/orderDetail?orderid=' + orderid })
		
	
	},
	delorder:function(e){
		console.log(e)
		var order_id=e.target.dataset.id;
		wx.showModal({
			title: '删除',
			content: '确定删除此订单吗？',
			success: function (res) {
				if (res.confirm) {
					console.log('用户点击确定')
					wx.request({
						url: App.globalData.urlHead + '/program/p_deleteOrder',
						method: 'POST',
						data: {
							order_id: order_id,
						},
						header: {
							'content-type': 'application/json' // 默认值
						},
						success: function (res) {
							console.log(res);
							for (var i of res.data) {
								console.log(i);
								if (i.order_status === '1') {
									i.order_status = '待付款'
								} else if (i.order_status === '2') {
									i.order_status = '待发货'
								} else if (i.order_status === '3') {
									i.order_status = '待收货'
								} else if (i.order_status === '4') {
									i.order_status = '售后单'
								}
							}
							that.setData({
								goodes: res.data
							});
						}
					})
				} else if (res.cancel) {
					console.log('用户点击取消')
				}
			}
		})
	
	},
	allorder:function(page){
		var that=this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchAllOrders',
			method: 'POST',
			data: {
				customer_id: that.data.customer_id,
				page:page
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				console.log(res)

				for (var i of res.data.results) {
					// console.log(i);
					if (i.order_status === '1') {
						i.order_status = '待付款'
					} else if (i.order_status === '2') {
						i.order_status = '待发货'
					} else if (i.order_status === '3') {
						i.order_status = '待收货'
					} else if (i.order_status === '4') {
						i.order_status = '售后单'
					}
				}
				var results=that.data.goodes;
				var array;
				for (var i of res.data.results) {
					array = results.push(i);
				}
				console.log(results)
				that.setData({
					goodes: results,
					totalPages: res.data.totalPages
				});
				// console.log(that.data.goodes)
			}
		})
	},
	variousOrders: function (index,page) {
		var that = this;
		
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchVariousOrders',
			method: 'POST',
			data: {
				customer_id: that.data.customer_id,
				index:index,
				page:page
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				console.log(res)


				for (var i of res.data.results) {
					console.log(i);
					if (i.order_status === '1') {
						i.order_status = '待付款'
					} else if (i.order_status === '2') {
						i.order_status = '待发货'
					} else if (i.order_status === '3') {
						i.order_status = '待收货'
					} else if (i.order_status === '4') {
						i.order_status = '售后单'
					}
				}
				
				that.setData({
					goodes: res.data.results,
					totalPages: res.data.totalPages
				});
				console.log(that.data.goodes)
			}
		})
	},
	saleorder:function(page){
		var that = this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchRefundOrders',
			method: 'POST',
			data: {
				customer_id: that.data.customer_id,
				page:page
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				console.log(res)
				that.setData({
					goodes: res.data.results,
					totalPages: res.data.totalPages
				});
				// console.log(that.data.goodes)
			}
		})
	},
// 去支付
	gopay:function(e){
		console.log(e);
		var that=this;
		var orderid = e.currentTarget.dataset.orderid;
		console.log(orderid)
		var arr = [];
		for(var j=0;j<that.data.goodes.length;j++){
			if (that.data.goodes[j].order_id === orderid){
				console.log(j)
				console.log(that.data.goodes[j])
				var goodes = that.data.goodes[j].production;
				console.log(goodes)
				for (var i = 0; i < goodes.length; i++) {
				
						console.log(goodes[i]);
						var specification_id = 'specification_id' in goodes[i] ? goodes[i].specification_id : '';
						var b = {
							number: goodes[i].purchaseQuantity,
							production_id: goodes[i].production_id,
							specification_id: specification_id,
							customer_id: that.data.customer_id
						}
						console.log(b);
						arr.push(b)
						console.log(arr)
					
				}
			}
		}
		
		
		console.log(arr)
		wx.request({
			url: App.globalData.urlHead + '/program/p_generatePreSubmitOrderInfo',
			method: 'POST',
			data: {
				appid: App.globalData.appid,
				customer_id: that.data.customer_id,
				production: arr
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				// console.log('领取优惠')
				console.log(res);
			
				wx.setStorageSync('orders', res.data)
				wx.navigateTo({ url: '../submitorder/submitorder?orderid=' + orderid })
			}
		})
	},
	//退款详情
	quitdetail:function(e){
		console.log(e)
		var id=e.target.dataset.id;
		wx.navigateTo({
			url: '../quitDetail/quitDetail?refund_id=' + id
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var that=this;
		console.log(options)
		var index = options.index;
		for (let i = 0; i < that.data.tab.length; i++) {
			that.data.tab[i].display = 0;

			if (that.data.tab[i].active === index) {
				that.data.tab[i].display=1
			}
		};
		console.log(that.data.tab)
		var active=parseInt(index)
		that.setData({
			tab: that.data.tab,
			active: active
		});
		

		wx.getStorage({
			key: 'customer_id',
			success: function (res) {		
				that.setData({
					customer_id: res.data,
				});
				if (index === '0') {
					that.allorder(1)
				}  else if(index==='4'){
					console.log('index===444');
					that.saleorder(1)
				}else{
					that.variousOrders(parseInt(index),1)
				}
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
			console.log(9)
			var that=this;
			var tab=that.data.tab;
			var page=that.data.page;
			var totalPages = that.data.totalPages;
			console.log(page)
			for(var i of tab){
				// console.log(i)
				if(i.display===1){
					console.log(i.active)
					var index=i.active;
					if (index === '0') {
						console.log('全部订单')
						if (page >= totalPages){
							wx.showToast({
								title: '没数据了',
								icon: 'none',
								duration: 2000
							})
						}else{
							page++;
							that.setData({
								page: page
							})
							console.log(page)
							that.allorder(page)
						}
						
					} else if (index === '4') {
						console.log('index===444')
						if (page >= totalPages) {
							wx.showToast({
								title: '没数据了',
								icon: 'none',
								duration: 2000
							})
						} else {
							page++;
							that.setData({
								page: page
							})
							console.log(page)
							that.saleorder(page)
						}
						
					} else {
						console.log('不是售后');
						if (page >= totalPages) {
							wx.showToast({
								title: '没数据了',
								icon: 'none',
								duration: 2000
							})
						} else {
							page++;
							that.setData({
								page: page
							})
							console.log(page)
							that.variousOrders(parseInt(index),page)
						}
						
					}
				}
			}
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})