<template>
  <div class="main-sidebar" :class="{ 'sidebar-closed': !show }">
    <div class="sidebar-content">
      <img src="@/assets/images/profile.jpg" alt="프로필 이미지" class="profile-image">
      <h1>개발자 onestar99</h1>
      <div class="starwars-demo">
        <p>멀리 있는 은하계에서...<br>
          아름다운 푸른별 1999년, 작은 개발자가 태어나게 된다...<br>
          컴퓨터를 좋아하던 어린 아이는 점차 자라 게임을 좋아하게 되고 개발에 흥미를 가지게된다...<br>
          건국대학교 소프트웨어학과에 진학하여, 작은 레벨부터 성장해 어느 덧 개인 사이트를 직접 만들고 되는데...<br>
          백엔드 개발자가 되어 전세계 위에 서겠다는 그의 야망은 그를 성장시키고 어느덧 졸업을 앞두게 된다.<br>
          C로 시작된 개발은 C++, JAVA를 맞이하며 성장통을 겪는다. 자료 구조를 공부하고 웹 프로그래밍을 공부한다, 시스템 프로그래밍과 리눅스를 만난 후 2년의 수련 시간을 거치게 된다.<br>
          이후 운영체제에 대한 공부와 안드로이드 앱 개발, 코틀린을 공부하였고, DB와 SQL에 대해 배우게 된다.<br>
          3학년 2학기, 머신러닝에 대해 공부를 시작하였고 scikit-learn과 pytorch를 통해 공부를 한다.<br>
          opencv를 통한 컴퓨터 비전을 공부하였고, 언리얼 엔진4와 계속해서 따로 스프링부트와 AWS 클라우드 기술을 공부한다.
        </p>
      </div>
      <div class="sidebar-slogan">
        <p></p>
      </div>
    </div>
    <div class="sidebar-toggle" @click="toggleSidebar">
      <span v-if="show">&times;</span>
      <span v-else>&#9776;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSidebar',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    this.animateText();
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle');
    },
    animateText() {
      const phrases = ["개발자로서..", "내가", "정.", "점에", "서겠다."];
      let index = 0;
      const target = this.$el.querySelector('.sidebar-slogan p');
      const addText = () => {
        if (index < phrases.length) {
          target.innerHTML += (index > 0 ? " " : "") + phrases[index];
          index++;
          setTimeout(addText, 2000);
        }
      };
      addText();
    },
  },
};
</script>

<style scoped>
.main-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  height: 100%;
  width: 350px;
  background-image: url('~@/assets/images/space-sidebar.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
}

.sidebar-content {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  flex-grow: 1;
}


.profile-image {
  border-radius: 50%;
  width: 100px;
  object-fit: cover;
  border: 3px solid white;
  margin-top: 30px;
}

.starwars-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  color: #feda4a;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 200%;
  font-weight: 600;
  text-align: justify;
  overflow: hidden;
  perspective: 300px;
  user-select: none;
  max-height: 500px; /* 최대 높이 제한 */
}

.starwars-demo p {
  transform-origin: 50% 100%;
  animation: crawl 85s linear infinite;
  max-width: 100%; /* 최대 너비를 100%로 제한 */
  padding: 0 20px; /* 좌우 여백 추가 */
}

@keyframes crawl {
  0% {
    transform: rotateX(5deg) translateY(100%);
    opacity: 0;
  }
  2% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotateX(15deg) translateY(-2000px) scale(0.8);
    opacity: 1;
  }
}

.sidebar-toggle {
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.sidebar-toggle:hover {
  background-color: #f0f0f0;
}

.sidebar-toggle span {
  font-size: 24px;
  color: #333;
}

.sidebar-closed {
  transform: translateX(-100%);
}


@media (max-width: 767px) {
  .main-sidebar {
    width: 100%;
  }

  .profile-image {
    width: 80px;
    margin-top: 20px;
  }

  .starwars-demo {
    font-size: 100%;
    height: auto;
  }
}
</style>