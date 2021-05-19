<template>
  <div class="dialog" v-show="visible">
    <div class="dialog-body">
      <p>i'am a dialog</p>

      <button @click="visible = false">close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'components-dialog',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    show () {
      this.visible = true
    }
  }
}
</script>

<style>
.dialog {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .dialog .dialog-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
  }
</style>
