// pages/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  goto_mycollect: function (e) {
    // 当点击我的收藏的时候，触发这个事件
    wx.navigateTo({        //跳转到显示我的收藏的界面

      url: '/pages/display_mycollect/display_mycollect',
      success: function (res) {
        console.log(res);
      },

      fail: function () {
        //页面跳转失败!
      },
      complete: function () {
        //页面跳转成功!
      }
    })
  }, 
  goto_information: function (e) {
    // 当点击成就等级的时候，触发这个事件
    wx.navigateTo({        //跳转到显示成就等级的界面

      url: '/pages/display_information/display_information',
      success: function (res) {
        console.log(res);
      },

      fail: function () {
        //页面跳转失败!
      },
      complete: function () {
        //页面跳转成功!
      }
    })
  },
  goto_myachievement: function (e) {
    // 当点击成就等级的时候，触发这个事件
    wx.navigateTo({        //跳转到显示成就等级的界面

      url: '/pages/display_achievement/display_achievement',
      success: function (res) {
        console.log(res);
      },

      fail: function () {
        console.log(res);
        //页面跳转失败!
      },
      complete: function () {
        //页面跳转成功!
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
  
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