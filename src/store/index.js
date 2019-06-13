import Vue from 'vue'
import Vuex from 'vuex'
import login from './login/index.js'
import cinema from './cinema/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    cinema
  }
})
