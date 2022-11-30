---
title: 忽略文件
redirect_from:
  - /git-ignore/
  - /ignore-files/
  - /articles/ignoring-files
  - /github/using-git/ignoring-files
  - /github/getting-started-with-github/ignoring-files
intro: '您可以配置 Git 忽略您不想检入 {% data variables.product.product_name %} 的文件。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
### 为单个仓库配置忽略的文件

您可以在仓库的根目录中创建 *.gitignore* 文件，指示 Git 在您进行提交时要忽略哪些文件和目录。 要与克隆仓库的其他用户共享忽略规则，请提交 *.gitignore* 文件到您的仓库。

GitHub 在 `github/gitignore` 公共仓库中维护建议用于许多常用操作系统、环境及语言的 *.gitignore* 文件正式列表。 您也可以使用 gitignore.io 创建 *.gitignore* 文件，以用于操作系统、编程语言或 IDE。 更多信息请参阅“[github/gitignore](https://github.com/github/gitignore)”和“[gitignore.io](https://www.gitignore.io/)”网站。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 导航到 Git 仓库的位置。
3. 为仓库创建 *.gitignore* 文件。
   ```shell
   $ touch .gitignore
  ```

例如 *.gitignore* 文件，请参阅 Octocat 仓库中的“[一些常见的 .gitignore 配置](https://gist.github.com/octocat/9257657)”。

如果想要忽略已检入的文件，则必须在添加忽略该文件的规则之前取消跟踪它。 从终端取消跟踪文件。

```shell
$ git rm --cached <em>FILENAME</em>
```

### 为计算机上的所有存储库配置忽略的文件

您也可以创建全局 *.gitignore* 文件，以定义忽略计算机上每个 Git 仓库中文件的规则列表。 例如，在 *~/.gitignore_global* 中创建文件并加入一些规则。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 配置 Git 对所有 Git 仓库使用排除文件 *~/.gitignore_global*。
  ```shell
  $ git config --global core.excludesfile ~/.gitignore_global
  ```

### 排除本地文件而不创建 *.gitignore* 文件

如果不想创建 *.gitignore* 文件与其他人共享，可以创建不随仓库提交的规则。 您可以对不希望其他用户生成的本地生成文件使用此方法，例如编辑者创建的文件。

使用您常用的文本编辑器打开 Git 仓库根目录中的文件 *.git/info/exclude*。 您在此处添加的任何规则都不会检入，并且只会对您的本地仓库忽略文件。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 导航到 Git 仓库的位置。
3. 使用您常用的文本编辑器打开文件 *.git/info/exclude*。

### 延伸阅读

* Pro Git 书籍中的[忽略文件](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring)
* Git 手册页面中的 [.gitignore](https://git-scm.com/docs/gitignore)
* [github/gitignore 仓库中有用的 *.gitignore* 模板集合](https://github.com/github/gitignore)
* [gitignore.io](https://www.gitignore.io/) 网站
