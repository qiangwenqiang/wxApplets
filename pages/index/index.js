import {
  request
} from "../../request/index.js";
wx - Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [], // 轮播数组
    catesList: [], //分类导航
    floorList:[],//楼层数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList()
    this.getCateList()
    this.getFloorList()
  },
  // 获取轮播图数据
  getSwiperList() {
    request({
        url: "/home/swiperdata"
      })
      .then(result => {
        this.setData({
          swiperList: result
        })
      })
  },
  // 获取 分类导航数据
  getCateList() {
    request({
        url: "/home/catitems"
      })
      .then(result => {
        this.setData({
          catesList: result
        })
      })
  },
    // 获取 楼层数据
    getFloorList(){
      request({ url: "/home/floordata" })
      .then(result => {
        console.log(result);
        
        this.setData({
          floorList: result
        })
      })
    },
})