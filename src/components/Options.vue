<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'vmdata',
  customOption: 'foo',
  customOptions: {
    a: 1,
    b: 2
  },
  data () {
    return {
      msg: '我是 options'
    }
  },
  mounted () {
    setTimeout(() => {
      this.msg = this.$options.customOption
    }, 1000)
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
