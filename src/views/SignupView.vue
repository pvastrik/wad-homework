<template>
  <header-compo></header-compo> <!-- renderdab need -->
  <login-compo></login-compo>
  <footer-compo></footer-compo>
</template>
<script>
import HeaderCompo from "@/components/HeaderCompo.vue";
import LoginCompo from "@/components/SignupCompo.vue";
import FooterCompo from "@/components/FooterCompo.vue";
export default {
  components: {FooterCompo, LoginCompo, HeaderCompo},
}
</script>