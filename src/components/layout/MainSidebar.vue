<template>
    <div class="main-sidebar">
      <img src="@/assets/images/profile.jpg" alt="프로필 이미지" class="profile-image">
      <h1>개발자 정한별</h1>
      <div class="starwars-demo">
        <p>이것은 1999년. 멀리 있는 은하계에서...<br>
        아름다운 푸른별에서 태어난 어린 개발자의 성장기이다...<br>
        컴퓨터를 좋아하던 어린 아이는 점차 자라 게임을 좋아하게 되고 개발에 흥미를 가지게된다...<br>
        건국대학교 소프트웨어학과에 진학하여 작은 레벨부터 성장하여 어느 덧 개인 사이트를 직접 만들기까지 한다...<br>
        백엔드 개발자가 되어 전세계 위에 서겠다는 그의 야망은 그를 성장시키고 어느덧 졸업을 앞두게 되는데...
      </p>
      </div>
      <div class="sidebar-slogan">
        <p></p>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'MainSidebar',
  mounted() {
    this.animateText();
  },
  methods: {
    animateText() {
      const phrases = ["개발자로서..", "내가", "정.", "점에", "서겠다."];
      let index = 0;
      const target = this.$el.querySelector('.sidebar-slogan p'); // '.starwars-demo p' 대신 적절한 셀렉터 사용

      const addText = () => {
        if (index < phrases.length) {
          target.innerHTML += (index > 0 ? " " : "") + phrases[index];
          index++;
          setTimeout(addText, 2000); // 다음 텍스트 조각을 추가하기 전에 2초 대기
        }
      };

      addText();
    }
  }
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
  display: flex; /* Flexbox를 사용해서 내용을 중앙 정렬 */
  flex-direction: column; /* 내용을 세로로 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
}

.profile-image {
  border-radius: 50%;
  width: 100px;
  object-fit: cover; /* 이미지 비율 유지 */
  border: 3px solid white; /* 이미지 주변에 흰색 테두리 추가 (선택사항) */
  margin-top: 30px;
}

.starwars-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  color: #feda4a;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 250%;
  font-weight: 600;
  text-align: justify;
  overflow: hidden;
  perspective: 300px;
  user-select: none;
}

.starwars-demo p {
  transform-origin: 50% 100%;
  animation: crawl 30s linear infinite;
}

@keyframes crawl {
  0% {
    transform: rotateX(20deg) translateY(100%);
    opacity: 0;
  }
  2% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotateX(25deg) translateY(-1500px) scale(0.5);
    opacity: 1;
  }
}




</style>
  