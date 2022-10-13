<template lang="pug">
ChatContactComponent
OffcanvasSliderComponent    
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/index";
import router from "@/router/index";
import ChatContactComponent from "@/components/ContactsAppComponents/ChatContactsComponents/ChatContactComponentV1/ChatContactComponent.vue";
import OffcanvasSliderComponent from "@/components/ContactsAppComponents/OffCanvasSliderComponents/OffcanvasSliderComponentV1/OffCanvasSliderComponent.vue";

export default defineComponent({
  components: {
    ChatContactComponent,
    OffcanvasSliderComponent,
  },
  beforeMount: function () {
    if (store.state.user.Email == "") router.push("/login");
  },
});
</script>
