<template lang="pug">
button.btn.btn-primary.btnOffcanvas(type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasWithBothOptions' aria-controls='offcanvasWithBothOptions') Enable both scrolling &amp; backdrop
#offcanvasWithBothOptions.offcanvas.offcanvas-start(data-bs-scroll='true' tabindex='-1' aria-labelledby='offcanvasWithBothOptionsLabel')
  .offcanvas-header
    h5#offcanvasWithBothOptionsLabel.offcanvas-title Contactos MAVI 
    button.btn-close.text-reset(type='button' data-bs-dismiss='offcanvas' aria-label='Close')
  .offcanvas-body
    ol.list-group.list-group-numbered
      li.list-group-item.d-flex.justify-content-between.align-items-start(:class="{'activeLi': isRegisterContact}")
        RouterLink.ms-2.me-auto.totalWidth(to="/registercontact" :class="{'activeRedirector': isRegisterContact}")
          .ms-2.me-auto
            .fw-bold Registro de contactos
            |       Se hara el registro de los contactos a mi agenda!
        span.badge.bg-primary.rounded-pill 14
      li.list-group-item.d-flex.justify-content-between.align-items-start(:class="{'activeLi': isDashboard}")
        RouterLink.ms-2.me-auto.totalWidth(to="/dashboard" :class="{'activeRedirector': isDashboard}")
          .ms-2.me-auto
            .fw-bold Tabla de contactos
            |       Registro de todos los contactos de la agenda!
        span.badge.bg-primary.rounded-pill 14
      li.list-group-item.d-flex.justify-content-between.align-items-start(:class="{'activeLi': isChatView}")
        RouterLink.ms-2.me-auto.totalWidth(to="/chat" :class="{'activeRedirector': isChatView}")
          .ms-2.me-auto
            .fw-bold Chat Contactos
            |       Chat para poder comunicarte con tus contactos!
        span.badge.bg-primary.rounded-pill 14

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default defineComponent({
  data: function () {
    return {
      isDashboard: window.location.pathname == "/dashboard",
      isRegisterContact: window.location.pathname == "/registercontact",
      isChatView: window.location.pathname == "/chat",
    };
  },
  components: {
    RouterLink,
    RouterView,
  },
});
</script>

<style>
.modal-backdrop.fade.show {
  display: none;
}

.activeRedirector {
  color: white !important;
  text-decoration: none;
  cursor: default;
}

.activeLi {
  background: green;
  color: white;
}
</style>
