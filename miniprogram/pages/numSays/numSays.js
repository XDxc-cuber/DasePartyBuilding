// pages/numSays/numSays.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        graphList:[
            {
              id:0,
              title:"数说脱贫攻坚",
              publisher:"中国日报中文网",
              time:"2021-02-25",
              url:[
                "https://img3.chinadaily.com.cn/images/202102/25/60376701a3101e7c9209335b.jpeg"
              ]
            },
            {
              id:1,
              title:"数读中国的全面小康",
              publisher:'中国日报网',
              time:'2021-09-29',
              url:[
                "https://img3.chinadaily.com.cn/images/202109/29/6153c058a3107be47f2646fe.png",
                "https://img3.chinadaily.com.cn/images/202109/29/6153c058a3107be47f264703.png",
                "https://img3.chinadaily.com.cn/images/202109/29/6153c058a3107be47f26470a.png",
                "https://img3.chinadaily.com.cn/images/202109/29/6153c058a3107be47f264711.png",
                "https://img3.chinadaily.com.cn/images/202109/29/6153c058a3107be47f264717.png",
                "https://img3.chinadaily.com.cn/images/202109/29/6153c058a3107be47f26471e.png",
                "https://img3.chinadaily.com.cn/images/202109/29/6153c058a3107be47f264724.png",
              ]
            },
            {
              id:2,
              title:"数说《中国的全面小康》白皮书",
              publisher:"人民网",
              time:"2021-09-28",
              url:[
                "http://finance.people.com.cn/NMediaFile/2021/0928/MAIN202109281531000371435443836.jpg",
                "http://finance.people.com.cn/NMediaFile/2021/0928/MAIN202109281726000328710204419.jpg",
                "http://finance.people.com.cn/NMediaFile/2021/0929/MAIN202109291056000067406648202.jpg",
                "http://finance.people.com.cn/NMediaFile/2021/0928/MAIN202109281709000337945671340.jpg",
                "http://finance.people.com.cn/NMediaFile/2021/0928/MAIN202109281533000536622192027.jpg",
                "http://finance.people.com.cn/NMediaFile/2021/0928/MAIN202109281603000574132087931.jpg",
                "http://finance.people.com.cn/NMediaFile/2021/0928/MAIN202109281535000087218362038.jpg"
              ]
            },
            {
              id:3,
              title:"数说《中国的全面小康》白皮书，成就显著",
              publisher:"光明网",
              time:"2021-09-28",
              url:[
                "https://imgpolitics.gmw.cn/attachement/jpg/site2/20210928/f44d305ea48e22bd27c713.jpg",
                "https://imgpolitics.gmw.cn/attachement/jpg/site2/20210928/f44d305ea48e22bd27c814.jpg",
                "https://imgpolitics.gmw.cn/attachement/jpg/site2/20210928/f44d305ea48e22bd27c815.jpg",
                "https://imgpolitics.gmw.cn/attachement/jpg/site2/20210928/f44d305ea48e22bd27c816.jpg",
                "https://imgpolitics.gmw.cn/attachement/jpg/site2/20210928/f44d305ea48e22bd27c817.jpg",
              ]
            },
            {
              id:4,
              title:"凤凰涅槃 数说“十三五” 中国经济大转变",
              publisher:"央视网",
              time:"2020-10-27",
              url:[
                "https://p3.img.cctvpic.com/photoworkspace/contentimg/2020/10/27/2020102710212236706.gif",
                "https://p2.img.cctvpic.com/photoworkspace/contentimg/2020/10/27/2020102710212235408.gif",
                "https://p4.img.cctvpic.com/photoworkspace/contentimg/2020/10/27/2020102710212294890.gif",
                "https://p4.img.cctvpic.com/photoworkspace/contentimg/2020/10/27/2020102710212284335.gif",
                "https://p2.img.cctvpic.com/photoworkspace/contentimg/2020/10/27/2020102710212239171.gif",
                "https://p5.img.cctvpic.com/photoworkspace/contentimg/2020/10/27/2020102710212236307.gif",
                "https://p3.img.cctvpic.com/photoworkspace/contentimg/2020/10/27/2020102710212310532.gif",
                "https://p3.img.cctvpic.com/photoworkspace/contentimg/2020/10/27/2020102710212336797.gif",
                "https://p2.img.cctvpic.com/photoworkspace/contentimg/2020/10/26/2020102607110726452.jpg"
              ]
            },
            {
              id:5,
              title:"数说“十三五” 看我国发展新引擎",
              publisher:"央视网",
              time:"2020-10-28",
              url:[
                "https://p2.img.cctvpic.com/photoworkspace/contentimg/2020/10/28/2020102807083042026.png",
                "https://p3.img.cctvpic.com/photoworkspace/contentimg/2020/10/28/2020102807045383920.gif",
                "https://p4.img.cctvpic.com/photoworkspace/contentimg/2020/10/28/2020102807045358123.gif",
                "https://p2.img.cctvpic.com/photoworkspace/contentimg/2020/10/28/2020102807045339397.gif",
                "https://p1.img.cctvpic.com/photoworkspace/contentimg/2020/10/28/2020102807102840511.gif",
                "https://p1.img.cctvpic.com/photoworkspace/contentimg/2020/10/28/2020102807045378643.gif",
                "https://p2.img.cctvpic.com/photoworkspace/contentimg/2020/10/26/2020102607110726452.jpg"
              ]
            },
            {
              id:6,
              title:"数说“十三五” 为了这个庄严的承诺",
              publisher:"央视网",
              time:"2020-10-29",
              url:[
                "https://p5.img.cctvpic.com/photoworkspace/contentimg/2020/10/29/2020102907241920521.gif",
                "https://p3.img.cctvpic.com/photoworkspace/contentimg/2020/10/29/2020102907242312129.gif",
                "https://p4.img.cctvpic.com/photoworkspace/contentimg/2020/10/29/2020102907242675074.gif",
                "https://p2.img.cctvpic.com/photoworkspace/contentimg/2020/10/29/2020102907242852000.gif",
                "https://p4.img.cctvpic.com/photoworkspace/contentimg/2020/10/29/2020102907243084423.gif",
                "https://p2.img.cctvpic.com/photoworkspace/contentimg/2020/10/26/2020102607110726452.jpg"
              ]
            },
            {
              id:7,
              title:"数说“十三五” 让自然生态美景永驻人间",
              publisher:"央视网",
              time:"2020-10-30",
              url:[
                "https://p4.img.cctvpic.com/photoworkspace/contentimg/2020/10/30/2020103008573253259.gif",
                "https://p1.img.cctvpic.com/photoworkspace/contentimg/2020/10/30/2020103008573522945.gif",
                "https://p2.img.cctvpic.com/photoworkspace/contentimg/2020/10/30/2020103008543799585.gif",
                "https://p1.img.cctvpic.com/photoworkspace/contentimg/2020/10/30/2020103008585940653.gif",
                "https://p4.img.cctvpic.com/photoworkspace/contentimg/2020/10/30/2020103008543773311.gif",
                "https://p3.img.cctvpic.com/photoworkspace/contentimg/2020/10/30/2020103008593382282.gif",
                "https://p2.img.cctvpic.com/photoworkspace/contentimg/2020/10/26/2020102607110726452.jpg"
              ]
            },
            {
              id:8,
              title:"数说“十三五” 生活越来越好",
              publisher:"央视网",
              time:"2020-11-02",
              url:[
                "https://p1.img.cctvpic.com/photoworkspace/contentimg/2020/11/02/2020110207321926253.png",
                "https://p3.img.cctvpic.com/photoworkspace/contentimg/2020/11/02/2020110207321911740.gif",
                "https://p2.img.cctvpic.com/photoworkspace/contentimg/2020/11/02/2020110207321990920.gif",
                "https://p2.img.cctvpic.com/photoworkspace/contentimg/2020/11/02/2020110207322056294.gif",
                "https://p5.img.cctvpic.com/photoworkspace/contentimg/2020/11/02/2020110207322078224.gif",
                "https://p2.img.cctvpic.com/photoworkspace/contentimg/2020/10/26/2020102607110726452.jpg"
              ]
            }
        ]
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