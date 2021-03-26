---
title: 管理远程仓库
intro: '了解如何使用计算机上的本地仓库以及 {% data variables.product.product_name %} 上托管的远程仓库。'
redirect_from:
  - /categories/18/articles/
  - /remotes/
  - /categories/managing-remotes/
  - /articles/managing-remote-repositories
  - /articles/adding-a-remote
  - /github/using-git/adding-a-remote
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
  - /github/using-git/changing-a-remotes-url
  - /articles/renaming-a-remote
  - /github/using-git/renaming-a-remote
  - /articles/removing-a-remote
  - /github/using-git/removing-a-remote
  - /github/using-git/managing-remote-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Adding a remote repository

To add a new remote, use the `git remote add` command on the terminal, in the directory your repository is stored at.

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

For more information on which URL to use, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

#### Troubleshooting: Remote origin already exists

This error means you've tried to add a remote with a name that already exists in your local repository.

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

要修复此问题，您可以:
* 对新远程使用不同的名称
* Rename the existing remote repository
* Delete the existing remote repository

### Changing a remote repository's URL

The `git remote set-url` command changes an existing remote repository URL.

{% tip %}

**Tip:** For information on the difference between HTTPS and SSH URLs, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

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

#### 将远程 URL 从 SSH 切换到 HTTPS

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

您可以[使用凭据小助手](/github/getting-started-with-github/caching-your-github-credentials-in-git)让 Git 在每次与 GitHub 会话时记住您的 GitHub 用户名和个人访问令牌。

#### 将远程 URL 从 HTTPS 切换到 SSH

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

#### Troubleshooting: No such remote '[name]'

此错误表示您尝试更改的远程不存在：

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

检查您是否正确键入了远程仓库的名称。

### Renaming a remote repository

Use the `git remote rename` command to rename an existing remote.

`git remote rename` 命令使用两个参数：
* 现有的远程名称，例如 `origin`
* 远程的新名称，例如 `destination`

### 示例

以下示例假设您[使用 HTTPS 克隆](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)，即推荐使用的方法。

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

#### Troubleshooting: Could not rename config section 'remote.[old name]' to 'remote.[new name]'

此错误表示您输入旧远程名称尝试的远程不存在。

您可以使用 `git remote -v` 命令检查当前存在哪些远程：

```shell
$ git remote -v
# 查看现有远程
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

#### Troubleshooting: Remote [new name] already exists

此错误表示您要使用的远程名称已经存在。 To solve this, either use a different remote name, or rename the original remote.

### Removing a remote repository

Use the `git remote rm` command to remove a remote URL from your repository.

`git remote rm` 命令使用一个参数：
* 远程名称，例如 `destination`

### 示例

以下示例假设您[使用 HTTPS 克隆](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)，即推荐使用的方法。

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

#### Troubleshooting: Could not remove config section 'remote.[name]'

此错误表示您尝试删除的远程不存在：

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

检查您是否正确键入了远程仓库的名称。

### 延伸阅读

- _Pro Git_ 书籍中的“[使用远程”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
