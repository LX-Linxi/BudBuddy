const guides = [
  {
    id: "guide_8",
    month: 8,
    stage: "探索期",
    title: "探索世界的成长阶段",
    description: "宝宝开始更加主动地探索周围的世界，对声音、物体和互动表现出越来越浓厚的兴趣。",

    focus: [
      {
        id: "motor",
        icon: "🏃",
        name: "大运动",
        description: "鼓励宝宝练习爬行、坐起和扶站。"
      },
      {
        id: "cognitive",
        icon: "🧠",
        name: "认知",
        description: "通过玩具和日常物品帮助宝宝探索世界。"
      },
      {
        id: "language",
        icon: "🗣️",
        name: "语言",
        description: "多和宝宝交流，回应宝宝发出的声音。"
      },
      {
        id: "social",
        icon: "❤️",
        name: "社交",
        description: "通过表情、声音和游戏与宝宝互动。"
      }
    ],

    milestones: [
      {
        id: "m_801",
        title: "能够独立坐",
        description: "宝宝能够保持坐姿。",
        category: "motor",
        status: "developing"
      },
      {
        id: "m_802",
        title: "主动抓取物品",
        description: "宝宝能够主动伸手拿东西。",
        category: "cognitive",
        status: "developing"
      },
      {
        id: "m_803",
        title: "尝试爬行",
        description: "开始通过移动身体探索环境。",
        category: "motor",
        status: "upcoming"
      }
    ],

    feeding: {
      title: "辅食重点",
      summary: "逐步丰富食物种类，让宝宝接触不同的食物。",
      recommendations: [
        "逐步增加食物种类",
        "注意食物质地是否适合宝宝",
        "尝试新食物时观察宝宝的反应"
      ]
    },

    sleep: {
      title: "睡眠重点",
      summary: "保持规律的昼夜节奏，逐渐形成稳定的睡眠习惯。",
      recommendations: [
        "保持固定的睡前流程",
        "白天安排适当活动",
        "睡前减少过度刺激"
      ]
    },

    activities: [
      {
        id: "activity_801",
        icon: "🧸",
        title: "藏猫猫",
        description: "用毛巾遮住自己的脸，再突然出现。"
      },
      {
        id: "activity_802",
        icon: "📖",
        title: "亲子阅读",
        description: "每天选择简单的绘本和宝宝一起阅读。"
      }
    ],

    tips: [
      {
        type: "attention",
        title: "安全提醒",
        content: "宝宝活动范围内避免放置容易被吞咽的小物件。"
      }
    ]
  }
]

module.exports = guides