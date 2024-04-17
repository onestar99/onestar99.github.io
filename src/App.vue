<template>
  <div id="app">
    <MainSidebar :show="showSidebar" @toggle="toggleSidebar"></MainSidebar>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainSidebar from './components/layout/MainSidebar.vue';

export default {
  name: 'App',
  components: {
    MainSidebar,
  },
  data() {
    return {
      showSidebar: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
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
  display: flex;
  text-align: left;
  color: #ffffff;
  background-color: #2c3e50;
  width: 100%;
  height: 100%;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>