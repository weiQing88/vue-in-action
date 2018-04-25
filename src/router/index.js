/*  eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'

import Layout from '@/views/layout/layout'



// import Home from '@/views/layout/home'  // => 主页


// import Login from '@/views/log/'


// import PageA from '@/views/pageA'  // => page1
// import PageB from '@/views/pageB'  // => page2
// import PageC from '@/views/pageC'  // => page3
// import NotFound from '@/views/error/404'


Vue.use(Router);


// 开发环境下不执行懒加载 (该方法可用)。
// 在 layout 模板中不可 加载其他组件。
var _import = ((window,undefined) =>{   
        if(process.env.NODE_ENV == 'development'){    
              return  file => () => import('@/views/' + file + '.vue')  
          }else{ 
              return  file => require('@/views/' + file).default    
           } 

   })(window);








// 未登录用户或无权限用户可访问的栏目
export const constantRouterMap = [
    { path: '/login',  name : '登录', component : _import('log/index'), hidden: true },
    { path: '/404', name: '页面被狗吃了', component : _import('error/404'), hidden : true },
    {
      path : '/',
      title : '首页',
      name : '数据预览',
      component : Layout,
      redirect : '/index',
      icon: '#icon-zhiliangguanli',
      children : [
          { path : 'index', name:"数据预览-详情", component : _import('layout/home') }
        ] 
    },

];




// 需要权限才能访问的栏目
export const asyncRouterMap = [
         {
          path : '/column1',
          title : '用户数据',
          name : '用户数据',
          component : Layout,
          redirect : '/column1/index',
          meta : { role : 'admin' },
          icon : '#icon-yonghu',
          children : [
              { path : 'index', name: '用户数据-地区', component : _import('pageA/index'), meta : { role : 'admin' }  }

            ] 
        },
        {
          path : '/column2',
          title : '销售数据',
          name : '销售数据',
          component : Layout,
          redirect : '/column2/index',
          meta : { role : 'admin' }, 
          icon : '#icon-product',
          children : [
              { path : 'index', name:'销售数据-订单', component :  _import('pageB/index'), meta : { role : 'admin' } }
            ] 
        },
       {
          path : '/column3',
          title : '资料数据',
          name : '资料数据',
          component : Layout,
          redirect : '/column3/index',
          meta : { role : 'admin editor' }, 
          icon : '#icon-text',
          children : [
               { path : 'index',  name:'资料数据-图片', component : _import('pageC/index'), meta : { role : 'admin editor' } },
               { path : 'son',  name:'资料数据-主题', component : _import('pageC/index'), meta : { role : 'admin editor' } }
            ] 
        }
        // 404页面一定要最后加载，如果放在constantRouterMap一同声明了404，
        // 后面的所以页面都会被拦截到404，详细的问题见 https://github.com/vuejs/vue-router/issues/1176
        // { path: '#', redirect: '/404', hidden: true }
        // 出现死循环， 待解决

];




export default new Router({
     routes: constantRouterMap
});







