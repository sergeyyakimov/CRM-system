import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth.js';
import info from './info.js';
import category from './category.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER;
      const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB,VND,JPY,BYN`);
      return await res.json();
    }
  },
  modules: {
    auth, info, category
  },
});
