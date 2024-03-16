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
    };
    items.push(data);
  }
  return items;
}

export function getResult(): Promise<BasicFetchResult<RowObject>> {
  const items = getItems(30);
  const result: BasicFetchResult<RowObject> = {
    items,
    total: items.length,
  };
  return Promise.resolve(result);
}
