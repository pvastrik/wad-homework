<template>

    
    <div class="post">
        <div class="post-header">
            <img src={{profilePic}} alt="Profile picture">
            <span>{{date}}</span>
        </div>
        <div class="post-body">
            <img src={{bodyImage}} alt={{postImageAlt}}>
            <p>{{body}}</p>
        </div>
        <div class="post-footer">
            <img @click="increaseLikes" src="@/assets/likebutton.png">
            <img @click="decreaseLikes" src="@/assets/dislikebutton.png">
            <p>Likes: {{ likes }} Dislikes: {{ dislikes }}</p>
        </div>
    </div>
</template>


<script>
export default {
  props: ['profilePic', 'date', 'bodyImage', 'postImageAlt', 'body', 'likes', 'dislikes'],
  methods: {
    increaseLikes: function () {
      this.$store.dispatch("increaseLikesAction")
      
    },
    decreaseLikes: function () {
      this.$store.dispatch("decreaseLikesAction")
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
</style>
