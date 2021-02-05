import { createApp } from 'vue'

import UI from 'ui'
import 'theme-chalk'

import App from './App.vue'
import router from './router'
import store from './store'

// 仅开发时候加载
if (import.meta.env.MODE === 'development') {
  console.group('[development] load mock files:')
  console.dir(Object.keys(import.meta.globEager('./mocks/**/*.ts')))
  console.groupEnd()
}

createApp(App).use(UI).use(router).use(store).mount('#app')
