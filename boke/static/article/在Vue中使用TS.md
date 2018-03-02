# 在Vue中使用TS

### 如何在Vue中使用ts
1、首先安装ts
npm install --save-dev typescript npm install --save-dev ts-loader

2、在根目录创建tsconfig.json文件
```javascript
{
    "compilerOptions": {
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true,
      "lib": ["dom","es2016"],
      "target": "es5"
    },
    "include": ["./src/**/*"]  
}
```

3、在配置中添加 ts-loader
```javascript
{
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,      
    options: {
      appendTsSuffixTo: [/\.vue$/],
    }
}
```

4、在webpack.base.conf.js文件下extensions中加入.ts

现在就可以在我们原本的项目中使用ts文件了。