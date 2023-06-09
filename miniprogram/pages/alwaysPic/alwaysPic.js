// pages/alwaysPic/alwaysPic.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      graphList:[],
      graphChosen: {
        // title: "",
        // time: "",
        // image_url:"",
        // read_num:0,
        // like_num:0
      },
      graphId: "",
      images:{}
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
      this.setData({
        graphChosen: wx.getStorageSync('graphChosen')
      })
      console.log('选择的图片信息为：');
      console.log(this.data.graphChosen);
      // 使用云函数获取图片:
      // var that=this;
      // wx.cloud.callFunction({
      //   name:'EssayFunctions',
      //   config:{
      //     env:that.data.envId
      //   },
      //   data:{
      //     type:'getSingleGrapth',
      //     graph_id:params.graphID
      //   }
      // }).then((resp)=>{
      //   that.setData({
      //     graphChosen:resp.result.data[0]
      //   });
      //   console.log(this.data.graphChosen);
      // }).catch((e) => {
      //   console.log(e)
      //   that.setData({
      //     showUploadTip: true
      //   })
      //   wx.hideLoading()
      // });
    },
  
    imageLoad: function(e) {
      var $width=e.detail.width,    //获取图片真实宽度
          $height=e.detail.height,
          ratio=$width/$height;    //图片的真实宽高比例
      var viewWidth=718,           //设置图片显示宽度，左右留有16rpx边距
          viewHeight=718/ratio;    //计算的高度值
       var image=this.data.images; 
       //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
       image[e.target.dataset.index]={
          width:viewWidth,
          height:viewHeight
       }
       console.log(image);
       this.setData({
            images:image.index
       })
       console.log(this.data.images);
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