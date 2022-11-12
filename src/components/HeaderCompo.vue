<template>
  <nav class="navbar">
    <div class="containerNavbar">
      <ul>
        <li>
          <h1><a href="#">Home</a></h1>
        </li>
      </ul>
    </div>
    <a onclick="menuToggle()"><img id="logo" src="@/assets/profile.png" alt="Profile picture"></a>
    <div class="menu">
      <h3>User Name<br/>
        <span>user@email.com</span></h3>
      <ul>
        <li>
          <a href="#">Edit profile</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">Log out</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

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
.menu {
  display: none;
}

.menu.active {
  display: flex;
  flex-direction: column;;
  width: max-content;
  position: absolute;
  top: 8em;
  right: 1em;
  background: pink;
  border-radius: 1em;
}

.menu::before {
  content: "";
  position: absolute;
  top: -5px;
  right: 28px;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  background: pink;
}

.menu h3 {
  width: 100%;
  text-align: center;
  line-height: 1.5em;
  font-size: 1.25em;
}

.menu h3 span {
  font-size: 1em;
}

.menu.active li {
  width: 100%;
  padding:0.75em 0 0.75em 0;
}

a {
  text-decoration: none;
  color: inherit;
}


</style>
