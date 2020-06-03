import Vue from 'vue'
import Vuex from 'vuex'
import {
  getToken
} from '@/utils/auth'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword: "",
    token: getToken(),
    username: ""
  },
  mutations: {
    setKeyword(state, keyword) {
      state.keyword = keyword;
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USERNAME(state, username) {
      state.username = username
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})
