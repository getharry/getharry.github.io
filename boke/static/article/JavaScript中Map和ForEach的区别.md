# JavaScript中Map和ForEach的区别

### 定义
- forEach() 针对每一个元素执行提供的函数
- map() 创建一个新的数组，其中每一个元素由调用数组中的每一个元素执行提供的函数得来
到底有什么区别呢？forEach()方法不会返回执行结果，而是undefined。也就是说，forEach()会修改原来的数组。而map()方法会得到一个新的数组并返回。

```js
let arr = [1,2,3,4,5];
arr.forEach((num,index)=>{
	return arr[index] = num*2
})
//执行之后，原来的arr变为[2,4,6,8,10]

let arr2 = arr.map(num=>{
	return num*2
})
// arr2为[2,4,6,8,10]
```

### 函数式编程角度的理解
如果你习惯使用函数是编程，那么肯定喜欢使用map()。因为forEach()会改变原始的数组的值，而map()会返回一个全新的数组，原本的数组不受到影响。

```js
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map(num => num * 2).filter(num => num > 5);
// arr2 = [6, 8, 10]
```

### 总结
> 能用forEach()做到的，map()同样可以。反过来也是如此  
> map()会分配内存空间存储新数组并返回，forEach()不会返回数据  
> forEach()允许callback更改原始数组的元素。map()返回新的数组