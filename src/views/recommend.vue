<template>
  <div class="recommend">

  </div>
</template>

<script>
import { getRecommend } from '@/service/recommend.js'
export default {
  name: 'recommend',
  async created () {
    const result = await getRecommend()
    console.log(result)
  }
}
</script>

<style>

</style>
