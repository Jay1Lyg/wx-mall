// pages/shoppingcart/shoppingcart.js
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
		]
  },
	allselect:function(res){
		var that=this;
		var allsel = that.data.allselect;
		if (allsel){
			for (var i = 0; i < that.data.goodes.length; i++){
				that.data.goodes[i].active = 0;
				var goodes = that.data.goodes;
				
			}
			console.log(goodes)
			that.setData({
				allselect: 0,
				goodes: goodes
			})
			
		}else{
			for (var i = 0; i < that.data.goodes.length; i++) {
				that.data.goodes[i].active = 1;
				var goodes = that.data.goodes;
			}
			console.log(goodes)
			that.setData({
				allselect: 1,
				goodes: goodes
			})
			
		}
	},
	select:function(res){
		var that=this;
		var id=res.target.dataset.id;
		
		this.allsel();
		
		for(var i=0;i<that.data.goodes.length;i++){
		
			if(that.data.goodes[i].id===id){
				// console.log(i);
				var index=i;
				if (that.data.goodes[index].active){
					that.data.goodes[index].active = 0;
					var goodes = that.data.goodes;
					var all=0;
					// console.log(goodes)
					that.setData({
						
						allselect:all
					})
				}else{
					that.data.goodes[index].active = 1;
					var goodes = that.data.goodes;
					// console.log(goodes)
				}
			}
			var goodes = that.data.goodes;
			that.setData({
				goodes: goodes,
				
			})
			// console.log(that.data.allselect)
		}
		
	},
	allsel:function(){
		var that=this;
		for (var i = 0; i < that.data.goodes.length; i++) {
			if (that.data.goodes[i].active) {
				console.log(that.data.goodes)
				console.log(i)
				that.setData({
					allselect: 1,
				})
			}
		}
	},
	noallsel: function () {
		var that = this;
		for (var i = 0; i < that.data.goodes.length; i++) {
			if (!that.data.goodes[i].active) {
				console.log(that.data.goodes)
				console.log(i)
				that.setData({
					allselect: 0,
				})
			}
		}
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