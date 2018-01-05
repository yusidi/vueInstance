<template>
  <div>
    <input v-model="id">组件 {{ id }}
    <button @click="onClick">点击</button>
    <button @click="onUnbind">解除绑定</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        id: '1'
      }
    },
    mounted () {
      console.log('2333')
      this.$on('test', this.fn)
    },
    methods: {
      fn (msg) {
        console.log(msg)
      },
      onClick () {
        this.$emit('test', 'hi')
      },
      onUnbind () {
        this.$off('test', this.fn)
      }
    }
  }
</script>

