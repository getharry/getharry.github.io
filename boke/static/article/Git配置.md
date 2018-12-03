# Git配置
### 关于用户名邮箱
```bash
# 取消全局 用户名/邮箱 配置
$ git config --global --unset user.name
$ git config --global --unset user.email
# 进入项目文件夹，单独设置每个repo 用户名/邮箱
$ git config user.email "xxxx@xx.com"
$ git config user.name "xxxx"
# 查看配置
$ git config --list
```