---
title: 添加远程
intro: 要新增远程，请在终端上存储仓库的目录中使用 `git remote add` 命令。
redirect_from:
  - /articles/adding-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

`git remote add` 命令使用两个参数：

* 远程命令，如 `origin`
* 远程 URL，如 `https://{% data variables.command_line.backticks %}/user/repo.git`

例如：

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (push)
```

不确定要使用哪个 URL？  查阅“[我应使用哪个远程 URL？](/articles/which-remote-url-should-i-use)”

### 疑难解答

尝试添加远程时可能会遇到这些错误。

#### 远程 `name` 已存在

此错误消息表示您尝试添加的远程与本地仓库中的远程名称相同：

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: remote origin already exists.
```

要修复此问题，您可以

* 对新远程使用不同的名称
* [重命名现有远程](/articles/renaming-a-remote)
* [删除现有远程](/articles/removing-a-remote)

### 延伸阅读

- _Pro Git_ 书籍中的“[使用远程”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
