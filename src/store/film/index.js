import axios from 'axios'

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
      axios.get('http://localhost:8080/ajax/movieOnInfoList')
        .then(res => {
          var data = res.data.movieList
          console.log(data)
          var newData = data.map(item => {
            return {
              ...item,
              img: item.img.replace('w.h', '128.180')
            }
          })
          console.log(newData)
          commit('SETFILMLIST', newData)
        })
    },

    getFilmList_q ({ commit }) {
      axios.get('http://localhost:8080/ajax/comingList?ci=30&token=&limit=10')
        .then(res => {
          var data = res.data.coming
          console.log(data)
          var newData = data.map(item => {
            return {
              ...item,
              img: item.img.replace('w.h', '128.180')
            }
          })
          console.log(newData)
          commit('SETFILMLISTQ', newData)
        })
    }

  }

}
