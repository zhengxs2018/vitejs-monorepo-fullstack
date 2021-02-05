<template>
  <img src="../../assets/logo.png" alt="Vue logo" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <br />
  <br />
  <p>{{ state.message }}</p>
  <br />
  <br />
  <router-link to="/about">关于我们 </router-link>
</template>

<script setup lang="ts">
import axios from 'axios'

import { reactive, onBeforeMount, defineProps } from 'vue'

import type { Message } from 'api-interfaces'

import HelloWorld from '@/components/HelloWorld.vue'

const state = reactive<Message>({
  message: ''
})

onBeforeMount(() => {
  axios.get<Message>('/api/message')
    .then(res => {
      state.message = res.data.message
    })
})
</script>
