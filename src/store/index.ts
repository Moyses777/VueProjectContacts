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
    messagesContacts: [
      {
        chat: "moises",
        msg: {
          from: "Moises",
          to: "luis",
          time: "5 minutos ago",
          msg: "Hello dude, how are you?",
        },
      },
    ],
  },
  getters: {},
  mutations: {
    LoginSession: function (state, user: any) {
      state.register.forEach((element) => {
        if (user.Email == element.Email && user.Password == element.Password) {
          state.user = { Email: user.Email };
        }
      });
    },
    AddContact: function (state, contact) {
      state.contacts.push(contact);
    },
    CloseSession: function (state) {
      state.user = { Email: "" };
    },
    AddUserRegistered: function (state, userregistered) {
      state.register.push(userregistered);
    },
    SendMessage: function (state, msg) {
      state.messagesContacts.push(msg);
    },
  },
  actions: {},
  modules: {},
});
