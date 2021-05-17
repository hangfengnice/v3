import { createApp } from 'vue'
// import App from './App.vue'
// import Vue3 from './Vue3.vue'
// import BlogPost from './blog-post.vue'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'
import loadingDirective from '@/components/base/loading/directive'
import noresultDirective from '@/components/base/no-result/directive'

import '@/assets/scss/index.scss'

const compile = {
  template: `
  <input v-model='msg'>
  `,
  data () {
    return {
      flag: true,
      msg: 'Hello Vue',
      text: ''
    }
  }
}

// createApp(Vue3)
createApp(compile)
  .use(store)
  .use(router)
  .use(lazyPlugin, {
    loading: require('@/assets/images/default.png')
  })
  .directive('focus', {
    mounted (el) {
      el.focus()
    }
  })
  .directive('log', {
    beforeMount () {
      console.log('log directive before mount')
    },
    mounted () {
      console.log('log directive mounted')
    },
    beforeUpdate () {
      console.log('log directive before update')
    },
    updated () {
      console.log('log directive updated')
    },
    beforeUnmount () {
      console.log('log directive beforeUnmount')
    },
    unmounted () {
      console.log('log directive unmounted')
    }
  })
  .directive('loading', loadingDirective)
  .directive('no-result', noresultDirective)
  .mount('#app')
