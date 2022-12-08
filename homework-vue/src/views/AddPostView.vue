<template>
  <header-compo></header-compo>
  <add-post-compo></add-post-compo>
  <footer-compo></footer-compo>
</template>

<script>
import HeaderCompo from "@/components/HeaderCompo.vue";
import AddPostCompo from "@/components/AddPostCompo.vue";
import FooterCompo from "@/components/FooterCompo.vue";

export default {
  name: "LoginView",
  components: {HeaderCompo, FooterCompo, AddPostCompo}
}
</script>

<style scoped>

</style>