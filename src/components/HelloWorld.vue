<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>实例属性</h2>
    <ul>
      <li><a href="http://localhost:8080/#/shuxing1">data</a></li>
      <li><a href="http://localhost:8080/#/props">props</a></li>
      <li><a href="http://localhost:8080/#/props">el</a></li>
      <li><a href="http://localhost:8080/#/options" target="_blank">options</a></li>
      <li><a href="http://localhost:8080/#/props">parent root children</a></li>
      <li><a href="http://localhost:8080/#/solt">slot</a></li>
      <li><a href="http://localhost:8080/#/scopedslot">scopedSlot</a></li>
      <li><a href="http://localhost:8080/#/ref">ref</a></li>
      <li><a href="http://localhost:8080/#/attr">attrs and listeners</a></li>
    </ul>
    <h2>实例方法</h2>
    <h3>实例方法 / 数据</h3>
    <ul>
      <li><a href="http://localhost:8080/#/methoddata" target="_blank">watch</a></li>
    </ul>
    <h3>实例方法 / 事件</h3>
    <ul>
      <li><a href="http://localhost:8080/#/methodevent" target="_blank">on once off emit</a></li>
    </ul>
    <h3>实例方法 / 生命周期</h3>
    <ul>
      <li><a href="http://localhost:8080/#/methodlife" target="_blank">mount forceUpdate nextTick destroy</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log(this.$el)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
