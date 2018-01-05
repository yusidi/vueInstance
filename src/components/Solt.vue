<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>具名插槽</h2>
    <div>
         <textarea cols="70" rows="15">
        const myComponent = Vue.component('blog-post', {
          render: function (createElement) {
            var header = this.$slots.header
            var body = this.$slots.body
            console.log(this.$slots)
            return createElement('div', [
              createElement('header', header),
              createElement('main', body),
              createElement('main', this.$slots.default)
            ])
          }
        })
      </textarea>
      <textarea cols="70" rows="15">
        <my-component>
          <h2>插槽</h2>
          {{msg}}aaa
          aaaa
          <p>aaa</p>
          <h1 slot="header">
            About Me
          </h1>
          <p slot="body">
            About Body
          </p>
        </my-component>
      </textarea>
    </div>
    <my-component>
      <h2>插槽</h2>
      {{msg}}aaa
      aaaa
      <p>aaa</p>
      <h1 slot="header">
        About Me
      </h1>
      <h1 slot="header">
        About Me
      </h1>
      <p slot="body">
        About Body
      </p>
    </my-component>
  </div>
</template>
<script>
import Vue from 'vue'
const myComponent = Vue.component('blog-post', {
  render: function (createElement) {
    var header = this.$slots.header
    var body = this.$slots.body
    console.log(this.$slots)
    return createElement('div', [
      createElement('header', header),
      createElement('main', body),
      createElement('main', this.$slots.default)
    ])
  }
})
export default {
  name: 'solt',
  data () {
    return {
      msg: '我是 slot',
      objProps: {a: 1, b: 2}
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
