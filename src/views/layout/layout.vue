<template>
 <el-container style="height:100%;">
     
   <!--   左边栏目 start -->
   <div class="aside-bar">
     <el-aside width="100%" stlye="height:100%">
      <el-menu  :default-active="$route.path"  
                class="el-menu-vertical-custom" 
                @open="handleOpen" 
                @close="handleClose" 
                background-color="#324157"
                text-color="#bfcbd9"
                :router="true"
                :default-openeds="[1]"
                >
      <!-- *** 如果含有二级栏目，则使用二级栏目模板渲染。 ***  -->
        <template v-for="(route, index) in asseccedRoutes" >

            <!--     二级导航（子导航包含三级导航）  start -->
                <el-submenu :index="index.toString()" v-if="route.children && route.children.length > 0 &&!route.hidden">
                  <template slot="title">
                   <!--  <i class="el-icon-location"></i> -->
                     <svg class="icon iconFont" aria-hidden="true">
                        <use :xlink:href="route.icon"></use>
                      </svg>
                    <span slot="title">{{route.title}}</span>
                  </template>

                  <el-menu-item-group title="">
                   <el-menu-item  :index="routeComputed(route.path,subRoute.path)" v-for="(subRoute,i) in route.children" :key="i">
                    {{subRoute.name}}
                  <!--   <router-link :to="routeComputed(route.path,subRoute.path)">{{subRoute.name}}</router-link> -->
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
     </div>
    <!--   左边栏目 end  -->

 <!--  内部主模块 start -->
  <el-container>

    <!--   头部 start  --> 
    <el-header style="width:100%; text-align: right; font-size: 12px">
       
      <el-dropdown trigger="click" @command="dropCommand">
         <i class="el-icon-setting" style="margin-right: 15px"></i>
         <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>用户中心</el-dropdown-item>
          <el-dropdown-item>其他</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span><router-link to="/user">{{useToken.name}}</router-link></span>

      <!--   <img :src="getPortrait" alt="user-potrait" class="user-potrait" /> -->

    </el-header>   
    <!--   头部 end  -->  

   <!--  内容主体 start -->
    <el-main>
       <router-view></router-view>
    </el-main>
       <!--  内容主体 end -->
  </el-container>
  <!--  内部主模块 end -->

</el-container>

</template>


<script>
/*  eslint-disable */


// 在这里调用 vuex 去获取用户的Token
export default {
      data (){
      	 return {
              opendIndex : '1',
              useToken : {
              	   name : '老王',
              	   auth: 'admin',
              	   role : 'admin',
              	   id : '123123',
              	   portrait : 'avatar.png'
              }
      	 }
      },
   computed : {
          asseccedRoutes(){
              return this.$store.getters.asseccedroutes
          },
          getPortrait(){
               return require('@/assets/' + this.useToken.portrait)
          }
     },
   methods : {
         dropCommand(command){
            if(command == 'logout'){
               this.$store.dispatch('RESET_ROUTESMAP_ACTION');
                this.$store.dispatch('LOGOUTACTION')
                           .then( resp => {
                               this.$router.push('/login');
                           })
                           .catch(err => {
                               console.log(err)
                           })
            }
        },
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

<style >

.user-potrait{
    display: inline-block;
    width: 30px;
    position: relative;
    vertical-align: middle;
    margin-left: 10px;
}

.aside-bar{
  width: 200px;
  background-color: #324157;
}

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

 .el-menu-vertical-custom:not(.el-menu--collapse) {
    border-right: none;
 }

 .router-link-active{
   color:#fff;
 }


</style>