Page({
  data: {
    greeting: "早上好",

    baby: {
      nickname: "小芽",
      age: "8个月16天",
      growthDays: 259
    },

    suggestions: [
      {
        id: 1,
        icon: "🥣",
        title: "今日辅食",
        content: "今天可以尝试牛油果"
      },
      {
        id: 2,
        icon: "😴",
        title: "睡眠建议",
        content: "建议睡眠13~14小时"
      },
      {
        id: 3,
        icon: "🧸",
        title: "发育重点",
        content: "鼓励爬行和扶站"
      }
    ],

    quickEntries: [
      {
        id: "guide",
        name: "成长指南",
        icon: "🌱",
        page: "/pages/guide/guide",
        type: "tab"
      },
      {
        id: "record",
        name: "成长记录",
        icon: "📝",
        page: "/pages/record/record",
        type: "tab"
      },
      {
        id: "ai",
        name: "AI助手",
        icon: "🤖",
        page: "",
        type: "page"
      },
      {
        id: "album",
        name: "成长相册",
        icon: "📷",
        page: "",
        type: "page"
      }
    ]
  },

  handleQuickEntry(e) {
    const { page, type } = e.currentTarget.dataset

    if (!page) {
      wx.showToast({
        title: "功能开发中",
        icon: "none"
      })
      return
    }

    if (type === "tab") {
      wx.switchTab({
        url: page
      })
      return
    }

    wx.switchTab({
      url: page
    })
  }
})