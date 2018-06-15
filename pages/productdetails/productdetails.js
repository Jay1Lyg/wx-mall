// pages/productdetails/productdetails.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
		product:{
			
			},
		productspecification:[
		
		],
		initial:{
		},
		share:'../../image/share.png',
		display: true	,
		displayred: true,
		overfy:0,
		canshu:0,
		buynumber:1,
		specification:0,
		addcart:0,
		evaluation:[
			{text:'全部',active:1}, 
			{ text: '有图', active: 0}, 
			{ text: '好评', active: 0},
			{ text: '中评', active: 0} , 
			{ text: '差评', active: 0} ,
		]
		
		
  },
	gocart:function(e){
		console.log(e)
		wx.reLaunch({ url: '../shoppingcart/shoppingcart' })
	},
	detail:function(res){
		var that=this;
		that.setData({
			display:true,
			displayred:true
		})
	},
	evaluate: function (res) {
		var that = this;
		// that.evaluation(1, that.data.product.production_id, '/program/p_searchProductionEvaluation')
		that.setData({
			display: false,
			displayred:false
		})
	},
	selectassess:function(res){
		console.log(res)
		
		var that=this;
		var index = res.target.dataset.index;
		for (var i = 0; i < that.data.evaluation.length;i++){
			that.data.evaluation[i].active=0;
			if (i===index){
				// console.log(i)
				var selectindex=i;
				that.setData({
					selectindex: selectindex
				})
				that.data.evaluation[i].active = 1;
				// return selectindex
			}
			that.setData({
				evaluation: that.data.evaluation
			})
		};
		if (that.data.selectindex===0){
			console.log(0)
			that.evaluation(1, that.data.product.production_id, '/program/p_searchProductionEvaluation')
		} else if (that.data.selectindex === 1){
			console.log(1)
			that.evaluation(1, that.data.product.production_id, '/program/p_searchProductionEvaluationWithPicture')
		} else if (that.data.selectindex === 2) {
			that.goodredevaluation(1, that.data.product.production_id, 1,'/program/p_searchProductionEvaluationByGrade')
		} else if (that.data.selectindex === 3) {
			console.log(3)
			that.goodredevaluation(1, that.data.product.production_id, 2, '/program/p_searchProductionEvaluationByGrade')
		}else{
			console.log(4)
			that.goodredevaluation(1, that.data.product.production_id, 3, '/program/p_searchProductionEvaluationByGrade')
		}

		 
	},
	// 参数
	checkparameter:function(res){
		var that=this;
		that.setData({
			overfy:1
		})
		
	},
	checksure:function(res){
		var that=this;
		that.setData({
			overfy: 0
		})
	},
	// 加减购买数量
	add:function(res){
		var that=this;
		var num=that.data.buynumber;
		num++;
		console.log(num)
		that.setData({
			buynumber:num
		})
	},
	addcart:function(res){
		var that=this;
		var that = this;
		that.setData({
			addcart: 1,
			overfy: 1
		})
	},
	addcartsure: function (res) {
		var that = this;
		var specification_id = that.data.initial.specification_id;
		wx.getStorage({
			key: 'customer_id',
			success: function (res) {
				console.log(res.data)
				that.setData({
					customer_id: res.data,
					
				});
				console.log(that.data.product.specifications)
				if (that.data.product.specifications.length==0){
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
				}else{
					if (specification_id===''){
						wx.showToast({
							title: '请选择规格',
							icon: 'none',
							duration: 2000
						})
					}else{
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
		console.log(that.data.initial)
		
		
			// c
	},
	quxiao:function(){
		var that=this;
		that.setData({
			addcart: 0,
			overfy: 0,
			specification:0
		});
	},
	sub: function (res) {
		var that = this;
		var num = that.data.buynumber;
		num--;
		console.log(num);
		if(num<1){
			wx.showToast({
				title: '不能小于1',
				icon: 'none',
				duration: 2000
			})
		}else{
			that.setData({
				buynumber: num
			})
		}
		
	},
	// 选规格
	selectpecification:function(res){
		var that=this;
		 var id=res.target.dataset.id;
		 for (var i = 0; i < that.data.productspecification.length; i++) {
			 that.data.productspecification[i].active = 0;
		 };
		 that.setData({
			 productspecification: that.data.productspecification
		 })
		 console.log(that.data.productspecification)
		 for (var i = 0; i < that.data.productspecification.length;i++){
			 if (that.data.productspecification[i].specification_id===id){
				 console.log(i);
				 that.data.productspecification[i].active = 1;
				 var select = that.data.productspecification[i];
				 console.log(select)
				 that.setData({
					 initial: select,
					 productspecification: that.data.productspecification
				 })
			 }
		 }
		console.log(res)
	},

	buy:function(res){
		var that = this;
		that.setData({
			specification: 1,
			overfy: 1
		})
	},
	buysure:function(res){
		var that = this;
		that.setData({
			specification: 0,
			overfy: 0
		});
		var specification_id = that.data.initial.specification_id;
		wx.getStorage({
			key: 'customer_id',
			success: function (res) {
				console.log(res.data)
				that.setData({
					customer_id: res.data,

				});
				console.log(that.data.product.specifications)
				if (that.data.product.specifications.length == 0) {
					console.log(98989898989898)
					wx.request({
						url: App.globalData.urlHead + '/program/p_generatePreSubmitOrderInfo',
						method: 'POST',
						data: {
							appid: App.globalData.appid,
							customer_id: res.data,
							production:[
								{
									number: that.data.buynumber,
									production_id: that.data.product.production_id,
									specification_id: specification_id,
									customer_id: res.data
								},
								
							]
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
							url: App.globalData.urlHead + '/program/p_generatePreSubmitOrderInfo',
							method: 'POST',
							data: {
								appid: App.globalData.appid,
								customer_id: res.data,
								production: [
									{
										number: that.data.buynumber,
										production_id: that.data.product.production_id,
										specification_id: specification_id,
										customer_id: res.data
									},
								

								]
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
				}

			}
		})
	
		console.log(that.data.initial)
	},
	evaluation: function (page, productionid,url ){
		var that = this;
		wx.request({
			url: App.globalData.urlHead + url,
			method: 'POST',
			data: {
				productionid: productionid,
				page:page
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				// console.log('领取优惠')
				console.log(res);
				that.setData({
					product: res.data,
					goodParameter: res.data.goodParameters
				})
				// console.log(that.data.parameterContent)
			}
		})
	},
	goodredevaluation: function (page, productionid,index, url) {
		var that = this;
		wx.request({
			url: App.globalData.urlHead + url,
			method: 'POST',
			data: {
				productionid: productionid,
				page: page,
				index:index
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				// console.log('领取优惠')
				console.log(res);
				that.setData({
					product: res.data,
					goodParameter: res.data.goodParameters
				})
				// console.log(that.data.parameterContent)
			}
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(options);
		var that=this;
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchProductionDetail',
			method: 'POST',
			data: {
				productionid: options.production_id,
			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
				// console.log('领取优惠')
				console.log(res);
				 var initial={
					 iconUrl: res.data.production_images[0],
					 price : res.data.present_price,
					 inventory: res.data.totalInventory,
					 specification_id:''
				 }
			that.setData({
				product:res.data,
				goodParameter: res.data.goodParameters,
				productspecification: res.data.specifications,
				initial: initial
			})
			// console.log(that.data.parameterContent)
			}
		})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
		this.animation = wx.createAnimation()
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