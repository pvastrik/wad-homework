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
      <AllPostsCompo></AllPostsCompo>
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
import FooterCompo from "@/components/FooterCompo.vue";
import AllPostsCompo from "@/components/AllPostsCompo";
export default {
  components: {
    AllPostsCompo,
    HeaderCompo,
    FooterCompo
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
.right img {
    width:90%;
    padding-bottom: 1em;
    margin-right: auto;
    margin-left: auto;
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