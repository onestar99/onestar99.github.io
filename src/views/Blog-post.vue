<template>
  <div v-html="convertedMarkdown" class="main-content"></div>
  <div class="bottom-bar"></div>
</template>

<script>
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

export default {
  props: ['id', 'category'], // 카테고리 prop 추가
  data() {
    return {
      convertedMarkdown: '',
    };
  },
  mounted() {
    // 동적으로 마크다운 파일 경로 생성
    const markdownPath = `/blogmd/${this.category}/${this.id}.md`;

    fetch(markdownPath)
      .then(response => response.text())
      .then(text => {
        this.convertedMarkdown = marked.parse(text);
        this.$nextTick(() => {
          Prism.highlightAll();
        });
      });
  },
};
</script>

<style scoped>
.main-content {
  margin-left: 350px;
  padding-left: 150px;
  padding-right: 300px;
  padding-top: 30px;
  overflow: auto;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    padding: 10px;
  }
}
</style>

<style>
.top-bar {
  height: 100px;
}

.main-content p {
  color: beige;
  border-bottom: 1px solid #eee;
  padding-top: 10px;
  padding-bottom: 10px;
}

.main-content a {
  text-decoration: none;
  color: greenyellow;
  font-weight: bold;
  transition: color 0.3s ease;
}

.main-content a:hover,
.main-content a:focus {
  color: #7957d5;
}

.main-content hr {
  border-top: 5px #bbb;
  color: #7957d5;
  text-align: left;
  margin-left: 0;
  width: 90%;
}

.main-content img {
  max-width: 100%;
  height: auto;
}

.main-content img:hover {
  transform: scale(1.01);
  filter: brightness(110%);
}

.main-content table {
  border: 1px solid #fff;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}

.main-content th {
  border: 1px solid #fff;
  font-size: 2cap;
}

.main-content td {
  border: 1px solid #fff;
}

.main-content pre {
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  -webkit-overflow-scrolling: touch;
  max-width: 80%;
  padding: 10px;
  box-sizing: border-box;
}

.main-content pre code {
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
  display: inline-block;
  max-width: 100%;
}

@media (max-width: 768px) {
  .main-content table {
    font-size: 14px;
  }


  .main-content pre {
    font-size: 14px;
  }

  .main-content code {
    padding: 5px;
    font-size: 14px;
  }
}
</style>