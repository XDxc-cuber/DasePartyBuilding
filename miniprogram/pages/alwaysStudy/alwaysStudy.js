// pages/alwaysStudy/alwaysStudy.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        alwaysStudyImgs: [
            {
                id: 0,
                title: "新时代人才工作",
                time: "2021-09-28",
                url: [
                    "http://cpc.people.com.cn/NMediaFile/2021/0928/MAIN202109281841000089024874434.jpg",
                    "http://cpc.people.com.cn/NMediaFile/2021/0928/MAIN202109281841000224247548535.jpg",
                    "http://cpc.people.com.cn/NMediaFile/2021/0928/MAIN202109281841000346661729758.jpg",
                    "http://cpc.people.com.cn/NMediaFile/2021/0928/MAIN202109281841000458227627910.jpg",
                    "http://cpc.people.com.cn/NMediaFile/2021/0928/MAIN202109281841000561786254040.jpg",
                    "http://cpc.people.com.cn/NMediaFile/2021/0928/MAIN202109282039000197614702772.jpg",
                    "http://cpc.people.com.cn/NMediaFile/2021/0928/MAIN202109281842000174842523963.jpg",
                    "http://cpc.people.com.cn/NMediaFile/2021/0928/MAIN202109281859000282338845253.jpg",
                    "http://cpc.people.com.cn/NMediaFile/2021/0928/MAIN202109281842000388747644019.jpg"
                ]
            },
            {
                id: 1,
                title: "建设网络强国",
                time: "2021-01-24",
                url: [
                    "http://politics.people.com.cn/NMediaFile/2021/0124/MAIN202101241746000563996776596.jpg"
                ]
            },
            {
                id: 2,
                title: "如何开展党史学习教育，一组数字看习近平讲话“关键点”",
                time: "2021-04-02",
                url: [
                    "http://cpc.people.com.cn/NMediaFile/2021/0402/MAIN202104020837000003768626705.png"
                ]
            },
            {
                id: 3,
                title: "庆祝中国共产党成立100周年大会 习近平讲话要点",
                time: "2021-07-02",
                url: [
                    "http://cpc.people.com.cn/NMediaFile/2021/0702/MAIN202107021358000013139335111.jpg",
                    "http://cpc.people.com.cn/NMediaFile/2021/0702/MAIN202107021358000100204914514.jpg"
                ]
            },
            {
                id: 4,
                title: "如何建设数字中国 习近平心中有“数”",
                time: "2021-04-25",
                url: [
                    "http://cpc.people.com.cn/NMediaFile/2021/0425/MAIN202104252016000168538537743.jpg",
                    "http://cpc.people.com.cn/NMediaFile/2021/0425/MAIN202104251344000572003495156.jpg",
                    "http://cpc.people.com.cn/NMediaFile/2021/0425/MAIN202104251345000056171604899.jpg"
                ]
            }
        ]
    },
    showGraphDetail(e){
        var graphid = e.currentTarget.dataset.graphid;
        wx.setStorageSync('graphChosen', this.data.alwaysStudyImgs[graphid]);
        wx.navigateTo({
          url: '/pages/alwaysPic/alwaysPic'
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