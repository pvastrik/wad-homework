<template>

    
    <div class="post">
        <div class="post-header">
            <span class="author"> <img src="" alt=""> {{ }} </span>
            <span class="author"> <b>Author:</b> {{ }} </span>
            <img src="" alt="">
            <p>Oct 2, 2022</p>
        </div>
        <div class="post-body">
            <p>Anyone knwos in which room is the lab today?</p>
        </div>
        <div class="post-footer">
            <img src="@/assets/likebutton.png">
        </div>
    </div>
</template>


<script>
export default {}
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
