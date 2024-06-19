export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: '平台访问频率',
    icon: 'visit-count|svg',
    value: 2,
    total: 3,
    color: 'green',
    action: '月',
  },
  {
    title: '平台流量',
    icon: 'total-sales|svg',
    value: 3,
    total: 4,
    color: 'blue',
    action: '月',
  },
  {
    title: '数据下载数',
    icon: 'download-count|svg',
    value: 15,
    total: 59,
    color: 'orange',
    action: '周',
  },
  {
    title: '数据统计数',
    icon: 'transaction|svg',
    value: 345,
    total: 611,
    color: 'purple',
    action: '年',
  },
];
