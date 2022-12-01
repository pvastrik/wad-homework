<template>
  <header-compo></header-compo>
  <contact-compo></contact-compo>
  <footer-compo></footer-compo>
</template>

<script>
import HeaderCompo from "@/components/HeaderCompo.vue";
import FooterCompo from "@/components/FooterCompo.vue";
import ContactCompo from "@/components/ContactCompo.vue";


export default {
  name: "ContactView",
  components: {FooterCompo, ContactCompo, HeaderCompo}
}
</script>

<style scoped>

</style>