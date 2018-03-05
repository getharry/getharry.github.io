### 配置vscode的eslint的自动保存修复功能
最近重新安装了vscode，发现eslint无法自动fix  
查了一番，终于搞定  
在首选项里面增加如下配置即可

```js
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
          "language": "html",
          "autoFix": true
        },
        {
          "language": "vue",
          "autoFix": true
        }
      ],
    "eslint.autoFixOnSave": true
```
开始我以为是编辑器找不到eslint的配置文件，增加了一条"eslint.options": { "configFile": "./package.json" },后来发现删除这句同样实现功能。