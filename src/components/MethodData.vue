<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <div>{{onum}} + {{num}}</div>
      <div>= {{count}}</div>
      <button @click="enMyWatchs">我累了，不想监听了~</button>
    </div>
    <div>
      我是data下面的a下面的b下面的c：{{data.a.b.c}}
      我是等着c++的d：{{d}}
    </div>
    <textarea cols="70" rows="50">
      myWatcher () {
        const watch = {
          num: (val, oval) => {
            this.onum = oval
            this.count = val + oval
          }
        }
        Object.keys(watch).forEach((key) => {
          this.enWatchs.push(this.$watch(key, watch[key]))
        })
      },
      enMyWatchs () {
        this.enWatchs.forEach((enWatch) => {
          enWatch()
        })
      },
      fnWatcher () {
        this.$watch(function () {
          return this.num + this.onum
        }, (newVal, oldVal) => {
          this.count = newVal
        })
      }
    </textarea>
  </div>
</template>
<script>
export default {
  name: 'vmProps',
  data () {
    return {
      msg: '我是 props',
      num: 0,
      onum: 0,
      count: 0,
      enWatchs: [],
      d: 0,
      data: {
        a: {
          b: {
            c: 1
          }
        }
      }
    }
  },
  components: {
  },
  methods: {
    myWatcher () {
      const watch = {
        num: (val, oval) => {
          this.onum = oval
          this.count = val + oval
        }
      }
      Object.keys(watch).forEach((key) => {
        this.enWatchs.push(this.$watch(key, watch[key]))
      })
      setInterval(() => {
        this.num++
      }, 1000)
    },
    enMyWatchs () {
      this.enWatchs.forEach((enWatch) => {
        enWatch()
      })
    },
    fnWatcher () {
      this.$watch(function () {
        return this.num + this.onum
      }, (newVal, oldVal) => {
        this.count = newVal
      })
      setInterval(() => {
        this.onum++
      }, 1500)
      setInterval(() => {
        this.num++
      }, 1000)
    },
    watchData () {
      this.$watch('data', (val) => {
        this.d = val.a.b.c
      }, {
        // deep: true,
        // immediate: true
      })
      setInterval(() => {
        this.data.a.b.c++
      }, 1000)
    }
  },
  mounted () {
    // this.myWatcher()
    // this.fnWatcher()
    this.watchData()
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
