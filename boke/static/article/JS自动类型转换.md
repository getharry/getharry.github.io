# JS自动类型转换
我们在用if的时候，判断条件经常可以做一些简化，这是因为js这门语言可以方便的做一些自动类型转换。
但很多时候，难免会遇到出错的尴尬，归根揭底还是因为语言的“随意性”而导致的了解不全面。如果能够
对类型的变换做到心中有数，那么程序出现异常的概率就会大大降低。
## 举几个栗子
- if条件可以通过，双等却不为true  
![并不是true](./static/article/pic/nottrue.jpg)
- 如果后端返回了字符串'null'  
!['null'](./static/article/pic/ifnull.jpg)  
如果某个对象的某个属性的值为字符串null，stringify和parse之后依旧是字符串。  
![](./static/article/pic/selinabai.gif)  
- 所有的js类型，包括基本类型和引用类型，只有undefined和null不能使用点操作符。  
```javascript
let a = 1; // 1,'abc',[],{},true
console.log(a.m); // undefined,不会报错

// 用&&来防范undefined和null
let b = a.m && a.m.n; // undefined
```
- PS:chrome控制台用shift + enter换行






