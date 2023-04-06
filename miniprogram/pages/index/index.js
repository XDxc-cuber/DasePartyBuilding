// index.js
// 获取应用实例
const app = getApp()

var time= require("../../utils/util.js");
Page({
  data: {
    currentIndexNav:0,//被点击首页导航菜单的索引
    winHeight:0,
    winHeight3:0,
    navlist:[
      {
        id:1,
        text:"党建动态"
      },
      {
        id:2,
        text:"时习之"
      },
      {
        id:3,
        text:"图解党建"
      }
    ],
    swiperList:[
      {
        id: 0,
        title: "数据学院包揽2021年校运会甲组团体总分第一、男子第一、女子第一",
        image_url: "http://dase.ecnu.edu.cn/dase-module-admin/uploads/attach/8aab5ed1-d45a-4b1a-9ec4-a144d9486d22.jpg"
      },
      {
        id: 1,
        title: "扬帆入海·乘风启航|数据学院举行2020年新生开学典礼",
        image_url: "http://dase.ecnu.edu.cn//dase-module-admin/uploads/image/20200926/1601084678020077555.jpg"
      },
      {
        id: 2,
        title: "第七届数据科学与工程暑期学校（DaSESS2020）",
        image_url: "http://dase.ecnu.edu.cn//dase-module-admin/uploads/image/20200722/1595421060913072537.jpg"
      },
      {
        id: 3,
        title: "数据学院2020届本科生毕业合影",
        image_url: "http://dase.ecnu.edu.cn/dase-module-admin/uploads/attach/5569fe4f-3a44-4df6-ab35-2198e0f29c07.jpeg"
      },
      {
        id: 4,
        title: "数据学院2020届研究生毕业合影",
        image_url: "http://dase.ecnu.edu.cn/dase-module-admin/uploads/attach/79de063c-5edb-4458-8826-94cdc273f212.jpeg"
      },
      {
        id: 5,
        title: "数据学院成立三周年纪念暨企业奖学金颁奖仪式",
        image_url: "http://dase.ecnu.edu.cn/dase-module-admin/uploads/attach/7032e2bd-24e3-4979-ab7a-4615b1cb419d.png"
      },
      {
        id: 6,
        title: "华东师范大学和华为宣布开展数据库联合创新",
        image_url: "http://dase.ecnu.edu.cn/dase-module-admin/uploads/attach/aac61e81-ad3c-4d10-bacd-c3173fed201a.png"
      },
      {
        id: 7,
        title: "科技赋能教育变革：华东师范大学与腾讯签约在教育科技领域建立全面战略合作",
        image_url: "http://dase.ecnu.edu.cn/dase-module-admin/uploads/attach/cc6b8082-cd25-4d5a-82e4-7d280322df21.jpeg"
      }
    ],
    newsList:[
      {
        id: 8,
        title: "数据学院顺利召开2021年度基层党支部书记述职评议会",
        publisher: "数据学院",
        time: "2021-12-28",
        url: "http://dase.ecnu.edu.cn/dase-module-gateway/dase/menuAndDetail/menuAndDetail.html?rootColumnId=4028821e5b7a0971015b7a0a1cbf0000&columnListId=40284c81604a9f7901604aac1c550010&articleId=ff8080817c0b20ac017dffe3409a0017"
      },
      {
        id: 9,
        title: "数据学院2020级研究生第一党支部开展 “寻访家乡党史，传承建党精神”红色故事分享会 暨十九届六中全会专题学习会",
        publisher: "数据学院",
        time: "2021-12-13",
        url: "http://dase.ecnu.edu.cn/dase-module-gateway/dase/menuAndDetail/menuAndDetail.html?rootColumnId=4028821e5b7a0971015b7a0a1cbf0000&columnListId=40284c81604a9f7901604aac1c550010&articleId=ff8080817c0b20ac017db2f4bd120016"
      },
      {
        id: 10,
        title: "数据学院开展“我心向党，信仰启航”新生党员主题教育活动",
        publisher: "数据学院",
        time: "2021-09-10",
        url: "http://dase.ecnu.edu.cn/dase-module-gateway/dase/menuAndDetail/menuAndDetail.html?rootColumnId=4028821e5b7a0971015b7a0a1cbf0000&columnListId=40284c81604a9f7901604aac1c550010&articleId=ff80808173a40a36017bcfba3a7c005b"
      }
    ],
    eventsList:[],
    graphList:[
      {
        id: "0",
        title: "如何对发展对象进行公示",
        time: "2020-08-04",
        url: [
          "http://p1.img.cctvpic.com/photoworkspace/contentimg/2020/08/04/2020080410132958723.jpg"
        ]
      },
      {
        id: "1",
        title: "党支部党员大会怎么开",
        time: "2021-04-29",
        url: [
          "http://p1.img.cctvpic.com/photoworkspace/contentimg/2021/04/29/2021042918530171132.jpg"
        ]
      },
      {
        id: "2",
        title: "上级党委审批接收预备党员的要求和应注意的问题",
        time: "2020-11-13",
        url: [
          "http://p1.img.cctvpic.com/photoworkspace/contentimg/2020/11/13/2020111317300355942.jpg"
        ]
      },
      {
        id: "3",
        title: "如何写转正申请书",
        time: "2020-07-27",
        url: [
          "http://p1.img.cctvpic.com/photoworkspace/contentimg/2020/07/27/2020072416533013436.jpg"
        ]
      },
      {
        id: "4",
        title: "开展谈心谈话应注意的问题",
        time: "2021-04-15",
        url: [
          "http://p1.img.cctvpic.com/photoworkspace/contentimg/2021/04/15/2021041517555339936.jpg"
        ]
      },
      {
        id: "5",
        title: "党支部委员会 换届选举工作的主要程序（上）",
        time: "2021-02-04",
        url: [
          "http://p2.img.cctvpic.com/photoworkspace/contentimg/2021/02/04/2021020417441496876.jpg"
        ]
      },
      {
        id: "6",
        title: "如何开好组织生活会",
        time: "2021-02-01",
        url: [
          "http://p2.img.cctvpic.com/photoworkspace/contentimg/2021/02/01/2021020118564141745.jpg"
        ]
      },
      {
        id: "7",
        title: "支部大会通过接收预备党员的决议怎么写",
        time: "2020-08-21",
        url: [
          "http://p2.img.cctvpic.com/photoworkspace/contentimg/2020/08/21/2020082117593891234.jpg"
        ]
      },
      {
        id: "8",
        title: "支部党员大会进行选举时对到会党员人数的要求",
        time: "2020-11-02",
        url: [
          "http://p2.img.cctvpic.com/photoworkspace/contentimg/2020/11/02/2020110209365293600.jpg"
        ]
      },
      {
        id: "9",
        title: "上级党委如何对接收预备党员进行审批",
        time: "2020-09-11",
        url: [
          "http://p2.img.cctvpic.com/photoworkspace/contentimg/2020/09/11/2020091118204552508.jpg"
        ]
      },
      {
        id: "10",
        title: "入党介绍人的条件和主要任务",
        time: "2020-10-20",
        url: [
          "http://p2.img.cctvpic.com/photoworkspace/contentimg/2020/10/20/2020102008482650312.jpg"
        ]
      },
      {
        id: "11",
        title: "关于民主评议党员的几个问题",
        time: "2021-03-31",
        url: [
          "http://p2.img.cctvpic.com/photoworkspace/contentimg/2021/03/31/2021033117340182831.jpg"
        ]
      },
      {
        id: "12",
        title: "特殊情况下党员应如何过组织生活（上）",
        time: "2021-08-31",
        url: [
          "http://p2.img.cctvpic.com/photoworkspace/contentimg/2021/08/31/2021083118115084412.jpg"
        ]
      },
      {
        id: "13",
        title: "思想汇报应该怎么写",
        time: "2020-07-15",
        url: [
          "http://p3.img.cctvpic.com/photoworkspace/contentimg/2020/07/15/2020071417451722331.jpg"
        ]
      },
      {
        id: "14",
        title: "想申请入党 应该怎么做",
        time: "2020-06-30",
        url: [
          "http://p3.img.cctvpic.com/photoworkspace/contentimg/2020/06/30/2020063015021573802.jpg"
        ]
      },
      {
        id: "15",
        title: "这些人员应该向哪个党组织提出入党申请",
        time: "2020-08-11",
        url: [
          "http://p3.img.cctvpic.com/photoworkspace/contentimg/2020/08/11/2020081111100521600.jpg"
        ]
      },
      {
        id: "16",
        title: "如何对预备党员转正申请进行审查讨论以及作出决议",
        time: "2020-10-09",
        url: [
          "http://p3.img.cctvpic.com/photoworkspace/contentimg/2020/10/09/2020093018011910612.jpg"
        ]
      },
      {
        id: "17",
        title: "召开接收预备党员的支部大会的主要程序",
        time: "2020-08-28",
        url: [
          "http://p3.img.cctvpic.com/photoworkspace/contentimg/2020/08/28/2020082815533449666.jpg"
        ]
      },
      {
        id: "18",
        title: "民主评议党员的实施步骤",
        time: "2021-03-18",
        url: [
          "http://p3.img.cctvpic.com/photoworkspace/contentimg/2021/03/18/2021031815493051513.jpg"
        ]
      },
      {
        id: "19",
        title: "如何对发展对象进行政治审查",
        time: "2020-07-02",
        url: [
          "http://p3.img.cctvpic.com/photoworkspace/contentimg/2020/07/02/2020070215244251429.jpg"
        ]
      },
      {
        id: "20",
        title: "如何讲党课",
        time: "2020-08-13",
        url: [
          "http://p3.img.cctvpic.com/photoworkspace/contentimg/2020/08/13/2020081318075599851.jpg"
        ]
      },
      {
        id: "21",
        title: "这几种情况下 预备党员如何转正（上）",
        time: "2020-07-17",
        url: [
          "http://p3.img.cctvpic.com/photoworkspace/contentimg/2020/07/17/2020071710331353471.jpg"
        ]
      },
      {
        id: "22",
        title: "党支部开展换届选举工作的时限",
        time: "2021-04-26",
        url: [
          "http://p3.img.cctvpic.com/photoworkspace/contentimg/2021/04/26/2021042610072375852.jpg"
        ]
      },
      {
        id: "23",
        title: "召开接收预备党员的支部大会应注意的问题",
        time: "2020-09-03",
        url: [
          "http://p4.img.cctvpic.com/photoworkspace/contentimg/2020/09/03/2020090316505269923.jpg"
        ]
      },
      {
        id: "24",
        title: "党支部委员会会议怎么开",
        time: "2021-04-30",
        url: [
          "http://p4.img.cctvpic.com/photoworkspace/contentimg/2021/04/30/2021042919121687361.jpg"
        ]
      },
      {
        id: "25",
        title: "如何组织预备党员进行入党宣誓",
        time: "2020-10-01",
        url: [
          "http://p4.img.cctvpic.com/photoworkspace/contentimg/2020/10/01/2020093017430421906.jpg"
        ]
      },
      {
        id: "26",
        title: "党小组会怎么开",
        time: "2021-05-13",
        url: [
          "http://p4.img.cctvpic.com/photoworkspace/contentimg/2021/05/13/2021051314572863498.jpg"
        ]
      },
      {
        id: "27",
        title: "党员组织关系应如何转接",
        time: "2020-06-23",
        url: [
          "http://p4.img.cctvpic.com/photoworkspace/contentimg/2020/06/23/2020062309594322015.jpg"
        ]
      },
      {
        id: "28",
        title: "如何开展谈心谈话",
        time: "2021-04-08",
        url: [
          "http://p4.img.cctvpic.com/photoworkspace/contentimg/2021/04/08/2021040816524315565.jpg"
        ]
      },
      {
        id: "29",
        title: "如何对预备党员进行教育考察",
        time: "2020-09-24",
        url: [
          "http://p5.img.cctvpic.com/photoworkspace/contentimg/2020/09/24/2020092418133812838.jpg"
        ]
      },
      {
        id: "30",
        title: "民主评议党员的基本原则和内容",
        time: "2021-03-11",
        url: [
          "http://p5.img.cctvpic.com/photoworkspace/contentimg/2021/03/11/2021031118454844418.jpg"
        ]
      },
      {
        id: "31",
        title: "党支部委员的产生（上）",
        time: "2020-11-05",
        url: [
          "http://p5.img.cctvpic.com/photoworkspace/contentimg/2020/11/05/2020110519233584028.jpg"
        ]
      },
      {
        id: "32",
        title: "什么是“三会一课”",
        time: "2020-07-10",
        url: [
          "http://p5.img.cctvpic.com/photoworkspace/contentimg/2020/07/10/2020071009142468762.jpg"
        ]
      },
      {
        id: "33",
        title: "如何对不合格党员进行组织处理",
        time: "2021-03-26",
        url: [
          "http://p5.img.cctvpic.com/photoworkspace/contentimg/2021/03/26/2021032609245260368.jpg"
        ]
      }
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'),// 如需尝试获取用户信息可改为false,
  },
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    });
    if (e.target.dataset.index == 0) {
      this.setData({
        winHeight:488+this.data.newsList.length*250
      })
    } else if (e.target.dataset.index == 1){    
      this.setData({
        winHeight:1000
      })
    }else if(e.target.dataset.index == 2){
      this.setData({
        winHeight:this.data.graphList.length*230
      })
    }
  },
  showDetail(e){
    // debugger;
    //var newsID = e.currentTarget.dataset.newsid;
    wx.setStorageSync('news_id', e.currentTarget.dataset.newsid);
    wx.navigateTo({
      // url: '/pages/detail/detail?newsID='+newsID,
      url: '/pages/detail/detail',
    })
  },
  onSwiperTap(e){
    wx.navigateTo({
      url: '/pages/alwaysStudy/alwaysStudy',
    })
  }, 
  showGraphDetail(e){
    var graphid = e.currentTarget.dataset.graphid;
    wx.setStorageSync('graphChosen', this.data.graphList[graphid]);
    wx.navigateTo({
      url: '/pages/graphParty/graph'
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //页面加载函数
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    wx.showLoading({
      title: '',
    })
    this.getList();
    // console.log(this.data.swiperList);
  },
  getList(){
    var that=this;
    wx.cloud.callFunction({
      name:'EssayFunctions',
      config:{
        env:that.data.envId
      },
      data:{
        type:'getHistory',
        date:"4月24日"
      }
    }).then((resp)=>{
      that.setData({
        eventsList:resp.result.data,
      });
    }).catch((e) => {
      console.log(e)
      that.setData({
        showUploadTip: true
      })
      wx.hideLoading()
    });

    wx.cloud.callFunction({
      name: 'EssayFunctions',
      config: {
        env: that.data.envId
      },
      data: {
        type: 'getEssay'
      }
    }).then((resp) => {
      for(var j=0;j<resp.result.data.length;j++){
        resp.result.data[j].time=time.formatTime(resp.result.data[j].time);
      }
      // resp.result.data.time=time.formatTime(resp.result.data.time);
      that.setData({
        newsList: resp.result.data.slice(2),
        swiperList:resp.result.data.slice(0,2),
        winHeight:488+that.data.newsList.length*250
      });
      wx.hideLoading()
    }).catch((e) => {
      console.log(e)
      that.setData({
        showUploadTip: true
      })
      wx.hideLoading()
    });

    //获得图解党建列表
    wx.cloud.callFunction({
      name: 'EssayFunctions',
      config: {
        env: that.data.envId
      },
      data: {
        type: 'getGraph'
      }
    }).then((resp) => {
      for(var j=0;j<resp.result.data.length;j++){
        resp.result.data[j].time=time.formatTime(resp.result.data[j].time);
      }
      // resp.result.data.time=time.formatTime(resp.result.data.time);
      that.setData({
        graphList: resp.result.data,
        winHeight3:488+that.data.graphList.length*250
      });
      wx.hideLoading()
    }).catch((e) => {
      console.log(e)
      that.setData({
        showUploadTip: true
      })
      wx.hideLoading()
    });
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
