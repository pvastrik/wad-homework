<template>
    <router-link :to="'post/' + id">
      <div class="post">
          <div class="post-header">
              <p class="user">{{name}}</p>
              <p class="">Date: {{date}}</p>
          </div>
          <div class="post-body">
              <pre>{{body}}</pre>
          </div>
      </div>
    </router-link>
</template>


<script>
export default {
  props: ['id', 'name', 'date', 'body'],
}
</script>


<style>
.post {
  background: #1ccad8;
  padding: 1em 2em 1em 2em;
  border-radius: 10px;
  margin: 2em auto 1em;
  width: 500px;
}
.post pre{
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
}
.post-body {
  font-family: "Courier New";
  font-size: x-large;
}

.post-header {
  display:flex;
  justify-content: space-between;
  padding-bottom: 1em;
}

.post-header img {
  width: 5em;
  border-radius: 50%;
}

.likebutton:hover {
  cursor: pointer;
}

.user {
  font-weight: bold;
}
</style>
