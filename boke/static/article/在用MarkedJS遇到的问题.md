## 在用MarkedJS遇到的问题
### 官方默认配置

```js
// Create reference instance
var myMarked = require('marked');

// Set options
// `highlight` example uses `highlight.js`
myMarked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
  	return require('highlight.js').highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

// Compile
console.log(myMarked('I am using __markdown__.'));
```

**注意的问题**  
- gfm一般要配置为true，以贴近github模式
- breaks选项默认是false，如果配置为true，则在换行时候不需要在末尾留两个以上的空格

### list列表前标志问题
在项目当中使用的时候，发现列表前面的黑色原点没有渲染出，百思不得其解。后来去他github地址查issue，无果。算了，只有去看看他的源码了，着重看包含list item关键字的地方，最后找到了原因：居然是自己的css代码对效果的覆盖的原因。。

```js
// marked.js
Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

//修改list样式，覆盖reset
.content ul{
	list-style: disc inside;
}

```


