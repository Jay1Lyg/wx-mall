// pages/productdetails/productdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		product:{
				image: '../../image/14.png',
				detail:'计划GV深V不打算大V大GV深V不打算大V大GV深V不打算大V大GV深V不打算大V大GV深V不打算大V大GV深V不打算大V大GV深V不打算大V大V'
			},
		productspecification:[
			{
				id:"0",
				name:'麻辣',
				image:'../../image/15.png',
				surplus:122,
				price:44,
				Originalprice:60
			},
			{
				id: "1",
				name: '五香',
				image: '../../image/14.png',
				surplus: 12,
				price:45,
				Originalprice: 60
			},
			{
				id: "2",
				name: '原味',
				image: '../../image/15.png',
				surplus: 152,
				price:55,
				Originalprice: 60
			}
		],
		initial:{
			
		id: "0",
		name: '麻辣',
		image: '../../image/15.png',
		surplus: 122,
		price: 44,
		Originalprice: 60
	
		},
		share:'../../image/share.png',
		display: true	,
		displayred: true,
		overfy:0,
		canshu:0,
		buynumber:1,
		specification:0,
		
		
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
		that.setData({
			display: false,
			displayred:false
		})
	},
	selectassess:function(res){
		console.log(res)
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
		 for (var i = 0; i < that.data.productspecification.length;i++){
			 if (that.data.productspecification[i].id===id){
				 console.log(i);
				 that.data.productspecification[i].active = 1;
				 var select = that.data.productspecification[i];
				 console.log(that.data.productspecification)
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
		wx.navigateTo({ url: '../submitorder/submitorder' })
		console.log(that.data.initial)
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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