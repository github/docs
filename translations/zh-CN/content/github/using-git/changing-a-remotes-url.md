---
title: 更改远程仓库的 URL
redirect_from:
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
intro: '`git remote set-url` 命令可更改现有远程仓库的 URL。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**提示：** 有关 HTTPS 与 SSH URL 之间的差异，请参阅“[我应使用哪种远程 URL？](/articles/which-remote-url-should-i-use)”

{% endtip %}

`git remote set-url` 命令使用两个参数：

* 现有远程仓库的名称。 例如，`源仓库`或`上游仓库`是两种常见选择。
* 远程仓库的新 URL。 例如：
  * 如果您要更新为使用 HTTPS，您的 URL 可能如下所示：
```shell
https://{% data variables.command_line.backticks %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
```
  * 如果您要更新为使用 SSH，您的 URL 可能如下所示：
```shell
git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
```

### 将远程 URL 从 SSH 切换到 HTTPS

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 将当前工作目录更改为您的本地仓库。
3. 列出现有远程仓库以获取要更改的远程仓库的名称。
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. 使用 `git remote set-url` 命令将远程的 URL 从 SSH 更改为 HTTPS。
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. 验证远程 URL 是否已更改。
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```

下次对远程仓库执行 `git fetch`、`git pull` 或 `git push` 操作时，您需要提供 GitHub 用户名和密码。 {% data reusables.user_settings.password-authentication-deprecation %}

You can [use a credential helper](/github/using-git/caching-your-github-credentials-in-git) so Git will remember your GitHub username and personal access token every time it talks to GitHub.

### 将远程 URL 从 HTTPS 切换到 SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 将当前工作目录更改为您的本地仓库。
3. 列出现有远程仓库以获取要更改的远程仓库的名称。
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. 使用 `git remote set-url` 命令将远程的 URL 从 HTTPS 更改为 SSH。
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. 验证远程 URL 是否已更改。
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```

### 疑难解答

尝试更改远程时可能会遇到这些错误。

#### No such remote '[name]'

此错误表示您尝试更改的远程不存在：

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

检查您是否正确键入了远程仓库的名称。

### 延伸阅读

- [_Pro Git_ 手册中的“处理远程仓库”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
