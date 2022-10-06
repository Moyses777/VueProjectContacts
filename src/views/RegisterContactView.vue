<template lang="pug">
RegisterContactComponentVue
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router/index";
import store from "@/store/index";
import RegisterContactComponentVue from "@/components/ContactsAppComponents/RegisterContactFormComponent/RegisterContactComponentV1/RegisterContactComponent.vue";

export default defineComponent({
  components: {
    RegisterContactComponentVue,
  },
  beforeMount: function () {
    if (store.state.user.Email == "") {
      router.push("login");
    }
  },
});
</script>
