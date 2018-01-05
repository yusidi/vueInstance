<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <my-component>
      <template slot-scope="child">
        <span>hello from parent</span>
        <span @click="alert(child)">{{ child.text }}</span>
        <input type="text" ng-model="child.text">
      </template>
      aaa
    </my-component>
    <div>
        <textarea cols="70" rows="15">
          const myComponent = Vue.component('myComponent', {
            template: `
            <div class="child">
              <input type="text" v-model="text"/>
              <slot :text="text">111</slot>
            </div>
            `,
            data () {
              return {
                text: '于思迪写ppt到很晚！'
              }
            }
          })
        </textarea>
        <textarea cols="70" rows="15">
          <my-component>
            <template slot-scope="props">
              <span>hello from parent</span>
              <span>props.text</span>
            </template>
          </my-component>
        </textarea>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
const myComponent = Vue.component('myComponent', {
  template: `
  <div class="child">
    <input type="text" v-model="text"/>
    <slot :text="text">111</slot>
  </div>
  `,
  data () {
    return {
      text: '我是子组件！'
    }
  },
  mounted () {
    console.log(this.$slots, '==========')
    console.log(this.$scopedSlots.default({ text: 'aaa' }), '作用域插槽')
  }
})
export default {
  name: 'scopedslot',
  data () {
    return {
      msg: '访问作用域插槽'
    }
  },
  methods: {
    alert (child) {
      alert(child.text)
      child.text = '我变了'
      console.log(child.text, '=======')
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
