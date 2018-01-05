import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shuxing1 from '@/components/Shuxing1'
import props from '@/components/Props'
import options from '@/components/Options'
import solt from '@/components/Solt'
import scopeSlot from '@/components/ScopeSlot'
import ref from '@/components/Ref'
import attr from '@/components/Attr'
import methodData from '@/components/MethodData'
import methodEvent from '@/components/methodEvent'
import methodLife from '@/components/MethodLife'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shuxing1',
      name: 'shuxing1',
      component: shuxing1
    },
    {
      path: '/props',
      name: 'props',
      component: props
    },
    {
      path: '/options',
      name: 'options',
      component: options
    },
    {
      path: '/solt',
      name: 'solt',
      component: solt
    },
    {
      path: '/scopedslot',
      name: 'scopedslot',
      component: scopeSlot
    },
    {
      path: '/ref',
      name: 'ref',
      component: ref
    },
    {
      path: '/attr',
      name: 'attr',
      component: attr
    },
    {
      path: '/methoddata',
      name: 'methoddata',
      component: methodData
    },
    {
      path: '/methodevent',
      name: 'methodevent',
      component: methodEvent
    },
    {
      path: '/methodlife',
      name: 'MethodLife',
      component: methodLife
    }
  ]
})
