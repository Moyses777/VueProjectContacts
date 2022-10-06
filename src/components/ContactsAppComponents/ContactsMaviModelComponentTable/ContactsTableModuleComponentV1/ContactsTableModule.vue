<template lang="pug">
.container
  h2.center Tabla De Contactos De {{ name }}
  DataTable.display(:data="tablesdata")
    thead: tr
      th Nombre 
      th Apellido
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index";
import DataTable from "datatables.net-vue3";

export default defineComponent({
  data: function () {
    return {
      tablesdata: [
        ["Moises", "Camacho"],
        ["Francisco", "Colomos"],
        ["Adrian", "Lopez"],
      ],
      name: store.state.user.Email.replace(/@.*$/, ""),
    };
  },
  components: {
    DataTable,
  },
});
</script>

<style>
@import "datatables.net-dt";
</style>
