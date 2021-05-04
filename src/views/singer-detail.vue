<template>
  <div class="singer-detail">
    <music-list
    :title="title"
    :pic='pic'
    :loading='loading'
    :songs="songs"></music-list>
  </div>
</template>

<script>
import { getSingerDetail } from '@/service/singer.js'
import { processSongs } from '@/service/songs.js'
import MusicList from '@/components/music-list/music-list'

import storage from 'good-storage'
import { SINGER_KEY } from '@/assets/js/constant.js'

export default {
  name: 'singer-detail',
  components: {
    MusicList
  },
  props: {
    singer: {
      type: Object,
      defaut: () => {}
    }
  },
  data () {
    return {
      songs: [],
      loading: true
    }
  },
  computed: {
    computedSinger () {
      let ret = null
      const singer = this.singer

      if (singer) {
        ret = singer
      } else {
        const cachedSinger = storage.session.get(SINGER_KEY)
        const { id } = this.$route.params
        if (cachedSinger && cachedSinger.mid === id) {
          ret = cachedSinger
        }
      }
      return ret
    },
    pic () {
      const { computedSinger } = this
      return computedSinger && computedSinger.pic
    },
    title () {
      const { computedSinger } = this
      return computedSinger && computedSinger.name
    }
  },
  async mounted () {
    if (!this.computedSinger) {
      const { path } = this.$route.matched[0]
      this.$router.push({
        path
      })
      return
    }
    const result = await getSingerDetail(this.computedSinger)
    const songs = await processSongs(result.songs)
    this.songs = songs
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
.singer-detail {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>
