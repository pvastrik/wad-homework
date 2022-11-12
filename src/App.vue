
<template>
  <header-compo></header-compo>
</template>
<script>
import HeaderCompo from "@/components/HeaderCompo";
export default {
  name: 'App',
  components: {
    HeaderCompo

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
