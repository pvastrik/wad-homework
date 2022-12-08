<template>
  <div class="container">
    <div class = "item">
      <h2 class = "textformating" for="post">Post body</h2>
      <textarea v-model="postBody" id="post" rows="8"></textarea>
      <br>
      <button @click="addPost" class="button" role="link">Create post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPostCompo",
  data() {
    return {
      postBody: "",
      userid: this.$store.getters['getUserId']
    }
  },

  methods: {
    addPost() {
      const data = {
        body: this.postBody,
        userid: this.userid
      }
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(data)

      })
          .then((response) => {
            console.log(response.data);
            location.assign("/");
          })
          .catch((e) => {
            console.log(e);
          });
    }
  }
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