import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'ja'
  },
  getters: {
    language(state) {
      return state.language
    }
  },
  mutations: {
    setLanguage(state, la) {
      state.language = la
    }
  },
  actions: {

  }
})
