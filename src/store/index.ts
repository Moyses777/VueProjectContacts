import { pushScopeId } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: { Email: "" },
    contacts: [
      ["Moises", "Camacho", "3325154212"],
      ["Francisco", "Colomos", "3324751245"],
      ["Adrian", "Lopez", "3368421245"],
    ],
  },
  getters: {},
  mutations: {
    LoginSession: function (state, text: string) {
      state.user = { Email: text };
    },
    AddContact: function (state, contact) {
      state.contacts.push(contact);
    },
  },
  actions: {},
  modules: {},
});
