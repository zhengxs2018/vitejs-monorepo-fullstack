import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.addRoute({
  path: '/',
  redirect: '/home',
})

// 仅开发时候加载
if (import.meta.env.MODE === 'development') {
  // @ts-ignore
  window.router = router
}

export default router
