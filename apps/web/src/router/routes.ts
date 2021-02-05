import type { RouteRecordRaw } from 'vue-router'

import Home from '@/views/home/index.vue'

export default <RouteRecordRaw[]>[
  {
    name: 'home',
    path: '/home',
    component: Home,
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/about/index.vue'),
  },
]
