// pages/selectaddrress/selectaddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		address:[
			{	
				id:'0',
				active:1,
				region:'北京市东城区',
				detailadderss:'上下科技城死定了科技馆库连接看见好看了就好，迦南科技，不开机你',
				name:'周杰伦',
				tel:'15258456878',
			},
			{
				id:'1',
				active: 0,
				region: '北京市东城区',
				detailadderss: '上下科迦南科技，不开机你',
				name: '周杰伦',
				tel: '15258456878',
			},
			{
				id: '2',
				active: 0,
				region: '北京市东城区',
				detailadderss: '上下科迦南科技，不开机你',
				name: '周杰伦',
				tel: '15258456878',
			},
			{
				id: '3',
				active: 0,
				region: '北京市东城区',
				detailadderss: '上下科迦南科技，不开机你',
				name: '周杰伦',
				tel: '15258456878',
			},
		]
  },
	select:function(res){
		var that=this;
		var address = that.data.address;
		var id = res.target.dataset.id;
		console.log(res)
		for(var i=0;i<address.length;i++){
			if (address[i].id===id){
				console.log(address[i].active);
				if (address[i].active===1){
					// address[i].active=0;
					// that.setData({
					// 	address: address
					// })
				}else{
					for (var j = 0; j < address.length; j++) {
						address[j].active = 0;
					}
						address[i].active = 1;
						that.setData({
							address: address
						})
				}
			}
		}
	},
	editaddress:function(res){
		console.log('bianji')
	},
	deladdress:function(res){
		console.log('删除')
	},
	address:function(res){
		console.log(res)
		console.log('添加地址');
		wx.navigateTo({ url: '../addaddress/addaddress' })
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