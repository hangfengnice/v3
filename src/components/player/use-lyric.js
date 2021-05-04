import { useStore } from 'vuex'
import { computed, watch, ref } from 'vue'
import { getLyric } from '@/service/songs'
import Lyric from 'lyric-parser'

export default function useLyric () {
  const currentLyric = ref(null)
  const currentLineNum = ref(0)

  const store = useStore()
  const currentSong = computed(() => store.getters.currentSong)

  watch(currentSong, async newSong => {
    if (!newSong.url || !newSong.id) return

    const lyric = await getLyric(newSong)
    store.commit('addSongLyric', { song: newSong, lyric })

    if (currentSong.value.lyric !== lyric) return

    currentLyric.value = new Lyric(lyric, handleLyric)

    console.log(lyric, currentLyric.value)
  })

  function handleLyric ({ lineNum }) {
    currentLineNum.value = lineNum
  }
  return {
    currentLyric,
    currentLineNum
  }
}
