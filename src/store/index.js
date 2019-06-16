import Vue from 'vue'
import Vuex from 'vuex'
import login from './login/index.js'
import cinema from './cinema/index.js'
import city from './city/index.js'
import film from './film/index.js'
import register from './register/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    cinema,
    city,
    film,
    register
  }
})
