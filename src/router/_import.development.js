/*  eslint-disable */

// 开发不需要惰性加载 （增大编译时长）
// 直接返回一个已拉取回的对象

module.exports = file => require('@/views/' + file + '.vue').default 
