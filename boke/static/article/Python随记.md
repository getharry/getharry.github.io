# Python随记
- 对于很大或很小的浮点数，就必须用科学计数法表示，把10用e替代，1.23x109就是1.23e9，或者12.3e8，0.000012可以写成1.2e-5，等等。  
- 布尔值可以用and、or和not运算。  
```python
True and False
True or False
not True
```
- 全世界有上百种语言，日本把日文编到Shift_JIS里，韩国把韩文编到Euc-kr里，
各国有各国的标准，就会不可避免地出现冲突，结果就是，在多语言混合的文本中，显示出来会有乱码。
因此，Unicode应运而生。Unicode把所有语言都统一到一套编码里，这样就不会再有乱码问题了。 
本着节约的精神，为了传输时候节省空间，就出现了UTF-8编码。  
- 列表list  
```python
classmates = ['Michael', 'Bob', 'Tracy']
# 直接获取最后一个元素
classmates[-1]
# 获得list的元素个数
len(classmates)
# 追加元素到末尾
classmates.append('Adam')
# 插入元素到指定索引位置
classmates.insert(1, 'Jack')
# 删除末尾的元素
classmates.pop()
# 删除指定索引位置的元素
classmates.pop(i)
```
- 元组tuple，但是tuple一旦初始化就不能修改，只有一个元素的tuple必须加一个逗号如t=(1,)  
- break用于提前退出循环，continue用于结束本次循环开始下次循环。





