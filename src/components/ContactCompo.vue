<template>
  <div class="aboutus">
    <div class="item">
        <h2 class="textformating">Team: C</h2>
        <h2 class="textformating">Homework: 4</h2>
        <h2 class="textformating">Location: The Delta Centre</h2>
        <h2 class="textformating">Opening hours: from midnight to midnight</h2>
        <br>
        <h2 class="textformating">If you already are an user, log in. If you do not have an account, please sign up.</h2>
    </div>
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
  border-radius: 20px;
  font-size: 3em;
  border-color: #ffd2fc;
}

.textformating {
  font-size: 1em;
  text-align: center;
}

.item {
  order: inherit;
  background-color: #ffd2fc;
  margin: 4em;
  align-items: center;
  justify-content: center;
  padding: 1em;
  border-radius: 20px;
}

</style>
