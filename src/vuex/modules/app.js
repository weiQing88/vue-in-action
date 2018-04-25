/* eslint-disable */
import { asyncRouterMap, constantRouterMap } from '@/router'



// 筛选出对应角色肯访问的路由表
function filterAsynRoutes(asyncRouterMap,role){
    var asseccedRoutes = asyncRouterMap.filter(route => {

          if(route.meta.role && route.meta.role.indexOf(role) > -1){

                if(route.children && route.children.length) route.children = filterAsynRoutes(route.children,role);        

              return true   
          }

         return false
    });
   return asseccedRoutes
}




var app = {
     state : { 
     	    GLOBALROUTESMAP : {},  
          role : []
         },
     mutations : {
     	 CREATE_ROUTESMAP : function(state,paramObejct){
   			    state.GLOBALROUTESMAP = constantRouterMap.concat(paramObejct.asseccedRoutes);
     	 },
       RESET_ROUTESMAP : function(state){   // 退出登录的时候，必须要清空
         state.GLOBALROUTESMAP = constantRouterMap;
      },
      SET_ROLE : function(state,role){
          state.role.push(role)
      },
      REMOVE_ROLE : function(state){
          state.role = []
      }
     },
   actions : {
   	     CREATE_ROUTESMAP_ACTION : function(context,role){ 
   	     	   return new Promise((resolve,reject) => {  
                  var asseccedRoutes =  filterAsynRoutes(asyncRouterMap,role);
                      context.commit('CREATE_ROUTESMAP',{ asseccedRoutes, role });
                      context.commit('SET_ROLE',role)  // 已根据角色生成了可访问路由表
                      resolve(asseccedRoutes);
   	     	   })
   	     },
        RESET_ROUTESMAP_ACTION : function({commit}){
           return new Promise((resolve, reject) =>{
                  commit('RESET_ROUTESMAP');
                  commit('REMOVE_ROLE');
                  resolve()
           })
           
       }
   }

}


export default app