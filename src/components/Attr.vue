<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <my-component title="我是子组件" value="李白" class="aaa" @click="alert({text: '我变了'})">
    </my-component>
  </div>
</template>
<script>
import Vue from 'vue'
const myComponent = Vue.component('myComponent', {
  template: `
  <div class="child">
    <input type="text" v-bind="$attrs" v-model="text" v-on="$listeners"/>
  </div>
  `,
  data () {
    return {
      text: '我是子组件！'
    }
  },
  mounted () {
    this.text = this.$attrs.title
    console.log(this.$attrs, 'listeners:', this.$listeners)
  }
})
export default {
  name: 'Attrsandlisteners',
  data () {
    return {
      msg: 'Attrs and listeners'
    }
  },
  methods: {
    alert (child) {
      alert(child.text)
    }
  },
  components: {
    myComponent
  },
  mounted () {
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
