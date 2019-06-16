// 影院数据仓库
import Axios from 'axios'

export default {
  namespaced: true,
  state: {
    cinemslist: [], // 影院数据
    pagesize: 20, // 请求的影院条数
    loading: false// 是否在请求数据中
  },
  // 将获取的影片数据存储到仓库
  mutations: {
    setcinema (state, list) {
      state.cinemslist = list
    },
    setpagesize (state) {
      state.pagesize += 20
    },
    setloading (state, bol) {
      state.loading = bol
    }
  },
  actions: {
    // 获取影片数据 isload:是否加载更多数据（boolean）
    getcinema ({ commit, state }, isload) {
      // 请求前
      commit('setloading', true)// 请求中
      setTimeout(() => {
        Axios.get('/maoyan/ajax/cinemaList?day=2019-06-14&offset=' + state.pagesize + '&$limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1560481842153&cityId=30')
          .then(res => {
            if (isload) {
              // 数据拼接
              let newcinemalist = [...state.cinemslist, ...res.data.cinemas]
              commit('setcinema', newcinemalist)
            } else {
              commit('setcinema', res.data.cinemas)
            }

            commit('setpagesize') // 请求完成，设置pagesize++
            commit('setloading', false)// 请求后
          })
      }, 300)
    }
  },
  getters: {

  }

}
