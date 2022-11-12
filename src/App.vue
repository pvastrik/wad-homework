
<template>
  <header-compo></header-compo>
  <footer-compo></footer-compo>
  <login-compo></login-compo>
  <post-compo></post-compo>
</template>
<script>
import HeaderCompo from "@/components/HeaderCompo";
import PostCompo from "@/components/PostCompo";
import FooterCompo from "@/components/FooterCompo";
import LoginCompo from "@/components/LoginCompo";
export default {
  name: 'App',
  components: {
    HeaderCompo,
    PostCompo,
    FooterCompo,
    LoginCompo
  }
}
</script>

<style>
body {
  margin:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

