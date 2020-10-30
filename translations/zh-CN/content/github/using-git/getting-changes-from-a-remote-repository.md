---
title: 从远程仓库获取更改
intro: 您可以使用常用 Git 命令访问远程仓库。
redirect_from:
  - /articles/fetching-a-remote/
  - /articles/getting-changes-from-a-remote-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

与[远程仓库](/articles/about-remote-repositories)交互时，这些命令非常有用。 `clone` 和 `fetch` 用于从仓库的远程 URL 将远程代码下载到您的本地计算机，`merge` 用于将其他人的工作与您的工作合并在一起，而 `pull` 是 `fetch` 和 `merge` 的组合。

### 克隆仓库

要获取其他用户仓库的完整副本，请使用 `git clone`，如下所示：

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
# 将仓库克隆到您的计算机
```

克隆仓库时，有[几个不同的 URL](/articles/which-remote-url-should-i-use)可供选择。 登录到 {% data variables.product.prodname_dotcom %} 后，可在仓库详细信息下面找到这些 URL：

![远程 URL 列表](/assets/images/help/repository/remotes-url.png)

运行 `git clone` 时，将发生以下操作：
- 创建名为 `repo` 的文件夹
- 将它初始化为 Git 仓库
- 创建名为 `origin` 的远程仓库，指向用于克隆的 URL
- 将所有的仓库文件和提交下载到那里
- The default branch is checked out

对于远程仓库中的每个 `foo` 分支，在本地仓库中创建相应的远程跟踪分支 `refs/remotes/origin/foo`。 通常可以将此类远程跟踪分支名称缩写为 `origin/foo`。

### 从远程仓库获取更改

使用 `git fetch` 可检索其他人完成的新工作。 从仓库获取将会获取所有新的远程跟踪分支和标记，但*不会*将这些更改合并到您自己的分支中。

如果已经有一个本地仓库[包含为所需项目设置的远程 URL](/articles/adding-a-remote)，您可以在终端使用 `git fetch *remotename*` 获取所有新信息：

```shell
$ git fetch <em>remotename</em>
# 获取远程仓库的更新
```

否则，您始终可以[添加新的远程仓库](/articles/adding-a-remote)然后获取它。

### 合并更改到本地分支

合并可将您的本地更改与其他人所做的更改组合起来。

通常将远程跟踪分支（即从远程仓库获取的分支）与您的本地分支进行合并：

```shell
$ git merge <em>remotename</em>/<em>branchname</em>
# 将在线更新与您的本地工作进行合并
```

### 从远程仓库拉取更改

`git pull` 是在同一个命令中完成 `git fetch` 和 `git merge` 的便捷方式。

```shell
$ git pull <em>remotename</em> <em>branchname</em>
# 获取在线更新并将其与您的本地工作进行合并
```

由于 `pull` 会对检索到的更改执行合并，因此应确保在运行 `pull` 命令之前提交您的本地工作。 如果您遇到无法解决的[合并冲突](/articles/resolving-a-merge-conflict-using-the-command-line)，或者您决定退出合并，可使用 `git merge --abort` 将分支恢复到您拉取之前的状态。

### 延伸阅读

- _Pro Git_ 手册中的[“使用远程仓库”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes){% if currentVersion == "free-pro-team@latest" %}
- “[连接问题故障排除](/articles/troubleshooting-connectivity-problems)”{% endif %}
