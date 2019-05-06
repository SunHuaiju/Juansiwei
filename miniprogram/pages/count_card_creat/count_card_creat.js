// pages/count_card_creat/count_card_creat.js
Page({


  data: {
    starttime: '00:00',    /* 任务的开始时间*/
    endtime: '00:00',       /*任务的结束时间*/
    task_complete: true,   /*判断任务是否已经输入*/
    complete_type: "default",  /*创建完成 按钮类型 */
    inputtask: "",         /**输入的任务内容，初始化为空字符 */
    inputremark: "",       /** 输入的备注内容，初始化为空字符*/

  },

  onAdd: function () {
     const db = wx.cloud.database()
     db.collection('tasks').add({
       data: {
         count: 1
       },
       success: res => {
         // 在返回结果中会包含新创建的记录的 _id
         this.setData({
           counterId: res._id,
           count: 1
         })
         wx.showToast({
           title: '新增记录成功',
         })
         console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
       },
       fail: err => {
         wx.showToast({
           icon: 'none',
           title: '新增记录失败'
         })
         console.error('[数据库] [新增记录] 失败：', err)
       }
     })
  },

  taskinput: function (e) {       /**输入函数 */
    var task_content = e.detail.value;

    if (task_content != "") {
      this.setData({
        task_complete: false,
        complete_type: "primary",
        inputtask: task_content,
        success: function (res) {
          console.log(res);
        },
        
      })
    }
    else {
      this.setData({
        task_complete: true,
        complete_type: "default",
        success: function (res) {
          console.log(res);
        },
      })
    }
  },

  start_change: function (e) {   /**开始时间输入函数 */

    this.setData({
      starttime: e.detail.value,
      success: function (res) {
        console.log(res);
      },
      fail: function () {
        //时间传入失败
      },
      complete: function () {
        //时间传入成功
      }
    })
  },

  end_change: function (e) { /**结束时间输入 */
    this.setData({
      endtime: e.detail.value,
      success: function (res) {
        console.log(res);
      },
      fail: function () {
        //时间传入失败
      },
      complete: function () {
        //时间传入成功
      }
    })

  },

  remarkinput: function (e) { /**备注输入 */
    var remark_content = e.detail.value;
    this.setData({
      inputremark: content,
    })
  },

  creat_complete: function (e) {  /**创建完成，页面跳转 */
    wx.switchTab({        //跳转到添加打卡的界面

      url: '/pages/count_card/count_card',
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