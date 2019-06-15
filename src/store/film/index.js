import Axios from "axios";


export default {
  namespaced: true,

  state: {

    filmList: [],
    filmListq: [],
    curFilmType: true
  },

  mutations: {

    SETFILMLIST (state, list) {
      state.filmList = list
    },

    SETFILMLISTQ (state, list) {
      state.filmListq = list
    }
  },

  actions: {

    getFilmList ({ commit }) {
      Axios.get('/maoyan/ajax/movieOnInfoList')
        .then(res => {
          var data = res.data.movieList
          var newData = data.map(item => {
            return {
              ...item,
              img: item.img.replace('w.h', '128.180')
            }
          })
          commit('SETFILMLIST', newData)
        })
    },

    getFilmList_q ({ commit }) {
      Axios.get('/maoyan/ajax/comingList?ci=30&token=&limit=10')
        .then(res => {
          var data = res.data.coming
          var newData = data.map(item => {
            return {
              ...item,
              img: item.img.replace('w.h', '128.180')
            }
          })
          commit('SETFILMLISTQ', newData)
        })
    }

  }

}
