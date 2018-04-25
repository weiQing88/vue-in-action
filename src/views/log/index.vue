<template>
<div class="loginForm-wrapper">
 <el-form   :model="rulesForm" :rules="rules" ref="loginForm" class="loginForm" >
    <h3 class="loginForm-title"><em>登录系统</em></h3>


     <el-form-item  prop='name'>
       <!--  <span class="svg-container svg-container_login">
          <icon-svg icon-class="user" />
        </span> -->
         <el-input v-model="rulesForm.name" placeholder="用户名称"></el-input>
      </el-form-item>



   <el-form-item  prop='pw'>
   	 <!--  <span class="svg-container svg-container_login">
          <icon-svg icon-class="user" />
      </span> -->
    <el-input v-model="rulesForm.pw" type="password" placeholder="用户密码"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit" :disabled="loading" style="width:100%"> 登录 </el-button>
  </el-form-item>

</el-form>
</div>

</template>

<script>
 /* eslint-disable */ 


export default {
	 data(){
	 // 是否含有空白
	  var haBlank = function(rule,value,callback){
	  	       if(/\s+/g.test(value)){
	  	       	   callback(new Error('不能含有空格'));
			  	}else{
			  		callback()
			  	}
	  };

	 	 return {
	 	 	 loading : false,
	 	 	 rulesForm : {
	 	 	 		 name : '', 
	 	 	 		 pw : ''
	 	 	    },
	 	 	rules : {
	 	 		 name : [
	 	 		 	 {required: true, message : '请输入用户名',trigger : 'blur'},
	 	 		 	 {min:3,max:10, message: '长度在3到10 个字符',trigger : 'blur'}
	 	 		  ],
	 	 		pw : [
	 	 			  {required: true, message : '请输入用户密码',trigger : 'blur'},
	 	 			  {trigger : 'blur',validator : haBlank }
	 	 			 
	 	 		 ]
	 	 	}
	 	 }
	 },
	methods : {
	    onSubmit(){
           this.$refs.loginForm.validate((valid) =>{
           		var that = this;
           		if(valid){
           		   this.loading = true;
           		   this.$store.dispatch('LOGINACTION',this.rulesForm)
           					   .then(res => { // 这里处理路由跳转
           					    this.$router.push('/'); // 登录成功后，不可在返回登录页面
           					    this.loading = false;
           					   })
           					   .catch(error => {
           					   	 this.loading = false;
           					   })

           		}else{
           			 this.$refs.loginForm.resetFields();
           			 console.log('提交失败')
           			 return false;
           		} 
           })
	    } 
	}
}	

</script>

<style >
	
.loginForm-wrapper{
  width: 100%;
  height: 100%;
  padding-top: 1px;
  background-color: #2d3a4b;
}
.loginForm{
	 width: 310px;
	 margin:5% auto 0;
}

.loginForm-title{
	text-align: center;
	font-size: 25px;
	color: #fff;
}

.loginForm-title em{
	display: inline-block;
	line-height: 50px;
	height: 50px;
    margin-bottom:20px;

}

</style>