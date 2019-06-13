//影院数据仓库
import http from "@/utils/http.js"
export default {
  namespaced: true,
  state:{
    cinemslist:[], //影院数据
  },
  //将获取的影片数据存储到仓库
  mutations:{
    setcinema(state,list){
      state.cinemslist=list
    }
  },
  actions:{
    //过去影片数据
    getcinema({commit}){
      http.get('http://localhost:8080/ajax/cinemaList?day=2019-06-13&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1560396324800&cityId=30')
      .then(res=>{
      
        commit('setcinema',res.cinemas)
      })
    }
  },
  getters:{

  }


}
