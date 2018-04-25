/* eslint-disable */

import { getToken, setToken, removeToken } from '@/utils/token.js'

import { userLoginApi, userLogoutApi } from '@/api'

import { Message } from 'element-ui'




 
var user = {
	state : {
		userToken : getToken(),
		name : '',
		role : '',
		id : ''
	},
	mutations : {
		SET_NAME : function(state,name){
			 state.name = name
		},
	    SET_ROLE : function(state,role){
	    	 state.role = role
	    },
	    SET_ID : function(state,id){
	    		 state.id = id
	    },
	    SET_TOKEN : function(state,token){
	    	 state.userToken = token;
	    },
	    EMPTY_TOKEN : function(state){
	    	state.userToken = getToken();
	    }
	}, 
  actions : {
     LOGINACTION({commit},userInfo){ // userInfo 从组件中传来的数据
     	// 返回一个 promise,以供外部使用 then 
     	return new Promise((resolve, reject) =>{
     		  userLoginApi(userInfo).then(resp => {
		     	 	  setToken(resp);  // 把token存到本地
		     	 	  commit('SET_TOKEN',resp); // 把token存到 store中
		     	 	  resolve();
		     	 })
		     	 .catch(err => {  
		 			Message({
		 				message : '登录失败！'
		 			});
		 		    resolve(err)
		     	 });
		     	 
         	})

     	
     },
    LOGOUTACTION({commit}){
    	 return new Promise((resolve, reject) => {
    	 		userLogoutApi().then(resp => {
    	 			removeToken();
    	 			commit('EMPTY_TOKEN');
    	 			resolve(resp)
    	 		})
    	 		.catch(error => {
    	 		   Message({
		 				message : '登出失败！'
		 			});
    	 		   resolve(error)
    	 	   })
    	 })
    } 
  }

} 

export default user