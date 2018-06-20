// pages/addaddress/addaddress.js
const App = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
		region: ['北京市', '北京市', '东城区'],
		customItem: '全部',
		contactNumber:'',
		detailedAddress:'',
		contact:'',
		areaCode:''
  },
	bindRegionChange:function(res){
		var that=this;
		var newadderss=res.detail.value;
		that.setData({
			region: newadderss
		})
		console.log(res)
	},
	inputname:function(e){
		console.log(e)
		var that=this;
		that.setData({
			contact: e.detail.value
		})
	},
	inputtel: function (e) {
		console.log(e)
		var that = this;
		that.setData({
			contactNumber: e.detail.value
		})
	},
	detailaddress: function (e) {
		console.log(e)
		var that = this;
		that.setData({
			detailedAddress: e.detail.value
		})
	},
	saveaddress:function(e){
		console.log(e)
		var that=this;
		var data={
			customer_id: that.data.customer_id,
			contactNumber: that.data.contactNumber,
			detailedAddress: that.data.detailedAddress,
			contact: that.data.contact,
			areaInfo: that.data.region,
		}
		var editdata = {
			address_id: that.data.address_id ,
			contactNumber: that.data.contactNumber,
			detailedAddress: that.data.detailedAddress,
			contact: that.data.contact,
			areaInfo: that.data.region,
		}
		if (that.data.address_id!=''){
			console.log(editdata);
			if (editdata.contact===''){
				wx.showToast({
					title: '请填写姓名',
					icon: 'none',
					duration: 2000
				})

			} else if (editdata.contactNumber===''){
				wx.showToast({
					title: '请填写电话',
					icon: 'none',
					duration: 2000
				})
			} else if (editdata.detailedAddress === '') {
				wx.showToast({
					title: '请填写详细地址',
					icon: 'none',
					duration: 2000
				})
			} else  {
				wx.request({
				url: App.globalData.urlHead + '/program/p_editAddress',
				method: 'POST',
				data: editdata,
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: function (res) {
					console.log(res);
					wx.navigateTo({ url: '../selectaddress/selectaddress' })
					// wx.showModal({
					// 	title: '修改成功',
					// 	content: '',
					// 	success: function (res) {
					// 		if (res.confirm) {
					// 			console.log('用户点击确定')
					// 		} else if (res.cancel) {
					// 			console.log('用户点击取消')
					// 		}
					// 	}
					// })

				}
			})
			}
			
		}else{
			if (data.contact === '') {
				wx.showToast({
					title: '请填写姓名',
					icon: 'none',
					duration: 2000
				})

			} else if (data.contactNumber === '') {
				wx.showToast({
					title: '请填写电话',
					icon: 'none',
					duration: 2000
				})
			} else if (data.detailedAddress === '') {
				wx.showToast({
					title: '请填写详细地址',
					icon: 'none',
					duration: 2000
				})
			} else{
				wx.request({
					url: App.globalData.urlHead + '/program/p_addAddress',
					method: 'POST',
					data: data,
					header: {
						'content-type': 'application/json' // 默认值
					},
					success: function (res) {
						console.log(res)
						wx.navigateTo({ url: '../selectaddress/selectaddress' })
					}
				})
			}
		
		}
		
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var that = this;
		console.log(options)
		
		if(options.address_id){
			that.setData({
				address_id: options.address_id
			})
			console.log(options.address_id);
			wx.request({
				url: App.globalData.urlHead + '/program/p_searchSingleAddress',
				method: 'POST',
				data: {
					address_id: options.address_id
				},
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: function (res) {
					console.log(res);
					that.setData({
						region: [res.data.provinceName, res.data.cityName, res.data.areaName],
						contactNumber: res.data.contactNumber,
						detailedAddress: res.data.detailedAddress,
						contact: res.data.contact,
					
					})
				}
			})
		}else{
			console.log(2235)
			that.setData({
				address_id: ''
			})
		}
	
		wx.getStorage({
			key: 'customer_id',
			success: function (res) {
				console.log(res.data)
				that.setData({
					customer_id:res.data
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