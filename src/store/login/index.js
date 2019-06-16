// 这是个人中心仓库数据

export default {
  namespaced: true,
  state: {
    user: '',
    psd: ''
  },
  mutations: {
    // username
    chguser (state, payload) {
      state.user = payload
    },
    // password
    chgpsd (state, payload) {
      state.psd = payload
    }

  }
}
