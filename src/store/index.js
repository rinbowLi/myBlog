import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword:""
  },
  mutations: {
    setKeyword(state,keyword){
      state.keyword = keyword;
    }
  },
  actions: {
  },
  modules: {
  }
})
