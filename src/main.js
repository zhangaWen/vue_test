import Vue from "vue"
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'

Vue.config.productionTip = false
Vue.component('Header', Header)
new Vue({
    el: '#app',
    render: h => h(App),  // 函数返回组件标签<App/>
    // render: createElement => createElement(App)
     router // 配置路由器
  })
