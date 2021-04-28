<template>
  <div class="singer" v-loading='!singers.length'>
    <IndexList :data='singers' />
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer.js'
import IndexList from '@/components/index-list/index-list'
export default {
  name: 'singer',
  components: {
    IndexList
  },
  data () {
    return {
      singers: []
    }
  },
  async created () {
    const { singers } = await getSingerList()
    this.singers = singers
  }
}
</script>

<style lang='scss' scoped>
.singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>
