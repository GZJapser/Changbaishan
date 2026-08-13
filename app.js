"use strict";

const day1Stops = [
  {
    id: "airport",
    order: 1,
    time: "07:15–09:30",
    timeNote: "航班",
    category: "抵达",
    icon: "plane",
    title: "延吉朝阳川国际机场",
    mapLabel: "延吉朝阳川机场",
    subtitle: "KN5579 · 北京大兴（PKX）→ 延吉（YNJ）· 无托运行李",
    address: "延吉市长白山西路6666号 · 国内到达",
    note: "官网在售 · 2026-08-03核验",
    noteType: "confirmed",
    zone: "yanji",
    lon: 129.45136,
    lat: 42.88282,
    labelDx: 0,
    labelDy: 70,
    link: "https://www.flycua.com/ticket/search/pkx-260813-ynj--1-0-0-0-0",
    hardConstraint: {
      label: "固定航班",
      latestDeparture: "07:15起飞",
      arrival: "预计09:30抵达延吉",
      buffer: "预计09:45–09:50走出航站楼"
    }
  },
  {
    id: "luggageDrop",
    order: 2,
    time: "10:05–10:35",
    timeNote: "寄存",
    category: "行李寄存待确认",
    icon: "train",
    title: "延吉西站（寄存行李）",
    mapLabel: "延吉西站（寄存／乘车）",
    mapGroup: "yanji-station-visits",
    mapGroupTitle: "延吉西站（寄存／乘车）",
    subtitle: "先询问出站口服务台或商铺；具体寄存点未获官方确认",
    address: "延吉西站出站口外优先问询 · 办理前确认取件时间与凭证",
    note: "如站口无法寄存，立即询问附近人工寄存；贵重物品随身",
    noteType: "warning",
    planStatus: "storagePending",
    planStatusKey: "luggageStorage",
    zone: "yanji",
    lon: 129.407819,
    lat: 42.902411,
    labelDx: 0,
    labelDy: -54,
    link: "https://kyfw.12306.cn/otn/gonggao/deliveryPrice.html"
  },
  {
    id: "uncle",
    order: 3,
    time: "11:00–12:10",
    timeNote: "午餐",
    category: "餐厅",
    icon: "food",
    title: "大头叔烤鸡爪（进学街店）",
    mapLabel: "大头叔（进学店）",
    subtitle: "午餐 · 进学街店",
    address: "延吉市医院东门北约70米",
    note: "中午营业时间建议当天电话确认",
    noteType: "confirmed",
    zone: "yanji",
    lon: 129.51877,
    lat: 42.902411,
    labelDx: -44,
    labelDy: -56,
    link: "https://ditu.amap.com/place/B0I2VS3LZW"
  },
  {
    id: "bigWall",
    order: 4,
    time: "12:30–12:50",
    timeNote: "打卡",
    category: "大字红墙",
    icon: "camera",
    title: "延吉大字红墙",
    mapLabel: "延吉大字红墙",
    subtitle: "海兰路红砖墙上的“延吉”大字",
    address: "西市场南侧海兰路 · 女人世界对面胡同附近",
    note: "当前为街区约位",
    noteType: "confirmed",
    provisional: true,
    zone: "yanji",
    lon: 129.506192,
    lat: 42.905088,
    labelDx: 52,
    labelDy: 58,
    link: "https://www.sohu.com/a/786845023_121123856"
  },
  {
    id: "cafe",
    order: 5,
    time: "13:00–13:40",
    timeNote: "咖啡",
    category: "咖啡店",
    icon: "food",
    title: "劳顶笨咖啡（延大店）",
    mapLabel: "劳顶笨咖啡",
    subtitle: "咖啡 · 劳顶笨面包 · 雪冰",
    address: "公园路大学城1号楼E入口5楼12–13号",
    note: "公开营业时间09:00–23:30",
    noteType: "confirmed",
    zone: "yanji",
    lon: 129.48486,
    lat: 42.905,
    markerDx: -24,
    markerDy: 16,
    labelDx: -72,
    labelDy: 60,
    link: "https://hk.trip.com/restaurant/china/yanji/detail/rest-77810425/"
  },
  {
    id: "mart",
    order: 6,
    time: "13:45–14:15",
    timeNote: "购物",
    category: "韩国食品百货",
    icon: "shop",
    title: "隆玛特韩国食品百货（天池广场店）",
    mapLabel: "隆玛特（天池店）",
    subtitle: "韩国食品与日用品 · 天池广场店",
    address: "天池广场1层",
    note: "出发当天可电话确认营业状态",
    noteType: "confirmed",
    zone: "yanji",
    lon: 129.487363,
    lat: 42.907364,
    markerDx: 28,
    markerDy: -17,
    labelDx: 74,
    labelDy: -55,
    link: "https://www.amap.com/place/B0FFKBKK72"
  },
  {
    id: "yanjiStation",
    order: 7,
    time: "14:40–16:33",
    timeNote: "取行李·动车",
    category: "取行李／乘车",
    icon: "train",
    title: "延吉西站（进站口）",
    mapLabel: "延吉西站（寄存／乘车）",
    mapGroup: "yanji-station-visits",
    mapGroupTitle: "延吉西站（寄存／乘车）",
    subtitle: "14:40–15:05取回行李 · G8140 16:33发车",
    address: "延吉市朝阳川镇光石村 · 延三公路",
    note: "12306可预订 · 检票口待公布",
    noteType: "confirmed",
    zone: "yanji",
    lon: 129.407819,
    lat: 42.902411,
    labelDx: 0,
    labelDy: -54,
    link: "https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc&fs=%E5%BB%B6%E5%90%89%E8%A5%BF%2CYXL&ts=%E9%95%BF%E7%99%BD%E5%B1%B1%2CCUL&date=2026-08-13&flag=N%2CN%2CY"
  },
  {
    id: "changbaiStation",
    order: 8,
    time: "18:18",
    timeNote: "抵达",
    category: "火车站",
    icon: "train",
    title: "长白山站",
    subtitle: "G8140 · 延吉西 → 长白山 · 历时1小时45分",
    address: "安图县二道白河镇枫林路1号",
    note: "注意：不是“长白山西站”",
    noteType: "confirmed",
    zone: "changbai",
    lon: 128.12192,
    lat: 42.46052,
    labelDx: 0,
    labelDy: -57,
    link: "https://ditu.amap.com/place/B0H3GR68FG"
  },
  {
    id: "hotel",
    order: 9,
    time: "18:35–19:00",
    timeNote: "预计入住",
    category: "酒店未定",
    icon: "hotel",
    title: "二道白河酒店",
    subtitle: "办理入住、放行李；温泉时间待协调",
    address: "具体酒店未提供 · 当前仅使用镇中心示意位置",
    note: "先确认酒店，再更新接站时间",
    noteType: "warning",
    planStatus: "locationPending",
    provisional: true,
    zone: "changbai",
    lon: 128.13797,
    lat: 42.45494,
    labelDx: 20,
    labelDy: 62,
    link: null
  },
  {
    id: "dinner",
    order: 10,
    time: "19:00–20:00",
    timeNote: "晚餐",
    category: "餐厅未定",
    icon: "food",
    title: "二道白河晚餐",
    subtitle: "晚餐餐厅尚未确定",
    address: "具体餐厅未提供 · 示意位置",
    note: "确认酒店后，优先选择步行可达餐厅",
    noteType: "warning",
    planStatus: "locationPending",
    provisional: true,
    zone: "changbai",
    lon: 128.1462,
    lat: 42.4513,
    labelDx: 42,
    labelDy: 62,
    link: null
  },
  {
    id: "forest",
    order: 11,
    time: "20:00–21:00",
    timeNote: "夜游",
    category: "步道待核",
    icon: "tree",
    title: "酒店周边原始森林步道",
    subtitle: "第一选项：酒店周边原始森林步道；温泉另行协调",
    address: "具体步道、入口及夜间开放情况待确认",
    note: "具体入口、夜间开放与安全条件待确认",
    noteType: "warning",
    planStatus: "verificationPending",
    provisional: true,
    zone: "changbai",
    lon: 128.1455,
    lat: 42.4614,
    labelDx: 65,
    labelDy: -55,
    link: null
  }
];

const day1Legs = [
  {
    id: "airport-luggage",
    from: "airport",
    to: "luggageDrop",
    mode: "car",
    label: "出租车前往延吉西站",
    duration: "10–15分钟",
    detail: "预计09:45–10:00走出航站楼 · 含候车按15–20分钟",
    publicTransport: {
      label: "7路：延吉机场站→延吉西站（下一班约11:00）",
      duration: "约75–100分钟（含等待）"
    },
    status: "warning",
    curve: -0.16
  },
  {
    id: "luggage-uncle",
    from: "luggageDrop",
    to: "uncle",
    mode: "car",
    label: "出租车前往进学街店",
    duration: "20–30分钟",
    detail: "寄存完成后立即出发",
    publicTransport: {
      label: "B37路至德铭宾馆后步行6–8分钟",
      duration: "45–65分钟"
    },
    status: "estimate",
    curve: -0.1
  },
  {
    id: "uncle-big-wall",
    from: "uncle",
    to: "bigWall",
    mode: "car",
    label: "出租车前往大字红墙",
    duration: "5–10分钟",
    detail: "首选步行约15–22分钟，通常比等公交更稳",
    publicTransport: {
      label: "市医院站乘44路至西市场／西市场北后步行",
      duration: "15–30分钟"
    },
    status: "estimate",
    curve: 0.12
  },
  {
    id: "big-wall-cafe",
    from: "bigWall",
    to: "cafe",
    mode: "car",
    label: "出租车前往劳顶笨咖啡",
    duration: "6–10分钟",
    detail: "全程步行约20–28分钟",
    publicTransport: {
      label: "西市场站乘B4路至延边大学(BRT)后步行",
      duration: "15–50分钟"
    },
    status: "estimate",
    curve: -0.13
  },
  {
    id: "cafe-mart",
    from: "cafe",
    to: "mart",
    mode: "walk",
    label: "步行到天池广场",
    duration: "3–7分钟",
    detail: "同一延大片区，步行比乘车更快",
    status: "estimate",
    curve: 0.16
  },
  {
    id: "mart-station",
    from: "mart",
    to: "yanjiStation",
    mode: "car",
    label: "出租车前往延吉西站",
    duration: "15–22分钟",
    detail: "含候车按20–30分钟 · 14:15离开",
    publicTransport: {
      label: "少年宫(BRT)乘B4／B37／B38至延吉西站",
      duration: "30–45分钟"
    },
    status: "warning",
    curve: 0.09
  },
  {
    id: "station-changbai",
    from: "yanjiStation",
    to: "changbaiStation",
    mode: "train",
    label: "G8140 动车",
    duration: "1小时45分",
    detail: "16:33 延吉西 → 18:18 长白山",
    status: "confirmed",
    curve: 0.12,
    hardConstraint: {
      label: "固定动车",
      latestDeparture: "14:15离开隆玛特",
      arrival: "16:33发车 · 18:18抵达",
      buffer: "15:05前取回行李，之后办理进站"
    }
  },
  {
    id: "changbai-hotel",
    from: "changbaiStation",
    to: "hotel",
    mode: "car",
    label: "接驳 / 打车到酒店",
    duration: "5–15分钟",
    detail: "18:18到站 · 预计18:35–19:00办理入住",
    status: "provisional",
    curve: -0.15
  },
  {
    id: "hotel-dinner",
    from: "hotel",
    to: "dinner",
    mode: "walk",
    label: "酒店到晚餐",
    duration: "待确认",
    detail: "餐厅尚未选择",
    status: "provisional",
    curve: 0.14
  },
  {
    id: "dinner-forest",
    from: "dinner",
    to: "forest",
    mode: "walk",
    label: "晚餐到森林步道",
    duration: "待确认",
    detail: "步道入口尚未选择",
    status: "provisional",
    curve: -0.13
  }
];

const day1Bounds = {
  yanji: { minLon: 129.397, maxLon: 129.525, minLat: 42.878, maxLat: 42.914 },
  changbai: { minLon: 128.113, maxLon: 128.154, minLat: 42.447, maxLat: 42.466 }
};

const day2Stops = [
  {
    id: "d2-origin",
    order: 1,
    time: "07:30",
    timeNote: "出发",
    category: "早段车程",
    icon: "hotel",
    title: "北坡住宿地出发",
    subtitle: "北坡 → 长白山西坡 · 按第一选项采用包车",
    address: "二道白河／北坡住宿地 · 与第一天酒店为同一待确认事项",
    note: "包车约2小时；最晚07:30出发，实际路况与下车点待司机确认",
    noteType: "warning",
    planStatus: "locationPending",
    planStatusKey: "hotel",
    provisional: true,
    zone: "origin",
    lon: 128.12,
    lat: 42.42,
    labelDx: -18,
    labelDy: 62,
    link: null
  },
  {
    id: "d2-entrance",
    order: 2,
    time: "09:30–10:30",
    timeNote: "入场",
    category: "景区换乘",
    icon: "landmark",
    title: "长白山西景区游客中心／山门",
    mapLabel: "西景区游客中心",
    subtitle: "景区大巴＋换乘车约50–70分钟 · 不含排队",
    address: "白溪交通集散中心／长白山西景区游客中心一带",
    note: "入园票务、入口与排队时间待落实；山路曲折，晕车人士提前备药",
    noteType: "warning",
    planStatus: "bookingPending",
    planStatusKey: "westEntry",
    provisional: true,
    zone: "west",
    lon: 127.78,
    lat: 42.052,
    labelDx: 12,
    labelDy: 64,
    link: null
  },
  {
    id: "d2-summit",
    order: 3,
    time: "11:00–13:00",
    timeNote: "主峰",
    category: "天池观景",
    icon: "camera",
    title: "西坡天池主峰",
    mapGroup: "d2-summit-meal",
    mapGroupTitle: "主峰／山上简餐",
    subtitle: "徒步1442级台阶 · 西坡观天池",
    address: "长白山西坡主峰游览区 · 图上仅示意相对方位",
    note: "爬升约40–50分钟；山顶风大，带外套和雨衣",
    noteType: "warning",
    provisional: true,
    zone: "west",
    lon: 128.05,
    lat: 41.99,
    labelDx: -34,
    labelDy: -58,
    link: null
  },
  {
    id: "d2-lunch",
    order: 4,
    time: "13:00–14:00",
    timeNote: "午餐",
    category: "山上简餐",
    icon: "food",
    title: "山上简餐",
    mapGroup: "d2-summit-meal",
    mapGroupTitle: "主峰／山上简餐",
    subtitle: "按第一选项录入 · 山上餐饮选择较少",
    address: "西坡景区内休息点 · 实际用餐位置随游览进度确定",
    note: "餐饮选择少；即使选择山上简餐，也建议自备水和零食",
    noteType: "confirmed",
    provisional: true,
    zone: "west",
    lon: 128.03,
    lat: 41.98,
    labelDx: 62,
    labelDy: 20,
    link: null
  },
  {
    id: "d2-canyon",
    order: 5,
    time: "14:00–15:30",
    timeNote: "游览",
    category: "峡谷",
    icon: "tree",
    title: "锦江大峡谷",
    subtitle: "景区内乘车前往 · 车程约20分钟",
    address: "长白山西坡锦江大峡谷游览区 · 图上仅示意相对方位",
    note: "15:30结束后需衔接16:30漂流接驳，不建议延长停留",
    noteType: "warning",
    provisional: true,
    zone: "west",
    lon: 127.91372,
    lat: 41.89831,
    labelDx: -10,
    labelDy: -58,
    link: null
  },
  {
    id: "d2-rafting",
    order: 6,
    time: "16:30–17:30",
    timeNote: "漂流",
    category: "漂流",
    icon: "tree",
    title: "长白山原始生态第一漂",
    mapLabel: "原始生态第一漂",
    subtitle: "参考55元／人 · 接送与营业情况待商家确认",
    address: "白溪交通集散中心附近 · 具体上车点以商家通知为准",
    note: "漂流预订、营业情况、接送范围和上车点均需出发前确认",
    noteType: "warning",
    planStatus: "bookingPending",
    planStatusKey: "raftingBooking",
    provisional: true,
    zone: "return",
    lon: 127.714764,
    lat: 42.052888,
    labelDx: 10,
    labelDy: 62,
    link: null
  },
  {
    id: "d2-dinner",
    order: 7,
    time: "17:30–18:30",
    timeNote: "晚餐",
    category: "餐厅未定",
    icon: "food",
    title: "西坡晚餐",
    subtitle: "晚餐地点尚未确定",
    address: "具体餐厅未提供 · 当前仅按返程沿线示意",
    note: "18:30需开始返程，优先选择接驳顺路且出餐快的餐厅",
    noteType: "warning",
    planStatus: "locationPending",
    planStatusKey: "dinner",
    provisional: true,
    zone: "return",
    lon: 127.8,
    lat: 42.12,
    labelDx: -4,
    labelDy: -58,
    link: null
  },
  {
    id: "d2-return",
    order: 8,
    time: "18:30–20:30",
    timeNote: "返程",
    category: "晚段车程",
    icon: "hotel",
    title: "返回二道白河住宿地",
    subtitle: "长白山西坡 → 二道白河／北坡住宿地 · 按第一选项选择拼车",
    address: "与当天出发住宿地相同 · 酒店确认后更新",
    note: "预计20:30抵达；酒店未定事项与早晨出发点共用，不重复计数",
    noteType: "warning",
    planStatus: "locationPending",
    planStatusKey: "hotel",
    provisional: true,
    zone: "return",
    lon: 128.12,
    lat: 42.42,
    labelDx: -30,
    labelDy: -60,
    link: null
  }
];

const day2Legs = [
  {
    id: "d2-origin-entrance",
    from: "d2-origin",
    to: "d2-entrance",
    mode: "car",
    label: "包车前往长白山西坡",
    duration: "约2小时",
    detail: "07:30 → 09:30 · 实际路况与下车点待司机确认",
    status: "provisional",
    curve: -0.1,
    hardConstraint: {
      label: "07:30固定出发",
      latestDeparture: "最晚07:30离开住宿地",
      arrival: "预计09:30抵达西坡",
      buffer: "入场从09:30开始，未预留额外迟到缓冲"
    }
  },
  {
    id: "d2-entrance-summit",
    from: "d2-entrance",
    to: "d2-summit",
    mode: "car",
    label: "景区换乘至主峰台阶下",
    duration: "约50–70分钟",
    detail: "景区大巴＋换乘车 · 不含现场排队时间",
    status: "estimate",
    curve: 0.08
  },
  {
    id: "d2-summit-lunch",
    from: "d2-summit",
    to: "d2-lunch",
    mode: "walk",
    label: "主峰游览结束后用餐",
    duration: "现场衔接",
    detail: "13:00开始午餐 · 实际下撤时间按现场调整",
    status: "provisional",
    curve: -0.12,
    hideOnMap: true
  },
  {
    id: "d2-lunch-canyon",
    from: "d2-lunch",
    to: "d2-canyon",
    mode: "car",
    label: "景区车前往锦江大峡谷",
    duration: "约20分钟",
    detail: "景区内交通 · 已包含在14:00–15:30游览窗口内",
    status: "estimate",
    curve: 0.1
  },
  {
    id: "d2-canyon-rafting",
    from: "d2-canyon",
    to: "d2-rafting",
    mode: "car",
    label: "峡谷结束后衔接漂流接驳",
    duration: "约30–60分钟",
    detail: "15:30结束峡谷 · 16:30白溪方向接驳；具体接法待复核",
    status: "provisional",
    planStatus: "transferPending",
    planStatusKey: "raftingTransfer",
    curve: -0.08,
    hardConstraint: {
      label: "16:30漂流接驳",
      latestDeparture: "最晚15:30结束峡谷游览",
      arrival: "16:30前到达指定上车点",
      buffer: "接驳方式和集合点未定，当前30–60分钟只能视为预留窗口"
    }
  },
  {
    id: "d2-rafting-dinner",
    from: "d2-rafting",
    to: "d2-dinner",
    mode: "car",
    label: "漂流结束后前往晚餐",
    duration: "待确认",
    detail: "晚餐地点未定 · 优先选择返程顺路地点",
    status: "provisional",
    curve: 0.1
  },
  {
    id: "d2-dinner-return",
    from: "d2-dinner",
    to: "d2-return",
    mode: "car",
    label: "拼车返回二道白河住宿地",
    duration: "约2小时",
    detail: "18:30 → 20:30 · 按第一选项选择拼车",
    status: "provisional",
    curve: -0.1,
    hardConstraint: {
      label: "18:30固定返程",
      latestDeparture: "最晚18:30结束晚餐",
      arrival: "预计20:30抵达住宿地",
      buffer: "晚餐结束即出发；若漂流延误，返程会同步后移"
    }
  }
];

const dayPlans = {
  day1: {
    id: "day1",
    label: "第一天",
    pageTitle: "延吉 · 长白山",
    dateLine: "2026年8月13日 · 周四 · 北京→延吉→长白山",
    timelineKicker: "周四 · 8月13日",
    timelineTitle: "第一天时间线",
    documentTitle: "第一天 延吉至长白山｜高山路线手记",
    metaDescription: "先到延吉西站寄存行李，再游览延吉并乘动车前往长白山的第一天路线示意图",
    mapPanelTitle: "跨城关系＋局部等比示意图",
    mapDisclaimer: "全程为跨城关系总览 · 局部视图等比 · 非导航地图",
    mapSvgTitle: "延吉至长白山第一天路线示意图",
    mapSvgDescription: "第一天全程页是跨城关系总览，用于阅读北京、延吉西站寄存、市区游览、返回西站乘车与长白山的行程顺序；延吉市内和二道白河局部视图使用等比投影。它不是导航地图，不提供定位功能。",
    endLabel: "第一天行程完成",
    footnote: "延吉西站寄存点须现场确认；大字红墙使用街区约位。页面不会自动改动行程时间。",
    stops: day1Stops,
    legs: day1Legs,
    bounds: day1Bounds,
    views: [
      { id: "overview", label: "跨城总览" },
      { id: "yanji", label: "延吉市内" },
      { id: "changbai", label: "二道白河" }
    ],
    compareDefaults: ["airport", "luggageDrop"],
    nextAction: {
      stopId: "airport",
      title: "乘坐KN5579前往延吉",
      place: "北京大兴国际机场",
      time: "07:15起飞",
      timeRange: "07:15—09:30",
      arrival: "预计09:30抵达延吉",
      arrivalCompact: "预计09:30抵达",
      commute: "飞行约2小时15分钟；无托运行李，预计09:45–10:00走出航站楼后先去延吉西站寄存",
      compactCommute: "飞行2时15分 · 无托运",
      reminder: "",
      compactReminder: ""
    },
    overviewNodes: [
      { id: "beijing", target: "airport", stopIds: ["airport"], x: 145, y: 155, label: "北京大兴", sub: "07:15 · PKX", number: "起", provisional: false },
      { id: "yanji", target: "luggageDrop", stopIds: ["luggageDrop", "uncle", "bigWall", "cafe", "mart", "yanjiStation"], x: 735, y: 190, label: "延吉市内", sub: "09:30–16:33 · 西站往返", number: "2–7", provisional: true },
      { id: "station", target: "changbaiStation", stopIds: ["changbaiStation"], x: 390, y: 440, label: "长白山站", sub: "18:18 · CUL", number: "8", provisional: false },
      { id: "town", target: "hotel", stopIds: ["hotel", "dinner", "forest"], x: 475, y: 545, label: "二道白河", sub: "18:35起 · 3项待落实", number: "9–11", provisional: true }
    ],
    overviewRoutes: [
      { from: 0, to: 1, bend: -0.27, className: "flight-route", title: "KN5579 · 2小时15分", subtitle: "07:15 → 09:30" },
      { from: 1, to: 2, bend: 0.14, className: "rail-route", underlayClass: "rail-route-underlay", title: "G8140 · 1小时45分", subtitle: "16:33 → 18:18", labelOffset: { x: -100, y: 55 } },
      { from: 2, to: 3, bend: -0.12, className: "provisional", title: "酒店接驳 · 5–15分", subtitle: "酒店确认后更新", labelOffset: { x: 300, y: -10 } }
    ],
    contextLabel: "跨城关系总览 · 局部视图保持等比"
  },
  day2: {
    id: "day2",
    label: "第二天",
    pageTitle: "长白山西坡 · 漂流",
    dateLine: "2026年8月14日 · 周五 · 西坡主峰→锦江大峡谷→漂流",
    timelineKicker: "周五 · 8月14日",
    timelineTitle: "第二天时间线",
    documentTitle: "第二天 长白山西坡与漂流｜高山路线手记",
    metaDescription: "保持方位与相对比例的长白山西坡、锦江大峡谷与漂流第二天路线示意图",
    mapPanelTitle: "按比例路线示意图",
    mapDisclaimer: "路线示意 · 保持方位与相对比例 · 非导航地图",
    mapSvgTitle: "长白山西坡与漂流第二天路线示意图",
    mapSvgDescription: "保持方位与相对比例绘制第二天住宿地、西坡入场、天池主峰、锦江大峡谷、漂流和返程示意点位。它不是导航地图，不提供定位功能；可缩放，放大后可拖动查看。",
    endLabel: "第二天行程完成",
    footnote: "07:30出发、16:30漂流接驳和18:30返程按硬约束显示；入园票务、峡谷到漂流接驳、漂流预订／上车点与晚餐仍待落实。酒店依赖早晚共用一次计数，页面不会自动改动时间。",
    stops: day2Stops,
    legs: day2Legs,
    bounds: {
      west: { minLon: 127.75, maxLon: 128.08, minLat: 41.86, maxLat: 42.08 },
      return: { minLon: 127.68, maxLon: 128.15, minLat: 42.03, maxLat: 42.44 }
    },
    views: [
      { id: "overview", label: "全程" },
      { id: "west", label: "西坡景区" },
      { id: "return", label: "漂流返程" }
    ],
    compareDefaults: ["d2-origin", "d2-entrance"],
    nextAction: {
      stopId: "d2-origin",
      title: "07:30包车前往长白山西坡",
      place: "北坡住宿地 → 长白山西坡",
      time: "最晚07:30出发",
      timeRange: "07:30—09:30",
      arrival: "预计09:30抵达并开始入场",
      arrivalCompact: "预计09:30到西坡",
      commute: "包车约2小时",
      compactCommute: "包车约2小时",
      reminder: "入场窗口没有额外迟到缓冲；山路曲折，晕车人士提前备药。",
      compactReminder: "无迟到缓冲／晕车备药"
    },
    scaleOverview: true,
    overviewNodes: [
      { id: "d2-overview-hotel", target: "d2-origin", stopIds: ["d2-origin", "d2-return"], lon: 128.12, lat: 42.42, label: "二道白河住宿地", sub: "07:30出发 · 20:30返回", number: "1/8", provisional: true },
      { id: "d2-overview-west", target: "d2-entrance", stopIds: ["d2-entrance", "d2-summit", "d2-lunch", "d2-canyon"], lon: 127.93, lat: 41.98, label: "长白山西坡", sub: "09:30–15:30 · 4项", number: "2–5", provisional: true },
      { id: "d2-overview-rafting", target: "d2-rafting", stopIds: ["d2-rafting", "d2-dinner"], lon: 127.714764, lat: 42.052888, label: "白溪方向漂流", sub: "16:30–18:30", number: "6–7", provisional: true }
    ],
    overviewRoutes: [
      { from: 0, to: 1, bend: -0.08, className: "provisional", title: "包车 · 2小时", subtitle: "07:30 → 09:30", labelOffset: { x: 150, y: 40 } },
      { from: 1, to: 2, bend: -0.1, className: "provisional", title: "接驳 · 30–60分", subtitle: "15:30 → 16:30", labelOffset: { x: 235, y: 40 } },
      { from: 2, to: 0, bend: -0.18, className: "provisional", title: "拼车返程 · 2小时", subtitle: "18:30 → 20:30", labelOffset: { x: -170, y: -60 } }
    ],
    contextLabel: "吉林 · 长白山西坡与二道白河"
  }
};

let currentDayId = "day1";
let currentPlan = dayPlans[currentDayId];
let stops = currentPlan.stops;
let legs = currentPlan.legs;
let bounds = currentPlan.bounds;

const categoryIcons = {
  plane: "icon-plane",
  camera: "icon-camera",
  landmark: "icon-landmark",
  food: "icon-food",
  shop: "icon-shop",
  train: "icon-train",
  hotel: "icon-hotel",
  tree: "icon-tree",
  car: "icon-car",
  bus: "icon-bus",
  walk: "icon-walk",
  pin: "icon-pin",
  clock: "icon-clock",
  arrow: "icon-arrow-right"
};

const planStatusLabels = {
  candidate: "候选已选",
  locationPending: "地点未定",
  verificationPending: "待核开放",
  ticketPending: "票务待落实",
  reservationPending: "预订待落实",
  transportPending: "接驳待落实",
  bookingPending: "预订／票务待落实",
  transferPending: "接驳待落实",
  storagePending: "寄存待确认"
};

const svgNS = "http://www.w3.org/2000/svg";
const timelineList = document.getElementById("timelineList");
const contextLayer = document.getElementById("contextLayer");
const routeLayer = document.getElementById("routeLayer");
const markerLayer = document.getElementById("markerLayer");
const labelLayer = document.getElementById("labelLayer");
const routeMap = document.getElementById("routeMap");
const mapStage = document.getElementById("mapStage");
const mapDetailDock = document.getElementById("mapDetailDock");
const mapInspector = document.getElementById("mapInspector");
const compareButton = document.getElementById("compareButton");
const compareDrawer = document.getElementById("compareDrawer");
const compareFrom = document.getElementById("compareFrom");
const compareTo = document.getElementById("compareTo");
const compareResult = document.getElementById("compareResult");
const zoomOutButton = document.getElementById("zoomOutButton");
const zoomInButton = document.getElementById("zoomInButton");
const zoomResetButton = document.getElementById("zoomResetButton");
const zoomValue = document.getElementById("zoomValue");
const pendingCount = document.getElementById("pendingCount");
const compactPendingCount = document.getElementById("compactPendingCount");
const viewTabsContainer = document.getElementById("viewTabs") || document.querySelector(".view-tabs");
const dayTabs = document.getElementById("dayTabs");
const dayAnnouncement = document.getElementById("dayAnnouncement");
const nextActionPanel = document.getElementById("nextActionPanel");
const pageTitle = document.getElementById("pageTitle") || document.querySelector(".title-row h1");
const dayBadge = document.getElementById("dayBadge") || document.querySelector(".pilot-badge");
const dateLine = document.getElementById("dateLine") || document.querySelector(".date-line");
const timelineKicker = document.getElementById("timelineKicker") || document.querySelector(".timeline-panel .panel-kicker");
const timelineTitle = document.getElementById("timelineTitle");
const mapTitle = document.getElementById("mapTitle");
const mapDisclaimer = document.querySelector(".map-disclaimer");
const nodeCount = document.getElementById("nodeCount");
const compactNodeCount = document.getElementById("compactNodeCount");
const crossCityCount = document.getElementById("crossCityCount");
const compactCrossCityCount = document.getElementById("compactCrossCityCount");
const compactStatus = document.getElementById("compactStatus") || document.querySelector(".compact-status");
const mapSvgTitle = document.getElementById("mapSvgTitle");
const mapSvgDesc = document.getElementById("mapSvgDesc");
const timelineFootnotePanel = document.querySelector(".timeline-footnote");
const timelineFootnote = timelineFootnotePanel?.querySelector("p");

let currentView = "overview";
let selectedStopId = stops[0].id;
let selectedLegId = legs[0].id;
let currentZoom = 1;
let mapViewport = { x: 0, y: 0, width: 1000, height: 680 };
let initialViewport = { x: 0, y: 0, width: 1000, height: 680 };
let panStart = null;
let pinchDistance = null;
let suppressMapClick = false;
const activePointers = new Map();
const worldViewport = { x: 0, y: 0, width: 1000, height: 680 };
const minimumZoom = 1;
const maximumZoom = 4;

function svgEl(name, attrs = {}) {
  const el = document.createElementNS(svgNS, name);
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, String(value)));
  return el;
}

function iconMarkup(icon) {
  return `<svg aria-hidden="true"><use href="#${categoryIcons[icon] || "icon-pin"}"></use></svg>`;
}

function planStatusLabel(stop) {
  return planStatusLabels[stop.planStatus] || "";
}

function planStatusMarkup(stop) {
  const label = planStatusLabel(stop);
  return label ? `<span class="plan-status ${stop.planStatus}">${label}</span>` : "";
}

function stopById(id) {
  return stops.find((stop) => stop.id === id);
}

function legById(id) {
  return legs.find((leg) => leg.id === id);
}

function nextLegForStop(id) {
  return legs.find((leg) => leg.from === id) || null;
}

function previousLegForStop(id) {
  return [...legs].reverse().find((leg) => leg.to === id) || null;
}

function getViewTabs() {
  return viewTabsContainer ? [...viewTabsContainer.querySelectorAll(".view-tab")] : [];
}

function isAvailableView(view) {
  return currentPlan.views.some((item) => item.id === view);
}

function pendingPlanItems() {
  const items = [...stops, ...legs].filter((item) => item.planStatus);
  return new Set(items.map((item) => item.planStatusKey || item.id));
}

function fixedConstraintCount() {
  return [...stops, ...legs].filter((item) => item.hardConstraint).length;
}

function hardConstraintMarkup(constraint, className = "hard-constraint") {
  if (!constraint?.showNote) return "";
  const text = `${constraint.label} · ${constraint.latestDeparture} · ${constraint.arrival} · ${constraint.buffer}`;
  return `<span class="${className}">${text}</span>`;
}

function publicTransportMarkup(leg) {
  const option = leg.publicTransport;
  if (!option) return "";
  return `
    <span class="leg-alternative">
      <span class="leg-alternative-icon">${iconMarkup("bus")}</span>
      <span class="leg-alternative-label"><b>公交</b> ${option.label}</span>
      <strong>${option.duration}</strong>
    </span>
  `;
}

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function getOverviewNodes() {
  const nodes = currentPlan.overviewNodes.map((node) => ({ ...node }));
  if (!currentPlan.scaleOverview) return nodes;

  const geographicNodes = nodes.filter((node) => Number.isFinite(node.lon) && Number.isFinite(node.lat));
  if (geographicNodes.length !== nodes.length) return nodes;
  const minLon = Math.min(...nodes.map((node) => node.lon));
  const maxLon = Math.max(...nodes.map((node) => node.lon));
  const minLat = Math.min(...nodes.map((node) => node.lat));
  const maxLat = Math.max(...nodes.map((node) => node.lat));
  const midLon = (minLon + maxLon) / 2;
  const midLat = (minLat + maxLat) / 2;
  const longitudeScale = Math.cos(midLat * Math.PI / 180);
  const geographicWidth = Math.max(0.000001, (maxLon - minLon) * longitudeScale);
  const geographicHeight = Math.max(0.000001, maxLat - minLat);
  const scale = Math.min(700 / geographicWidth, 430 / geographicHeight);

  nodes.forEach((node) => {
    node.x = 500 + (node.lon - midLon) * longitudeScale * scale;
    node.y = 330 - (node.lat - midLat) * scale;
  });
  return nodes;
}

function estimatedLabelHalfWidth(text) {
  return clamp([...text].length * 7, 40, 120);
}

function pointsForView(view) {
  const points = [];

  if (view === "overview") {
    getOverviewNodes().forEach((node) => {
      const halfWidth = estimatedLabelHalfWidth(node.label);
      points.push(
        { x: node.x - 34, y: node.y - 34 },
        { x: node.x + 34, y: node.y + 34 },
        { x: node.x - halfWidth, y: node.y + 38 },
        { x: node.x + halfWidth, y: node.y + 72 }
      );
    });
    return points;
  }

  stops.filter((stop) => stop.zone === view).forEach((stop) => {
    const position = project(stop, view);
    const labelX = position.x + (stop.labelDx || 0);
    const labelY = position.y + (stop.labelDy || 56);
    const halfWidth = estimatedLabelHalfWidth(stop.mapLabel || stop.title);
    points.push(
      { x: position.x - 32, y: position.y - 32 },
      { x: position.x + 32, y: position.y + 32 },
      { x: labelX - halfWidth, y: labelY - 18 },
      { x: labelX + halfWidth, y: labelY + 24 }
    );
  });
  return points;
}

function fittedViewportForView(view) {
  const points = pointsForView(view);
  if (!points.length) return { ...worldViewport };

  const minX = Math.min(...points.map((point) => point.x));
  const maxX = Math.max(...points.map((point) => point.x));
  const minY = Math.min(...points.map((point) => point.y));
  const maxY = Math.max(...points.map((point) => point.y));
  const horizontalPadding = view === "overview" ? 72 : 46;
  const verticalPadding = view === "overview" ? 54 : 44;
  let width = clamp(maxX - minX + horizontalPadding * 2, 520, worldViewport.width);
  let height = clamp(maxY - minY + verticalPadding * 2, 360, worldViewport.height);

  const rect = routeMap.getBoundingClientRect();
  const stageAspect = rect.width > 0 && rect.height > 0
    ? rect.width / rect.height
    : worldViewport.width / worldViewport.height;
  if (width / height < stageAspect) width = Math.min(worldViewport.width, height * stageAspect);
  else height = Math.min(worldViewport.height, width / stageAspect);

  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;
  const x = clamp(centerX - width / 2, worldViewport.x, worldViewport.x + worldViewport.width - width);
  const y = clamp(centerY - height / 2, worldViewport.y, worldViewport.y + worldViewport.height - height);
  return { x, y, width, height };
}

function applyMapViewport() {
  mapViewport.width = initialViewport.width / currentZoom;
  mapViewport.height = initialViewport.height / currentZoom;
  mapViewport.x = clamp(
    mapViewport.x,
    worldViewport.x,
    worldViewport.x + worldViewport.width - mapViewport.width
  );
  mapViewport.y = clamp(
    mapViewport.y,
    worldViewport.y,
    worldViewport.y + worldViewport.height - mapViewport.height
  );
  routeMap.setAttribute(
    "viewBox",
    `${mapViewport.x.toFixed(2)} ${mapViewport.y.toFixed(2)} ${mapViewport.width.toFixed(2)} ${mapViewport.height.toFixed(2)}`
  );

  const percentage = Math.round(currentZoom * 100);
  const canPan = currentZoom > minimumZoom + 0.001;
  zoomValue.textContent = `${percentage}%`;
  zoomOutButton.disabled = currentZoom <= minimumZoom + 0.001;
  zoomInButton.disabled = currentZoom >= maximumZoom - 0.001;
  routeMap.style.touchAction = canPan ? "none" : "pan-y";
  routeMap.classList.toggle("is-zoomed", canPan);
  updateScreenFixedElements();
}

function resetMapViewport() {
  initialViewport = fittedViewportForView(currentView);
  currentZoom = 1;
  mapViewport = { ...initialViewport };
  applyMapViewport();
}

function clientPointToMap(clientX, clientY) {
  const screenMatrix = routeMap.getScreenCTM();
  if (screenMatrix) {
    const point = routeMap.createSVGPoint();
    point.x = clientX;
    point.y = clientY;
    return point.matrixTransform(screenMatrix.inverse());
  }

  const rect = routeMap.getBoundingClientRect();
  return {
    x: mapViewport.x + ((clientX - rect.left) / Math.max(1, rect.width)) * mapViewport.width,
    y: mapViewport.y + ((clientY - rect.top) / Math.max(1, rect.height)) * mapViewport.height
  };
}

function zoomMap(factor, anchorClient = null) {
  const nextZoom = clamp(currentZoom * factor, minimumZoom, maximumZoom);
  if (Math.abs(nextZoom - currentZoom) < 0.001) return false;

  const anchor = anchorClient
    ? clientPointToMap(anchorClient.x, anchorClient.y)
    : { x: mapViewport.x + mapViewport.width / 2, y: mapViewport.y + mapViewport.height / 2 };
  const previousWidth = mapViewport.width;
  const previousHeight = mapViewport.height;
  const nextWidth = initialViewport.width / nextZoom;
  const nextHeight = initialViewport.height / nextZoom;

  mapViewport.x = anchor.x - ((anchor.x - mapViewport.x) / previousWidth) * nextWidth;
  mapViewport.y = anchor.y - ((anchor.y - mapViewport.y) / previousHeight) * nextHeight;
  currentZoom = nextZoom;
  applyMapViewport();
  return true;
}

function panMapBy(deltaX, deltaY) {
  if (currentZoom <= minimumZoom) return;
  mapViewport.x += deltaX;
  mapViewport.y += deltaY;
  applyMapViewport();
}

function centerMapOnStop(stop) {
  if (currentZoom <= minimumZoom || currentView !== stop.zone) return;
  const point = project(stop, currentView);
  mapViewport.x = point.x - mapViewport.width / 2;
  mapViewport.y = point.y - mapViewport.height / 2;
  applyMapViewport();
}

function pointerPair() {
  return [...activePointers.values()].slice(0, 2);
}

function pointerDistanceBetween(first, second) {
  return Math.hypot(second.x - first.x, second.y - first.y);
}

function mapUnitsPerClientPixel() {
  const screenMatrix = routeMap.getScreenCTM();
  if (screenMatrix) {
    const scaleX = Math.hypot(screenMatrix.a, screenMatrix.b);
    const scaleY = Math.hypot(screenMatrix.c, screenMatrix.d);
    return {
      x: scaleX > 0 ? 1 / scaleX : 1,
      y: scaleY > 0 ? 1 / scaleY : 1
    };
  }

  const rect = routeMap.getBoundingClientRect();
  return {
    x: mapViewport.width / Math.max(1, rect.width),
    y: mapViewport.height / Math.max(1, rect.height)
  };
}

function updateScreenFixedElements() {
  const units = mapUnitsPerClientPixel();
  const unitScale = Math.max(units.x, units.y);
  const markerScale = clamp((46 * unitScale) / 62, 1, 2.5);
  const labelScale = clamp((12 * unitScale) / 13, 1, 2.8);
  const pillScale = clamp((11 * unitScale) / 13, 1, 2.5);

  routeMap.querySelectorAll('[data-screen-fixed="marker"]').forEach((element) => {
    element.setAttribute("transform", `scale(${markerScale.toFixed(3)})`);
  });
  routeMap.querySelectorAll('[data-screen-fixed="label"]').forEach((element) => {
    element.setAttribute("transform", `scale(${labelScale.toFixed(3)})`);
  });
  routeMap.querySelectorAll('[data-screen-fixed="pill"]').forEach((element) => {
    element.setAttribute("transform", `scale(${pillScale.toFixed(3)})`);
  });
}

function shouldScrollTimelineFromMap() {
  return !window.matchMedia("(max-width: 900px)").matches;
}

function renderTimeline() {
  timelineList.innerHTML = "";

  stops.forEach((stop, index) => {
    const stopActive = stop.id === selectedStopId;
    const card = document.createElement("button");
    card.type = "button";
    card.className = `stop-card${stopActive ? " is-active" : ""}${stop.hardConstraint ? " is-hard-constraint" : ""}`;
    card.dataset.stopId = stop.id;
    const statusLabel = planStatusLabel(stop);
    card.setAttribute("aria-label", [
      stop.time,
      stop.title,
      statusLabel,
      stop.hardConstraint?.showNote ? stop.hardConstraint.label : "",
      stop.hardConstraint?.showNote ? stop.hardConstraint.buffer : "",
      stop.showNote ? stop.note : ""
    ].filter(Boolean).join("，"));
    card.setAttribute("aria-pressed", String(stopActive));
    if (stopActive) card.setAttribute("aria-current", "step");
    card.innerHTML = `
      <span class="time-block"><span>${stop.time}</span><small>${stop.timeNote}</small></span>
      <span class="stop-number${stop.provisional ? " provisional" : ""}">${stop.order}</span>
      <span class="stop-content">
        <span class="stop-eyebrow">${iconMarkup(stop.icon)}<span>${stop.category}</span>${planStatusMarkup(stop)}</span>
        <h3>${stop.title}</h3>
        <span class="stop-subtitle">${stop.subtitle}</span>
        ${stop.showNote && stop.note ? `<span class="stop-note ${stop.noteType || ""}">${stop.note}</span>` : ""}
        ${hardConstraintMarkup(stop.hardConstraint, "stop-constraint")}
      </span>
    `;
    card.addEventListener("click", () => selectStop(stop.id, { scroll: false, switchView: true }));
    timelineList.appendChild(card);

    const leg = legs[index];
    if (!leg) return;

    const legCard = document.createElement("button");
    legCard.type = "button";
    const railClass = leg.mode === "train" ? " is-rail" : "";
    const warningClass = ["warning", "provisional"].includes(leg.status) || leg.planStatus ? " is-warning" : "";
    const constraintClass = leg.hardConstraint ? " is-hard-constraint" : "";
    const pendingClass = leg.planStatus ? " is-plan-pending" : "";
    const legActive = leg.id === selectedLegId;
    legCard.className = `leg-card${legActive ? " is-active" : ""}${railClass}${warningClass}${constraintClass}${pendingClass}${leg.publicTransport ? " has-alternative" : ""}`;
    legCard.dataset.legId = leg.id;
    legCard.setAttribute("aria-label", [
      leg.label,
      leg.duration,
      leg.publicTransport ? `公交${leg.publicTransport.label}` : "",
      leg.publicTransport?.duration || "",
      planStatusLabel(leg),
      leg.hardConstraint?.showNote ? leg.hardConstraint.label : "",
      leg.hardConstraint?.showNote ? leg.hardConstraint.buffer : ""
    ].filter(Boolean).join("，"));
    legCard.setAttribute("aria-pressed", String(legActive));
    if (legActive) legCard.setAttribute("aria-current", "true");
    legCard.innerHTML = `
      <span class="leg-icon">${iconMarkup(leg.mode)}</span>
      <span class="leg-main">
        <strong>${leg.label}</strong>
        ${planStatusMarkup(leg)}
        <small>${leg.detail}</small>
        ${hardConstraintMarkup(leg.hardConstraint, "leg-constraint")}
      </span>
      <span class="leg-duration">${leg.duration}</span>
      ${publicTransportMarkup(leg)}
    `;
    legCard.addEventListener("click", () => selectLeg(leg.id));
    timelineList.appendChild(legCard);
  });
}

function renderViewTabs() {
  if (!viewTabsContainer) return;
  viewTabsContainer.innerHTML = currentPlan.views.map((view) => {
    const active = view.id === currentView;
    return `<button class="view-tab${active ? " is-active" : ""}" type="button" aria-pressed="${active}" data-view="${view.id}">${view.label}</button>`;
  }).join("");
}

function setView(view) {
  if (!isAvailableView(view)) return;
  currentView = view;
  let selectionChanged = false;
  if (view !== "overview" && stopById(selectedStopId)?.zone !== view) {
    const firstStop = stops.find((stop) => stop.zone === view);
    if (firstStop) {
      selectedStopId = firstStop.id;
      selectedLegId = (nextLegForStop(firstStop.id) || previousLegForStop(firstStop.id) || {}).id || null;
      selectionChanged = true;
    }
  }
  getViewTabs().forEach((tab) => {
    const active = tab.dataset.view === view;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  resetMapViewport();
  renderMap();
  if (selectionChanged) {
    renderTimeline();
    renderInspector();
  }
}

function selectStop(id, options = {}) {
  const { scroll = true, switchView = true } = options;
  const stop = stopById(id);
  if (!stop) return;

  selectedStopId = id;
  const nextLeg = nextLegForStop(id);
  const previousLeg = previousLegForStop(id);
  const localNextLeg = nextLeg && !nextLeg.hideOnMap && stopById(nextLeg.to)?.zone === stop.zone ? nextLeg : null;
  const localPreviousLeg = previousLeg && !previousLeg.hideOnMap && stopById(previousLeg.from)?.zone === stop.zone ? previousLeg : null;
  selectedLegId = (localNextLeg || localPreviousLeg || nextLeg || previousLeg || {}).id || null;

  const preferredView = isAvailableView(stop.zone) ? stop.zone : "overview";
  if (switchView && currentView !== preferredView) setView(preferredView);
  else renderMap();

  renderTimeline();
  renderInspector();
  centerMapOnStop(stop);

  if (scroll && shouldScrollTimelineFromMap()) {
    const card = document.querySelector(`[data-stop-id="${id}"]`);
    card?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function selectLeg(id) {
  const leg = legById(id);
  if (!leg) return;
  selectedLegId = id;
  selectedStopId = leg.from;

  const from = stopById(leg.from);
  const to = stopById(leg.to);
  if (from.zone === to.zone && isAvailableView(from.zone) && currentView !== from.zone) setView(from.zone);
  else if ((from.zone !== to.zone || !isAvailableView(from.zone)) && currentView !== "overview") setView("overview");
  else renderMap();

  renderTimeline();
  renderInspector();
}

function project(stop, view) {
  const viewPoint = stop.mapByView?.[view];
  if (viewPoint) {
    return { x: viewPoint.x, y: viewPoint.y };
  }
  if (Number.isFinite(stop.mapX) && Number.isFinite(stop.mapY)) {
    return { x: stop.mapX, y: stop.mapY };
  }

  const box = bounds[view];
  if (!box || !Number.isFinite(stop.lon) || !Number.isFinite(stop.lat)) {
    return { x: 500, y: 340 };
  }

  const midLat = (box.minLat + box.maxLat) / 2;
  const midLon = (box.minLon + box.maxLon) / 2;
  const longitudeScale = Math.cos(midLat * Math.PI / 180);
  const geographicWidth = Math.max(0.000001, (box.maxLon - box.minLon) * longitudeScale);
  const geographicHeight = Math.max(0.000001, box.maxLat - box.minLat);
  const scale = Math.min(820 / geographicWidth, 485 / geographicHeight);
  const x = 500 + (stop.lon - midLon) * longitudeScale * scale;
  const y = 314.5 - (stop.lat - midLat) * scale;
  return { x, y };
}

function quadraticPath(a, b, bend = 0.1) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const distance = Math.max(1, Math.hypot(dx, dy));
  const nx = -dy / distance;
  const ny = dx / distance;
  const offset = distance * bend;
  const control = {
    x: (a.x + b.x) / 2 + nx * offset,
    y: (a.y + b.y) / 2 + ny * offset
  };
  return {
    d: `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${control.x.toFixed(1)} ${control.y.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`,
    midpoint: {
      x: (a.x + 2 * control.x + b.x) / 4,
      y: (a.y + 2 * control.y + b.y) / 4
    }
  };
}

function renderMap() {
  contextLayer.replaceChildren();
  routeLayer.replaceChildren();
  markerLayer.replaceChildren();
  labelLayer.replaceChildren();

  if (currentView === "overview") renderOverview();
  else renderLocalView(currentView);
  updateScreenFixedElements();
}

function renderOverview() {
  const nodes = getOverviewNodes();

  const regionalLabel = svgEl("text", { x: 590, y: 630, class: "context-label", opacity: "0.6" });
  regionalLabel.textContent = currentPlan.contextLabel;
  contextLayer.appendChild(regionalLabel);

  currentPlan.overviewRoutes.forEach((route) => {
    const pathInfo = quadraticPath(nodes[route.from], nodes[route.to], route.bend);
    if (route.underlayClass) {
      const underlay = svgEl("path", {
        d: pathInfo.d,
        class: `route-line-map ${route.underlayClass}`,
        "aria-hidden": "true"
      });
      routeLayer.appendChild(underlay);
    }
    drawOverviewRoute(
      pathInfo,
      route.className || "",
      route.title,
      route.subtitle,
      route.labelOffset || { x: 0, y: 0 }
    );
  });

  nodes.forEach((node) => drawOverviewMarker(node));
}

function drawOverviewRoute(pathInfo, className, title, subtitle, labelOffset = { x: 0, y: 0 }) {
  const path = svgEl("path", {
    d: pathInfo.d,
    class: `route-line-map ${className}`,
    "aria-hidden": "true"
  });
  routeLayer.appendChild(path);
  drawRoutePill({
    x: pathInfo.midpoint.x + labelOffset.x,
    y: pathInfo.midpoint.y + labelOffset.y
  }, title, subtitle, 156);
}

function drawOverviewMarker(node) {
  const active = node.stopIds.includes(selectedStopId);
  const group = svgEl("g", {
    class: `map-marker${node.provisional ? " provisional" : ""}${active ? " is-active" : ""}`,
    transform: `translate(${node.x} ${node.y})`,
    tabindex: "0",
    role: "button",
    "aria-label": `${node.label}，${node.sub}`,
    "aria-pressed": String(active)
  });
  if (active) group.setAttribute("aria-current", "location");
  const visual = svgEl("g", { "data-screen-fixed": "marker" });
  const face = svgEl("g", { class: "marker-face" });
  const hit = svgEl("circle", { cx: 0, cy: 0, r: 34, class: "marker-hit" });
  const shape = svgEl("rect", { x: -27, y: -27, width: 54, height: 54, rx: 18, class: "marker-shape" });
  const number = svgEl("text", { x: 0, y: 5, class: "marker-number", style: "font-size:12px" });
  number.textContent = node.number;
  face.append(shape, number);
  visual.append(hit, face);
  group.appendChild(visual);
  group.addEventListener("click", () => selectStop(node.target, {
    scroll: shouldScrollTimelineFromMap(),
    switchView: true
  }));
  group.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectStop(node.target, { scroll: shouldScrollTimelineFromMap(), switchView: true });
    }
  });
  markerLayer.appendChild(group);

  const labelGroup = svgEl("g", { class: "overview-map-label", transform: `translate(${node.x} ${node.y + 48})` });
  const labelVisual = svgEl("g", { "data-screen-fixed": "label" });
  const title = svgEl("text", { x: 0, y: 0, class: "map-marker-label" });
  title.textContent = node.label;
  const sub = svgEl("text", { x: 0, y: 19, class: "map-marker-sublabel" });
  sub.textContent = node.sub;
  labelVisual.append(title, sub);
  labelGroup.appendChild(labelVisual);
  labelLayer.appendChild(labelGroup);
}

function renderLocalView(view) {
  drawContext(view);

  const visibleStops = stops.filter((stop) => stop.zone === view);
  const positions = new Map(visibleStops.map((stop) => [stop.id, project(stop, view)]));
  const visibleLegs = legs.filter((leg) => !leg.hideOnMap && positions.has(leg.from) && positions.has(leg.to));

  visibleLegs.forEach((leg) => {
    const pathInfo = quadraticPath(positions.get(leg.from), positions.get(leg.to), leg.curve);
    const active = leg.id === selectedLegId;
    const provisional = leg.status === "provisional";
    const muted = selectedLegId && !active;
    const classNames = [
      "route-line-map",
      active ? "is-active" : "",
      provisional ? "provisional" : "",
      muted ? "is-muted" : ""
    ].filter(Boolean).join(" ");
    const path = svgEl("path", {
      d: pathInfo.d,
      class: classNames,
      tabindex: "0",
      role: "button",
      "aria-label": `${leg.label}，${leg.duration}`,
      "aria-pressed": String(active)
    });
    if (active) path.setAttribute("aria-current", "true");
    path.addEventListener("click", () => selectLeg(leg.id));
    path.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectLeg(leg.id);
      }
    });
    routeLayer.appendChild(path);

    if (active) {
      drawRoutePill(pathInfo.midpoint, leg.duration, leg.label, 144);
      animateRoute(path, provisional);
    }
  });

  const renderedGroups = new Set();
  visibleStops.forEach((stop) => {
    if (!stop.mapGroup) {
      drawLocalMarker(stop, positions.get(stop.id));
      return;
    }
    if (renderedGroups.has(stop.mapGroup)) return;
    renderedGroups.add(stop.mapGroup);
    const groupedStops = visibleStops.filter((candidate) => candidate.mapGroup === stop.mapGroup);
    const groupedMarker = {
      ...stop,
      id: `map-group-${stop.mapGroup}`,
      order: groupedStops.map((candidate) => candidate.order).join("/"),
      title: stop.mapGroupTitle || groupedStops.map((candidate) => candidate.title).join("／"),
      mapLabel: stop.mapGroupTitle || groupedStops.map((candidate) => candidate.title).join("／"),
      time: `${groupedStops[0].time.split("–")[0]}–${groupedStops[groupedStops.length - 1].time.split("–").pop()}`,
      groupStopIds: groupedStops.map((candidate) => candidate.id)
    };
    drawLocalMarker(groupedMarker, positions.get(stop.id));
  });
}

function drawContext(view) {
  if (view === "yanji") {
    const road1 = svgEl("path", { d: "M 45 220 C 260 255 455 205 960 260", class: "context-road" });
    const road2 = svgEl("path", { d: "M 150 50 C 250 170 390 330 520 625", class: "context-road" });
    const road3 = svgEl("path", { d: "M 48 430 C 250 390 610 430 965 368", class: "context-road-minor" });
    const river = svgEl("path", { d: "M 0 485 C 190 445 344 510 530 468 S 838 418 1035 466", class: "river-line" });
    contextLayer.append(road1, road2, road3, river);
  } else if (view === "west") {
    const ridge1 = svgEl("path", { d: "M 85 560 C 240 440 335 386 452 322 S 681 166 902 70", class: "context-road-minor" });
    const ridge2 = svgEl("path", { d: "M 160 620 C 300 490 442 430 570 332 S 775 172 940 118", class: "context-road-minor" });
    const transferRoad = svgEl("path", { d: "M 112 578 C 300 528 420 448 548 346 S 734 193 860 105", class: "context-road" });
    const forest1 = svgEl("path", { d: "M 30 250 C 185 155 355 176 432 292 C 325 395 168 392 38 330 Z", class: "forest-patch" });
    const forest2 = svgEl("path", { d: "M 568 360 C 730 286 910 331 985 470 L 985 610 C 820 620 665 540 568 360 Z", class: "forest-patch" });
    contextLayer.append(ridge1, ridge2, transferRoad, forest1, forest2);
  } else if (view === "return") {
    const forest1 = svgEl("path", { d: "M 20 62 C 205 18 345 70 405 182 C 290 255 128 222 22 160 Z", class: "forest-patch" });
    const forest2 = svgEl("path", { d: "M 638 312 C 800 266 965 351 1000 518 L 1000 650 L 702 624 C 654 522 631 430 638 312 Z", class: "forest-patch" });
    const road = svgEl("path", { d: "M 190 555 C 316 510 420 438 510 355 S 690 216 850 105", class: "context-road" });
    const river = svgEl("path", { d: "M 40 510 C 230 443 392 487 548 410 S 804 279 1000 316", class: "river-line" });
    contextLayer.append(forest1, forest2, road, river);
  } else {
    const forest1 = svgEl("path", { d: "M 50 75 C 210 15 345 78 410 186 C 308 242 163 222 60 156 Z", class: "forest-patch" });
    const forest2 = svgEl("path", { d: "M 615 30 C 820 5 982 92 985 224 C 825 269 700 212 620 135 Z", class: "forest-patch" });
    const forest3 = svgEl("path", { d: "M 588 410 C 777 352 940 426 992 606 L 612 628 Z", class: "forest-patch" });
    const road = svgEl("path", { d: "M 155 95 C 325 190 446 298 573 392 S 780 530 945 562", class: "context-road" });
    const minor = svgEl("path", { d: "M 284 590 C 420 466 560 385 795 302", class: "context-road-minor" });
    contextLayer.append(forest1, forest2, forest3, road, minor);
  }
}

function drawLocalMarker(stop, position) {
  const active = stop.groupStopIds ? stop.groupStopIds.includes(selectedStopId) : stop.id === selectedStopId;
  const targetStopId = active && stop.groupStopIds ? selectedStopId : (stop.groupStopIds?.[0] || stop.id);
  const group = svgEl("g", {
    class: `map-marker${stop.provisional ? " provisional" : ""}${active ? " is-active" : ""}`,
    transform: `translate(${position.x.toFixed(1)} ${position.y.toFixed(1)})`,
    tabindex: "0",
    role: "button",
    "aria-label": [stop.order, stop.title, planStatusLabel(stop), stop.provisional ? "示意点位" : "已定位"].filter(Boolean).join("，"),
    "aria-pressed": String(active)
  });
  if (active) group.setAttribute("aria-current", "location");
  const visual = svgEl("g", { "data-screen-fixed": "marker" });
  const face = svgEl("g", { class: "marker-face" });
  const hit = svgEl("circle", { cx: 0, cy: 0, r: 31, class: "marker-hit" });
  const shape = svgEl("rect", { x: -23, y: -23, width: 46, height: 46, rx: 15, class: "marker-shape" });
  const number = svgEl("text", { x: 0, y: 5, class: "marker-number" });
  number.textContent = stop.order;
  face.append(shape, number);
  visual.append(hit, face);
  group.appendChild(visual);
  group.addEventListener("click", () => selectStop(targetStopId, {
    scroll: shouldScrollTimelineFromMap(),
    switchView: false
  }));
  group.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectStop(targetStopId, { scroll: shouldScrollTimelineFromMap(), switchView: false });
    }
  });
  markerLayer.appendChild(group);

  const labelX = position.x + (stop.labelDx || 0);
  const labelY = position.y + (stop.labelDy || 56);
  const labelGroup = svgEl("g", {
    class: `local-map-label${active ? " is-active" : ""}`,
    transform: `translate(${labelX.toFixed(1)} ${labelY.toFixed(1)})`
  });
  const labelVisual = svgEl("g", { "data-screen-fixed": "label" });
  const title = svgEl("text", { x: 0, y: 0, class: "map-marker-label" });
  title.textContent = stop.mapLabel || stop.title;
  const sub = svgEl("text", { x: 0, y: 18, class: "map-marker-sublabel" });
  sub.textContent = stop.provisional ? "示意点位" : stop.time;
  labelVisual.append(title, sub);
  labelGroup.appendChild(labelVisual);
  labelLayer.appendChild(labelGroup);
}

function drawRoutePill(position, title, subtitle, width = 140) {
  const group = svgEl("g", { transform: `translate(${position.x.toFixed(1)} ${position.y.toFixed(1)})`, "aria-hidden": "true" });
  const visual = svgEl("g", { "data-screen-fixed": "pill" });
  const rect = svgEl("rect", { x: -width / 2, y: -25, width, height: 50, rx: 14, class: "route-pill-bg" });
  const titleText = svgEl("text", { x: 0, y: -2, class: "route-pill-text" });
  titleText.textContent = title;
  const subText = svgEl("text", { x: 0, y: 14, class: "route-pill-subtext" });
  subText.textContent = subtitle;
  visual.append(rect, titleText, subText);
  group.appendChild(visual);
  labelLayer.appendChild(group);
}

function animateRoute(path, provisional) {
  if (provisional || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  requestAnimationFrame(() => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    path.style.transition = "stroke-dashoffset 360ms ease-out, stroke 200ms ease-out, stroke-width 200ms ease-out, opacity 200ms ease-out";
    requestAnimationFrame(() => {
      path.style.strokeDashoffset = "0";
    });
  });
}

function renderInspector() {
  const stop = stopById(selectedStopId) || stops[0];
  const nextLeg = nextLegForStop(stop.id);
  const statusLabel = planStatusLabel(stop);
  const linkMarkup = stop.link
    ? `<a class="inspector-link" href="${stop.link}" target="_blank" rel="noopener noreferrer">${iconMarkup("pin")}查看来源</a>`
    : `<span class="inspector-link" aria-disabled="true">${iconMarkup("pin")}${stop.planStatus ? "待补信息" : "示意点位"}</span>`;

  mapInspector.innerHTML = `
    <div class="inspector-place">
      <div class="inspector-topline">
        <span class="inspector-category">${iconMarkup(stop.icon)}${stop.category}${statusLabel ? ` · ${statusLabel}` : ""}${stop.provisional ? " · 示意点位" : ""}</span>
        <span class="inspector-time">${stop.time}</span>
      </div>
      <h3>${stop.order}. ${stop.title}</h3>
      <p class="inspector-address">${iconMarkup("pin")}<span>${stop.address}</span></p>
    </div>
    <div class="inspector-next">
      <div>
        <span>${nextLeg ? "下一段交通" : "当天结束"}</span>
        <strong>${nextLeg ? `${nextLeg.label} · ${nextLeg.duration}${nextLeg.hardConstraint?.showNote ? ` · ${nextLeg.hardConstraint.label}` : ""}` : currentPlan.endLabel}</strong>
        ${nextLeg?.publicTransport ? `<small class="inspector-transit">公交：${nextLeg.publicTransport.label} · ${nextLeg.publicTransport.duration}</small>` : ""}
      </div>
      ${linkMarkup}
    </div>
  `;
}

function populateCompare() {
  const options = stops.map((stop) => `<option value="${stop.id}">${stop.order}. ${stop.title}</option>`).join("");
  compareFrom.innerHTML = options;
  compareTo.innerHTML = options;
  compareFrom.value = currentPlan.compareDefaults[0];
  compareTo.value = currentPlan.compareDefaults[1];
  updateCompare();
}

function updateCompare() {
  const from = stopById(compareFrom.value);
  const to = stopById(compareTo.value);
  if (!from || !to) return;

  if (from.id === to.id) {
    compareResult.innerHTML = "请选择两个不同地点。";
    return;
  }

  const known = legs.find((leg) => (leg.from === from.id && leg.to === to.id) || (leg.from === to.id && leg.to === from.id));
  if (known) {
    compareResult.innerHTML = `<strong>${known.duration}</strong> · ${known.label}<br>${known.detail}${known.publicTransport ? `<br><span class="compare-transit">公交：${known.publicTransport.label} · ${known.publicTransport.duration}</span>` : ""}`;
    return;
  }

  if (from.provisional || to.provisional) {
    compareResult.innerHTML = `<strong>暂不能计算</strong><br>“${from.title}”与“${to.title}”中至少有一处尚未确定具体点位。`;
    return;
  }

  if (from.zone !== to.zone) {
    compareResult.innerHTML = `<strong>跨区域路线</strong><br>本页只提供行程中相邻交通段的时间；其他跨区组合不推算道路导航时间。`;
    return;
  }

  if (![from.lat, from.lon, to.lat, to.lon].every(Number.isFinite)) {
    compareResult.innerHTML = `<strong>暂不能计算</strong><br>这两个点只保留了路线示意位置，没有可用于距离计算的已核地点。`;
    return;
  }

  const distance = haversine(from.lat, from.lon, to.lat, to.lon);
  compareResult.innerHTML = `<strong>直线约 ${distance.toFixed(1)} 公里</strong><br>这两个点不是当前行程中的相邻站点；本页仅显示相邻行程段的通勤时间，不推算道路导航时间。`;
}

function haversine(lat1, lon1, lat2, lon2) {
  const radius = 6371;
  const toRad = (degree) => degree * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function pendingStatusSummary() {
  const seen = new Set();
  return [...stops, ...legs].filter((item) => {
    if (!item.planStatus) return false;
    const key = item.planStatusKey || item.id;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).map((item) => planStatusLabel(item)).filter(Boolean).join("、");
}

function updateDayCopy() {
  const pending = pendingPlanItems().size;
  const fixed = fixedConstraintCount();
  if (pageTitle) pageTitle.textContent = currentPlan.pageTitle;
  if (dayBadge) dayBadge.textContent = currentPlan.label;
  if (dateLine) dateLine.textContent = currentPlan.dateLine;
  if (timelineKicker) timelineKicker.textContent = currentPlan.timelineKicker;
  if (timelineTitle) timelineTitle.textContent = currentPlan.timelineTitle;
  if (mapTitle) mapTitle.textContent = currentPlan.mapPanelTitle;
  if (mapDisclaimer) mapDisclaimer.textContent = currentPlan.mapDisclaimer;
  if (mapSvgTitle) mapSvgTitle.textContent = currentPlan.mapSvgTitle;
  if (mapSvgDesc) mapSvgDesc.textContent = currentPlan.mapSvgDescription;
  if (timelineFootnotePanel) timelineFootnotePanel.hidden = !currentPlan.showFootnote;
  if (timelineFootnote && currentPlan.showFootnote) timelineFootnote.textContent = currentPlan.footnote;
  if (nodeCount) nodeCount.textContent = String(stops.length);
  if (compactNodeCount) compactNodeCount.textContent = String(stops.length);
  if (crossCityCount) crossCityCount.textContent = String(fixed);
  if (compactCrossCityCount) compactCrossCityCount.textContent = String(fixed);
  if (pendingCount) pendingCount.textContent = String(pending);
  if (compactPendingCount) compactPendingCount.textContent = String(pending);
  if (compactStatus) {
    compactStatus.setAttribute("aria-label", `当天行程摘要：${stops.length}个节点，${fixed}段固定交通，${pending}项待落实`);
  }
  const pendingMetric = pendingCount?.closest(".status-metric");
  if (pendingMetric) {
    pendingMetric.setAttribute("aria-label", `${pending}项待落实${pending ? `：${pendingStatusSummary()}` : ""}`);
  }
  document.title = currentPlan.documentTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", currentPlan.metaDescription);
}

function updateDayTabs() {
  if (!dayTabs) return;
  dayTabs.querySelectorAll("[data-day]").forEach((tab) => {
    const active = tab.dataset.day === currentDayId;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-pressed", String(active));
    if (active) tab.setAttribute("aria-current", "date");
    else tab.removeAttribute("aria-current");
  });
}

function renderNextActionPanel() {
  if (!nextActionPanel) return;
  const action = currentPlan.nextAction;
  if (!action) {
    nextActionPanel.hidden = true;
    nextActionPanel.replaceChildren();
    return;
  }

  nextActionPanel.hidden = false;
  nextActionPanel.setAttribute("aria-label", [
    action.title,
    action.place,
    action.timeRange || action.time,
    action.commute,
    action.showNote ? action.reminder : ""
  ].filter(Boolean).join("；"));
  nextActionPanel.innerHTML = `
    <article class="next-action-card">
      <div class="next-action-top">
        <span class="next-action-label">当天第一步</span>
        <strong class="next-action-time">${action.timeRange || action.time}</strong>
      </div>
      <h2>${action.title}</h2>
      <p class="next-action-route">${iconMarkup("pin")}<span>${action.place}</span></p>
      <div class="next-action-meta">
        <span>${action.compactCommute || action.commute}${action.showNote && action.compactReminder ? ` · ${action.compactReminder}` : ""}</span>
      </div>
    </article>
  `;
}

function clearMapInteractionState() {
  activePointers.clear();
  panStart = null;
  pinchDistance = null;
  suppressMapClick = false;
  routeMap.classList.remove("is-panning", "is-zoomed");
}

function setDay(dayId, { focusTab = false } = {}) {
  const plan = dayPlans[dayId];
  if (!plan) return;

  closeCompareDrawer();
  clearMapInteractionState();
  currentDayId = dayId;
  currentPlan = plan;
  stops = currentPlan.stops;
  legs = currentPlan.legs;
  bounds = currentPlan.bounds;
  currentView = "overview";
  selectedStopId = stops[0]?.id || null;
  selectedLegId = legs[0]?.id || null;
  currentZoom = 1;

  updateDayTabs();
  updateDayCopy();
  if (dayAnnouncement) dayAnnouncement.textContent = `已切换到${currentPlan.label}，${currentPlan.dateLine}`;
  renderViewTabs();
  renderNextActionPanel();
  renderTimeline();
  renderMap();
  renderInspector();
  populateCompare();
  resetMapViewport();

  if (focusTab) dayTabs?.querySelector(`[data-day="${dayId}"]`)?.focus();
}

function closeCompareDrawer({ restoreFocus = false } = {}) {
  compareDrawer.hidden = true;
  mapDetailDock.classList.remove("is-comparing");
  compareButton.setAttribute("aria-expanded", "false");
  if (restoreFocus) compareButton.focus();
}

function releaseMapPointer(event) {
  activePointers.delete(event.pointerId);
  if (activePointers.size === 1) {
    const remaining = activePointers.values().next().value;
    panStart = {
      x: remaining.x,
      y: remaining.y,
      viewport: { ...mapViewport }
    };
  } else if (activePointers.size === 0) {
    panStart = null;
    routeMap.classList.remove("is-panning");
  }
  pinchDistance = null;
  if (suppressMapClick) window.setTimeout(() => { suppressMapClick = false; }, 80);
}

viewTabsContainer?.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-view]");
  if (tab && viewTabsContainer.contains(tab)) setView(tab.dataset.view);
});

dayTabs?.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-day]");
  if (tab && dayTabs.contains(tab)) setDay(tab.dataset.day);
});

zoomOutButton.addEventListener("click", () => zoomMap(0.8));
zoomInButton.addEventListener("click", () => zoomMap(1.25));
zoomResetButton.addEventListener("click", resetMapViewport);

routeMap.addEventListener("wheel", (event) => {
  if (event.ctrlKey) return;
  const changed = zoomMap(event.deltaY < 0 ? 1.25 : 0.8, { x: event.clientX, y: event.clientY });
  if (changed) event.preventDefault();
}, { passive: false });

routeMap.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  if (event.pointerType === "touch" && currentZoom <= minimumZoom + 0.001) return;
  activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  routeMap.setPointerCapture?.(event.pointerId);

  if (activePointers.size >= 2) {
    const [first, second] = pointerPair();
    pinchDistance = pointerDistanceBetween(first, second);
    panStart = null;
    return;
  }

  const interactiveTarget = event.target.closest?.(".map-marker, .route-line-map");
  if (!interactiveTarget) {
    panStart = { x: event.clientX, y: event.clientY, viewport: { ...mapViewport } };
  }
});

routeMap.addEventListener("pointermove", (event) => {
  if (!activePointers.has(event.pointerId)) return;
  activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (activePointers.size >= 2) {
    const [first, second] = pointerPair();
    const nextDistance = pointerDistanceBetween(first, second);
    if (pinchDistance && nextDistance > 0) {
      const midpoint = { x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 };
      zoomMap(nextDistance / pinchDistance, midpoint);
      suppressMapClick = true;
      routeMap.classList.add("is-panning");
    }
    pinchDistance = nextDistance;
    return;
  }

  if (!panStart || currentZoom <= minimumZoom) return;
  const deltaX = event.clientX - panStart.x;
  const deltaY = event.clientY - panStart.y;
  if (Math.abs(deltaX) + Math.abs(deltaY) > 4) {
    suppressMapClick = true;
    routeMap.classList.add("is-panning");
  }
  const units = mapUnitsPerClientPixel();
  mapViewport.x = panStart.viewport.x - deltaX * units.x;
  mapViewport.y = panStart.viewport.y - deltaY * units.y;
  applyMapViewport();
});

routeMap.addEventListener("pointerup", releaseMapPointer);
routeMap.addEventListener("pointercancel", releaseMapPointer);
routeMap.addEventListener("click", (event) => {
  if (!suppressMapClick) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  suppressMapClick = false;
}, true);

routeMap.addEventListener("keydown", (event) => {
  const horizontalStep = mapViewport.width * 0.08;
  const verticalStep = mapViewport.height * 0.08;
  const actions = {
    "+": () => zoomMap(1.25),
    "=": () => zoomMap(1.25),
    "-": () => zoomMap(0.8),
    "0": () => {
      if (currentZoom <= minimumZoom + 0.001) return false;
      resetMapViewport();
      return true;
    },
    ArrowLeft: () => currentZoom > minimumZoom + 0.001 && (panMapBy(-horizontalStep, 0), true),
    ArrowRight: () => currentZoom > minimumZoom + 0.001 && (panMapBy(horizontalStep, 0), true),
    ArrowUp: () => currentZoom > minimumZoom + 0.001 && (panMapBy(0, -verticalStep), true),
    ArrowDown: () => currentZoom > minimumZoom + 0.001 && (panMapBy(0, verticalStep), true)
  };
  const action = actions[event.key];
  if (!action) return;
  if (action()) event.preventDefault();
});

compareButton.addEventListener("click", () => {
  const opening = compareDrawer.hidden;
  compareDrawer.hidden = !opening;
  mapDetailDock.classList.toggle("is-comparing", opening);
  compareButton.setAttribute("aria-expanded", String(opening));
  if (opening) compareFrom.focus();
});

document.getElementById("closeCompare").addEventListener("click", () => {
  closeCompareDrawer({ restoreFocus: true });
});

compareFrom.addEventListener("change", updateCompare);
compareTo.addEventListener("change", updateCompare);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !compareDrawer.hidden) {
    closeCompareDrawer({ restoreFocus: true });
  }
});

setDay("day1");

let resizeFrame = 0;
const refreshMapForSize = () => {
  window.cancelAnimationFrame(resizeFrame);
  resizeFrame = window.requestAnimationFrame(() => {
    if (currentZoom <= minimumZoom + 0.001) resetMapViewport();
    else updateScreenFixedElements();
  });
};

if ("ResizeObserver" in window) {
  const mapResizeObserver = new ResizeObserver(refreshMapForSize);
  mapResizeObserver.observe(mapStage);
} else {
  window.addEventListener("resize", refreshMapForSize);
}
