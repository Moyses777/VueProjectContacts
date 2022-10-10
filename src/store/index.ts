import { createStore } from "vuex";

export default createStore({
  state: {
    user: { Email: "" },
    register: [{ Email: "luismoises@gmail.com", Password: "12345678" }],
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
    AddUserRegistered: function (state, userregistered) {
      state.register.push(userregistered);
    },
  },
  actions: {},
  modules: {},
});
