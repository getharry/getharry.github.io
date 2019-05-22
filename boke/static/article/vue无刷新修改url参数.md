# vue无刷新修改url参数
这有些情况下，比如列表查询，选择条件进行搜索的时候，我们需要将搜索条件挂载到url上。
这是因为，如果不做缓存的话，用户点击详情后再回退的时候需要返回到刚刚查询过的页面，
利用window.back和挂载url，可以记忆之前的查询条件。  
```js
// 需要导入一个merge
import merge from 'webpack-merge'；
 
// 修改原有参数        
this.$router.push({
    query:merge(this.$route.query,{'maxPrice':'630'})
})
 
// 新增一个参数：
this.$router.push({
    query:merge(this.$route.query,{'addParams':'我是新增的一个参数，哈哈哈哈'})
})
 
// 替换所有参数：
 this.$router.push({
    query:merge({},{'maxPrice':'630'})
 })

```