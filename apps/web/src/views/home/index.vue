<template>
  <img
    src="../../assets/logo.png"
    alt="Vue logo"
  />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <h1>Async data</h1>
  <p>api 数据：{{ state.message }}</p>
  <p>mock 数据：{{ state.user }}</p>
  <h1>UI components</h1>
  <ui-button size="large">default</ui-button>&nbsp; <ui-button type="primary">primary</ui-button>&nbsp;
  <ui-button to="/about">跳转到关于我们</ui-button>
</template>

<script lang="ts">
import axios from 'axios'

import { defineComponent, reactive, onBeforeMount } from 'vue'

import type { Message } from 'api-interfaces'

import HelloWorld from '@/components/HelloWorld.vue'

type State = {
  user: any
}

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const state = reactive<State & Message>({
      message: '',
      user: {},
    })

    onBeforeMount(() => {
      axios.get('/api/user/1').then((res) => {
        state.user = res.data
      })
      axios.get<Message>('/api/message').then((res) => {
        state.message = res.data.message
      })
    })
    return {
      state,
    }
  },
})
</script>
