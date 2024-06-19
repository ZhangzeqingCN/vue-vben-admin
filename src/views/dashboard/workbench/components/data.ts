interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'ion:home-outline',
    color: '#1fdaca',
  },
  {
    title: '仪表盘',
    icon: 'ion:grid-outline',
    color: '#bf0c2c',
  },
  {
    title: '组件',
    icon: 'ion:layers-outline',
    color: '#e18525',
  },
  {
    title: '系统管理',
    icon: 'ion:settings-outline',
    color: '#3fb27f',
  },
  {
    title: '权限管理',
    icon: 'ion:key-outline',
    color: '#4daf1bc9',
  },
  {
    title: '图表',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff',
  },
];

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '刚刚',
    desc: `在 <a>测试任务组</a> 创建了项目 <a>测试任务</a>`,
  },
  {
    avatar: 'dynamic-avatar-2|svg',
    name: '艾文',
    date: '1个小时前',
    desc: `关注了 <a>威廉</a> `,
  },
  {
    avatar: 'dynamic-avatar-3|svg',
    name: '克里斯',
    date: '1天前',
    desc: `发布了 <a>个人动态</a> `,
  },
  {
    avatar: 'dynamic-avatar-4|svg',
    name: 'Vben',
    date: '2天前',
    desc: `发表文章 <a>测试任务</a> `,
  },
  {
    avatar: 'dynamic-avatar-5|svg',
    name: '皮特',
    date: '3天前',
    desc: `回复了 <a>杰克</a> 的问题 <a>如何进行设备检修？</a>`,
  },
  {
    avatar: 'dynamic-avatar-6|svg',
    name: '杰克',
    date: '1周前',
    desc: `关闭了问题 <a>如何运行项目</a> `,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '1周前',
    desc: `发布了 <a>个人动态</a> `,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '2024-04-01 20:00',
    desc: `提交了任务到 <a>测试任务</a>`,
  },
];

export const groupItems: GroupItem[] = [
  {
    title: '设备检修',
    icon: 'carbon:logo-github',
    color: '',
    desc: '设备检修',
    group: '运维部',
    date: '2024-04-01',
  },
  {
    title: '任务1',
    icon: 'ion:logo-vue',
    color: '#3fb27f',
    desc: '任务1',
    group: '??',
    date: '2024-04-01',
  },
  {
    title: '任务1',
    icon: 'ion:logo-html5',
    color: '#e18525',
    desc: '任务1',
    group: '任务1',
    date: '2024-04-01',
  },
  {
    title: '任务1',
    icon: 'ion:logo-angular',
    color: '#bf0c2c',
    desc: '任务1',
    group: '任务1',
    date: '2024-04-01',
  },
  {
    title: '任务1',
    icon: 'bx:bxl-react',
    color: '#00d8ff',
    desc: '任务1',
    group: '任务1',
    date: '2024-04-01',
  },
  {
    title: '任务1',
    icon: 'ion:logo-javascript',
    color: '#EBD94E',
    desc: '任务1',
    group: '任务1',
    date: '2024-04-01',
  },
];
