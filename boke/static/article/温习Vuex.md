# 温习Vuex

### 核心概念
- State 使用的是单一状态树，用一个对象包含全部的应用层级状态
- Getter 从state派生出一些状态
- Mutation 更改store的状态的唯一方法
- Action 提交的是mutation，异步
- Module 当应用变得非常复杂时，store 对象就有可能变得相当臃肿。Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块
实例：

```javascript
//将要存放的数据写在state对象中，state则存写在index.js文件中。
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import shop from './modules/shop'

Vue.use(Vuex)
const state = {
  goods: [
    {
      id: '0',
      name: 'vivo-X20Plus屏幕指纹版',
      hint: '逆光也清晰，照亮你的美',
      price: 3596.00,
      num: 0,
      img: require('../assets/v.jpg')
    },
    {
      id: '1',
      name: '华为mate10Plus',
      hint: '真正的人工智能芯片',
      price: 4999.00,
      num: 0,
      img: require('../assets/h.jpeg')
    },
    {
      id: '2',
      name: '华为mate10Plus',
      hint: '真正的人工智能芯片',
      price: 4999.00,
      num: 0,
      img: require('../assets/v.jpg')
    }
  ],
  totalPrice: 0.00,
  totalNum: 0
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    shop //shop模块
  }
})

// 使用常量，这是mutation-type.js文件
export const ADD_CART = 'ADD_CART'
export const REDUCE_CART = 'REDUCE_CART'

// 这是mutation.js文件
import {
  ADD_CART,
  REDUCE_CART
} from './mutation-types.js'
export default {
// 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名	
  [ADD_CART] (state, id) {
    state.goods[id].num++
    state.totalNum++
    state.totalPrice += state.goods[id].price
    // console.log(state.totalPrice)
  },
  [REDUCE_CART] (state, id) {
    if (state.goods[id].num > 0) {
      state.goods[id].num--
      state.totalNum--
      state.totalPrice -= state.goods[id].price
    }
  }
}

//对state数据派生出一些状态，例如需要知道商品的个数
const getters = {
  goods_obj: state => state.goods,
  goods_length: state => state.goods.length
}
export default getters

//vue文件中
<template>
  <div class="hello">
    <ul class="shop_container">
      <li v-for="item in $store.state.goods" :key="item.id" class="shop_container_li">
        <div class="shop_img">
          <img :src="item.img" alt="" width="100%" height="100%"/>
        </div>
        <div class="shop_detail">
          <p>{{item.name}}</p>
          <p>{{item.hint}}</p>
          <p>￥{{item.price}}</p>
          <p>
            <span class="shop_reduce" @click="reduce_num(item.id)">-</span>
            <span class="shop_num">{{item.num}}</span>
            <span class="shop_add" @click="add_num(item.id)">+</span>
          </p>
        </div>
      </li>
    </ul>
    <div class="foot">
      <div class="total_price">
        <span>合计：￥{{totalPrice}}</span>
      </div>
      <div class="total_num" :class="{payment: totalNum}">
        <span>去结账：{{totalNum}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  created () {
    // console.log(this.goods)
    // console.log(this.goods_obj)
    // console.log(this.goods_length)
    // console.log(this.$store.state.shop)  // 模块化 Vuex允许我们将 store 分割成模块（module）每个模块拥有自己的 state、mutation、action、getter、
  },
  computed: {
    ...mapState([
    // 获取state中的数据可以通过mapState辅助函数获取，也可以直接获取 例：this.$store.state.goods
      'goods', 'totalPrice', 'totalNum'
    ]),
    ...mapGetters([
      'goods_obj', 'goods_length'
    ])
  },
  methods: {
    ...mapMutations([
    // 获取mutation中的方法可以通过mapMutations 辅助函数获取，也可以直接获取。
      'ADD_CART'
      // 'REDUCE_CART'
    ]),
    reduce_num (id) {
      // this.REDUCE_CART(id)
      this.$store.commit('REDUCE_CART', id) //也可以直接获取
    },
    add_num (id) {
      this.ADD_CART(id) //通过mapMutations 辅助函数获取
    }
  }
}
</script>
```
