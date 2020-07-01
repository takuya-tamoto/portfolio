<template>
  <div class="skill">
      <div class="row">
        <div class="offset-md-3 coll-md-6">
          <h3 class="skill-title">SKILL</h3>
        </div>
      </div>
      <technology v-for='skill in skills' v-bind:skill='skill' v-bind:key="skill['id']"></technology>
  </div>
</template>
<script>
import skills from '../../static/skill.json'
import technology from '@/components/Technology.vue'
export default {
  data () {
    return {
      skills: skills
    }
  },
  components: {
    technology
  }
}
</script>
<style scoped>
.skill-title {
  padding: 20px;
}
</style>
