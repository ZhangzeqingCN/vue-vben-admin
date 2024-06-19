import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const farms: AppRouteModule = {
  path: '/farms',
  name: 'Farms',
  component: LAYOUT,
  meta: {
    orderNo: 123344,
    icon: 'ion:bar-chart-outline',
    title: 'Farms',
  },
  children: [
    {
      path: '/farm-map',
      name: 'Farm Map',
      meta: {
        title: 'Farm Map',
      },
      component: () => import('@/views/farms/farm-map.vue'),
    },
  ],
};

export default farms;
