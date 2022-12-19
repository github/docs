---
title: 管理远程仓库
intro: '了解如何使用计算机上的本地仓库以及 {% data variables.product.product_name %} 上托管的远程仓库。'
redirect_from:
  - /categories/18/articles
  - /remotes
  - /categories/managing-remotes
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
  - /github/getting-started-with-github/getting-started-with-git/managing-remote-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manage remote repositories
ms.openlocfilehash: d89a9c008128154e7de045be0de54db04168cb33
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185049'
---
## 添加远程仓库

要新增远程，请在终端上存储存储库的目录中使用 `git remote add` 命令。

`git remote add` 命令采用两个参数：
* 远程名称（例如 `origin`）
* 远程 URL（例如 `https://{% data variables.command_line.backticks %}/user/repo.git`）

例如：

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/USER/REPO.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (push)
```

有关要使用的 URL 的详细信息，请参阅“[关于远程存储库](/github/getting-started-with-github/about-remote-repositories)”。

### 故障排除：远程原点已存在

此错误消息表示您尝试添加的远程与本地仓库中的远程名称相同。

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

若要解决此问题，可以：
* 对新远程使用不同的名称。
* 在添加新的远程之前，重命名现有的远程仓库。 有关详细信息，请参阅下面的“[重命名远程存储库](#renaming-a-remote-repository)”。
* 在添加新的远程之前，删除现有的远程仓库。 有关详细信息，请参阅下面的“[删除远程存储库](#removing-a-remote-repository)”。

## 更改远程仓库的 URL

`git remote set-url` 命令更改现有的远程存储库 URL。

{% tip %}

提示：有关 HTTPS 和 SSH URL 之间区别的信息，请参阅“[关于远程存储库](/github/getting-started-with-github/about-remote-repositories)”。

{% endtip %}

`git remote set-url` 命令采用两个参数：

* 现有远程仓库的名称。 例如，`origin` 或 `upstream` 是两个常见的选项。
* 远程仓库的新 URL。 例如：
  * 如果您要更新为使用 HTTPS，您的 URL 可能如下所示：
```shell
https://{% data variables.command_line.backticks %}/USERNAME/REPOSITORY.git
```
  * 如果您要更新为使用 SSH，您的 URL 可能如下所示：
```shell
git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
```

### 将远程 URL 从 SSH 切换到 HTTPS

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 将当前工作目录更改为您的本地仓库。
3. 列出现有远程仓库以获取要更改的远程仓库的名称。
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (push)
  ```
4. 使用 `git remote set-url` 命令将远程 URL 从 SSH 更改为 HTTPS。
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
  ```
5. 验证远程 URL 是否已更改。
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```

下次将 `git fetch`、`git pull` 或 `git push` 执行到远程存储库时，系统将要求你提供 GitHub 用户名和密码。 {% data reusables.user-settings.password-authentication-deprecation %}

可以[使用凭据帮助程序](/github/getting-started-with-github/caching-your-github-credentials-in-git)，以便 Git 每次与 GitHub 通信时都会记住你的 GitHub 用户名和 {% data variables.product.pat_generic %}。

### 将远程 URL 从 HTTPS 切换到 SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 将当前工作目录更改为您的本地仓库。
3. 列出现有远程仓库以获取要更改的远程仓库的名称。
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```
4. 使用 `git remote set-url` 命令将远程 URL 从 HTTPS 更改为 SSH。
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
  ```
5. 验证远程 URL 是否已更改。
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (push)
  ```

### 故障排除：没有该远程 '[name]'

此错误表示您尝试更改的远程不存在：

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

检查您是否正确键入了远程仓库的名称。

## 重命名远程仓库

使用 `git remote rename` 命令重命名现有远程。

`git remote rename` 命令采用两个参数：
* 现有远程名称（例如 `origin`）
* 远程的新名称（例如 `destination`）

## 示例

这些示例假定[使用 HTTPS 进行克隆](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)（建议这样做）。

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)

$ git remote rename origin destination
# Change remote name from 'origin' to 'destination'

$ git remote -v
# Verify remote's new name
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### 故障排除：无法将配置部分 'remote.[old name]' 重命名为 'remote.[new name]'

此错误表示您键入的旧远程名称不存在。

可以使用 `git remote -v` 命令检查当前存在的远程：

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### 故障排除：远程 [new name] 已存在

此错误表示您要使用的远程名称已经存在。 要解决此问题，使用不同的远程名称，或重命名原始远程。

## 删除远程仓库 

使用 `git remote rm` 命令从存储库中删除远程 URL。

`git remote rm` 命令采用一个参数：
* 远程名称（例如 `destination`）

从存储库中删除远程 URL 只会取消本地和远程存储库的链接。 它不会删除远程存储库。

## 示例

这些示例假定[使用 HTTPS 进行克隆](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)（建议这样做）。

```shell
$ git remote -v
# View current remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (push)

$ git remote rm destination
# Remove remote
$ git remote -v
# Verify it's gone
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

{% warning %}

注意：`git remote rm` 不会从服务器中删除远程存储库。 它只是从本地存储库中删除远程及其引用。

{% endwarning %}

### 故障排除：无法删除配置部分 'remote.[name]'

此错误表示您尝试删除的远程不存在：

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

检查您是否正确键入了远程仓库的名称。

## 延伸阅读

- [Pro Git 书籍中的“使用远程”](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
