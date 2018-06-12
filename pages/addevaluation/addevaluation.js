// pages/addevaluation/addevaluation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		evaluationinfo:[
			{
				id:'0',
				produce:'../../image/15.png',
				upload:[
					// '../../image/15.png',
					// '../../image/15.png',
					// '../../image/15.png'
				],
				evaluation:'',
				active:[
					{
						text:'好评',
						active:0,
						image:'../../image/hao.png',
						redimage:'../../image/haored.png',
						id:'0'
					},
					{
						text: '中评',
						active: 0,
						image: '../../image/zhong.png',
						redimage: '../../image/zhongred.png',
						id: '1'
					},
					{
						text: '差评',
						active: 0,
						image: '../../image/cha.png',
						redimage: '../../image/chared.png',
						id: '2'
					},
				]
			},
			{
				id:"1",
				produce: '../../image/15.png',
				upload: [
					// '../../image/15.png',
					// '../../image/15.png',
					// '../../image/15.png'
				],
				evaluation: '',
				active: [
					{
						text: '好评',
						active: 0,
						image: '../../image/hao.png',
						redimage: '../../image/haored.png',
						id: '0'
					},
					{
						text: '中评',
						active: 0,
						image: '../../image/zhong.png',
						redimage: '../../image/zhongred.png',
						id: '1'
					},
					{
						text: '差评',
						active: 0,
						image: '../../image/cha.png',
						redimage: '../../image/chared.png',
						id: '2'
					},
				]
			},
		]
  },
	bindTextAreaBlur:function(e){
			console.log(e)
	},
	uploadimage:function(e){
		var that=this;
		var id=e.target.dataset.id;
		var evaluationinfo = that.data.evaluationinfo;
		for (var i = 0; i < evaluationinfo.length;i++){
			if (evaluationinfo[i].id===id){
				console.log(i);
				var index=i;
				if (evaluationinfo[i].upload.length<3){
					wx.chooseImage({
						count: 3, // 默认9
						sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
						success: function (res) {
							// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
							var tempFilePaths = res.tempFilePaths;
							console.log(tempFilePaths);

							evaluationinfo[index].upload.push(tempFilePaths)
							console.log(evaluationinfo)
							that.setData({
								evaluationinfo: evaluationinfo
							})
						}
					})
				}else{
					console.log(555)
				}
			
			}
		};
		
	},
	delimage:function(e){
		var that=this;
		var index = e.target.dataset.index;
		var ids = e.target.dataset.id;
		var evaluationinfos = that.data.evaluationinfo;
		console.log(ids)
		//  evaluationinfos.splice(1, 1);
		for (var j = 0; j < evaluationinfos.length; j++) {
			if (evaluationinfos[j].id===ids){
				console.log(j)
				evaluationinfos[j].upload.splice(index, 1);
				console.log(evaluationinfos)
				that.setData({
					evaluationinfo: evaluationinfos
				})
			}
		}
	},
	switchevaluation:function(e){
		var that=this;
		var id = e.target.dataset.id; 
		var index = e.target.dataset.index; 

		var evaluationinfos = that.data.evaluationinfo;
		for (var j = 0; j < evaluationinfos.length; j++) {
			if (evaluationinfos[j].id===id){
				console.log(j)
				for (var i = 0; i < evaluationinfos[j].active.length;i++){
					evaluationinfos[j].active[i].active=0;
					if (evaluationinfos[j].active[i].id === index){
						console.log(i)
						evaluationinfos[j].active[i].active=1;
					
					}
					that.setData({
						evaluationinfo: evaluationinfos
					})
				}
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