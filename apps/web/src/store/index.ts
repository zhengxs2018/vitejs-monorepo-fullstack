import { createStore } from 'vuex'

const store = createStore({
  strict: import.meta.env.MODE === 'development',
  state: {},
})

// 仅开发时候加载
if (import.meta.env.MODE === 'development') {
  // @ts-ignore
  window.store = store
}

export default store
