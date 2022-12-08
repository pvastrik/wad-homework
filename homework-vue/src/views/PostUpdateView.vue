<template>
  <header-compo></header-compo>
  <post-update-compo></post-update-compo>
  <footer-compo></footer-compo>
</template>

<script>
import HeaderCompo from "@/components/HeaderCompo.vue";
import PostUpdateCompo from "@/components/PostUpdateCompo.vue";
import FooterCompo from "@/components/FooterCompo.vue";
export default {
  components: {FooterCompo, PostUpdateCompo, HeaderCompo},
}
</script>

<style scoped>

</style>