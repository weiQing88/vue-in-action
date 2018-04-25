/* eslint-disable */

import Cookies  from 'js-cookie'

const TokenKey = 'user-token';

export function getToken(){
	var token = Cookies.get(TokenKey) || '';
    return  token == '' ? '' : JSON.parse(token);
}

export function setToken(token){
	Cookies.set(TokenKey,JSON.stringify(token))
}

export function removeToken(){
      Cookies.remove(TokenKey)
}
