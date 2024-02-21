<template>
    <div v-html="convertedMarkdown"></div>
  </template>
  
  <script>
  import { marked } from 'marked';
  
  export default {
    props: ['id'],
    data() {
      return {
        convertedMarkdown: '',
      };
    },
    mounted() {
      fetch(`/blogmd/${this.id}.md`) // 동적으로 마크다운 파일 불러오기
        .then(response => response.text())
        .then(text => {
          this.convertedMarkdown = marked.parse(text);
        });
    },
  };
  </script>
  