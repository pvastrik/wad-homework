
<template>
    <div class="container">
        <div class = "item">
            <h2 class = "textformating1">Welcome to PostIt!</h2>
            <h2 class="textformating2">Please sign up</h2>
            <br>
            <form @submit.stop.prevent="signUp">
                <h2 class="textformating2">Email</h2>
                <input id=email type="email" placeholder="Email" v-model="email">
                <br>
                <h2 class="textformating2">Password</h2>
                <input v-model="password.password" id="password" type="password" placeholder="Password">
                <br>
                <input v-model="password.confirm" id="confirm" type="password" placeholder="Confirm password">
              <div v-if="v$">
              <div
                  v-if="submit && v$.password.$invalid"
                  class="invalid-feedback left">
                <span v-if="v$.password.$model.password===''">Password is required</span>
                <span v-if="v$.password && !v$.password.password.valid">Password must contain atleast One Uppercase, One Lowercase, One Number and One Special Chacter</span>
                <span v-if="v$.password && v$.password.password.valid && !v$.user.password.minLength">Password must be minimum 8 characters</span>
                <span v-if="v$.password && v$.password.password.valid && !v$.user.password.maxLength">Password must be maximum 15 characters</span>
                <span v-if="v$.password && v$.password.password.valid && !v$.password.confirm.sameAs">Passwords must be the same</span>
              </div>
              </div>
                <br>
                <input id="buttonInput" type="submit"/>
            </form>
        </div>
    </div>

</template>


<script>
//import { required, minLength, maxLength} from 'vuelidate/lib/validators';
import useValidate from '@vuelidate/core'
import { required, email, minLength, maxLength, sameAs } from '@vuelidate/validators'
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
          submit: false,
        }
      },
      methods: {
        signUp() {
          this.submit = true;
          console.log(this.v$)
          console.log(this.v$.email)
          this.v$.$validate();
          if (this.v$.password) {
            console.log(true)

          } else {
            console.log(this.v$.password)
          }
          console.log(this.v$.password.$model.password)

          console.log(this.v$)
          console.log(this.v$.email)
          console.log(this.v$.password.$error)
          if (!this.v$.$error) {
            router.push("home")
         } else {
            var curError = document.querySelector(".passwordError")
            console.log(curError)
            if (curError===null) {

              var error = document.createElement("p")
              error.className = "passwordError"
              error.innerHTML = `Password did not meet requirements! <br><br>
                The password should be <b>at least 8 chars and less than 15 chars.</b><br>
                Include at least <b>one uppercase</b> alphabet character, <br><b>two lowercase</b> alphabet characters.
                <b>one numeric</b> value,<br> the <b>character "_"</b> and <b>start with an uppercase</b> letter.`
              document.querySelector("form").appendChild(error)
            }
         }
        },
      },
      validations() {
        return {
          email: {required, email},
          password: {
            password: {required,
            minLength: minLength(8),
            maxLength: maxLength(15),
              valid: function (value) {
                const containsUpper = /[A-Z]/.test(value);
                const contains2Lower =  /[a-z].*[a-z]/.test(value);
                const containsNumber = /[0-9]/.test(value);
                const containsSpecial = /_/.test(value);
                const startsWithUpper = /[A-Z]/.test(value.substring(0, 1));
                return (containsSpecial && startsWithUpper && containsUpper
                    && containsNumber && contains2Lower);
              },
            },
            confirm: {required, sameAs: sameAs(this.password.password)},
          },
          submit: {}
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


.textformating1 {
    font-size: 1.4em;
    text-align: center;

}

.textformating2 {
    font-size: 1em;
    text-align: center;
}



</style>


