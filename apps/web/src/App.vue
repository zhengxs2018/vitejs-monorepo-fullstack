<template>
  <ui-config-provider size="small">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </ui-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
