import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'

export default function useCd () {
  const cdRef = ref(null)
  const cdImageRef = ref(null)
  const store = useStore()
  const playing = computed(() => store.state.playing)

  const cdCls = computed(() => {
    return playing.value ? 'playing' : ''
  })

  watch(playing, (newPlaying) => {
    if (!newPlaying) {
      syncTransform(cdRef.value, cdImageRef.value)
    }
  })

  function syncTransform (wrapper, inner) {
    let wrapperTransfrom = getComputedStyle(wrapper).transform
    const innerTransform = getComputedStyle(inner).transform
    console.log(innerTransform, wrapperTransfrom, 'wrapperTransfrom')
    wrapperTransfrom = wrapperTransfrom === 'none' ? innerTransform : innerTransform.concat(' ', wrapperTransfrom)
    wrapper.style.transform = wrapperTransfrom
  }

  return {
    cdCls,
    cdRef,
    cdImageRef
  }
}
