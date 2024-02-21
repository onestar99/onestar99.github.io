<template>
  <div class="home-container">
    <img src="@/assets/images/space-home.jpg" alt="Home Background" class="background-image">
    <div class="planets">
      <router-link to="/blog">
        <img src="@/assets/images/planet1.png" alt="Planet 1" class="planet" style="top: 20%; left: 30%;">
      </router-link>
      <router-link to="/news">
        <img src="@/assets/images/planet2.png" alt="Planet 2" class="planet" style="top: 50%; left: 60%;">
      </router-link>
      <router-link to="/game">
        <img src="@/assets/images/planet3.png" alt="Planet 3" class="planet" style="top: 13%; left: 80%;">
      </router-link>
    </div>
    <img src="@/assets/images/starrail.png" alt="Star Rail" class="starrail">
    
  </div>

</template>

<script>
export default {
  name: 'Home-main',
};
</script>

<style scoped>



.home-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.planets {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.planet {
width: 100px; /* 이미지 너비 조정 */
height: auto; /* 비율 유지를 위해 height를 auto로 설정 */
position: absolute;
transition: transform 0.5s ease, filter 0.5s ease;
}

.planet:hover {
  transform: scale(1.1); /* 이미지를 약간 확대 */
  filter: brightness(150%); /* 이미지가 빛나게 */
}


/* 열차 애니메이션 */
.starrail {
  position: absolute;
  bottom: 20%; /* 화면 아래쪽에서 20% 떨어진 위치부터 시작 */
  left: -50%; /* 이미지가 왼쪽에서 시작하도록 설정. 이미지 너비에 따라 조정이 필요할 수 있음 */
  animation: moveStarRail 60s linear infinite; /* 40초 동안 애니메이션 실행 */
  height: 40px;
  width: auto; 
}

.starrail:hover {
  transform: scale(1.01); /* 이미지를 약간 확대 */
  filter: brightness(120%); /* 이미지가 빛나게 */
}

@keyframes moveStarRail {
  from {
    left: -15%; /* 시작 위치. 이미지가 완전히 왼쪽에 있도록 조정 */
    bottom: 0%;
    transform: rotate(-13deg); /* 시작할 때의 회전 각도 */
  }
  to {
    left: 150%; /* 끝 위치. 화면 오른쪽 50%를 넘어가도록 설정 */
    bottom: 60%;
    transform: rotate(-13deg); /* 시작할 때의 회전 각도 */
  }
}

</style>