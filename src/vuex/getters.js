/* eslint-disable */

// const getters = {
// 	userId : state => state.user.id,
// 	userName : state => state.user.name,
// 	role : state => state.app.role
// }


const getters = {
	  role : state => state.app.role,
	  asseccedroutes : state => state.app.GLOBALROUTESMAP
}

export default getters