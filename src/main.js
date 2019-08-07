import Vue from "vue"
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   components: {
//     App
//   },
//   template: '<App/>',
//   router, // 配置路由器
// }) 
new Vue({
    el: '#app',
    render: h => h(App),  // 函数返回组件标签<App/>
    // render: createElement => createElement(App)
     router // 配置路由器
  })
