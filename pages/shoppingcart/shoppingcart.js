// pages/shoppingcart/shoppingcart.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
		allselect:0,
		goodes:[
			{
				active:0,
				id:0,
				image:'../../image/14.png',
				name:'不成熟的计划',
				guige:'麻辣',
				num:1,
				price:123
			},
			{
				active: 0,
				id:2,
				image: '../../image/14.png',
				name: '不成熟的计划',
				guige: '麻辣',
				num: 1,
				price: 123
			},
		],
		overfy:0,
		addcart:0,
  },
	// daiding:function(e){
	// 	var that=this;
	// 	console.log(e);
	// 	var specification_id = e.target.dataset.specification_id ? e.target.dataset.specification_id:'';
	// 	var production_id = e.target.dataset.production_id  ;
	// 	var goodnumber = e.target.dataset.number
	// 	console.log(specification_id);
	// 	wx.request({
	// 		url: App.globalData.urlHead + '/program/p_searchShoppingCartProductionInfo',
	// 		method: 'POST',
	// 		data: {
	// 			customer_id: that.data.customer_id,
	// 			specification_id: specification_id,
	// 			production_id: production_id,
	// 			number: goodnumber
	// 		},
	// 		header: {
	// 			'content-type': 'application/json' // 默认值
	// 		},
	// 		success: function (res) {
				
	// 			console.log(res);
				

	// 		}
	// 	})

	// },
	sub: function (res) {
		var that = this;
		var num = that.data.initial.number;
		num--;
		var initial = that.data.initial;
		var up = "initial.number";
		       
		console.log(num);
		if (num < 1) {
			wx.showToast({
				title: '不能小于1',
				icon: 'none',
				duration: 2000
			})
		} else {
			that.setData({
			
				[up]: num
			})
		}

	},
	quxiao: function () {
		var that = this;
		that.setData({
			addcart: 0,
			overfy: 0,
			specification: 0
		});
	},
	add: function (res) {
		var that = this;
		var initial = that.data.initial;
		var num = that.data.initial.number;
		num++;
		var up = "initial.number";
		console.log(num)
		that.setData({
			[up]: num
		})
	},
	edit: function (e) {
		var that = this;
		console.log(e);
		var shoppingCart_id = e.target.dataset.shoppingcart_id;
		var production_id = e.target.dataset.production_id;
		console.log(shoppingCart_id)
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchShoppingCartProductionInfo',
			method: 'POST',
			data: {
	
				shoppingCart_id: shoppingCart_id,
				production_id: production_id,
			
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {

				console.log(res);
				var specifications = res.data.specifications[0];
				console.log(specifications)
				var num = res.data.number;
			 specifications.number = num;
				 
				console.log(specifications)
				that.setData({
					product: res.data.specifications,
					initial: specifications,
					overfy: 1,
					addcart: 1,
				})
				console.log(that.data.product)
			}
		})

	},
	allselect:function(res){
		var that=this;
		var allsel = that.data.allselect;
		var allprice=0;
		if (allsel===1){
			for (var i = 0; i < that.data.goodes.length; i++){
				that.data.goodes[i].active = 0;
				var goodes = that.data.goodes;
				
			}
			console.log(goodes)
			that.setData({
				allselect: 0,
				goodes: goodes,
				allprice:0
			})
			
		}else{
			for (var i = 0; i < that.data.goodes.length; i++) {
				that.data.goodes[i].active = 1;
				var goodes = that.data.goodes;
				allprice += (that.data.goodes[i].price * that.data.goodes[i].number);
			}
			console.log(goodes)
			that.setData({
				allselect: 1,
				goodes: goodes,
				allprice: allprice
			})
			
		}
	},
	select:function(res){
		var that=this;
		var id=res.target.dataset.id;
		var allprice=0;
		for(var i=0;i<that.data.goodes.length;i++){
			
			if (that.data.goodes[i].shoppingCart_id===id){
				// console.log(i);
				var index=i;
				if (that.data.goodes[index].active===1){
					that.data.goodes[index].active = 0;
					var goodes = that.data.goodes;
					var all=0;
					that.setData({
						goodes: goodes,
					})
					// console.log(goodes)
				}else{
					that.data.goodes[index].active = 1;
					var goodes = that.data.goodes;
					// console.log(goodes)
					that.setData({
						goodes: goodes,
					})
				}
			}
			
		}
		
		
		console.log(goodes)
		var p = 0;
		for (var i of that.data.goodes) {
			if (i.active === 1) {
				allprice += (i.price*i.number)
			}
			 p += i.active ;
			console.log(i)
			
		}
		that.setData({
			goodes: that.data.goodes,
			allprice: allprice
		})
		console.log(allprice)
		var length=that.data.goodes.length;
		if(p===0){
			that.setData({
				allselect:0
			})
		}else if(p===length){
			that.setData({
				allselect: 1
			})
		}else{
			that.setData({
				allselect: 0
			})
		}
		console.log(p)
		// for (var i=0;i<that.data.goodes.length;i++) {
		// 	if (that.data.goodes[i].active == 0) { 
		// 		console.log(5)
				
		// 	 }else{
		// 		 console.log(6)
		// 	 }
			
		// }
	},
	allsel:function(){
		var that=this;
		var arr=[];
		for (let i = 0; i < that.data.goodes.length; i++) {
			if (that.data.goodes[i].active === arr[0]) {
				console.log(5)
				that.setData({
					allselect: 1,
				})
			}

		}
	},
	addcartsure: function (res) {
		var that = this;
		console.log(that.data.initial)
		var specification_id = that.data.initial.specification_id;
		console.log(specification_id)
		wx.getStorage({
			key: 'customer_id',
			success: function (res) {
				console.log(res.data)
				that.setData({
					customer_id: res.data,

				});
				
				if (that.data.initial.length == 0) {
					console.log(98989898989898)
					wx.request({
						url: App.globalData.urlHead + '/program/p_addProductionToShoppingCart',
						method: 'POST',
						data: {
							production_id: that.data.product.production_id,
							customer_id: res.data,
							number: that.data.buynumber,
							specification_id: specification_id
						},
						header: {
							'content-type': 'application/json' // 默认值
						},
						success: function (res) {
							// console.log('领取优惠')
							console.log(res);
							that.setData({
								addcart: 0,
								overfy: 0
							});
							wx.showToast({
								title: '添加成功',
								icon: 'success',
								duration: 2000
							})
						}
					})
				} else {
					if (specification_id === '') {
						wx.showToast({
							title: '请选择规格',
							icon: 'none',
							duration: 2000
						})
					} else {
						console.log('98989jkghgjhhjjhjh898989898')
						wx.request({
							url: App.globalData.urlHead + '/program/p_addProductionToShoppingCart',
							method: 'POST',
							data: {
								production_id: that.data.product.production_id,
								customer_id: res.data,
								number: that.data.buynumber,
								specification_id: specification_id
							},
							header: {
								'content-type': 'application/json' // 默认值
							},
							success: function (res) {
								// console.log('领取优惠')
								console.log(res);
								that.setData({
									addcart: 0,
									overfy: 0
								});
								wx.showToast({
									title: '添加成功',
									icon: 'success',
									duration: 2000
								})
							}
						})
					}
				}

			}
		})

		// wx.navigateTo({ url: '../submitorder/submitorder' })
		
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
					customer_id: res.data,
				});
				wx.request({
					url: App.globalData.urlHead + '/program/p_searchShoppingCartProductions',
					method: 'POST',
					data: {
						customer_id: res.data,
					},
					header: {
						'content-type': 'application/json' // 默认值
					},
					success: function (res) {
						console.log('领取优惠')
						console.log(res);
						var allprice =0;
						for (var i of res.data.effectiveGoods){
							i.active=0;
							allprice+=i.price
						}
						console.log(allprice)
						that.setData({
							goodes: res.data.effectiveGoods,
							allprice: 0
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