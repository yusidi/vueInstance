<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <textarea cols="70" rows="12">
        <h2>字面量语法</h2>
        <my-component message="你好" num="1"></my-component>
        <h2>动态props</h2>
        <input type="text" v-model="msg"/>
        <my-component :message="msg" :num="1"></my-component>
        <h2>传递对象</h2>
        <input type="text" v-model="msg"/>
        <my-component class="aaa" data-title="张三" v-bind="{message: msg, num: 1, objProps }"></my-component>
        <div><<objProps>></div>
      </textarea>
      <textarea cols="70" rows="12">
        const myComponent = Vue.component('child', {
          // 声明 props
          props: ['message'],
          props: {
            message: String,
            num: [String, Number],
            objProps: Object
          },
          // 就像 data 一样，prop 也可以在模板中使用
          // 同样也可以在 vm 实例中通过 this.message 来使用
          template: '<span><<message>></span>'
        })
      </textarea>
    </div>
    <h2>字面量语法</h2>
    <my-component message="你好" num="1"></my-component>
    <h2>动态props</h2>
    <input type="text" v-model="msg"/>
    <my-component :message="msg" :num="1"></my-component>
    <h2>传递对象</h2>
    <input type="text" v-model="msg"/>
    <my-component class="aaa" data-title="张三" v-bind="{message: msg, num: 1, objProps }"></my-component>
    <div>{{objProps}}</div>
  </div>
</template>
<script>
import Vue from 'vue'
const myComponent = Vue.component('child', {
  // 声明 props
  // props: ['message', 'num', 'objProps'],
  props: {
    message: String,
    num: [String, Number],
    objProps: Object
  },
  // 就像 data 一样，prop 也可以在模板中使用
  // 同样也可以在 vm 实例中通过 this.message 来使用
  template: `
  <div>
    <div>
      <span>{{ message }}-{{typeof num}}</span>
    </div>
    <input v-model="cpObjProps.b" v-if="cpObjProps"/>
  </div>
  `,
  data () {
    return {
      el: this.$el
    }
  },
  computed: {
    cpObjProps () {
      return this.objProps
    }
  },
  methods: {
    objPropsChange () {
      console.log(this.$props.objProps)
    }
  },
  mounted () {
    if (this.$props.objProps) {
      this.$props.objProps.b = 3
    }
    // console.log(this.$el)
    console.log('父亲节点:', this.$parent.$el, '爷爷节点:', this.$parent.$parent.$el, '太爷爷节点：', this.$parent.$parent.$parent.$el)
    console.log('女娲节点:', this.$root.$el)
  }
})
export default {
  name: 'vmProps',
  data () {
    return {
      msg: '我是 props',
      objProps: {a: 1, b: 2}
    }
  },
  components: {
    myComponent
  },
  mounted () {
    this.$children.forEach((item, index) => {
      console.log(index, '孩子节点:', item.$el)
      console.log(index, '孙子节点:', item.$children)
    })
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
