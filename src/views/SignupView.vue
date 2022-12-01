<template>
  <header-compo></header-compo> <!-- renderdab need -->
  <signup-compo></signup-compo>
  <footer-compo></footer-compo>
</template>
<script>
import HeaderCompo from "@/components/HeaderCompo.vue";
import SignupCompo from "@/components/SignupCompo.vue";
import FooterCompo from "@/components/FooterCompo.vue";
export default {
  components: {FooterCompo, SignupCompo, HeaderCompo},
}
</script>