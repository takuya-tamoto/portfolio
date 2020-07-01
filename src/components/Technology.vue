<template>
  <div class="content offset-md-3 col-md-6">
    <div class="card">
      <div class="card-header">
        {{skill['title']}}
      </div>
      <div class="card-body">
        <p class="text">{{skill['text']}}</p>
        <p class="experience">{{skill['experience']}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  title: 'technology_detailes',
  props: ['skill']
}
</script>
<style scoped>
h3 {
  color: white;
}
p {
  width: 90%;
  display: inline-block;
  text-align: left;
}
.content {
  padding-bottom: 10px;
}

</style>
