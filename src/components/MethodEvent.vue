<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <div>{{onum}} + {{num}}</div>
      <div>= {{count}}</div>
      <button @click="offEvent">你可别弹了</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vmProps',
  data () {
    return {
      msg: '实例方法 / 事件',
      num: 0,
      onum: 0,
      count: 0
    }
  },
  components: {
  },
  methods: {
    offEvent () {
      this.$off(['text', 'text1'])
    }
  },
  mounted () {
    this.$on('text', (num, onum) => {
      this.count = num + onum
    })
    this.$on('text1', (num, onum) => {
      alert(num + onum)
    })
    setInterval(() => {
      this.num++
      this.onum++
      this.$emit('text', this.num, this.onum)
      this.$emit('text1', this.num, this.onum)
    }, 2000)
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
