<template>
  <div class="container">
    <div class="item">
      <h2 class="textformating">Welcome to PostIt!</h2>
      <h2 class="textformating">Please log in</h2>
      <br>
      <form @submit.stop.prevent="signUp">
        <h2 class="textformating">Email</h2>
        <input id=email type="email" placeholder="Email" v-model="email">
        <br>
        <h2 class="textformating">Password</h2>
        <input v-model="password.password" id="password" type="password" placeholder="Password">
        <br>
        <input v-model="password.confirm" id="confirm" type="password" placeholder="Confirm password">
        <div v-if="validationError" class="error">
          <pre class="error">{{validationError}}</pre>
        </div>
        <input id="buttonInput" class="button" type="submit"/>
      </form>
      <h2 class="textformating">Or</h2>
      <router-link to="/signup" custom v-slot="{navigate}"><button @click="navigate" class="button" role="link">Sign up</button></router-link>
    </div>
  </div>

</template>


<script>
//import { required, minLength, maxLength} from 'vuelidate/lib/validators';
import useValidate from '@vuelidate/core'
import {required, email, minLength, maxLength, sameAs} from '@vuelidate/validators'
import router from "@/router";

export default {

  data() {
    return {
      v$: useValidate(),
      email: "",
      password: {
        password: "",
        confirm: "",
      },
      validationError: "",
    }
  },
  methods: {
    signUp() {

      this.v$.$validate();
      console.log(this.v$)
      if (!this.v$.$error) {
        router.push("home")
      } else {
        this.validationError = "";
        for (let error of  this.v$.$errors) {
          if (error.$validator==="sameAs") this.validationError += "Passwords must be same!\n"
          if (error.$validator==="minLength") this.validationError += "Password must be at least 8 characters!\n"
          if (error.$validator==="maxLength") this.validationError += "Password must be at most 15 characters!\n"
          if (error.$validator==="valid") this.validationError += "Password must contain the following:\n" +
              "\t2 lowercase\n\tsymbol '_'\n\t1 number\n\tstart with uppercase letter\n"
        }

      }
    },
  },
  validations() {
    return {
      email: {required, email},
      password: {
        password: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(15),
          valid: function (value) {
            const containsUpper = /[A-Z]/.test(value);
            const contains2Lower = /[a-z].*[a-z]/.test(value);
            const containsNumber = /[0-9]/.test(value);
            const containsSpecial = /_/.test(value);
            const startsWithUpper = /[A-Z]/.test(value.substring(0, 1));
            return (containsSpecial && startsWithUpper && containsUpper
                && containsNumber && contains2Lower);
          },
        },
        confirm: {required, sameAs: sameAs(this.password.password)},
      },
      validationError: {}
    }
  }
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


