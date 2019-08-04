module.exports = {
  env: {
    NODE_ENV: '"development"'
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
  h5: {}
};
