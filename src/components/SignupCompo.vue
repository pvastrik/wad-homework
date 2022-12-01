<template>
  <div class="container">
    <div class="item">
      <h2 class="textformating2">Welcome to PostIt!</h2>
      <h2 class="textformating2">Please sign up</h2>
      <br>
      <form @submit.stop.prevent="signUp">
        <h2 class="textformating2">Username</h2>
        <input id=username placeholder="Username" v-model="username">
        <h2 class="textformating2">Email</h2>
        <input id=email type="email" placeholder="Email" v-model="email">
        <br>
        <h2 class="textformating2">Password</h2>
        <input v-model="password.password" id="password" type="password" placeholder="Password">
        <br>
        <input v-model="password.confirm" id="confirm" type="password" placeholder="Confirm password">
        <div v-if="validationError" class="error">
          <pre class="error">{{validationError}}</pre>
        </div>
        <input id="buttonInput" type="submit"/>
      </form>
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
//   validations: {
//       user: {
//         password: {
//           required: required,
//           valid: function (value) {
//             const contains2Upper = /[A-Z].*[A-Z]/.test(value);
//             const containsLower =  /[a-z]/.test(value);
//             const containsNumber = /[0-9]/.test(value);
//             const containsSpecial = /[_]/.test(value);
//             const startsWithUpper = /[A-Z]/.test(value.substring(0, 1));
//             return (containsSpecial && startsWithUpper && contains2Upper
//                 && containsNumber && containsLower);
//           },
//           minLength: minLength(8),
//           maxLength: maxLength(15),
//         }
//       }
//     },
//   computed: {
//     isDisabled() {
//       return this.$v.$invalid;
//     }
//   },
//   created() {
//     this.submitted = true;
//     return this.$v.$touch();
//   }
//
// }
</script>


<style>

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
}
.textformating1 {
  color: #1ccad8;
  font-size: 1em;
  text-align: center;

}

.textformating2 {
  font-size: 1em;
  text-align: center;
}


</style>


