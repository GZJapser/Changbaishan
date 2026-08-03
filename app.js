"use strict";

const stops = [
  {
    id: "airport",
    order: 1,
    time: "07:15–09:30",
    timeNote: "航班",
    category: "抵达",
    icon: "plane",
    title: "延吉朝阳川国际机场",
    subtitle: "KN5579 · 北京大兴（PKX）→ 延吉（YNJ）",
    address: "延吉市长白山西路6666号 · 国内到达",
    note: "官网在售 · 2026-08-03核验",
    noteType: "confirmed",
    zone: "yanji",
    lon: 129.45136,
    lat: 42.88282,
    labelDx: 0,
    labelDy: 70,
    link: "https://www.flycua.com/ticket/search/pkx-260813-ynj--1-0-0-0-0"
  },
  {
    id: "wall",
    order: 2,
    time: "10:30–10:45",
    timeNote: "文化",
    category: "打卡",
    icon: "camera",
    title: "延边大学网红墙",
    subtitle: "延大正门对面的双语商铺立面 · 白天快速打卡",
    address: "延吉市公园路1188号大学城1号楼附近",
    note: "已定位 · 白天霓虹效果较弱",
    noteType: "confirmed",
    zone: "yanji",
    lon: 129.48486,
    lat: 42.905,
    labelDx: -10,
    labelDy: -53,
    link: "https://mapcarta.com/N11341270774"
  },
  {
    id: "folk",
    order: 3,
    time: "11:00–12:00",
    timeNote: "文化",
    category: "景点",
    icon: "landmark",
    title: "中国朝鲜族民俗园",
    subtitle: "截图中的第二处文化点 · 行程较紧凑",
    address: "延南路与延龙路交叉口东侧 · 入口附近",
    note: "需留意航班延误对游览时间的挤压",
    noteType: "warning",
    zone: "yanji",
    lon: 129.488206,
    lat: 42.874979,
    labelDx: -72,
    labelDy: -54,
    link: "https://ditu.amap.com/place/BV09109184"
  },
  {
    id: "lunch",
    order: 4,
    time: "12:00–13:00",
    timeNote: "午餐",
    category: "餐厅试选",
    icon: "food",
    title: "延吉冷面",
    subtitle: "服务大楼延吉冷面（延大店）· 可替换",
    address: "公园路1188号大学城1号楼 · 截图仅确定品类",
    note: "第一选项已采用；具体餐厅仍需确认",
    noteType: "warning",
    provisional: true,
    zone: "yanji",
    lon: 129.48635,
    lat: 42.90325,
    markerDx: 48,
    markerDy: 32,
    labelDx: 62,
    labelDy: 48,
    link: "https://touch.travel.qunar.com/poi/7228732"
  },
  {
    id: "market",
    order: 5,
    time: "13:30–15:30",
    timeNote: "逛街",
    category: "市场",
    icon: "shop",
    title: "延吉西市场",
    subtitle: "已按第一选项选择西市场，不采用北大市场",
    address: "延吉市参花街819号 · 丽都商贸城旁",
    note: "建议约15:20离开，给动车留出缓冲",
    noteType: "warning",
    zone: "yanji",
    lon: 129.500877,
    lat: 42.903995,
    labelDx: 38,
    labelDy: -52,
    link: "https://www.amap.com/place/B0FFMBBBMX"
  },
  {
    id: "yanjiStation",
    order: 6,
    time: "16:33",
    timeNote: "动车",
    category: "火车站",
    icon: "train",
    title: "延吉西站",
    subtitle: "G8140 · 16:33发车 · 建议15:45前到站",
    address: "延吉市朝阳川镇光石村 · 延三公路",
    note: "12306可预订 · 检票口待公布",
    noteType: "confirmed",
    zone: "yanji",
    lon: 129.40784,
    lat: 42.90181,
    labelDx: 0,
    labelDy: -54,
    link: "https://kyfw.12306.cn/otn/leftTicket/init?linktypeid=dc&fs=%E5%BB%B6%E5%90%89%E8%A5%BF%2CYXL&ts=%E9%95%BF%E7%99%BD%E5%B1%B1%2CCUL&date=2026-08-13&flag=N%2CN%2CY"
  },
  {
    id: "changbaiStation",
    order: 7,
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
    order: 8,
    time: "19:00",
    timeNote: "入住",
    category: "酒店待定",
    icon: "hotel",
    title: "二道白河酒店",
    subtitle: "办理入住 + 泡温泉",
    address: "具体酒店未提供 · 当前仅使用镇中心示意位置",
    note: "酒店确认后重新计算接站时间",
    noteType: "warning",
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
    order: 9,
    time: "19:00–20:00",
    timeNote: "晚餐",
    category: "餐厅待定",
    icon: "food",
    title: "二道白河晚餐",
    subtitle: "截图标记“待定” · 暂不推荐具体餐厅",
    address: "具体餐厅未提供 · 示意位置",
    note: "与酒店距离需在选店后计算",
    noteType: "warning",
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
    order: 10,
    time: "20:00–21:00",
    timeNote: "夜游",
    category: "步道待定",
    icon: "tree",
    title: "酒店周边原始森林步道",
    subtitle: "已按第一选项选择步道，不采用温泉作为该时段活动",
    address: "具体步道、入口及夜间开放情况待确认",
    note: "夜间安全与开放状态需要复核",
    noteType: "warning",
    provisional: true,
    zone: "changbai",
    lon: 128.1455,
    lat: 42.4614,
    labelDx: 65,
    labelDy: -55,
    link: null
  }
];

const legs = [
  {
    id: "airport-wall",
    from: "airport",
    to: "wall",
    mode: "car",
    label: "取行李 + 打车进城",
    duration: "45–55分钟",
    detail: "取行李25–35分 · 车程12–18分",
    status: "estimate",
    curve: -0.16
  },
  {
    id: "wall-folk",
    from: "wall",
    to: "folk",
    mode: "car",
    label: "打车前往民俗园",
    duration: "12–18分钟",
    detail: "约5.8公里",
    status: "estimate",
    curve: 0.12
  },
  {
    id: "folk-lunch",
    from: "folk",
    to: "lunch",
    mode: "car",
    label: "打车前往午餐",
    duration: "12–18分钟",
    detail: "餐厅为试选点 · 预计12:15入座",
    status: "provisional",
    curve: -0.13
  },
  {
    id: "lunch-market",
    from: "lunch",
    to: "market",
    mode: "car",
    label: "前往西市场",
    duration: "6–10分钟",
    detail: "或步行约18–22分钟",
    status: "provisional",
    curve: 0.16
  },
  {
    id: "market-station",
    from: "market",
    to: "yanjiStation",
    mode: "car",
    label: "打车前往延吉西站",
    duration: "15–25分钟",
    detail: "建议15:20离场 · 预留进站缓冲",
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
    curve: 0.12
  },
  {
    id: "changbai-hotel",
    from: "changbaiStation",
    to: "hotel",
    mode: "car",
    label: "接驳 / 打车到酒店",
    duration: "5–15分钟",
    detail: "酒店确认后更新",
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

const bounds = {
  yanji: { minLon: 129.397, maxLon: 129.512, minLat: 42.868, maxLat: 42.913 },
  changbai: { minLon: 128.113, maxLon: 128.154, minLat: 42.447, maxLat: 42.466 }
};

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
  walk: "icon-walk"
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
const shareButton = document.getElementById("shareButton");
const shareToast = document.getElementById("shareToast");
const zoomOutButton = document.getElementById("zoomOutButton");
const zoomInButton = document.getElementById("zoomInButton");
const zoomResetButton = document.getElementById("zoomResetButton");
const zoomValue = document.getElementById("zoomValue");

let currentView = "overview";
let selectedStopId = stops[0].id;
let selectedLegId = legs[0].id;
let currentZoom = 1;
let mapViewport = { x: 0, y: 0, width: 1000, height: 680 };
let panStart = null;
let pinchDistance = null;
let suppressMapClick = false;
let toastTimer = null;
const activePointers = new Map();
const baseViewport = { x: 0, y: 0, width: 1000, height: 680 };
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

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function applyMapViewport() {
  mapViewport.width = baseViewport.width / currentZoom;
  mapViewport.height = baseViewport.height / currentZoom;
  mapViewport.x = clamp(mapViewport.x, baseViewport.x, baseViewport.width - mapViewport.width);
  mapViewport.y = clamp(mapViewport.y, baseViewport.y, baseViewport.height - mapViewport.height);
  routeMap.setAttribute(
    "viewBox",
    `${mapViewport.x.toFixed(2)} ${mapViewport.y.toFixed(2)} ${mapViewport.width.toFixed(2)} ${mapViewport.height.toFixed(2)}`
  );

  const percentage = Math.round(currentZoom * 100);
  zoomValue.textContent = `${percentage}%`;
  zoomOutButton.disabled = currentZoom <= minimumZoom + 0.001;
  zoomInButton.disabled = currentZoom >= maximumZoom - 0.001;
}

function resetMapViewport() {
  currentZoom = 1;
  mapViewport = { ...baseViewport };
  applyMapViewport();
}

function clientPointToMap(clientX, clientY) {
  const rect = routeMap.getBoundingClientRect();
  return {
    x: mapViewport.x + ((clientX - rect.left) / Math.max(1, rect.width)) * mapViewport.width,
    y: mapViewport.y + ((clientY - rect.top) / Math.max(1, rect.height)) * mapViewport.height
  };
}

function zoomMap(factor, anchorClient = null) {
  const nextZoom = clamp(currentZoom * factor, minimumZoom, maximumZoom);
  if (Math.abs(nextZoom - currentZoom) < 0.001) return;

  const anchor = anchorClient
    ? clientPointToMap(anchorClient.x, anchorClient.y)
    : { x: mapViewport.x + mapViewport.width / 2, y: mapViewport.y + mapViewport.height / 2 };
  const previousWidth = mapViewport.width;
  const previousHeight = mapViewport.height;
  const nextWidth = baseViewport.width / nextZoom;
  const nextHeight = baseViewport.height / nextZoom;

  mapViewport.x = anchor.x - ((anchor.x - mapViewport.x) / previousWidth) * nextWidth;
  mapViewport.y = anchor.y - ((anchor.y - mapViewport.y) / previousHeight) * nextHeight;
  currentZoom = nextZoom;
  applyMapViewport();
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

function renderTimeline() {
  timelineList.innerHTML = "";

  stops.forEach((stop, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `stop-card${stop.id === selectedStopId ? " is-active" : ""}`;
    card.dataset.stopId = stop.id;
    card.setAttribute("aria-label", `${stop.time}，${stop.title}`);
    card.innerHTML = `
      <span class="time-block"><span>${stop.time}</span><small>${stop.timeNote}</small></span>
      <span class="stop-number${stop.provisional ? " provisional" : ""}">${stop.order}</span>
      <span class="stop-content">
        <span class="stop-eyebrow">${iconMarkup(stop.icon)}${stop.category}</span>
        <h3>${stop.title}</h3>
        <span class="stop-subtitle">${stop.subtitle}</span>
        <span class="stop-note ${stop.noteType || ""}">${stop.note}</span>
      </span>
    `;
    card.addEventListener("click", () => selectStop(stop.id, { scroll: false, switchView: true }));
    timelineList.appendChild(card);

    const leg = legs[index];
    if (!leg) return;

    const legCard = document.createElement("button");
    legCard.type = "button";
    const railClass = leg.mode === "train" ? " is-rail" : "";
    const warningClass = ["warning", "provisional"].includes(leg.status) ? " is-warning" : "";
    legCard.className = `leg-card${leg.id === selectedLegId ? " is-active" : ""}${railClass}${warningClass}`;
    legCard.dataset.legId = leg.id;
    legCard.setAttribute("aria-label", `${leg.label}，${leg.duration}`);
    legCard.innerHTML = `
      <span class="leg-icon">${iconMarkup(leg.mode)}</span>
      <span class="leg-main"><strong>${leg.label}</strong><small>${leg.detail}</small></span>
      <span class="leg-duration">${leg.duration}</span>
    `;
    legCard.addEventListener("click", () => selectLeg(leg.id));
    timelineList.appendChild(legCard);
  });
}

function setView(view) {
  currentView = view;
  document.querySelectorAll(".view-tab").forEach((tab) => {
    const active = tab.dataset.view === view;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  resetMapViewport();
  renderMap();
}

function selectStop(id, options = {}) {
  const { scroll = true, switchView = true } = options;
  const stop = stopById(id);
  if (!stop) return;

  selectedStopId = id;
  const nextLeg = nextLegForStop(id);
  const previousLeg = previousLegForStop(id);
  selectedLegId = (nextLeg || previousLeg || {}).id || null;

  if (switchView && currentView !== stop.zone) setView(stop.zone);
  else renderMap();

  renderTimeline();
  renderInspector();
  centerMapOnStop(stop);

  if (scroll) {
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
  if (from.zone === to.zone && currentView !== from.zone) setView(from.zone);
  else if (from.zone !== to.zone && currentView !== "overview") setView("overview");
  else renderMap();

  renderTimeline();
  renderInspector();
}

function project(stop, view) {
  const box = bounds[view];
  const x = 90 + ((stop.lon - box.minLon) / (box.maxLon - box.minLon)) * 820 + (stop.markerDx || 0);
  const y = 72 + (1 - (stop.lat - box.minLat) / (box.maxLat - box.minLat)) * 485 + (stop.markerDy || 0);
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
}

function renderOverview() {
  const nodes = [
    { id: "beijing", target: "airport", x: 145, y: 155, label: "北京大兴", sub: "07:15 · PKX", number: "起", provisional: false },
    { id: "yanji", target: "wall", x: 735, y: 190, label: "延吉市内", sub: "09:30–16:33 · 6站", number: "1–6", provisional: false },
    { id: "station", target: "changbaiStation", x: 390, y: 440, label: "长白山站", sub: "18:18 · CUL", number: "7", provisional: false },
    { id: "town", target: "hotel", x: 475, y: 545, label: "二道白河", sub: "19:00起 · 3项待定", number: "8–10", provisional: true }
  ];

  const overviewTitle = svgEl("text", { x: 84, y: 84, class: "context-label" });
  overviewTitle.textContent = "8月13日 · 跨区域总览";
  contextLayer.appendChild(overviewTitle);

  const regionalLabel = svgEl("text", { x: 590, y: 630, class: "context-label", opacity: "0.6" });
  regionalLabel.textContent = "吉林 · 延边朝鲜族自治州";
  contextLayer.appendChild(regionalLabel);

  const flightPath = quadraticPath(nodes[0], nodes[1], -0.27);
  drawOverviewRoute(flightPath, "flight-route", "KN5579 · 2小时15分", "07:15 → 09:30");

  const railUnderlay = quadraticPath(nodes[1], nodes[2], 0.14);
  const underlay = svgEl("path", { d: railUnderlay.d, class: "route-line-map rail-route-underlay", "aria-hidden": "true" });
  routeLayer.appendChild(underlay);
  drawOverviewRoute(railUnderlay, "rail-route", "G8140 · 1小时45分", "16:33 → 18:18");

  const shuttlePath = quadraticPath(nodes[2], nodes[3], -0.12);
  drawOverviewRoute(shuttlePath, "provisional", "酒店接驳 · 5–15分", "酒店确认后更新");

  nodes.forEach((node) => drawOverviewMarker(node));
}

function drawOverviewRoute(pathInfo, className, title, subtitle) {
  const path = svgEl("path", {
    d: pathInfo.d,
    class: `route-line-map ${className}`,
    "aria-hidden": "true"
  });
  routeLayer.appendChild(path);
  drawRoutePill(pathInfo.midpoint, title, subtitle, 156);
}

function drawOverviewMarker(node) {
  const group = svgEl("g", {
    class: `map-marker${node.provisional ? " provisional" : ""}`,
    transform: `translate(${node.x} ${node.y})`,
    tabindex: "0",
    role: "button",
    "aria-label": `${node.label}，${node.sub}`
  });
  const hit = svgEl("circle", { cx: 0, cy: 0, r: 34, class: "marker-hit" });
  const shape = svgEl("rect", { x: -27, y: -27, width: 54, height: 54, rx: 18, class: "marker-shape" });
  const number = svgEl("text", { x: 0, y: 5, class: "marker-number", style: "font-size:12px" });
  number.textContent = node.number;
  group.append(hit, shape, number);
  group.addEventListener("click", () => selectStop(node.target, { switchView: true }));
  group.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectStop(node.target, { switchView: true });
    }
  });
  markerLayer.appendChild(group);

  const title = svgEl("text", { x: node.x, y: node.y + 48, class: "map-marker-label" });
  title.textContent = node.label;
  const sub = svgEl("text", { x: node.x, y: node.y + 67, class: "map-marker-sublabel" });
  sub.textContent = node.sub;
  labelLayer.append(title, sub);
}

function renderLocalView(view) {
  drawContext(view);

  const visibleStops = stops.filter((stop) => stop.zone === view);
  const positions = new Map(visibleStops.map((stop) => [stop.id, project(stop, view)]));
  const visibleLegs = legs.filter((leg) => positions.has(leg.from) && positions.has(leg.to));

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
      "aria-label": `${leg.label}，${leg.duration}`
    });
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

  visibleStops.forEach((stop) => drawLocalMarker(stop, positions.get(stop.id)));
}

function drawContext(view) {
  if (view === "yanji") {
    const road1 = svgEl("path", { d: "M 45 220 C 260 255 455 205 960 260", class: "context-road" });
    const road2 = svgEl("path", { d: "M 150 50 C 250 170 390 330 520 625", class: "context-road" });
    const road3 = svgEl("path", { d: "M 48 430 C 250 390 610 430 965 368", class: "context-road-minor" });
    const label = svgEl("text", { x: 725, y: 96, class: "context-label" });
    label.textContent = "延吉市 · 市内视图";
    const river = svgEl("path", { d: "M 0 485 C 190 445 344 510 530 468 S 838 418 1035 466", class: "river-line" });
    contextLayer.append(road1, road2, road3, river, label);
  } else {
    const forest1 = svgEl("path", { d: "M 50 75 C 210 15 345 78 410 186 C 308 242 163 222 60 156 Z", class: "forest-patch" });
    const forest2 = svgEl("path", { d: "M 615 30 C 820 5 982 92 985 224 C 825 269 700 212 620 135 Z", class: "forest-patch" });
    const forest3 = svgEl("path", { d: "M 588 410 C 777 352 940 426 992 606 L 612 628 Z", class: "forest-patch" });
    const road = svgEl("path", { d: "M 155 95 C 325 190 446 298 573 392 S 780 530 945 562", class: "context-road" });
    const minor = svgEl("path", { d: "M 284 590 C 420 466 560 385 795 302", class: "context-road-minor" });
    const label = svgEl("text", { x: 675, y: 90, class: "context-label" });
    label.textContent = "二道白河 · 镇区示意";
    contextLayer.append(forest1, forest2, forest3, road, minor, label);
  }
}

function drawLocalMarker(stop, position) {
  const active = stop.id === selectedStopId;
  const group = svgEl("g", {
    class: `map-marker${stop.provisional ? " provisional" : ""}${active ? " is-active" : ""}`,
    transform: `translate(${position.x.toFixed(1)} ${position.y.toFixed(1)})`,
    tabindex: "0",
    role: "button",
    "aria-label": `${stop.order}，${stop.title}`
  });
  const hit = svgEl("circle", { cx: 0, cy: 0, r: 31, class: "marker-hit" });
  const shape = svgEl("rect", { x: -23, y: -23, width: 46, height: 46, rx: 15, class: "marker-shape" });
  const number = svgEl("text", { x: 0, y: 5, class: "marker-number" });
  number.textContent = stop.order;
  group.append(hit, shape, number);
  group.addEventListener("click", () => selectStop(stop.id, { scroll: true, switchView: false }));
  group.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectStop(stop.id, { scroll: true, switchView: false });
    }
  });
  markerLayer.appendChild(group);

  const labelX = position.x + (stop.labelDx || 0);
  const labelY = position.y + (stop.labelDy || 56);
  const title = svgEl("text", { x: labelX, y: labelY, class: "map-marker-label" });
  title.textContent = stop.title;
  const sub = svgEl("text", { x: labelX, y: labelY + 18, class: "map-marker-sublabel" });
  sub.textContent = stop.provisional ? "待确认点位" : stop.time;
  labelLayer.append(title, sub);
}

function drawRoutePill(position, title, subtitle, width = 140) {
  const group = svgEl("g", { transform: `translate(${position.x.toFixed(1)} ${position.y.toFixed(1)})`, "aria-hidden": "true" });
  const rect = svgEl("rect", { x: -width / 2, y: -25, width, height: 50, rx: 14, class: "route-pill-bg" });
  const titleText = svgEl("text", { x: 0, y: -2, class: "route-pill-text" });
  titleText.textContent = title;
  const subText = svgEl("text", { x: 0, y: 14, class: "route-pill-subtext" });
  subText.textContent = subtitle;
  group.append(rect, titleText, subText);
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
  const linkMarkup = stop.link
    ? `<a class="inspector-link" href="${stop.link}" target="_blank" rel="noopener noreferrer">${iconMarkup("pin")}查看来源</a>`
    : `<span class="inspector-link" aria-disabled="true">${iconMarkup("pin")}待补地点</span>`;

  mapInspector.innerHTML = `
    <div class="inspector-place">
      <div class="inspector-topline">
        <span class="inspector-category">${iconMarkup(stop.icon)}${stop.provisional ? "待确认 · " : ""}${stop.category}</span>
        <span class="inspector-time">${stop.time}</span>
      </div>
      <h3>${stop.order}. ${stop.title}</h3>
      <p class="inspector-address">${iconMarkup("pin")}<span>${stop.address}</span></p>
    </div>
    <div class="inspector-next">
      <div>
        <span>${nextLeg ? "下一段交通" : "当天结束"}</span>
        <strong>${nextLeg ? `${nextLeg.label} · ${nextLeg.duration}` : "第一天行程完成"}</strong>
      </div>
      ${linkMarkup}
    </div>
  `;
}

function populateCompare() {
  const options = stops.map((stop) => `<option value="${stop.id}">${stop.order}. ${stop.title}</option>`).join("");
  compareFrom.innerHTML = options;
  compareTo.innerHTML = options;
  compareFrom.value = "airport";
  compareTo.value = "wall";
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
    compareResult.innerHTML = `<strong>${known.duration}</strong> · ${known.label}<br>${known.detail}`;
    return;
  }

  if (from.provisional || to.provisional) {
    compareResult.innerHTML = `<strong>暂不能计算</strong><br>“${from.title}”与“${to.title}”中至少有一处尚未确定具体点位。`;
    return;
  }

  if (from.zone !== to.zone) {
    compareResult.innerHTML = `<strong>跨区域路线</strong><br>目前仅显示 G8140 路段的确定时间；其他跨城组合尚未计算。`;
    return;
  }

  const distance = haversine(from.lat, from.lon, to.lat, to.lon);
  compareResult.innerHTML = `<strong>直线约 ${distance.toFixed(1)} 公里</strong><br>这两个点不是当前行程中的相邻站点；正式版将接入路线服务计算实际道路与实时车程。`;
}

function haversine(lat1, lon1, lat2, lon2) {
  const radius = 6371;
  const toRad = (degree) => degree * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function showShareToast(message) {
  window.clearTimeout(toastTimer);
  shareToast.textContent = message;
  shareToast.hidden = false;
  toastTimer = window.setTimeout(() => {
    shareToast.hidden = true;
  }, 3600);
}

function downloadContent(content, filename) {
  const blob = content instanceof Blob ? content : new Blob([content], { type: "text/html;charset=utf-8" });
  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

function createStandaloneDocument() {
  const clone = document.documentElement.cloneNode(true);
  clone.querySelector("#compareDrawer")?.setAttribute("hidden", "");
  clone.querySelector("#mapDetailDock")?.classList.remove("is-comparing");
  clone.querySelector("#shareToast")?.setAttribute("hidden", "");
  clone.querySelector("#routeMap")?.classList.remove("is-panning");
  clone.querySelector("#routeMap")?.setAttribute("viewBox", "0 0 1000 680");
  return `<!doctype html>\n${clone.outerHTML}`;
}

async function shareItinerary() {
  const filename = "长白山行程-第一天-分享版.html";
  const title = "延吉至长白山｜8月13日行程";
  const text = "第一天的地点、交通与通勤时间图集";

  try {
    if (["http:", "https:"].includes(window.location.protocol)) {
      if (navigator.share) {
        await navigator.share({ title, text, url: window.location.href });
        return;
      }
      await copyText(window.location.href);
      showShareToast("分享链接已复制，可以发给同行人。");
      return;
    }

    const hasExternalAssets = Boolean(document.querySelector('link[rel="stylesheet"][href], script[src]'));
    if (hasExternalAssets) {
      const anchor = document.createElement("a");
      anchor.href = filename;
      anchor.target = "_blank";
      anchor.rel = "noopener";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      showShareToast("已打开单文件分享版，可在新页面中直接发送给同行人。");
      return;
    }

    const source = createStandaloneDocument();
    const file = new File([source], filename, { type: "text/html;charset=utf-8" });
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ title, text, files: [file] });
        return;
      } catch (error) {
        if (error?.name === "AbortError") return;
      }
    }

    downloadContent(file, filename);
    showShareToast("已生成单文件分享版，请把下载的文件发送给同行人。");
  } catch (error) {
    if (error?.name !== "AbortError") showShareToast("分享没有完成，请稍后再试。");
  }
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

document.querySelectorAll(".view-tab").forEach((tab) => {
  tab.addEventListener("click", () => setView(tab.dataset.view));
});

zoomOutButton.addEventListener("click", () => zoomMap(0.8));
zoomInButton.addEventListener("click", () => zoomMap(1.25));
zoomResetButton.addEventListener("click", resetMapViewport);
shareButton.addEventListener("click", shareItinerary);

routeMap.addEventListener("wheel", (event) => {
  if (event.ctrlKey) return;
  event.preventDefault();
  zoomMap(event.deltaY < 0 ? 1.25 : 0.8, { x: event.clientX, y: event.clientY });
}, { passive: false });

routeMap.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.button !== 0) return;
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
  const rect = routeMap.getBoundingClientRect();
  const deltaX = event.clientX - panStart.x;
  const deltaY = event.clientY - panStart.y;
  if (Math.abs(deltaX) + Math.abs(deltaY) > 4) {
    suppressMapClick = true;
    routeMap.classList.add("is-panning");
  }
  mapViewport.x = panStart.viewport.x - (deltaX / Math.max(1, rect.width)) * panStart.viewport.width;
  mapViewport.y = panStart.viewport.y - (deltaY / Math.max(1, rect.height)) * panStart.viewport.height;
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
    "0": resetMapViewport,
    ArrowLeft: () => panMapBy(-horizontalStep, 0),
    ArrowRight: () => panMapBy(horizontalStep, 0),
    ArrowUp: () => panMapBy(0, -verticalStep),
    ArrowDown: () => panMapBy(0, verticalStep)
  };
  const action = actions[event.key];
  if (!action) return;
  event.preventDefault();
  action();
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
    closeCompareDrawer();
  }
});

renderTimeline();
renderMap();
renderInspector();
populateCompare();
resetMapViewport();
