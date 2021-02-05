import { createStore } from 'vuex'

const store = createStore({
  strict: import.meta.env.MODE === 'development',
  state: {}
})

if (import.meta.env.MODE === 'development') {
  // @ts-ignore
  window.store = store
}

export default store
