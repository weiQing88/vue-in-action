/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user.js'
import app from './modules/app.js'

import getters from './getters'

Vue.use(Vuex);


var store = new Vuex.Store({
	 modules : {
	 	 user,
	 	 app
	 },
  getters
});

export default store
