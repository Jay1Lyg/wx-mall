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
		})
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