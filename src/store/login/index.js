// 这是个人中心仓库数据
export default {
  namespaced: true,
  state: {
    user: Object

  },
  mutations: {
    // username
    chguser (state, payload) {
      state.user = payload
      console.log(state.user)
    }

  },
  actions: {
    // 获取输入的账号密码，然后与数据库的进行对比

  }
}
