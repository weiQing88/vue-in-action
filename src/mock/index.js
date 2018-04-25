/* eslint-disable */

import Mock from 'mockjs'

import loginResponse from './login.js'



Mock.setup({
  timeout: '350-600'
})



Mock.mock('login.json','get',loginResponse.loginResp);


Mock.mock('logout.json','post',loginResponse.logoutResp)