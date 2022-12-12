<template>
    <router-link :to="'post/'+id">
      <div class="post">
          <div class="post-header">
              <p>{{name}}</p>
              <span>{{date}}</span>
          </div>
          <div class="post-body">
              <pre>{{body}}</pre>
          </div>
          <div class="post-footer">
              <img class="likebutton" @click="increaseLikes(id)" src="@/assets/likebutton.png">
              <img class="likebutton" @click="decreaseLikes(id)" src="@/assets/dislikebutton.png">
  <!--            <p>Likes: {{ likes }} Dislikes: {{ dislikes }}</p>-->
          </div>
      </div>
    </router-link>
</template>


<script>
export default {
  props: ['id', 'name', 'date', 'body'],
  methods: {
    increaseLikes: function (id) {
      this.$store.dispatch("increaseLikesAction", id)
      
    },
    decreaseLikes: function (id) {
      this.$store.dispatch("decreaseLikesAction", id)
    }
  }

}
</script>


<style>
.post {
  background: #1ccad8;
  padding: 1em 2em 1em 2em;
  border-radius: 10px;
  margin: 2em auto 1em;
}
.post pre{
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: inherit;
}
.post-body img {
  width: 100%;
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

.likebutton:hover {
  cursor: pointer;
}
</style>
