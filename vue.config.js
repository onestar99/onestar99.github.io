const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // 마크다운 파일을 위한 규칙 추가
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('raw-loader')
        .loader('raw-loader')
        .end();
  }
});
