<template>
  <header-compo></header-compo>
  
  <div class="main">
    <div class="left">

          <h2>Quotes of the day!</h2>

          <h4>"The journey of a thousand miles begins with one step."</h4>
          <p>-Lao Tzu</p>
          <br>
          <h4>"That which does not kill us makes us stronger."</h4>
          <p>-Friedrich Nietzsche</p>
          <br>
          <h4>"Life is what happens when you're busy making other plans."</h4>
          <p>-John Lennon</p>
          <br>
          <h4>"You must be the change you wish to see in the world."</h4>
          <p>-Mahatma Gandhi</p>
          <br>
          <h4>"You only live once, but if you do it right, once is enough."</h4>
          <p>-Mae West</p>
          <br>

      </div>
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
        <button type="button" @click="fetchPosts">Delete all</button>
      </div>

      <div class="right">
          <img src="@/assets/stupid5.jpg">
          <img src="@/assets/stupid2.jpeg">
          <img src="@/assets/stupid3.webp">
          <img src="@/assets/stupid4.webp">
          <img src="@/assets/stupid2.jpeg">
          <img src="@/assets/stupid5.jpg">
      </div>
    </div>

  <footer-compo></footer-compo>
</template>
<script>
import HeaderCompo from "@/components/HeaderCompo.vue";
import PostCompo from "@/components/PostCompo.vue";
import FooterCompo from "@/components/FooterCompo.vue";
export default {
  components: {
    HeaderCompo,
    PostCompo,
    FooterCompo
  },
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
            for (let i = 0; i< data.length;i++) {
              let dateformat = data[i].date.substring(0,10)
              data[i].date = dateformat
            }
            this.posts = data
            console.log(data)
          })
          .catch((err) => console.log(err.message));
    },
    resetLikesDislikes: function () {
      return this.$store.dispatch("resetLikesDislikesAction")
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>

<style>
  .main {
    display: flex;
    flex: 3 1 auto;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
}

.main > * {
    border-radius: 10px;
    padding:10px;
}

.left {
    background: #ffd2fc;
    float: left;
    flex-basis: 10%;
    flex-grow: 1;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0.5em;
}

.center {
    float: right;
    max-width: 60%;
    overflow: hidden;
    padding: 1em 5em 1em 5em;
    flex-grow: 3;

}

.post {
    background: #1ccad8;
    padding: 1em 2em 1em 2em;
    border-radius: 10px;
    margin: 2em auto 1em;
}
.post-body img {
    width: 100%;
}
.right {
    background: #ffd2fc;
    width: 10em;
    flex-basis: 10%;
    flex-grow: 1;
    margin-top: 1em;
    margin-bottom: 1em;
    justify-content: center;
    margin-right: 0.5em;
}

.post-footer img {
    width: 3em;
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
.right img {
    width:90%;
    padding-bottom: 1em;
    margin-right: auto;
    margin-left: auto;
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

@media (max-width: 1000px) {
    .right {
        display: none;
    }
    .left {
        display:none;
    }
    .center {
        width: 100%;
        margin:0;
        padding: 0;
        max-width: 100%;
    }
    .main {
        flex: 1 1 auto;
    }
}


</style>