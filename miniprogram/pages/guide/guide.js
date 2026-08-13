const guideService = require('../../services/guide')

Page({
  data: {
    currentMonth: 8,
    guide: null
  },

  onLoad: function () {
    this.loadGuide()
  },

  loadGuide: function () {
    const guide = guideService.getGuideByMonth(this.data.currentMonth)

    console.log('currentMonth:', this.data.currentMonth)
    console.log('guide:', guide)

    this.setData({
      guide: guide
    })
  },

  handlePrevMonth: function () {
    const month = this.data.currentMonth - 1

    if (month < 0) {
      return
    }

    this.setData({
      currentMonth: month
    }, function () {
      this.loadGuide()
    })
  },

  handleNextMonth: function () {
    const month = this.data.currentMonth + 1

    this.setData({
      currentMonth: month
    }, function () {
      this.loadGuide()
    })
  }
})