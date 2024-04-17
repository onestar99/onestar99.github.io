<!-- src/views/Blog-main.vue -->
<template>
  <div class="blog-list">
    <h2>Categories</h2>
    <ul>
      <li v-for="category in categories" :key="category">
        <router-link :to="`/blog/${category}`" class="blog-link">{{ category }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import posts from '@/assets/posts.json';

export default {
  computed: {
    categories() {
      const uniqueCategories = new Set();
      posts.forEach(post => uniqueCategories.add(post.category));
      return Array.from(uniqueCategories);
    },
  },
};
</script>

<style scoped>
.blog-list {
  margin-left: 350px;
  padding: 90px;
  overflow: auto;
}

.blog-list ul {
  list-style: none;
  padding: 0;
}

.blog-list li {
  margin: 10px 0;
}

.blog-link {
  text-decoration: none;
  color: greenyellow;
  font-weight: bold;
  transition: color 0.3s ease;
}

.blog-link:hover,
.blog-link:focus {
  color: #7957d5;
}
</style>