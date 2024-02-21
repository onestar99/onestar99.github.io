import { createRouter, createWebHistory } from 'vue-router';
import HomeMain from '../views/Home-main.vue';
import Blog from '../views/Blog-main.vue';
import BlogPost from '../views/Blog-post.vue'; // 개별 마크다운 파일을 보여줄 컴포넌트
import News from '../views/News-main.vue';
import Game from '../views/Game-main.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeMain,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/blog/:id', // 동적 세그먼트 사용
    name: 'BlogPost',
    component: BlogPost,
    props: true, // 라우트 파라미터를 props로 전달
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
