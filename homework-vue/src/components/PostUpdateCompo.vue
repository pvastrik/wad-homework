<template>
    <div class="container">
      <div class = "item">
        <h2 class = "textformating" for="post">Post body</h2>
        <textarea id="post" rows="8"></textarea>
        <br>
        <router-link to="/" custom v-slot="{navigate}"><button @click="navigate" class="button" role="link">Update</button></router-link>
        <router-link to="/" custom v-slot="{navigate}"><button @click="navigate" class="button" role="link">Delete</button></router-link>
      
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PostUpdateCompo"
  }
  </script>
  
  <style scoped>
  .item {
    order: inherit;
    background-color: #ffd2fc;
    margin: 4em;
    align-items: center;
    justify-content: center;
    padding: 1em;
    border-radius: 20px;
  }
  
  .textformating {
    font-size: 1em;
    text-align: center;
  }
  
  
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  
  </style>