<template lang="pug">
section(style="background-color: #eee;")
  .container.py-5
    .row
      .col-md-6.col-lg-5.col-xl-4.mb-4.mb-md-0
        h5.font-weight-bold.mb-3.text-center.text-lg-start Contactos
        .card.addScroll
          .card-body
            ul.list-unstyled.mb-0
              li.p-2.border-bottom(style="background-color: #eee;" v-for="contact in contacts")
                a.d-flex.justify-content-between(href="#!")
                  .d-flex.flex-row
                    img.rounded-circle.d-flex.align-self-center.me-3.shadow-1-strong(src="https://www.kindpng.com/picc/m/150-1503949_computer-icons-user-profile-male-profile-icon-png.png" alt="avatar" width="60")
                    .pt-1
                      p.fw-bold.mb-0 {{ contact[0] }} {{ contact[1] }}
                      p.small.text-muted Hello, Are you there?
                  .pt-1
                    p.small.text-muted.mb-1 Just now
                    span.badge.bg-danger.float-end 1
      .col-md-6.col-lg-7.col-xl-8.addScroll
        ul.list-unstyled
          li.d-flex.justify-content-between.mb-4(v-for="msgContact in msgContacts" :class="{'msgStart': msgContact.msg.from == me, 'justyMsg': msgContact.msg.from != me}")
            img.rounded-circle.d-flex.align-self-start.me-3.shadow-1-strong(src="https://www.kindpng.com/picc/m/150-1503949_computer-icons-user-profile-male-profile-icon-png.png" alt="avatar" width="60" v-if="msgContact.msg.from != me")
            .card
              .card-header.d-flex.justify-content-between.p-3
                p.fw-bold.mb-0 {{ msgContact.msg.from }}
                p.text-muted.small.mb-0
                  i.far.fa-clock
                  |  {{ msgContact.msg.time }}
              .card-body
                p.mb-0
                  | {{ msgContact.msg.msg }}
            img.rounded-circle.d-flex.align-self-start.ms-3.shadow-1-strong(src="https://www.kindpng.com/picc/m/150-1503949_computer-icons-user-profile-male-profile-icon-png.png" alt="avatar" width="60" v-if="msgContact.msg.from == me")
          li#chat1.bg-white.mb-3
            .form-outline
              textarea#textAreaExample2.form-control(rows="4" :value="txtMessage" @focusout="isCheckedActive" @input="txtMessage = $event.target.value" :class="{'active': isActive}")
              label.form-label(for="textAreaExample2") Message
              .form-notch
                .form-notch-leading(style="width: 9px;")
                .form-notch-middle(style="width: 60px;")
                .form-notch-trailing
          button.btn.btn-info.btn-rounded.float-end(type="button" @click="SendMsg") Enviar
</template>

//* ChatTemplate -> https://mdbootstrap.com/docs/standard/extended/chat/

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index";

export default defineComponent({
  data: function () {
    return {
      txtMessage: "",
      isActive: false,
      me: store.state.user.Email.replace(/@.*$/, ""),
      contacts: store.state.contacts,
      msgContacts: store.state.messagesContacts,
    };
  },
  methods: {
    isCheckedActive: function () {
      this.isActive = this.txtMessage != "";
    },
    SendMsg: function () {
      if (this.txtMessage != "") {
        store.commit("SendMessage", {
          chat: "",
          msg: {
            from: this.me,
            to: "",
            time: "Just now",
            msg: this.txtMessage,
          },
        });
        this.txtMessage = "";
      }
    },
  },
});
</script>

<style>
.msgStart {
  justify-content: flex-end !important;
}

.justyMsg {
  justify-content: flex-start !important;
}

.addScroll {
  overflow: scroll;
  height: 60vh;
}

#chat1 .form-outline .form-control ~ .form-notch div {
  pointer-events: none;
  border: 1px solid;
  border-color: #eee;
  box-sizing: border-box;
  background: transparent;
}

#chat1 .form-outline .form-control ~ .form-notch .form-notch-leading {
  left: 0;
  top: 0;
  height: 100%;
  border-right: none;
  border-radius: 0.65rem 0 0 0.65rem;
}

#chat1 .form-outline .form-control ~ .form-notch .form-notch-middle {
  flex: 0 0 auto;
  max-width: calc(100% - 1rem);
  height: 100%;
  border-right: none;
  border-left: none;
}

#chat1 .form-outline .form-control ~ .form-notch .form-notch-trailing {
  flex-grow: 1;
  height: 100%;
  border-left: none;
  border-radius: 0 0.65rem 0.65rem 0;
}

#chat1 .form-outline .form-control:focus ~ .form-notch .form-notch-leading {
  border-top: 0.125rem solid #3b71ca;
  border-bottom: 0.125rem solid #3b71ca;
  border-left: 0.125rem solid #3b71ca;
}

#chat1 .form-outline .form-control:focus ~ .form-notch .form-notch-leading,
#chat1 .form-outline .form-control.active ~ .form-notch .form-notch-leading {
  border-right: none;
  transition: all 0.2s linear;
}

#chat1 .form-outline .form-control:focus ~ .form-notch .form-notch-middle {
  border-bottom: 0.125rem solid;
  border-color: #3b71ca;
}

#chat1 .form-outline .form-control:focus ~ .form-notch .form-notch-middle,
#chat1 .form-outline .form-control.active ~ .form-notch .form-notch-middle {
  border-top: none;
  border-right: none;
  border-left: none;
  transition: all 0.2s linear;
}

#chat1 .form-outline .form-control:focus ~ .form-notch .form-notch-trailing {
  border-top: 0.125rem solid #3b71ca;
  border-bottom: 0.125rem solid #3b71ca;
  border-right: 0.125rem solid #3b71ca;
}

#chat1 .form-outline .form-control:focus ~ .form-notch .form-notch-trailing,
#chat1 .form-outline .form-control.active ~ .form-notch .form-notch-trailing {
  border-left: none;
  transition: all 0.2s linear;
}

#chat1 .form-outline .form-control:focus ~ .form-label {
  color: #3b71ca;
}

#chat1 .form-outline .form-control ~ .form-label {
  color: #bfbfbf;
}

.form-outline .form-control.active ~ .form-label,
.form-outline .form-control:focus ~ .form-label {
  transform: translateY(-1rem) translateY(0.1rem) scale(0.8);
}

.form-outline .form-control:focus ~ .form-label {
  color: #3b71ca !important;
}

.form-outline .form-control ~ .form-label {
  position: absolute;
  top: 0;
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  left: 0.75rem;
  padding-top: 0.37rem;
  pointer-events: none;
  transform-origin: 0 0;
  transition: all 0.2s ease-out;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0;
}

.form-outline .form-control:focus {
  box-shadow: none !important;
}

.form-outline {
  position: relative;
}

.form-outline .form-control {
  min-height: auto;
  padding: 0.33em 0.75em !important;
  border: 0;
  background: transparent;
  transition: all 0.2s linear;
}

.form-control:focus {
  color: #4f4f4f;
  background-color: #fff;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgb(59 113 202 / 25%) !important;
}

TEXTAREA:not(:-webkit-autofill) {
  animation-name: onautofillcancel;
}

.form-outline .form-control ~ .form-notch {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
</style>
