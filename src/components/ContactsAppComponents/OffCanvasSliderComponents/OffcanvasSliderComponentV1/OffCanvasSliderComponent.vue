<template lang="pug">
button.btn.btn-primary.btnOffcanvas(type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasWithBothOptions' aria-controls='offcanvasWithBothOptions') Enable both scrolling &amp; backdrop
#offcanvasWithBothOptions.offcanvas.offcanvas-start(data-bs-scroll='true' tabindex='-1' aria-labelledby='offcanvasWithBothOptionsLabel')
  .offcanvas-header
    h5#offcanvasWithBothOptionsLabel.offcanvas-title Contactos MAVI 
    button.btn-close.text-reset(type='button' data-bs-dismiss='offcanvas' aria-label='Close')
  .offcanvas-body
    ol.list-group.list-group-numbered
      li.list-group-item.d-flex.justify-content-between.align-items-start
        RouterLink.ms-2.me-auto.totalWidth(to="/login")
          .ms-2.me-auto
            .fw-bold Subheading
            |       Cras justo odio
        span.badge.bg-primary.rounded-pill 14
      li.list-group-item.d-flex.justify-content-between.align-items-start
        RouterLink.ms-2.me-auto.totalWidth(to="/login")
          .ms-2.me-auto
            .fw-bold Subheading
            |       Cras justo odio
        span.badge.bg-primary.rounded-pill 14
      li.list-group-item.d-flex.justify-content-between.align-items-start
        RouterLink.ms-2.me-auto.totalWidth(to="/login")
          .ms-2.me-auto
            .fw-bold Subheading
            |       Cras justo odio
        span.badge.bg-primary.rounded-pill 14

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default defineComponent({
  components: {
    RouterLink,
    RouterView,
  },
});
</script>
