var app = getApp();
Page({
	data: {
		// currentTab: 0, //预设当前项的值
		// scrollLeft: 0, //tab标题的滚动条位置
		expertList: ['bjk', 'kjghlkj', 'uyu', 'jhgfj', 'jhg', 'uyu', 'jhgfj', 'uyu', 'jhgfj']
	},
	// 滚动切换标签样式
	switchTab: function (e) {
		console.log(e)
		this.setData({
			currentTab: e.detail.current
		});
		// this.checkCor();
	},
	// 点击标题切换当前页时改变样式
	// swichNav: function (e) {
	// 	console.log(e)
	// 	var cur = e.target.dataset.current;
	// 	if (this.data.currentTaB == cur) { return false; }
	// 	else {
	// 		this.setData({
	// 			currentTab: cur
	// 		})
	// 	}
	// },
	// checkCor: function () {
	// 	if (this.data.currentTab > 4) {
	// 		this.setData({
	// 			scrollLeft: 300
	// 		})
	// 	} else {
	// 		this.setData({
	// 			scrollLeft: 0
	// 		})
	// 	}
	// },
	onLoad: function () {
		var that = this;
		//  高度自适应
		// wx.getSystemInfo({
		// 	success: function (res) {
		// 		var clientHeight = res.windowHeight,
		// 			clientWidth = res.windowWidth,
		// 			rpxR = 750 / clientWidth;
		// 		var calc = clientHeight * rpxR - 180;
		// 		console.log(calc)
		// 		that.setData({
		// 			winHeight: calc
		// 		});
		// 	}
		// });
	},
	// footerTap: app.footerTap
})