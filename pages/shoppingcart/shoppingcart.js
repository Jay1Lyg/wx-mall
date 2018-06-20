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
		specification_id:''
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
		console.log(production_id)
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
				if (specifications===undefined){
					console.log(that.data.goodes)
					for (var i = 0; i < that.data.goodes.length; i++) {
						
						if (that.data.goodes[i].production_id === production_id) {
							console.log(i)
							var specifications = that.data.goodes[i];
							that.setData({
								product: res.data.specifications,
								initial: specifications,
								overfy: 1,
								addcart: 1,
							})
						}
						
					};
				
				}else{
					specifications.production_id = production_id;
					var num = res.data.number;
					var specification_id = res.data.specification_id;
					specifications.number = num;
					for (var i = 0; i < res.data.specifications.length; i++) {
						res.data.specifications[i].active = 0;
						if (res.data.specifications[i].specification_id === specification_id) {
							res.data.specifications[i].active = 1;
							that.setData({
								specification_id: res.data.specifications[i].specification_id
							})
						}
						console.log(res.data.specifications)
					};
					console.log(res.data.specifications)
					console.log(specifications)
					that.setData({
						product: res.data.specifications,
						initial: specifications,
						overfy: 1,
						addcart: 1,
					})
				
				}
				
				
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
	deletegood:function(res){
		var that=this;
		var shoppingCartIdArray=new Array;
		console.log(that.data.goodes)
		for (var i of that.data.goodes){
			if(i.active===1){
				// console.log(i.shoppingCart_id);
				shoppingCartIdArray.push(i.shoppingCart_id)
			}
		}
		console.log(shoppingCartIdArray);
		if (shoppingCartIdArray.length===0){
			wx.showToast({
				title: '请选择商品',
				icon: 'none',
				duration: 2000
			})

		}else{
			wx.showModal({
				title: '删除',
				content: '确定删除商品吗？',
				success: function (res) {
					if (res.confirm) {
						console.log('用户点击确定')
						wx.request({
							url: App.globalData.urlHead + '/program/p_deleteShoppingCartProductions',
							method: 'POST',
							data: {
								shoppingCartIdArray: shoppingCartIdArray,
							},
							header: {
								'content-type': 'application/json' // 默认值
							},
							success: function (res) {
								console.log('领取优惠')
								 that.onLoading();
								 wx.showToast({
									 title: '删除成功',
									 icon: 'success',
									 duration: 2000
								 })
							}
						})
					} else if (res.cancel) {
						console.log('用户点击取消')
					}
				}
			})
			
		}
		
		

	},
	// 选规格
	selectpecification: function (res) {
		var that = this;
		var id = res.target.dataset.id;
		that.setData({
			specification_id:id
		})
		console.log(that.data.product)
		// for (var i = 0; i < that.data.product.length; i++) {
		// 	that.data.product[i].active = 0;
		// 	// console.log(i.specification_id)
		// };
		// that.setData({
		// 	productspecification: that.data.productspecification
		// })
		// console.log(that.data.productspecification)
		for (var i = 0; i < that.data.product.length; i++) {
			if (that.data.product[i].specification_id === id) {
				console.log(i);
				that.data.product[i].active = 1;
				that.setData({
					product: that.data.product,
					initial: that.data.product[i].specifications
				})
			
			}
		}
		console.log(res)
	},
	addcartsure: function (res) {
		var that = this;
		console.log(that.data.initial)
		for(var i=0;i< that.data.product.length;i++){
			if (that.data.product[i].active===1){

			}
		};
		var specification_id = that.data.specification_id;
		console.log(specification_id)
		wx.getStorage({
			key: 'customer_id',
			success: function (res) {
				console.log(res.data)
				that.setData({
					customer_id: res.data,

				});
				
				if (that.data.initial.specification_id == undefined) {
					console.log(98989898989898)
					wx.request({
						url: App.globalData.urlHead + '/program/p_editShoppingCartProductionInfo',
						method: 'POST',
						data: {
							production_id: that.data.initial.production_id,
							customer_id: res.data,
							number: that.data.initial.number,
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
								title: '编辑成功',
								icon: 'success',
								duration: 2000
							})
							that.onLoading()
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
							url: App.globalData.urlHead + '/program/p_editShoppingCartProductionInfo',
							method: 'POST',
							data: {
								production_id: that.data.initial.production_id,
								customer_id: res.data,
								number: that.data.initial.number,
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
									overfy: 0,
									
								});
								wx.showToast({
									title: '添加成功',
									icon: 'success',
									duration: 2000
								})
								that.onLoading()
							}
						})
					}
				}

			}
		})

		// wx.navigateTo({ url: '../submitorder/submitorder' })
		
	},
	buy:function(res){
		var that=this;
		console.log(that.data.goodes);
		var goodes = that.data.goodes;
		var arr=[];
		
		for(var i=0;i<goodes.length;i++){
			if (goodes[i].active===1){
				console.log(goodes[i]);
				var specification_id = 'specification_id' in goodes[i] ? goodes[i].specification_id:'';
				var b={
					number: goodes[i].number,
					production_id: goodes[i].production_id,
					specification_id: specification_id,
					customer_id: that.data.customer_id
				}
				console.log(b);
				arr.push(b)
			}
		}
		console.log(arr)
		var p = 0;
		for (var i of that.data.goodes) {
			
			p += i.active;
			console.log(i)

		}
		if(p===0){
			wx.showToast({
				title: '请选择一个商品',
				icon: 'none',
				duration: 2000
			})

		}else{
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
					wx.navigateTo({ url: '../submitorder/submitorder' })
				}
			})
		}
		
	},
  /**
   * 生命周期函数--监听页面加载
   */
	onLoading:function(){
		var that = this;
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
						var allprice = 0;
						for (var i of res.data.effectiveGoods) {
							i.active = 0;
							allprice += i.price
						}
						console.log(allprice)
						var length = res.data.effectiveGoods.length;
						that.setData({
							goodes: res.data.effectiveGoods,
							allprice: 0,
							goodnum: length
						})

					}
				})
			}
		})

	},
  onLoad: function (options) {
		this.onLoading()
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