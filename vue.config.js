// module.exports = {
//   // 选项...
//   devServer: {
//     proxy: {
//       '/api': { // 匹配所有以 '/api'开头的请求路径
//         target: 'http://localhost:4000', // 代理目标的基础路径
//         changeOrigin: true, // 支持跨域
//         pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
//           '^/api': ''
//         }
//       },
//       '/baidu': { // 匹配所有以 '/baidu'开头的请求路径
//         target: 'http://www.baidu.com', // 代理目标的基础路径
//         changeOrigin: true, // 支持跨域
//         pathRewrite: { // 重写路径: 去掉路径中开头的'/baidu'
//           '^/baidu': ''
//         }
//       }
//     }
//   }
// }
const path = require('path')
// __dirname: 内置代表当前文件的文件夹的绝对路径

/* 
根据目录/文件夹名得到其对应的绝对路径
*/
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  // 编写webpack配置
  configureWebpack: { 
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 自添加的文件扩展名
      alias: { // 模块路径别名
        // 'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'components': resolve('src/components'),
        'pages': resolve('src/pages'),
      }
    }
  },

  // 配置开发服务中的代理
  devServer: {
    proxy: {
      // 请求地址以/api开头
      '/api': {
        target: 'http://localhost:4000', // 转发的目录地址
        changeOrigin: true, // 支持跨域
         pathRewrite: { // 重写路径: 让代理服务在转发请求, 对路径进行特定修改
           '^/api': '', // 去掉路径中的/api
         },
      },
      '/baidu': {
        target: 'http://www.baidu.com',
        changeOrigin: true,
        pathRewrite: { 
          '^/baidu': '',
        },
      },
    }
  }
}