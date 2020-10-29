---
title: 重命名远程
intro: 使用 `git remote rename` 命令可重命名现有的远程。
redirect_from:
  - /articles/renaming-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

`git remote rename` 命令使用两个参数：

* 现有的远程名称，例如 `origin`
* 远程的新名称，例如 `destination`

### 示例

以下示例假设您[使用 HTTPS 克隆](/articles/which-remote-url-should-i-use/#cloning-with-https-urls)，即推荐使用的方法。

```shell
$ git remote -v
# 查看现有远程
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)

$ git remote rename origin destination
# 将远程名称从 'origin' 更改为 'destination'

$ git remote -v
# 验证远程的新名称
> destination  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

### 疑难解答

当您尝试重命名远程时可能会遇到以下错误。

#### 无法将配置部分 'remote.[old name]' 重命名为 'remote.[new name]'

此错误表示您输入旧远程名称尝试的远程不存在。

您可以使用 `git remote -v` 命令检查当前存在哪些远程：

```shell
$ git remote -v
# 查看现有远程
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

#### 远程 [new name] 已存在。

此错误表示您要使用的远程名称已经存在。 要解决此问题，使用不同的远程名称，或重命名原始远程。

### 延伸阅读

- [_Pro Git_ 手册中的“处理远程仓库”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
