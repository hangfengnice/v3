<template>
  <button @click="plus">
    {{count}}
  </button>
</template>

<script>
import { onMounted, reactive, watch } from 'vue'

export default {
  name: 'vue2-app',
  data () {
    return {
      $data1: 1
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
