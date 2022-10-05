<template lang="pug">
NavBar
router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/ContactsAppComponents/NavBarComponents/NavBarComponentV1/NavBarModel.vue";

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
