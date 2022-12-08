<template>
  <header-compo></header-compo>
  <login-compo></login-compo>
  <footer-compo></footer-compo>
</template>

<script>
import HeaderCompo from "@/components/HeaderCompo.vue";
import LoginCompo from "@/components/LoginCompo.vue";
import FooterCompo from "@/components/FooterCompo.vue";
export default {
  components: {FooterCompo, LoginCompo, HeaderCompo},
}
</script>

<style scoped>

</style>