<template>
    <div class="main-sidebar">
      개발자 정한별
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainSidebar',
    // 컴포넌트 로직
  };
  </script>
  
  <style scoped>
  .main-sidebar {
    margin: 0;
    height: 100%;
    width: 350px;
    background-image: url('~@/assets/images/space-sidebar.jpg');
    background-size: cover; /* 배경 이미지가 div를 꽉 채우도록 설정 */
    background-position: center; /* 이미지가 중앙에 오도록 설정 */

  }
  </style>
  