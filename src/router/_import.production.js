/*  eslint-disable */

// 返回一个函数，在加载的时候在执行拉取组件
module.exports = file => () => import('@/views/' + file + '.vue')