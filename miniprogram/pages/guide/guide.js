const babyService = require('../../services/baby')
const guideService = require('../../services/guide')

Page({
  data: {
    currentMonth: null,
    babyMonth: null,
    guide: null,

    minMonth: 0,
    maxMonth: 0,
    guideStatus: ""
  },

  onLoad: function () {
    this.loadGuideRange()
    this.loadCurrentMonth()
  },

  loadGuideRange: function () {
    const minMonth = guideService.getMinMonth()
    const maxMonth = guideService.getMaxMonth()

    this.setData({
      minMonth: minMonth,
      maxMonth: maxMonth
    })
  },

  loadCurrentMonth: function () {
    const age = babyService.getBabyAge()
  
    const babyMonth = age.months
    const minMonth = this.data.minMonth
    const maxMonth = this.data.maxMonth
  
    let currentMonth = babyMonth
    let guideStatus = ""
  
    // 宝宝月龄小于当前最小指南月龄
    if (babyMonth < minMonth) {
      currentMonth = minMonth
       guideStatus = "当前显示最早可用的成长指南"
    }
  
    // 宝宝月龄大于当前最大指南月龄
    if (babyMonth > maxMonth) {
      currentMonth = maxMonth
          guideStatus = "当前显示最新可用的成长指南"
    }
  
    this.setData({
      currentMonth: currentMonth,
      babyMonth: babyMonth,
      guideStatus: guideStatus
    }, function () {
      this.loadGuide()
    })
  },

  loadGuide: function () {
    const guide = guideService.getGuideByMonth(
      this.data.currentMonth
    )

    this.setData({
      guide: guide
    })
  },

  handlePrevMonth: function () {
    if (this.data.currentMonth <= this.data.minMonth) {
      return
    }

    const month = this.data.currentMonth - 1

    this.setData({
      currentMonth: month
    }, function () {
      this.loadGuide()
    })
  },

  handleNextMonth: function () {
    if (this.data.currentMonth >= this.data.maxMonth) {
      return
    }

    const month = this.data.currentMonth + 1

    this.setData({
      currentMonth: month
    }, function () {
      this.loadGuide()
    })
  }
})