<template>
    <div class="container">
        <div class = "item">
            <h2 class = "textformating2">Welcome to PostIt!</h2>
            <h2 class="textformating2">Please login or signup</h2>
            <br>
            <form action="index.html">
                <h2 class="textformating2">Email</h2>
                <input id=email type="email" placeholder="Email" required>
                <br>
                <h2 class="textformating2">Password</h2>
                <input id=password type="password" placeholder="Password" required>
                <br>
                <input id="buttonInput" type="submit" value="Log in"/>
                <h2 class="textformating1">Forgot password</h2>
            </form>
        </div>
    </div>

</template>


<script>
    export default {
      methods:{
        validations: {
          password:{
            contains2UpperCase: function (value) {
              return /[A-Z].*[A-Z]/.test(value)
            },
            containsLoweCase: function (value) {
              return /[a-z]/.test(value)
            },
            containsNumber: function (value) {
              return /[0-9]/.test(value)
            },
            containsSpecial: function (value) {
              return /[_]/.test(value)
            },
            startsWithUpper: function (value) {
              return /[A-Z]/.test(value.substring(0, 1))
            },
            length: function (value) {
              return value.length > 7 && value.length < 16
            }
          }
        }
      }

    }
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
    color: #1ccad8;
    font-size: 1em;
    text-align: center;

}

.textformating2 {
    font-size: 1em;
    text-align: center;
}



</style>


