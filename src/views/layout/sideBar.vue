<template>
  <el-aside width="100%" stlye="height:100%">

<el-menu  default-active="$route.path"  
          class="el-menu-vertical-custom" 
          @open="handleOpen" 
          @close="handleClose" 
          background-color="#324157"
          text-color="#bfcbd9"
          >

   
<!-- *** 如果含有二级栏目，则使用二级栏目模板渲染。 ***  -->
  <template v-for="(route, index) in asseccedRoutes" >

      <!--     二级导航（子导航包含三级导航）  start -->
          <el-submenu :index="index.toString()" v-if="route.children && route.children.length > 0 &&!route.hidden">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{route.title}}</span>
            </template>

            <el-menu-item-group title="">
             <el-menu-item  :index="routeComputed(route.path,subRoute.path)" v-for="(subRoute,i) in route.children" :key="i">
              <router-link :to="routeComputed(route.path,subRoute.path)">{{subRoute.name}}</router-link>
              </el-menu-item>
              </el-menu-item-group>

          </el-submenu>
 <!-- 二级导航（子导航包含三级导航） end -->

   <!-- 一级导航 start  -->
   <el-menu-item :index="index.toString()" v-if="!route.children && !route.hidden">
    <i class="el-icon-menu"></i>
    <span slot="title">
       <router-link :to="route.path">{{route.name}}</router-link>
    </span>
    </el-menu-item>
     <!-- 一级导航 end  -->

  </template>

</el-menu>
  </el-aside>
    </template>





<script>
/* eslint-disable */

 export default {
 	 data(){
      return {
         opendIndex : '1'
      }
   },
     computed : {
          asseccedRoutes(){
              return this.$store.getters.asseccedroutes
          }
     },
   methods : {
      handleOpen(){},
      handleClose(){},
      isCollapse(){},
      routeComputed(parentRoute,childRoute){  // 过滤 route 是否是 ‘/’
            if(/^\/$/g.test(parentRoute)){
                 return  '/' + childRoute
            }else{
                return  parentRoute + '/' + childRoute
            }
        }
   }
 }
</script>
<style scoped>
 .el-menu-vertical-custom:not(.el-menu--collapse) {
    border-right: none;
 }


</style>


