<template lang="pug">
.container
  h2.center Tabla De Contactos
  DataTable.display(:data="tablesdata")
    thead: tr
      th Nombre 
      th Apellido
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataTable from "datatables.net-vue3";

export default defineComponent({
  data: function () {
    return {
      tablesdata: [
        ["Moises", "Camacho"],
        ["Francisco", "Colomos"],
        ["Adrian", "Lopez"],
      ],
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
