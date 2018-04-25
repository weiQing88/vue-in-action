/* eslint-disable */

const userInforn = {
   admin:{
		 role : 'admin',
		 token : 'admin',
		 introduction  : '我是一个超级管理员',
		 avatar : '',
		 name : 'administer',
		 id : '541322'
	},
  editor : {
  	     role : 'editor',
		 token : 'editor',
		 introduction  : '我是一个主编',
		 avatar : '',
		 name : 'editor',
		 id : '4452889'
  },
 developer: {
  	  role : 'develop',
		 token : 'develop',
		 introduction  : '我是一个开发者',
		 avatar : '',
		 name : 'developer',
		 id : '53329'
  },
  logout : {
  	 code : 0,
  	 message : '成功退出',
  	 timestamp : (Math.random() * new Date().getTime())
  }
}




export default {
	 loginResp : () =>  Object.assign({},userInforn.admin),
	logoutResp : () =>  Object.assign({},userInforn.logout)
}