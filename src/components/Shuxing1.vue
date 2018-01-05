<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h1>{{data}}</h1>
  </div>
</template>

<script>
const data = { a: 1 }
export default {
  name: 'vmdata',
  data () {
    return {
      data: data,
      msg: '我是 data'
    }
  },
  mounted () {
    console.log(data === this.data, this.data === this.$data.data)
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
