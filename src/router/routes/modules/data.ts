import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const data: AppRouteModule = {
  path: '/data',
  name: 'Data',
  component: LAYOUT,
  meta: {
    orderNo: 999,
    icon: 'ion:bar-chart-outline',
    title: 'Data',
  },
  children: [
    {
      path: 'dyn-chart',
      name: 'Dyn Chart',
      meta: {
        title: 'Dyn Chart',
      },
      component: () => import('@/views/data/dynamic-chart.vue'),
    },
  ],
};

export default data;
