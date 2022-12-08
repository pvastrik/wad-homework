<template>
  <div class="container">
    <div class="item">
      <h2 class="textformating">Welcome to PostIt!</h2>
      <h2 class="textformating">Please log in</h2>
      <br>
      <form @submit.stop.prevent="LogIn">
        <h2 class="textformating">Email</h2>
        <input id=email type="email" placeholder="Email" v-model="email">
        <br>
        <h2 class="textformating">Password</h2>
        <input v-model="password" id="password" type="password" placeholder="Password">
        <br>
        <input id="buttonInput" class="button" type="submit"/>
      </form>
      <div v-if="validationError" class="error">
        <pre class="error">{{validationError}}</pre>
      </div>
      <h2 class="textformating">Or</h2>
      <router-link to="/signup" custom v-slot="{navigate}"><button @click="navigate" class="button" role="link">Sign up</button></router-link>
    </div>
  </div>

</template>


<script>
//import { required, minLength, maxLength} from 'vuelidate/lib/validators';
import router from "@/router";

export default {

  data() {
    return {
      email: "",
      password: "",
      validationError: "",
    }
  },
  methods: {
    LogIn() {

        fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            credentials: "include",
            body: JSON.stringify(this.$data),
        })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              // eslint-disable-next-line no-prototype-builtins
              if (!data.hasOwnProperty("error")) {
                router.push("home")
              } else {
                this.validationError = data.error
              }
            })
            .catch((e) => {
              console.log(e);
            });


      },
    },

}

</script>


<style>

button {
  margin: 0.5em;
  text-align: center;
  align-items: center;
  background-color: #2f97c1;
  border-radius: 5%;
  font-size: 1em;
  border-color: #2f97c1;
}

.error {
  margin: 1em 0 1em 0;
  width: 15em;
  color: red;
  font-weight: bold;
  font-size: smaller;
  font-family: inherit;
  text-align:left;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
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

#buttonInput {
  width:50%;
  margin: 0.5em;
  text-align: center;
  align-items: center;
  background-color: #2f97c1;
  border-radius: 5%;
  font-size: 1em;
  border-color: #2f97c1;
}

.textformating {
  font-size: 1em;
  text-align: center;
}



</style>


