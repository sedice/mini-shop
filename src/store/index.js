import Vue from 'vue';
import Vuex from 'vuex';
import { getItem, setItem } from '@/utils/index';
import { login } from '@/api';

Vue.use(Vuex);
const TOKEN_KEY = 'token';
export default new Vuex.Store({
  state: {
    token: getItem(TOKEN_KEY) || null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN_KEY, token);
    },
  },
  actions: {
    async login(ctx, params) {
      console.log(params);
      const { data } = await login(params.payload);
      console.log(data);
      ctx.commit('setToken', data.token);
    },
  },
});
