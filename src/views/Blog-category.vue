<template>
    <div class="blog-list">
      <h2>{{ category }}</h2>
      <ul>
        <li v-for="post in categoryPosts" :key="post.id">
          <router-link :to="`/blog/${category}/${post.id}`" class="blog-link">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import posts from '@/assets/posts.json';
  
  export default {
    props: ['category'],
    computed: {
      categoryPosts() {
        return posts.filter(post => post.category === this.category);
      },
    },
  };
  </script>
  
  <style scoped>
  .blog-list {
    margin-left: 350px; /* 사이드바의 너비와 동일하게 설정 */
    padding: 90px; /* 내용과 테두리 사이의 간격 */
    overflow: auto; /* 내용이 넘칠 경우 스크롤 가능하도록 설정 */
  }

  .blog-list ul {
    list-style: none; /* 기본 리스트 스타일 제거 */
    padding: 0;
  }
  
  .blog-list li {
    margin: 10px 0; /* 각 리스트 항목 사이의 마진 */
  }
  
  .blog-link {
    text-decoration: none; /* 링크 밑줄 제거 */
    color: greenyellow; /* 링크 색상 설정 */
    font-weight: bold; /* 글씨 두껍게 */
    transition: color 0.3s ease; /* 색상 변화 애니메이션 */
  }
  
  .blog-link:hover, .blog-link:focus {
    color: #7957d5; /* 호버 및 포커스 시 색상 변경 */
  }
  </style>