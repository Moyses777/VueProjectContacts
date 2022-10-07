<template lang="pug">
contact-table(class="tableBlock")
offcanvas-slider.btnOffcanvas
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index";
import router from "@/router/index";
import ContactsTableModule from "@/components/ContactsAppComponents/ContactsMaviModelComponentTable/ContactsTableModuleComponentV1/ContactsTableModule.vue";
import OffcanvasSlider from "@/components/ContactsAppComponents/OffCanvasSliderComponents/OffcanvasSliderComponentV1/OffCanvasSliderComponent.vue";

export default defineComponent({
  components: {
    "contact-table": ContactsTableModule,
    "offcanvas-slider": OffcanvasSlider,
  },
  mounted: function () {
    console.log(store.state.user.Email);
  },
  beforeMount: function () {
    if (store.state.user.Email == "") {
      router.push("login");
    }
  },
});
</script>

<style>
.tableBlock {
  padding: 2em;
  margin: auto;
  border: black 1px solid;
  box-shadow: black 2px 3px 4px;
  margin-top: 2em;
  margin-bottom: 2em;
}

.btnOffcanvas {
  border-radius: 10em;
  width: 8em;
  height: 8em;
  background: crimson;
  font-family: sans-serif;
  font-weight: 800;
  position: absolute;
  right: 5%;
  bottom: 5%;
  box-shadow: black 5px 5px 5px;
}

button.btnOffcanvas:hover {
  background: green !important;
  font-size: 22px;
  text-shadow: black 5px 5px 5px;
}

.offcanvas-title {
  color: black;
}

table {
  width: 0%;
}

.totalWidth {
  width: 100%;
  color: black;
  text-decoration: none;
}

.ms-2.me-auto.totalWidth:hover {
  color: black;
}
</style>
