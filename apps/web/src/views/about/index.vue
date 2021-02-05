<template>
  <h3>关于我们</h3>
  <p>{{ state.msg }}</p>
  <router-link to="/home">首页</router-link>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  msg: '这是什么？'
})
</script>
