const guides = [
  
  {
    id: "guide_7",
    month: 7,
    stage: "探索期",
    title: "开始主动探索世界",
    description: "宝宝开始更加主动地观察和探索周围的环境，身体活动能力和互动能力逐渐增强。",

    focus: [
      {
        id: "motor",
        icon: "🏃",
        name: "大运动",
        description: "鼓励宝宝练习坐稳、翻身和尝试移动。"
      },
      {
        id: "cognitive",
        icon: "🧠",
        name: "认知",
        description: "通过不同材质和形状的物品帮助宝宝探索。"
      },
      {
        id: "language",
        icon: "🗣️",
        name: "语言",
        description: "多回应宝宝的声音，帮助建立语言互动。"
      },
      {
        id: "social",
        icon: "❤️",
        name: "社交",
        description: "通过表情、声音和游戏增加亲子互动。"
      }
    ],

    milestones: [
      {
        id: "m_701",
        title: "能够较稳定地坐",
        description: "宝宝能够保持坐姿并进行简单活动。",
        category: "motor",
        status: "developing"
      },
      {
        id: "m_702",
        title: "主动伸手拿物品",
        description: "宝宝会主动伸手抓取感兴趣的东西。",
        category: "cognitive",
        status: "developing"
      },
      {
        id: "m_703",
        title: "对声音做出回应",
        description: "宝宝会通过转头、发声等方式回应声音。",
        category: "language",
        status: "developing"
      }
    ],

    feeding: {
      title: "辅食重点",
      summary: "逐步增加食物种类和口感，让宝宝适应更多食物。",
      recommendations: [
        "逐步增加食物种类",
        "保持食物软烂、易吞咽",
        "尝试新食物时观察宝宝反应"
      ]
    },

    sleep: {
      title: "睡眠重点",
      summary: "继续建立规律的昼夜节奏。",
      recommendations: [
        "保持固定的睡前流程",
        "白天安排适当活动",
        "避免睡前过度兴奋"
      ]
    },

    activities: [
      {
        id: "activity_701",
        icon: "🧸",
        title: "玩具抓取",
        description: "将玩具放在宝宝稍微够不到的位置，鼓励宝宝主动伸手。"
      },
      {
        id: "activity_702",
        icon: "📖",
        title: "亲子阅读",
        description: "和宝宝一起看颜色鲜明、图案简单的绘本。"
      }
    ],

    tips: [
      {
        type: "attention",
        title: "安全提醒",
        content: "宝宝开始主动移动后，需要特别注意床边、沙发边等高处环境。"
      }
    ]
  },

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
  },

  {
    id: "guide_9",
    month: 9,
    stage: "运动发展期",
    title: "移动能力快速发展",
    description: "宝宝的活动范围逐渐扩大，开始通过爬行、移动和抓取主动探索环境。",

    focus: [
      {
        id: "motor",
        icon: "🏃",
        name: "大运动",
        description: "鼓励宝宝爬行、坐起以及尝试扶站。"
      },
      {
        id: "fine",
        icon: "🖐️",
        name: "精细动作",
        description: "鼓励宝宝使用手指抓取小型安全物品。"
      },
      {
        id: "language",
        icon: "🗣️",
        name: "语言",
        description: "多和宝宝进行面对面的语言交流。"
      },
      {
        id: "social",
        icon: "❤️",
        name: "社交",
        description: "通过游戏帮助宝宝理解互动和回应。"
      }
    ],

    milestones: [
      {
        id: "m_901",
        title: "能够灵活爬行",
        description: "宝宝开始使用爬行主动移动。",
        category: "motor",
        status: "developing"
      },
      {
        id: "m_902",
        title: "能够扶着物品站立",
        description: "宝宝可能开始尝试扶站。",
        category: "motor",
        status: "upcoming"
      },
      {
        id: "m_903",
        title: "开始理解简单指令",
        description: "可能逐渐理解简单的语言提示。",
        category: "language",
        status: "upcoming"
      }
    ],

    feeding: {
      title: "辅食重点",
      summary: "逐渐增加食物的多样性和适宜的颗粒感。",
      recommendations: [
        "继续增加食物种类",
        "根据宝宝能力逐渐调整食物质地",
        "保持规律的进餐时间"
      ]
    },

    sleep: {
      title: "睡眠重点",
      summary: "保持稳定的作息和睡前流程。",
      recommendations: [
        "保持规律的午睡时间",
        "建立固定睡前仪式",
        "减少睡前屏幕和强刺激"
      ]
    },

    activities: [
      {
        id: "activity_901",
        icon: "🚗",
        title: "爬行追玩具",
        description: "将安全玩具放在前方，鼓励宝宝移动过去拿取。"
      },
      {
        id: "activity_902",
        icon: "🎵",
        title: "声音游戏",
        description: "通过唱歌和模仿声音与宝宝互动。"
      }
    ],

    tips: [
      {
        type: "attention",
        title: "安全提醒",
        content: "宝宝活动范围扩大后，应检查地面、电源和家具边角等环境安全。"
      }
    ]
  },

  {
    id: "guide_10",
    month: 10,
    stage: "运动探索期",
    title: "探索范围越来越大",
    description: "宝宝开始更加积极地移动和探索，可能出现扶站、移动和模仿行为。",

    focus: [
      {
        id: "motor",
        icon: "🏃",
        name: "大运动",
        description: "鼓励宝宝爬行、扶站和尝试移动。"
      },
      {
        id: "fine",
        icon: "🖐️",
        name: "精细动作",
        description: "通过安全的小物件练习抓握和放下。"
      },
      {
        id: "language",
        icon: "🗣️",
        name: "语言",
        description: "多重复生活中的常见词语。"
      },
      {
        id: "social",
        icon: "❤️",
        name: "社交",
        description: "鼓励宝宝模仿大人的动作和声音。"
      }
    ],

    milestones: [
      {
        id: "m_1001",
        title: "扶站",
        description: "宝宝可能开始主动扶着家具站起来。",
        category: "motor",
        status: "developing"
      },
      {
        id: "m_1002",
        title: "模仿动作",
        description: "开始模仿拍手、挥手等简单动作。",
        category: "social",
        status: "developing"
      },
      {
        id: "m_1003",
        title: "理解简单词语",
        description: "逐渐理解生活中经常出现的词语。",
        category: "language",
        status: "upcoming"
      }
    ],

    feeding: {
      title: "辅食重点",
      summary: "继续丰富食物种类，并逐渐培养自主进食能力。",
      recommendations: [
        "提供多样化食物",
        "根据宝宝能力提供适合抓握的食物",
        "保持规律的进餐节奏"
      ]
    },

    sleep: {
      title: "睡眠重点",
      summary: "继续保持稳定作息。",
      recommendations: [
        "保持固定起床时间",
        "保持规律午睡",
        "睡前保持安静环境"
      ]
    },

    activities: [
      {
        id: "activity_1001",
        icon: "👏",
        title: "模仿游戏",
        description: "和宝宝一起拍手、挥手，让宝宝模仿动作。"
      },
      {
        id: "activity_1002",
        icon: "🧸",
        title: "站立取物",
        description: "将玩具放在安全高度，鼓励宝宝扶站拿取。"
      }
    ],

    tips: [
      {
        type: "attention",
        title: "安全提醒",
        content: "宝宝可能开始扶站，需要固定容易倾倒的家具。"
      }
    ]
  },

  {
    id: "guide_11",
    month: 11,
    stage: "独立探索期",
    title: "逐渐建立自己的探索方式",
    description: "宝宝的移动和互动能力进一步增强，会更加主动地表达自己的兴趣和需求。",

    focus: [
      {
        id: "motor",
        icon: "🏃",
        name: "大运动",
        description: "鼓励宝宝扶走和尝试更多移动方式。"
      },
      {
        id: "fine",
        icon: "🖐️",
        name: "精细动作",
        description: "通过积木、餐具等安全物品练习手部动作。"
      },
      {
        id: "language",
        icon: "🗣️",
        name: "语言",
        description: "多使用简单、重复的词语和宝宝交流。"
      },
      {
        id: "social",
        icon: "❤️",
        name: "社交",
        description: "鼓励宝宝用动作和声音表达需求。"
      }
    ],

    milestones: [
      {
        id: "m_1101",
        title: "扶着家具移动",
        description: "宝宝可能开始沿着家具移动。",
        category: "motor",
        status: "developing"
      },
      {
        id: "m_1102",
        title: "使用手指抓取",
        description: "能够更加灵活地使用手指拿取物品。",
        category: "fine",
        status: "developing"
      },
      {
        id: "m_1103",
        title: "主动表达需求",
        description: "可能通过动作、声音表达自己的需求。",
        category: "language",
        status: "developing"
      }
    ],

    feeding: {
      title: "辅食重点",
      summary: "继续提供丰富的食物选择，帮助宝宝建立良好的饮食习惯。",
      recommendations: [
        "保持食物种类丰富",
        "鼓励宝宝参与自主进食",
        "保持规律的进餐时间"
      ]
    },

    sleep: {
      title: "睡眠重点",
      summary: "保持规律作息，为接下来阶段做好准备。",
      recommendations: [
        "保持固定睡眠时间",
        "避免过度疲劳",
        "维持稳定的睡前流程"
      ]
    },

    activities: [
      {
        id: "activity_1101",
        icon: "🧱",
        title: "积木游戏",
        description: "和宝宝一起堆放、拿取和探索积木。"
      },
      {
        id: "activity_1102",
        icon: "👋",
        title: "挥手游戏",
        description: "通过挥手、拍手等动作和宝宝互动。"
      }
    ],

    tips: [
      {
        type: "attention",
        title: "安全提醒",
        content: "继续保持活动区域安全，并避免宝宝接触小型可吞咽物品。"
      }
    ]
  },

  {
    id: "guide_12",
    month: 12,
    stage: "成长里程碑期",
    title: "迎来一岁成长里程碑",
    description: "宝宝即将进入新的成长阶段，运动、语言、认知和社交能力都在不断发展。",

    focus: [
      {
        id: "motor",
        icon: "🏃",
        name: "大运动",
        description: "鼓励宝宝探索站立、扶走等动作。"
      },
      {
        id: "fine",
        icon: "🖐️",
        name: "精细动作",
        description: "通过安全玩具练习抓取、放置和操作。"
      },
      {
        id: "language",
        icon: "🗣️",
        name: "语言",
        description: "多和宝宝交流，回应宝宝的表达。"
      },
      {
        id: "social",
        icon: "❤️",
        name: "社交",
        description: "通过日常互动帮助宝宝建立社交经验。"
      }
    ],

    milestones: [
      {
        id: "m_1201",
        title: "尝试独立站立",
        description: "部分宝宝可能开始尝试短暂独立站立。",
        category: "motor",
        status: "upcoming"
      },
      {
        id: "m_1202",
        title: "理解简单指令",
        description: "逐渐理解日常生活中的简单指令。",
        category: "language",
        status: "developing"
      },
      {
        id: "m_1203",
        title: "模仿日常行为",
        description: "开始模仿大人的简单动作。",
        category: "social",
        status: "developing"
      }
    ],

    feeding: {
      title: "辅食重点",
      summary: "继续提供多样化食物，逐步培养更加规律的家庭进餐习惯。",
      recommendations: [
        "保持食物种类多样",
        "根据宝宝能力调整食物质地",
        "逐渐建立规律的家庭进餐体验"
      ]
    },

    sleep: {
      title: "睡眠重点",
      summary: "继续保持稳定的睡眠作息。",
      recommendations: [
        "保持固定起床和入睡时间",
        "维持稳定的睡前流程",
        "创造安静舒适的睡眠环境"
      ]
    },

    activities: [
      {
        id: "activity_1201",
        icon: "📚",
        title: "亲子阅读",
        description: "每天和宝宝一起阅读简单绘本。"
      },
      {
        id: "activity_1202",
        icon: "🧸",
        title: "模仿游戏",
        description: "通过日常动作帮助宝宝理解和模仿。"
      }
    ],

    tips: [
      {
        type: "attention",
        title: "温馨提醒",
        content: "每个宝宝的发展节奏不同，成长指南用于参考，不代表统一的发展标准。"
      }
    ]
  }
]

module.exports = guides