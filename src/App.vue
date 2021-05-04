<template>
  <m-header></m-header>
  <tab></tab>
  <Player></Player>
  <router-view/>
</template>

<script>
import Header from '@/components/header/header'
import Tab from '@/components/tab/tab'
import Player from '@/components/player/player'

export default {
  components: {
    MHeader: Header,
    Tab,
    Player
  }
}
</script>

<style lang="scss">

</style>
