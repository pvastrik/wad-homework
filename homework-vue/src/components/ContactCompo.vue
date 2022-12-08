<template>
  <div class="aboutus">
    <router-link to="/signup" custom v-slot="{navigate}"><button @click="navigate" role="link">Sign up</button></router-link>
    <router-link to="/login" custom v-slot="{navigate}"><button @click="navigate" role="link">Log in</button></router-link>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button {
  margin: 0.5em;
  text-align: center;
  align-items: center;
  background-color: #ffd2fc;
  border-radius: 5%;
  font-size: 3em;
  border-color: #ffd2fc;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
