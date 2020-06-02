import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword:"",
    token: getToken(),
  },
  mutations: {
    setKeyword(state,keyword){
      state.keyword = keyword;
    },
    SET_TOKEN(state, token){
      state.token = token
    },
  },
  actions: {
  },
  modules: {
  }
})
