<template>
  <button @click="plus">
    {{count}}
    <blog-post title="v3 publish" author='yyx' :sex='sex' />
  </button>
</template>

<script>
import { onMounted, reactive, watch } from 'vue'
import BlogPost from './blog-post'

export default {
  name: 'vue2-app',
  components: {
    BlogPost
  },
  data () {
    return {
      $data1: 1,
      sex: 'man'
    }
  },
  created () {
    this.$name = 'name'
  },
  setup () {
    const state = reactive({ count: 0 })

    watch(() => state.count, (newval, oldval) => {
      console.log(newval)
    })

    onMounted(() => {
      console.log('h')
    })
    onMounted(() => {
      console.log('h1')
    })
    state.count++
    state.count++
    state.count++
  }
}
</script>

<style>

</style>
