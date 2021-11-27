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
  - /github/getting-started-with-github/managing-remote-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 添加远程仓库

要新增远程，请在终端上存储仓库的目录中使用 `git remote add` 命令。

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

有关使用哪个 URL 的更多信息，请参阅“[关于远程仓库](/github/getting-started-with-github/about-remote-repositories)”。

#### 故障排除：远程原点已存在

此错误消息表示您尝试添加的远程与本地仓库中的远程名称相同。

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

要修复此问题，您可以:
* 对新远程使用不同的名称
* 重命名现有远程仓库
* 删除现有远程仓库

### 更改远程仓库的 URL

`git remote set-url` 命令可更改现有远程仓库的 URL。

{% tip %}

**提示：** 有关 HTTPS 与 SSH URL 之间的差异，请参阅“[关于远程仓库](/github/getting-started-with-github/about-remote-repositories)”

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

#### 故障排除：没有该远程 '[name]'

此错误表示您尝试更改的远程不存在：

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

检查您是否正确键入了远程仓库的名称。

### 重命名远程仓库

使用 `git remote rename` 命令可重命名现有的远程。

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

#### 故障排除：无法将配置部分 'remote.[old name]' 重命名为 'remote.[new name]'

此错误表示您输入旧远程名称尝试的远程不存在。

您可以使用 `git remote -v` 命令检查当前存在哪些远程：

```shell
$ git remote -v
# 查看现有远程
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

#### 故障排除：远程 [new name] 已存在

此错误表示您要使用的远程名称已经存在。 要解决此问题，使用不同的远程名称，或重命名原始远程。

### 删除远程仓库

使用 `git remote rm` 命令可从仓库中删除远程 URL。

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

#### 故障排除：无法删除配置部分 'remote.[name]'

此错误表示您尝试删除的远程不存在：

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

检查您是否正确键入了远程仓库的名称。

### 延伸阅读

- _Pro Git_ 书籍中的“[使用远程”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
