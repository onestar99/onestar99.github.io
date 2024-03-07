<template>
  <div v-html="convertedMarkdown" class="main-content"></div>
  <div class="bottom-bar"></div>
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
  

<style scoped>
.main-content {
  margin-left: 350px; /* 사이드바의 너비와 동일하게 설정 */
  padding-left: 200px; /* 내용과 테두리 사이의 간격 */
  padding-right: 200px; /* 내용과 테두리 사이의 간격 */
  padding-top: 30px; /* 내용과 테두리 사이의 간격 */
  overflow: auto; /* 내용이 넘칠 경우 스크롤 가능하도록 설정 */
  
}


/* 화면 크기가 작아졌을 때 사이드바와의 간격 조정을 위한 미디어 쿼리 */
@media (max-width: 768px) {
  .main-content {
    margin-left: 0; /* 모바일 화면에서는 사이드바가 없거나 다르게 표시될 수 있으므로 마진 제거 */
    padding: 10px;
  }
}
</style>


<style>

.top-bar{
  height: 100px;
}

  .main-content p{
    color: beige;
  }

  .main-content a{
    text-decoration: none; /* 링크 밑줄 제거 */
    color: greenyellow; /* 링크 색상 설정 */
    font-weight: bold; /* 글씨 두껍게 */
    transition: color 0.3s ease; /* 색상 변화 애니메이션 */
  }
  
  .main-content a:hover, .main-content a:focus {
    color: #7957d5; /* 호버 및 포커스 시 색상 변경 */
  }
  .main-content hr{
    border-top: 5px #bbb;
    color: #7957d5;
    text-align: left;
    margin-left: 0;
    width: 90%;
  }

  .main-content img:hover {
    transform: scale(1.01); /* 이미지를 약간 확대 */
    filter: brightness(110%); /* 이미지가 빛나게 */
  }
  .main-content table{
    border: 1px solid #fff;
    border-collapse: collapse;
    width: 500px;
    text-align: center;
    
  }
  .main-content th { border: 1px solid #fff;
  font-size: 2cap; }
  .main-content td { border: 1px solid #fff; }


</style>