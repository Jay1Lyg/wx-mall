// pages/addevaluation/addevaluation.js
const App = getApp()

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
							for (let i of tempFilePaths){
								console.log(i)
								// var b = tempFilePaths[i];
								// console.log(b)
								evaluationinfo[index].upload.push(i)
							}
							// console.log(b)
							// that.uploadimg({
							// 	url: App.globalData.urlHead + '/program/p_uploadPictureInEvaluation',
							// 	path: tempFilePaths
							// })
							console.log(tempFilePaths[0])
							var name ='images_upload';
							wx.uploadFile({
								url: App.globalData.urlHead + '/program/p_uploadPictureInEvaluation', //仅为示例，非真实的接口地址
								filePath: tempFilePaths[0],
								name: name,
								formData: null,
								header: {
									"Content-Type": "multipart/form-data"
								},
								success: function (res) {
									console.log(res)
								}
							})
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
	uploadimg:function (data){
		var that= this,
		i=data.i ? data.i : 0,//当前上传的哪张图片
		success=data.success ? data.success : 0,//上传成功的个数
		fail=data.fail ? data.fail : 0;//上传失败的个数
		wx.uploadFile({
			url: data.url,
			filePath: data.path[i],
			name: 'images_upload',//这里根据自己的实际情况改
			formData: {
				
			},//这里是上传图片时一起上传的数据
			success: (resp) => {
				success++;//图片上传成功，图片上传成功的变量+1
				console.log(resp)
				console.log(i);
				//这里可能有BUG，失败也会执行这里,所以这里应该是后台返回过来的状态码为成功时，这里的success才+1
			},
			fail: (res) => {
				fail++;//图片上传失败，图片上传失败的变量+1
				console.log('fail:' + i + "fail:" + fail);
			},
			complete: () => {
				console.log(i);
				i++;//这个图片执行完上传后，开始上传下一张
				if (i == data.path.length) {   //当图片传完时，停止调用          
					console.log('执行完毕');
					console.log('成功：' + success + " 失败：" + fail);
				} else {//若图片还没有传完，则继续调用函数
					console.log(i);
					data.i = i;
					data.success = success;
					data.fail = fail;
					that.uploadimg(data);
				}

			}
		});
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