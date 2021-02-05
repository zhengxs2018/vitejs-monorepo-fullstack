<template>
  <h3>关于我们</h3>
  <p>{{ state.msg }}</p>
  <ui-button to="/home">回到首页</ui-button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// eslint-disable-next-line
const state = reactive({
  msg: '这是什么？',
})
</script>
