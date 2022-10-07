<template lang="pug">
.container
  h2.center Tabla De Contactos De {{ name }}
  DataTable.display(:data="tablesdata")
    thead: tr
      th Nombre 
      th Apellido
      th Telefono
      th
      th
      th
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index";
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/message-warning.js";
import "@ui5/webcomponents-icons/dist/delete.js";
import DataTable from "datatables.net-vue3";

export default defineComponent({
  data: function () {
    return {
      tablesdata: store.state.contacts,
      name: store.state.user.Email.replace(/@.*$/, ""),
    };
  },
  components: {
    DataTable,
  },
  beforeMount: function () {
    this.tablesdata.forEach((x) => {
      x.push(`<ui5-button design="Positive" icon="add">Ver</ui5-button>`);
      x.push(
        `<ui5-button design="Attention" icon="message-warning">Editar</ui5-button>`
      );
      x.push(
        `<ui5-button design="Negative" icon="delete">Eliminar</ui5-button>`
      );
    });
  },
});
</script>

<style>
@import "datatables.net-dt";
</style>
