//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
				console.log(res)
				wx.setStorage({
					key: "code",
					data: res.code
				})
      }
    })
    // 获取用户信息
		wx.getSetting({
			success: res => {
				console.log(res)
				// if (res.authSetting['scope.userInfo']) {
				// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
			
				wx.getUserInfo({
					success: res => {
						// 可以将 res 发送给后台解码出 unionId
						console.log(res);
						var userInfo = wx.setStorageSync('userInfo', res.userInfo)
						// this.setData({
						// 	userInfo: res.userInfo
						// })
						// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
						// 所以此处加入 callback 以防止这种情况
						// if (this.userInfoReadyCallback) {
						// 	this.userInfoReadyCallback(res)
						// }
					}
				})
				
				// }
			}
		})
    
  },
	globalData: {
		urlHead: 'https://www.kaishi.net.cn',
		appid : 'wxc1ffb8680e926eb5',
		appSecret: 'f2ade2dfeffb61671bb8233c18990f2b'
	},
})