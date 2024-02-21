<template>
  <div id="app">
    <MainSidebar></MainSidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainSidebar from './components/layout/MainSidebar.vue'

export default {
  name: 'App',
  components: {
    MainSidebar
  }
}
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #2c3e50;
  width: 100%;
  height: 100%;
}

</style>
