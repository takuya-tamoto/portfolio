<template>
  <div class="row">
    <div class="col-md-6 offset-md-1">
      <div class="product-image">
        <h3 class="product-title"><strong>{{ output['title'] }}</strong></h3>
        <a v-bind:href="output['url']" target="_blank">
          <!-- <img src="../../static/ideas.jpg"> -->
          <img :src="output['img']">
        </a>
      </div>
    </div>

    <div class="col-md-4 offset-md-1">
      <div class='product-info'>
        <p class="product-year">制作年：{{ output['year'] }}</p>
        <p>{{ output['text'] }}</p>
        <p>
          <i class="fab fa-github fa-lg sns-icon"></i>
          <a v-bind:href="output['github']" target="_blank">githubページ</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: 'product_details',
  props: ['output']
}
</script>
<style scoped>
.product-image {
  margin-bottom: 15px;
}
.product-info {
    padding-top: 35px;
    color: rgba(0, 0, 0, 0.8);
}
.product-title {
  font-size: 20px;
}
a {
  color: rgba(0, 0, 0, 0.5);
}
a:hover {
  text-decoration: underline;
}
img {
  width: 100%;
}
</style>
