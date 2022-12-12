<template>
  <div class="center">
    <button @click="logOut" role="link">Log out</button>
    <post-compo v-for="post in posts"
                :key="post.id"
                :id="post.id"
                :date="post.date"
                :body="post.body"
                :name="post.name"
    >
    </post-compo>
    <router-link to="/addPost" custom v-slot="{navigate}"><button @click="navigate" role="link">Add post</button></router-link>
    <button type="button">Delete all</button>
  </div>
</template>

<script>
import PostCompo from "@/components/PostCompo";
  export default {
    components: {PostCompo},

    data() {
      return {
        posts: []
      }
    },
    methods: {
      logOut() {
        fetch("http://localhost:3000/auth/logout", {
          credentials: 'include'
        })
            .then((response) => response.json())
            .then(() => {
              console.log('jwt removed');
              sessionStorage.clear();
              location.assign("/"); // why redirect to the home directory?
            })
            .catch((e) => {
              console.log(e);
            });
      },
      fetchPosts() {
        fetch(`http://localhost:3000/api/posts/`)
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
              for (let i = 0; i < data.length;i++) {
                let dateformat = data[i].date.substring(0,10)
                data[i].date = dateformat
              }
              this.posts = data
              console.log(data)
            })
            .catch((err) => console.log(err.message));
      },
    },
    mounted() {
      this.fetchPosts();
    }
  }
</script>

<style>
.center {
  float: right;
  max-width: 60%;
  overflow: hidden;
  padding: 1em 5em 1em 5em;
  flex-grow: 3;

}
button {
  margin: 0.5em;
  text-align: center;
  align-items: center;
  background-color: #ffd2fc;
  border-radius: 5%;
  font-size: 1em;
  border-color: #ffd2fc;
}
</style>