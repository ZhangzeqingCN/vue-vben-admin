import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const devices: AppRouteModule = {
  path: '/devices',
  name: 'Devices',
  component: LAYOUT,
  meta: {
    orderNo: 114514,
    icon: 'ion:bar-chart-outline',
    title: 'Devices',
  },
  children: [
    {
      path: 'devices-table',
      name: 'Devices Table',
      meta: {
        title: 'Devices Table',
      },
      component: () => import('@/views/devices/device-table.vue'),
    },
  ],
};

export default devices;
