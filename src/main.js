// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './vuex/index.js'
import * as filters from './filter'
import '@/icon/iconfont/iconfont.css' 
import '@/icon/iconfont/iconfont.js'
import './mock'

import 'element-ui/lib/theme-chalk/index.css'

import './permission.js'   // 权限控制

import './style/index.css'  // 全局样式



// 注册过滤方法
Object.keys(filters).forEach( key => {
	 Vue.filter(key, filters[key])
})



Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  template: '<App/>',
  components: { App },
   router,
}).$mount('#app')
