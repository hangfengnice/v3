<template>
  <keep-alive>
    <BlogPost v-if="flag"></BlogPost>
    <Childa v-else></Childa>
  </keep-alive>
  <button @click="onToggle">toggle</button>
</template>

<script>
import { onMounted, reactive, watch } from 'vue'
import BlogPost from './blog-post'
import Childa from './childa.vue'

export default {
  name: 'vue2-app',
  components: {
    BlogPost,
    Childa
  },
  data () {
    return {
      $data1: 1,
      sex: 'man',
      flag: true
    }
  },
  created () {
    this.$name = 'name'
  },
  methods: {
    onToggle () {
      this.flag = !this.flag
    }
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
