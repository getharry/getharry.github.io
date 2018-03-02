# vue-cli3.0的一些新特性
vue-cli从2.0到3.0的升级有太多的新东西了，新加入了TypeScript以及PWA的支持，这里列举一些主要的部分。
## 创建项目
创建命令的变化为 vue create my-project
## 项目目录结构变化
vue-cli3.0的目录精简了许多。
- 移除了配置文件目录，即config和build文件夹
- 移除了static文件夹，新增public文件夹，并且index.html移动到其中
- src文件夹中新增views文件夹
## 移除了配置文件目录后如何自定义配置
从3.0版本开始，在项目根目录有一个vue.config.js文件，可以配置项目的许多方面。
```javascript
	module.exports = {
	  baseUrl: '/',
	  outputDir: 'dist',
	  lintOnSave: true,
	  compiler: false,
	  // 调整内部的 webpack 配置。
	  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
	  chainWebpack: () => {},
	  configureWebpack: () => {},
	  // 配置 webpack-dev-server 行为。
	  devServer: {
	    open: process.platform === 'darwin',
	    host: '0.0.0.0',
	    port: 8080,
	    https: false,
	    hotOnly: false,
	    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
	    proxy: null, // string | Object
	    before: app => {}
	  }
	  ....
	}
```
## 关于public目录的调整
vue 约定 public/index.html 作为入口模板会通过 html-webpack-plugin 插件处理。在构建过程中，资源链接将会自动注入其中。除此之外，vue-cli 也自动注入资源提示( preload/prefetch ), 在启用 PWA 插件时注入 manifest/icon 链接, 并且引入(inlines) webpack runtime / chunk manifest 清单已获得最佳性能。
## 对TypeScript的支持
在 3.0 版本中，选择启用 TypeScript 语法后，vue 组件的书写格式有特定的规范。
示例：
```javasciprt
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'

const s = Symbol('baz')

@Component
export class MyComponent extends Vue {

  @Emit()
  addToCount(n: number){ this.count += n }

  @Emit('reset')
  resetCount(){ this.count = 0 }

  @Inject() foo: string
  @Inject('bar') bar: string
  @Inject(s) baz: string

  @Model('change') checked: boolean

  @Prop()
  propA: number

  @Prop({ default: 'default value' })
  propB: string

  @Prop([String, Boolean])
  propC: string | boolean

  @Provide() foo = 'foo'
  @Provide('bar') baz = 'bar'

  @Watch('child')
  onChildChanged(val: string, oldVal: string) { }

  @Watch('person', { immediate: true, deep: true })
  onPersonChanged(val: Person, oldVal: Person) { }
}
```

以上代码相当于：

```javascript
const s = Symbol('baz')

export const MyComponent = Vue.extend({
  name: 'MyComponent',
  inject: {
    foo: 'foo',
    bar: 'bar',
    [s]: s
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    propA: Number,
    propB: {
      type: String,
      default: 'default value'
    },
    propC: [String, Boolean],
  },
  data () {
    return {
      foo: 'foo',
      baz: 'bar'
    }
  },
  provide () {
    return {
      foo: this.foo,
      bar: this.baz
    }
  },
  methods: {
    addToCount(n){
      this.count += n
      this.$emit("add-to-count", n)
    },
    resetCount(){
      this.count = 0
      this.$emit("reset")
    },
    onChildChanged(val, oldVal) { },
    onPersonChanged(val, oldVal) { }
  },
  watch: {
    'child': {
      handler: 'onChildChanged',
      immediate: false,
      deep: false
    },
    'person': {
      handler: 'onPersonChanged',
      immediate: true,
      deep: true
    }
  }
})
```
## 对PWA的支持
当我们选择启用 PWA 功能时，在打包生成的代码时会默认生成 service-worker.js 和 manifest.json 相关文件。需要注意的是 在 manifest.json 生成的图标信息，可以在 public/img 目录下替换。默认情况 service-worker 采用的是 precache ，可以通过配置 pwa.workboxPluginMode 自定义缓存策略。
配置实例：
```javascript
// Inside vue.config.js
module.exports = {
  // ...其它 vue-cli 插件选项...
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc 中 InjectManifest 模式下是必填的。
      swSrc: 'dev/sw.js',
      // ...其它 Workbox 选项...
    },
  },
};
```