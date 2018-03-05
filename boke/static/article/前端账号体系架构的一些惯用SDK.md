## 前端账号体系架构的一些惯用SDK
### 操作cookie
抽离的设置cookie的全局文件cookie.js

```js
//设置cookie,增加到vue实例方便全局调用
//vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
//当然，如果session保存到vuex的话除外
//全局引入vue
var cookie={
  setCookie (c_name, value, expiredays){
    var exdate = new Date();　　
    exdate.setTime(exdate.getTime()+expiredays);
    exdate.setDate(exdate.getDate() + expiredays);　　　　
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  },
  getCookie(name){
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return (arr[2]);
    else
      return null;
    },
  delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = cookie.getCookie(name);
    if (cval != null)
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}

export default cookie;
```
### axios api
封装api.js

```js
import axios from "axios";

let host = 'http://shop.projectsedu.com';
let local_host = 'http://127.0.0.1:8000';

//登录
export const login = params => {
  return axios.post(`${local_host}/login/`, params)
}

//注册
export const register = parmas => {
  return axios.post(`${local_host}/users/`, parmas)
}

```

```js
// login.vue文件
<script>
  import cookie from '../../static/js/cookie';
  import { login } from '../../api/api'
  export default {
    data(){
      return {
        userName:'',
        parseWord:'',
        autoLogin:false,
        error:false,
        userNameError:'',
        parseWordError:''
      }
    },
    methods:{
      login(){
      var that = this;
      login({
          username:this.userName, //当前页
          password:this.parseWord
      }).then((response)=> {
            console.log(response);
            //本地存储用户信息
            cookie.setCookie('name',this.userName,7);
            cookie.setCookie('token',response.data.token,7)
            //存储在store
            // 更新store数据
            that.$store.dispatch('setInfo');
            //跳转到首页页面
            this.$router.push({ name: 'index'})
          })
          .catch(function (error) {
            if("non_field_errors" in error){
              that.error = error.non_field_errors[0];
            }
            if("username" in error){
              that.userNameError = error.username[0];
            }
            if("password" in error){
              that.parseWordError = error.password[0];
            }
          });
      },
      errorUnshow(){
        this.error = false;
      }
    },
    created(){
      //清除缓存
      cookie.delCookie('token');
      cookie.delCookie('name');
      //重新触发store
      //更新store数据
      this.$store.dispatch('setInfo');
    }
  }
</script>
```

```js
// mutation-types.js
// 使用常量替代mutation事件类型
export const SET_INFO = 'SET_INFO';
export const SET_NAV = 'SET_NAV';

// mutation.js
[types.SET_INFO] (state) {
    state.userInfo = {
        name:cookie.getCookie('name'),
        token:cookie.getCookie('token')
    }
    console.log(state.userInfo);
}

// action.js
// 提交mutation
function makeAction (type) {
  return ({ commit }, ...args) => commit(type, ...args);
};

export const setInfo = makeAction(types.SET_INFO);


// store.js
const userInfo = {
            name:cookie.getCookie('name')||'',
            token:cookie.getCookie('token')||''
        };
const goods_list =  {
       totalPrice:'',
        goods_list:[]

    }
const state = {
    userInfo,
    goods_list
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
```
配置全局拦截器axios/index.js，在main.js中引入一下即可

```js
// axios/index.js
//引入vue
import Vue from 'vue';
import axios from 'axios';

//全局状态控制引入
import store from '../store/store';

import * as types from '../store/mutation-types';
import router from '../router'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.userInfo.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `MxShop ${store.state.userInfo.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });


// http response 拦截器
axios.interceptors.response.use(
  undefined,
  error => {
    let res = error.response;
    switch (res.status) {
      case 401:
        //返回 401 清除token信息并跳转到登录页面
        // store.commit(types.LOGOUT);
        // router.replace({
        //  path: '/app/login',
        //  query: {redirect: router.currentRoute.fullPath}
        // })
		    console.log('未登录 或者token过期');
      case 403:
        console.log('您没有该操作权限');
        // alert('您没有该操作权限');
      case 500:
        console.log('服务器错误');
        // alert('服务器错误');
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
});


// main.js
//全局加载resource拦截器
import './axios/';
import Axios from 'axios';
Vue.prototype.$http = Axios

```