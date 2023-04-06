// miniprogram/pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detailList:[
      {
        id: 0,
        title: "数据学院包揽2021年校运会甲组团体总分第一、男子第一、女子第一",
        time: "2021-10-27",
        content: ""
      },
      {
        id: 1,
        title: "扬帆入海·乘风启航|数据学院举行2020年新生开学典礼",
        time: "2020-09-26",
        content: ""
      },
      {
        id: 2,
        title: "第七届数据科学与工程暑期学校（DaSESS2020）",
        time: "2020-07-22",
        content: ""
      },
      {
        id: 3,
        title: "数据学院2020届本科生毕业合影",
        time: "2020-06-29",
        content: ""
      },
      {
        id: 4,
        title: "数据学院2020届研究生毕业合影",
        time: "2020-06-29",
        content: ""
      },
      {
        id: 5,
        title: "数据学院成立三周年纪念暨企业奖学金颁奖仪式",
        time: "2020-01-08",
        content: ""
      },
      {
        id: 6,
        title: "华东师范大学和华为宣布开展数据库联合创新",
        time: "2019-12-19",
        content: ""
      },
      {
        id: 7,
        title: "科技赋能教育变革：华东师范大学与腾讯签约在教育科技领域建立全面战略合作",
        time: "2019-12-07",
        content: ""
      },
      {
        id: 8,
        title: "数据学院顺利召开2021年度基层党支部书记述职评议会",
        time: "2021-12-28",
        content: ""
      },
      {
        id: 9,
        title: "数据学院2020级研究生第一党支部开展 “寻访家乡党史，传承建党精神”红色故事分享会 暨十九届六中全会专题学习会",
        time: "2021-12-13",
        content: ""
      },
      {
        id: 10,
        title: "数据学院开展“我心向党，信仰启航”新生党员主题教育活动",
        time: "2021-09-10",
        content: ""
      }

    ],
    detailChosen: {
      title: "",
      time: "",
      content: ""
    },
    newsID: -1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(params) {
    // debugger;
    this.setData({
        newsID: wx.getStorageSync('news_id')
      });
    console.log(params);
    console.log("传递过来的新闻id为："+this.data.newsID);
    //console.log("传递过来的新闻id为："+params.newsID);
    /*var that=this;
    wx.cloud.callFunction({
      name:'EssayFunctions',
      config:{
        env:that.data.envId
      },
      data:{
        type:'getDetail',
        news_id:params.newsID
      }
    }).then((resp)=>{
      that.setData({
        detailChosen:resp.result.data[0]
      });
      console.log(this.data.detailChosen);
    }).catch((e) => {
      console.log(e)
      that.setData({
        showUploadTip: true
      })
      wx.hideLoading()
    });*/
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