import { BasicFetchResult } from '@/api/model/baseModel';
import { BasicColumn } from '@/components/Table';
import mockjs from 'mockjs';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    fixed: 'left',
    width: 280,
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: 260,
  },
  {
    title: '位置X',
    dataIndex: 'locationX',
  },
  {
    title: '位置Y',
    dataIndex: 'locationY',
  },
  {
    title: '所属农场ID',
    dataIndex: 'farmId',
    width: 300,
  },
  {
    title: '最后访问',
    width: 200,
    dataIndex: 'lastAccess',
  },
  {
    title: '状态',
    dataIndex: 'state',
    width: 200,
  },
];

export type RowObject = {
  id: string;
  type: string;
  locationX: number;
  locationY: number;
  farmId: string;
  lastAccess: string;
  state: string | number;
  coord: number[];
};

const types = ['温湿度传感器', '二氧化碳传感器', '酸碱度传感器', '光照传感器'];
const states = ['正常运作', '低电量', '无法访问'];

export function getItems(count: number): RowObject[] {
  const items: RowObject[] = [];
  for (let i = 0; i < count; i++) {
    const data: RowObject = {
      id: 'DEVICE#' + mockjs.Random.id(),
      type: types[mockjs.Random.integer(0, types.length - 1)],
      locationX: mockjs.Random.float(20, 40, 2, 2),
      locationY: mockjs.Random.float(20, 40, 2, 2),
      farmId: mockjs.Random.id(),
      lastAccess: mockjs.Random.datetime(),
      state: states[mockjs.Random.integer(0, states.length - 1)],
      coord: [],
    };
    items.push(data);
  }
  return items;
}

const items: RowObject[] = [
  {
    id: 'DEVICE#450000199907035012',
    type: '光照传感器',
    locationX: 32.25,
    locationY: 34.26,
    farmId: 'FARM#4231425',
    lastAccess: '2024-04-22 18:05:28',
    state: '正常运作',
    coord: [116.33494197380253, 39.94960715590372],
  },
  {
    id: 'DEVICE#640000199804231833',
    type: '酸碱度传感器',
    locationX: 38.24,
    locationY: 39.62,
    farmId: 'FARM#4231425',
    lastAccess: '2024-04-22 22:47:07',
    state: '正常运作',
    coord: [116.33506201070497, 39.94963518803499],
  },
  {
    id: 'DEVICE#420000199204153244',
    type: '二氧化碳传感器',
    locationX: 34.23,
    locationY: 25.32,
    farmId: 'FARM#4231425',
    lastAccess: '2024-04-22 21:32:20',
    state: '正常运作',
    coord: [116.33508410127467, 39.94951222827521],
  },
  {
    id: 'DEVICE#210000198801096336',
    type: '温湿度传感器',
    locationX: 27.42,
    locationY: 20.34,
    farmId: 'FARM#4231425',
    lastAccess: '2024-04-22 08:21:47',
    state: '低电量',
    coord: [116.33496526301576, 39.94949632253767],
  },
];

export const deviceTableData = items;

export function getResult(): Promise<BasicFetchResult<RowObject>> {
  // const items = getItems(4);

  // console.log(JSON.stringify(items));
  const result: BasicFetchResult<RowObject> = {
    items,
    total: items.length,
  };
  return Promise.resolve(result);
}
