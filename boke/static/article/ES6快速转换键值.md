# ES6快速转换键值
随着前后端分离的愈演愈烈，前端会提前设定字段的名字，这和后端返回的字段会不一致，
那么在联调的时候，就需要对接口的字段的key值进行转换，如下代码示例了如何进行换key。  

```javascript
let data = {
    age: 12,
    name: '古巨基',
    address: '保安'
};
let {
    age: nianling,
    name: mingzi,
    address: dizhi
} = data;
let obj = {
    nianliang,
    mingzi,
    dizhi
}

```