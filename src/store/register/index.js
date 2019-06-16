// 这是注册的仓库数据
import Axios from 'axios'

export default {
  namespaced: true,
  state:{
    phone:'',
  },
  mutations:{
    getphone(state,payload){
      state.getphone=payload
    }

  },
  actions:{

  },
  getters:{

  }
}
