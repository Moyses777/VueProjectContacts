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
      th(style="display: none")
      th(style="display: none")
      th(style="display: none")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index";
import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/message-warning.js";
import "@ui5/webcomponents-icons/dist/delete.js";
import "@ui5/webcomponents/dist/Input.js";
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
      x.push(
        `<ui5-button design="Positive" icon="add" data-bs-toggle="modal" data-bs-target="#seeModal${x[0]}">Ver</ui5-button>`
      );
      x.push(
        `<ui5-button design="Attention" icon="message-warning" data-bs-toggle="modal" data-bs-target="#editModal${x[0]}">Editar</ui5-button>`
      );
      x.push(
        `<ui5-button design="Negative" icon="delete" data-bs-toggle="modal" data-bs-target="#deleteModal${x[0]}">Eliminar</ui5-button>`
      );
      x.push(`<div class="modal fade" id="seeModal${x[0]}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Nombre del contacto: ${x[0]} </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row g-3">
          <div class="col">
            <label>Nombre completo: </label>
            <ui5-input type="Text" class="form-control" value="${x[0]} ${x[1]}" disabled>
          </div>
          <div class="col">
            <label>Numero telefonico: </label>
            <ui5-input type="Number" class="form-control" value="${x[2]}" disabled>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`);
      x.push(`<div class="modal fade" id="editModal${x[0]}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar contacto: ${x[0]} </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <div class="row g-3">
          <div class="col">
            <label>Nombre: </label>
            <ui5-input type="Text" class="form-control" value="${x[0]}">
          </div>
          <div class="col">
            <label>Apellido: </label>
            <ui5-input type="Text" class="form-control" value="${x[1]}">
          </div>
          <div class="col">
            <label>Numero telefonico: </label>
            <ui5-input type="Number" class="form-control" value="${x[2]}">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Editar</button>
      </div>
    </div>
  </div>
</div>`);
      x.push(`<div class="modal fade" id="deleteModal${x[0]}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">¿Seguro que quieres eliminar a ${x[0]} ${x[1]} de tus contactos?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
      </div>
    </div>
  </div>
</div>`);
    });
  },
});
</script>

<style>
@import "datatables.net-dt";
</style>
