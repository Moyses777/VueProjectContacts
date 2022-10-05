<template lang="pug">
form.row.g-3.formregister
  .col-md-6
    ui5-label.form-label(for="inputEmail4", required, show-colon) Nombre del contacto
    ui5-input#inputEmail4.form-control(
      type="Text",
      :class="{ inputError: isName }",
      show-clear-icon,
      :value="txtName",
      @input="txtName = $event.target.value",
      @keyup="validateName"
    )
    span(:class="{ spanError: isName }", v-if="isName") Ingrese nombre completo!!!
  .col-md-6
    ui5-label.form-label(for="inputPassword4", required, show-colon) Apellido del contacto
    ui5-input#inputPassword4.form-control(
      type="Text",
      :class="{ inputError: isLastname }",
      show-clear-icon,
      :value="txtLastname",
      @input="txtLastname = $event.target.value",
      @keyup="validateLastname"
    )
    span(:class="{ spanError: isLastname }", v-if="isLastname") Ingrese apellido completo!!!
  .col-md-6
    ui5-label.form-label(for="inputPassword4", required, show-colon) Numero de telefono
    ui5-input#inputPassword4.form-control(
      type="Number",
      :class="{ inputError: isTelephone }",
      show-clear-icon,
      :value="txtTelephone",
      @input="txtTelephone = $event.target.value",
      @keyup="validateTelephone"
    )
    span(:class="{ spanError: isTelephone }", v-if="isTelephone") Ingrese numero de 10 digitos!!!
  .col-12
    .form-check
      ui5-checkbox(
        value-state="Information",
        text="Check me out",
        :checked="isChecked",
        :value="isChecked",
        @change="isChecked = !isChecked"
      )
  .col-12.center
    ui5-button.btnsize(design="Default", @click="registerContact") Submit
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Notifications } from "@/tools/Utilities";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/CheckBox.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/Button.js";

export default defineComponent({
  data: function () {
    return {
      txtName: "",
      isName: false,
      txtLastname: "",
      isLastname: false,
      txtTelephone: "",
      isTelephone: false,
      isChecked: false,
    };
  },
  methods: {
    validateName: function () {
      this.isName = this.txtName.length < 5;
    },
    validateLastname: function () {
      this.isLastname = this.txtLastname.length < 5;
    },
    validateTelephone: function () {
      this.isTelephone =
        this.txtTelephone.length < 10 || this.txtTelephone.length > 10;
    },
    registerContact: function () {
      if (this.isChecked) {
        if (
          this.txtName != "" &&
          this.txtLastname != "" &&
          this.txtTelephone != ""
        ) {
          if (!this.isName && !this.isLastname && !this.isTelephone) {
            alert("Formulario enviado!");
            let notification = new Notifications();
            notification.ShowMessage();
          }
        }
      }
    },
  },
});
</script>
