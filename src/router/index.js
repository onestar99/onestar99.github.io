import { createRouter, createWebHistory } from 'vue-router';
import HomeMain from '../views/Home-main.vue';
import Blog from '../views/Blog-main.vue';
import BlogCategory from '../views/Blog-category.vue';
import BlogPost from '../views/Blog-post.vue';
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
    path: '/blog/:category',
    name: 'BlogCategory',
    component: BlogCategory,
    props: true,
  },
  {
    path: '/blog/:category/:id',
    name: 'BlogPost',
    component: BlogPost,
    props: true,
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