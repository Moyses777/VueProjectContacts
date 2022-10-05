import { createStore } from "vuex";

export default createStore({
  state: {
    user: { Email: "" },
  },
  getters: {},
  mutations: {
    LoginSession: function (state, text: string) {
      state.user = { Email: text };
    },
  },
  actions: {},
  modules: {},
});
