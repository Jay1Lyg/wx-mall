// pages/classification/classification.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
		tab: {
			list: [

			]
		},
		recommend: [

		],
		fpage:1,
		cpage:1,
  },
	qiehuan:function(res){
		console.log(res);
		var that=this;
		var firstclass_id = res.target.dataset.id;
		console.log(firstclass_id)
		for (var i = 0; i < that.data.tab.list.length;i++){
			that.data.tab.list[i].active=0;
			if (that.data.tab.list[i].firstclass_id === firstclass_id){
				console.log(i)
				that.data.tab.list[i].active = 1;
				var secondlist = that.data.tab.list[i].secondclass
			}
		}
		console.log(that.data.tab.list)
		that.setData({
			list: that.data.tab.list,
			secondclass: secondlist,
			fpage:1
		})
		that.firstclass(1, firstclass_id,'')
	},
	secondqiehuan: function (res) {
		console.log(res);
		var that = this;
		var secondclass_id = res.target.dataset.id;
		for (var i = 0; i < that.data.tab.list.length; i++) {
		
			if (that.data.tab.list[i].active === 1) {
				console.log(i)
				var firstclass_id = that.data.tab.list[i].firstclass_id;
				var secondclass = that.data.tab.list[i].secondclass;
			}
		}
		for (var j = 0; j < secondclass.length; j++) {
			secondclass[j].active = 0;
			if (secondclass[j].secondclass_id === secondclass_id) {
				secondclass[j].active = 1;
			}
		};
		console.log(firstclass_id)
		console.log(secondclass_id)
		that.setData({
			secondclass: secondclass,
			cpage:1
		})
		console.log(secondclass)
		that.firstclass(1, '', secondclass_id)
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var that = this;
		console.log(options)
		wx.request({
			url: App.globalData.urlHead + '/program/p_searchFristClassAndSecondClass',
			method: 'POST',
			data: {
				appid: App.globalData.appid,

			},
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function (res) {
			
				console.log(res);
				// that.data.tab.list = res.data.classInfo
				
			
				that.setData({
					list: res.data
				})
				console.log(that.data.tab.list);
				// that.firstclass(1, options.firstclass_id,'')
				
			}
		})
	
  },
	allclass:function(e){
		console.log(e)
		var id = e.currentTarget.id;
		var index=1
		console.log(id)
		 wx.navigateTo({ url: '../classresults/classresults?id='+id+'&index=1' })
	},

	secondclass: function (e) {
		var that = this;
		var id = e.currentTarget.id;
		var index = 1
		console.log(id)
		wx.navigateTo({ url: '../classresults/classresults?id=' + id + '&index=2' })


	
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
		var that=this;
		var arr = [];
		var secondarr=[];
		for (let j of that.data.secondclass) {
			console.log(j);
			arr.push(j.active);
			if (j.active === 1) {
				console.log(j);
				var secondclass_id = j.secondclass_id
			}
			if (arr[0] === 0 && new Set(arr).size === 1) {
				console.log(66666666666666666666666)
				var havefirst=true;
			}

		};
		for (let i of that.data.list) {
			console.log(i);
			secondarr.push(i.active);
			if(i.active===1){
				console.log(i);
				var firstclass_id=i.firstclass_id
			}
			if (secondarr[0] === 0 && new Set(secondarr).size === 1) {
				console.log(66);
				var havefirst = false;

			}

		}
		if (!havefirst){
			var fpage=	++that.data.fpage;
			console.log(fpage)
			that.secondclass(fpage, firstclass_id, '')
		}else{
			var cpage = ++that.data.cpage;
			console.log(cpage)
			that.secondclass(cpage, '', secondclass_id)
		}
		// console.log(2)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})