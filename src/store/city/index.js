// http://m.maoyan.com/dianying/cities.json
//这是城市相关的仓库
import Axios from "axios";
// import http from "@/utils/http.js"
export default {
  namespaced: true,
  state: {
    citylist: [], //所有的城市列表数据
  },
  mutations: {
    setcitylist(state, list) {
      state.citylist = list
    }
  },
  actions: {
    getcitylist({ commit }) {
      Axios.get('/maoyan/dianying/cities.json')
        .then(res => {
          commit('setcitylist', res.data.cts)
        })
    }
  },
  getters: {
    newcitylist(state) {
      let index = 0
      let hash = {}
      let result = []

      state.citylist.forEach(city => {
        //取出拼音首字母
        let py = city.py.charAt(0).toUpperCase()
        if (hash[py]) {
          result[hash[py] - 1].list.push(city)
        } else {
          //如果不存在就存起来，让他下次存在
          hash[py] = ++index 
          //构建我们需要的数据结构
          let obj = {
            py: py,
            list: [city]
          }
          //将构建的数据追加到result里面
          result.push(obj)
        }
      })

      return result.sort((a, b) =>
      a.py.charCodeAt()-b.py.charCodeAt())
    }
  }
}

