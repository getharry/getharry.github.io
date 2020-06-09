# JS猎奇
```javascript

// 将arguments转换为常规数组
var argArray = Array.prototype.slice.call(arguments);


// 对数组中的所有值求和
var numbers = [3, 5, 7, 2];
var sum = numbers.reduce((x, y) => x + y);
console.log(sum); // returns 17


// 条件短路，可同时使用变量和函数
if (hungry) {
    goToFridge();
}
// 可简化为如下
hungry && goToFridge()


// 属性名称可以是动态的
const dynamic = 'color';
var item = {
    brand: 'Ford',
    [dynamic]: 'Blue'
}
console.log(item);
// { brand: "Ford", color: "Blue" }


// 可以使用带有 Spread 运算符的 Set 对象来创建一个仅包含唯一值的新数组
const my_array = [1, 2, 2, 3, 3, 4, 5, 5]
const unique_array = [...new Set(my_array)];
console.log(unique_array); // [1, 2, 3, 4, 5]


// 使用 includes 处理多重条件
if(code === 202 || code ===204 || code ===204){
    someMethod()
}
// 上面代码可以改写成如下
if([202,203,204].includes(code)){
    someMethod()
}


// for...of 可以迭代数组、类数组以及任何可以迭代的对象(maps、sets、DOM集合)，并且，for...of 的语句还很短。
const products = ['oranges', 'apples'];
for (const product of products) {
  console.log(product);
}

const persons = [
  { name: 'John Smith' },
  { name: 'Jane Doe' }
];
for (const { name } of persons) {
  console.log(name);
}

function sum() {
  let sum = 0;
  for (const number of arguments) {
    sum += number;
  }
  return sum;
}
sum(1, 2, 3); // => 6

const message = 'hello';
for (const character of message) {
  console.log(character);
}
// 'h'
// 'e'
// 'l'
// 'l'
// 'o'

const person = {
  name: 'John Smith',
  job: 'agent'
};
for (const [prop, value] of Object.entries(person)) {
  console.log(prop, value);
}
// 'name', 'John Smith'
// 'job', 'agent'

const allImages = document.querySelectorAll('img');
for (const image of allImages) {
  console.log(image); // log each image in the document
}



```