<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <my-component ref="refComponent" v-for="item in ['a', 'b', 'c']" :message="item" :key="item"></my-component>
    <div ref="refDom">
      ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
const myComponent = Vue.component('blog-post', {
  props: ['message'],
  template: `
    <div class="child">
      {{message}}
    </div>
    `
})
export default {
  name: 'ref',
  data () {
    return {
      msg: 'vm.$refs'
    }
  },
  components: {
    myComponent
  },
  mounted () {
    console.log(this.$refs)
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
.hello {
  width: 600px;
  margin: 0 auto;
}
</style>
