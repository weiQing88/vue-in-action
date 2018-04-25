/* eslint-disable */

import axios from 'axios'

const urls = {
	base : 'http://www.xxx.com',
    getLogin : 'login.json',
    logout: 'logout.json'
};

// 创建一个自定义的 axios 
var server = axios.create({
	// baseURL : urls.base,
	 timeout : 6000
});



// respone拦截器，在这里对返回的 code 状态进行处理。 
// 确保接收方【函数】得到的数据是有效性的
// 【主要是针对登录状态和权限判断】
server.interceptors.response.use(response => {
   if(response.code == 500){
        // 做相应的处理
        return Promise.reject('error')

    }else if(response.code == 501){

    	 // 做相应的处理
    	return Promise.reject('error')

    }else{
       return response.data  // 返回正确的数据
    }
},
error =>{
   return Promise.reject(error)
})


export function userLoginApi(param){
	   return server.get(urls.getLogin,param)
}

export function userLogoutApi(){
	 return server.post(urls.logout)
}


