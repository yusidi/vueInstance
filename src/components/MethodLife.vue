<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="changeMsgByNextTick">我要变成大魔王</button>
    <button @click="destroyComponent">销毁组件</button>
    <button @click="forceUpdate">从新渲染</button>
    <button @click="data.a.b.c.d++"></button>
    <you-component>
      {{data}}
      <input type="text" v-model="data.a.b.c.d">
    </you-component>
    <!-- <componenta @click="changeMsgByNextTick"></componenta> -->
    <div id="a"></div>
    <div id="b"></div>
  </div>
</template>
<script>
import Vue from 'vue'
import componenta from './component.vue'

const ComponentContr = Vue.extend(componenta)
const vm = new ComponentContr()
// console.log(vm)

const MyComponent = Vue.component('aa', {
  template: '<div>Hello!</div>'
})
const youComponent = Vue.component('aa', {
  template: '<div><slot>111</slot></div>'
})
console.log(youComponent)
// myComponent().$mount('#a')

export default {
  name: 'vmProps',
  data () {
    return {
      msg: '实例方法 / 生命周期',
      data: {
        a: {
          b: {
            c: {
              d: 2
            }
          }
        }
      }
    }
  },
  components: {
    youComponent,
    componenta
  },
  methods: {
    changeMsgByNextTick () {
      this.msg = '我是大魔王！'
      this.$nextTick().then(() => {
        alert(1)
        console.log('我变了！！')
      })
    },
    destroyComponent () {
      this.$destroy()
    },
    forceUpdate () {
      // this.$forceUpdate()
      vm.id = 22222
      vm.$forceUpdate()
    }
  },
  mounted () {
    const a = new MyComponent().$mount('#a')
    console.log(a.$el)
    console.log(document.getElementById('#a'))
    // const a = new MyComponent({el: '#a'})
    vm.$mount('#b')
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
