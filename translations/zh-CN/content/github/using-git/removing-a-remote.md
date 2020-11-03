---
title: 删除远程
intro: 使用 `git remote rm` 命令可从仓库中删除远程 URL。
redirect_from:
  - /articles/removing-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

`git remote rm` 命令使用一个参数：

* 远程名称，例如 `destination`

### 示例

以下示例假设您[使用 HTTPS 克隆](/articles/which-remote-url-should-i-use/#cloning-with-https-urls)，即推荐使用的方法。

```shell
$ git remote -v
# 查看当前远程
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (push)
> destination  https://{% data variables.command_line.codeblock %}/<em>FORKER/REPOSITORY</em>.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/<em>FORKER/REPOSITORY</em>.git (push)

$ git remote rm destination
# 删除远程
$ git remote -v
# 验证其已删除
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (push)
```

{% warning %}

**注**：`git remote rm` 不会从服务器中删除远程仓库。  它只是从本地仓库中删除远程及其引用。

{% endwarning %}

### 疑难解答

当您尝试删除远程时可能会遇到以下错误。

#### 无法删除配置部分 'remote.[name]'

此错误表示您尝试删除的远程不存在：

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

检查您是否正确键入了远程仓库的名称。

### 延伸阅读

- [_Pro Git_ 手册中的“处理远程仓库”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
