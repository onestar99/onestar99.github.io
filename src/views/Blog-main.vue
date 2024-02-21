<template>
    <div class="blog-list">
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link :to="`/blog/${post.id}`" class="blog-link">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  // posts.json 파일을 import
  import posts from '@/assets/posts.json';
  
  export default {
    data() {
      return {
        // import한 posts.json 파일을 posts 데이터 속성에 할당
        posts: posts,
      };
    },
  };
  </script>
  
  <style scoped>
  .blog-list ul {
    list-style: none; /* 기본 리스트 스타일 제거 */
    padding: 0;
  }
  
  .blog-list li {
    margin: 10px 0; /* 각 리스트 항목 사이의 마진 */
  }
  
  .blog-link {
    text-decoration: none; /* 링크 밑줄 제거 */
    color: #4a4a4a; /* 링크 색상 설정 */
    font-weight: bold; /* 글씨 두껍게 */
    transition: color 0.3s ease; /* 색상 변화 애니메이션 */
  }
  
  .blog-link:hover, .blog-link:focus {
    color: #7957d5; /* 호버 및 포커스 시 색상 변경 */
  }
  </style>
  