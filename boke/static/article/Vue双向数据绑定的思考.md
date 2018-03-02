# Vue双向数据绑定的思考

### 前端几种实现双向绑定的做法
目前几种主流的 mvc(vm) 框架都实现了单向数据绑定，而我所理解的双向数据绑定无非就是在单向绑定的基础上给可输入元素（ input 、 textare 等）添加了 change(input) 事件，来动态修改 model 和 view ，并没有多高深。所以无需太过介怀是实现的单向或双向绑定。
- 发布者-订阅者模式 backbone.js
- 脏值检查 angular.js
- 数据劫持 vue.js

### Vue双向绑定
vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty() 来劫持各个属性的 setter ， getter ，在数据变动时发布消息给订阅者，触发相应的监听回调。
最核心的方法便是通过 Object.defineProperty() 来实现对属性的劫持，达到监听数据变动的目的。

### mvvm双向绑定的几个要点
- 实现一个数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动拿到最新值通知给订阅者
- 实现一个指令解析器 Compile ，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数
- 实现一个 Watcher ，作为连接 Observer 和 Compile 的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图
- mvvm 入口函数，整合以上三者

### 实现Observer
- 通过Object.defineProperty()来监听属性变动
- 对需要observe的数据对象进行递归遍历，因为要包括子属性对象的属性，这样对某个对象的属性赋值的时候，就会触发setter，从而监听到数据变化。
```javascript
function observe(data){
	if(!data||typeof data !=='object'){
		return;
	}
	Object.keys(data).forEach(function(key) {
		defineReactive(data,key,data[key]);
	});
}
function defineReactive(data,key,val) {
	ovserve(val);//监听子属性
	Object.defineProperty(data,key,{
		enumerable: true, // 可枚举
		configurable: false, // 不能再define
		get: function() {
		    return val;
		},
		set: function(newVal) {
		    console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
		    val = newVal;
		}
	})
}

var data = {name: 'kindeng'};
observe(data);
data.name = 'dmq'; // 哈哈哈，监听到值变化了 kindeng --> dmq

```
这样已经可以监听数据的变化了，那么之后就是怎么通知订阅者了。






