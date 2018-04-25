/* eslint-disable */


// 过滤 route 是否是 ‘/’
export function routeFilter(route){ return /^\/$/g.test(route) ? '' : route   }
