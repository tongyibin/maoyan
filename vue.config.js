// 正向代理配置文件
module.exports = {
  // 选项
  publicPath: '/my/',

  devServer: {
    proxy: {
      '/maoyan': {
        target: 'http://m.maoyan.com',
        pathRewrite: {
          '^/maoyan': ''
        }
      }
    }
  }

}
