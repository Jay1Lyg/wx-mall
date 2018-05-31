// pages/orders/orders.js
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
				tab: '待评价',
				active:'4' ,
				display: 0
			},
			{
				tab: '售后单',
				active: '5',
				display: 0
			},
			
			],
			active:0,
		goodes: [
			{
				active: 0,
				id: 0,
				image: '../../image/14.png',
				name: '不成熟的计划',
				guige: '麻辣',
				num: 1,
				price: 123
			},
			{
				active: 0,
				id: 2,
				image: '../../image/14.png',
				name: '不成熟的计划',
				guige: '麻辣',
				num: 1,
				price: 123
			},
		]
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
				console.log(i);
				var index = i;
				console.log(index)
				that.data.tab[index].display=1;
				console.log(tab)
				that.setData({
					tab: tab,
					active:index
				})
			}
			
		};
		
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