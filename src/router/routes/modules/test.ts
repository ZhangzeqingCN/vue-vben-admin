import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const tests: AppRouteModule = {
  path: '/tests',
  name: 'Tests',
  component: LAYOUT,
  meta: {
    orderNo: 501,
    icon: 'ion:bar-chart-outline',
    title: 'Tests',
  },
  children: [
    {
      path: 'first-test',
      name: 'FirstTest',
      meta: {
        title: 'FirstTest',
      },
      component: () => import('@/views/first-test.vue'),
    },
  ],
};

export default tests;
