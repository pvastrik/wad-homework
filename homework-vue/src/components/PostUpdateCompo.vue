<template>
    <div class="container">
      <div class = "item">
        <h2 class = "textformating" for="post">Post body</h2>
        <textarea v-model="post.body" id="post" rows="8"></textarea>
        <br>
        <button @click="updatePost" class="button" role="link">Update</button>
        <button @click="deletePost" class="button" role="link">Delete</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PostUpdateCompo",

    data() {
      return {
        post: {
          id: "",
          date: "",
          name: "",
          body: ""
        }
      }
    },

    methods: {
      fetchAPost(id) {
        // fetch one post with the specied id (id)
        fetch(`http://localhost:3000/api/posts/${id}`)
            .then((response) => response.json())
            .then((data) => (this.post = data))
            .catch((err) => console.log(err.message));
      },
      
    updatePost() {
      const data = {
        body: this.post.body,
        id: this.id,
      }
      fetch(`http://localhost:3000//api/posts/${this.post.id}`, {
        method: "PUT",
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
    },

    deletePost() {
      const data = {
        id: this.id,
      }
      fetch(`http://localhost:3000//api/posts/${this.post.id}`, {
        method: "DELETE",
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

  },

  mounted() {
    // call fetchAPost() when this element mounts, and pass to it a route parameter  (id)
    // Route parameters (this.$route.params.id) are named URL segments that are used to capture the values specified at their 
    // position in the URL. The captured values are populated in the req.params object, with the name 
    // of the route parameter specified in the path as their respective keys
    this.fetchAPost(this.$route.params.id);
  },

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