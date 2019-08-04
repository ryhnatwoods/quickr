module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {},
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enbale: true
        },
        url: {
          enable: true,
          config: {
            limit: 10240 //文件大小限制
          }
        }
      }
    }
  },
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
};
