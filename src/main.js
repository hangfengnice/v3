import { createApp } from 'vue'
import App from './App.vue'
// import Vue3 from './Vue3.vue'
// import BlogPost from './blog-post.vue'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'
import loadingDirective from '@/components/base/loading/directive'
import noresultDirective from '@/components/base/no-result/directive'

import '@/assets/scss/index.scss'

createApp(App)
// createApp(Vue3)
// createApp(compile)
  .use(store)
  .use(router)
  .use(lazyPlugin, {
    loading: require('@/assets/images/default.png')
  })
  .directive('loading', loadingDirective)
  .directive('no-result', noresultDirective)
  .mount('#app')
