<template>
  <div id="app">
    <MainSidebar v-if="showSidebar"></MainSidebar>
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
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.showSidebar = window.innerWidth >= 768; // 768px 이상일 때만 사이드바 표시
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
  flex: 1; /* 나머지 공간을 모두 차지하도록 설정 */
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
}


</style>
