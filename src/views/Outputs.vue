<template>
  <div class="outputs">
    <div class="row">
      <div class="col-md-6 offset-md-1">
        <h3 class="outputs-title">VOLUNTARY_PRODUCTION</h3>
      </div>
    </div>
    <product v-for='output in outputs' v-bind:output='output' v-bind:key="output['id']" class='product-box'></product>
  </div>
</template>

<script>
import outputs from '../../static/data.json'
import product from '@/components/Product.vue'
export default {
  data () {
    return {
      outputs: outputs
    }
  },
  components: {
    product
  }
}
</script>
<style scoped>
.outputs-title {
    font-family: "Monotype Corsiva"f;
    color: rgba(0, 0, 0, 0.7);
}
.outputs {
  padding: 30px 0px;
}
.product-box {
  padding: 40px 0px;
}
</style>
