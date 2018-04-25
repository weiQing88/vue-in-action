/* eslint-disable */

import router from './router'
import store from './vuex'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式


import { getToken, setToken } from '@/utils/token.js'


/*
条件：
1、是否有登录
2、角色权限
3、错误404

实现：
根据不同角色/状态显示导航列表，跳转页面
*/






// 定义不需要重定向的路由地址
var whitRoutes = ['/login'];



function hasPermission(condition){
	 const whiteList = ['admin','editor','speaker'];
    return  whiteList.indexOf(condition)
}



router.onError((error) => {

     console.log(error)

});


router.beforeEach((to, from, next) => {
   /* 
     to.matched 匹配父路由和其下子路由的记录。
     如果其中一个需要权限验证，
     其余的都不可以访问
   */
  // console.log(to.matched);


 NProgress.start() // 开启Progress

var TokenObject = getToken();


   if(TokenObject){  // 先判断是否有登录

       if(to.path == '/login'){ // 如果已经登录，就不允许在访问登录页面

           next({ path : '/' })

       }else{   // 如果是其他页面，则需要检查访问权限，以便创建可访问路由表和侧边栏

          if(store.getters.role.length == 0){  // 这里是验证是否已经创建了可访问的路由表，使用 roles变量存储 状态。

                store.dispatch('CREATE_ROUTESMAP_ACTION',TokenObject.role)
                       .then((asseccedRoutes) =>{
                           router.addRoutes(asseccedRoutes);  // 动态生成可访问的路由表
                            next({...to}) // 必须要把 to 展开
                       })
                       .catch((error) => {
                            next({ path : '*' });
                   });


          }else{   //  已经创建了可访问的路由表

              next()
          }



       }




   }else{
      // 如果没有登录，需要跳转到登录页面。 （白名单不必跳转）

      if(whitRoutes.indexOf(to.path) !== -1){

          next() // 防止 to.path 是 '/login'的时候，出现死循环。

      }else{

           next({ path : '/login'})
      }

     
   }






});


router.afterEach(() => {
  NProgress.done() // 结束Progress
})
