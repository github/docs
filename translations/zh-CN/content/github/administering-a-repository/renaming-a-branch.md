---
title: 重命名分支
intro: 您可以更改仓库中分支的名称。
permissions: People with write permissions to a repository can rename a branch in the repository. People with admin permissions can rename the default branch.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.2'
topics:
  - Repositories
---

### 关于重命名分支

您可以重命名 {% data variables.product.product_location %} 上仓库中的分支。 有关分支的更多信息，请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches)”。

当您在 {% data variables.product.product_location %}上重命名分支时，任何包含旧分支名称的网址都会自动重定向到重命名分支的等效 URL。 还更新了分支保护政策以及打开的拉取请求（包括复刻的拉取请求）的基础分支和草稿版本。 重命名完成后， {% data variables.product.prodname_dotcom %} 在仓库主页上提供说明，指示贡献者更新他们的本地 Git 环境。

虽然文件 URL 会自动重定向，但原始文件 URL 未被重定向。 此外，如果用户对前一个分支名称执行 `git pull`，则 {% data variables.product.prodname_dotcom %} 不会执行任何重定向。

{% data variables.product.prodname_actions %} workflows do not follow renames, so if your repository publishes an action, anyone using that action with `@{old-branch-name}` will break. You should consider adding a new branch with the original content plus an additional commit reporting that the banch name is deprecated and suggesting that users migrate to the new branch name.

### 重命名分支

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. 在分支列表中，在要重命名的分支的右侧，单击 {% octicon "pencil" aria-label="The edit icon" %}。 ![要重命名的分支右侧的铅笔图标](/assets/images/help/branch/branch-rename-edit.png)
1. 为分支输入新名称。 ![输入新分支名称的文本字段](/assets/images/help/branch/branch-rename-type.png)
1. 查看有关本地环境的信息，然后单击 **Rename branch（重命名分支）**。 ![本地环境信息和"重命名分支"按钮](/assets/images/help/branch/branch-rename-rename.png)

### 在分支名称更改后更新本地克隆

在您重命名 {% data variables.product.product_name %} 仓库中的分支后，拥有该仓库本地克隆的所有协作者都需要更新克隆。

从计算机上的仓库本地克隆中，运行以下命令以更新默认分支的名称。

```shell
$ git branch -m <em>OLD-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
$ git fetch origin
$ git branch -u origin/<em>NEW-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
$ git remote set-head origin -a
```

（可选）运行下面的命令来删除对旧分支名称的跟踪引用。
```
$ git remote prune origin
```
