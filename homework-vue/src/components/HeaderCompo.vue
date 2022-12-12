<template>
  <nav class="navbar">
    <div class="containerNavbar">
      <ul>
        <li>
          <h1><router-link to="/">Home</router-link></h1>
        </li>
        <li>
          <h1><router-link to="/contact">Contacts</router-link></h1>
        </li>
      </ul>
    </div>
    <img id="logo" src="@/assets/profile.png" alt="Profile picture">
  </nav>
</template>
<script>
export default {

}
</script>
<style>

nav {
  top:0;
  background-color: #1ccad8;
  padding: 0.5em 0.5em;
  display: flex;
  justify-content: space-between;
  margin: 0;
}

.navbar li {
  display: inline-block;
  padding: 0.3em;

}

a {
  text-decoration: none;
}

a:hover {
  color: #2f97c1;
  text-decoration: underline;
}
h1 {
  font-size: xx-large;
  margin: 0.67em 0;
  font-weight: bold;
  color: #587291;
}


#logo {
  float: left;
  width: 5em;
  margin-top: 2em;
  right: 2em;
  border-radius: 50%;
}


a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  text-decoration: none;
}
a:visited {
  color:inherit;
}


</style>
