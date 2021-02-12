---
title: 重命名分支
intro: 您可以更改仓库中分支的名称。
permissions: 拥有仓库写入权限的人可重命名仓库中的分支。 具有管理员权限的人可以重命名默认分支。
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

### 关于重命名分支

您可以重命名 {% data variables.product.product_location %} 上仓库中的分支。 有关分支的更多信息，请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches)”。

如果重命名分支，{% data variables.product.prodname_dotcom %} 会自动将 {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location_enterprise %}{% endif %} 上包含旧分支名称的链接重定向到重命名分支上的对应链接。 {% data variables.product.prodname_dotcom %} 还将更新分支保护策略，以及用于开启拉取请求和草稿发行版的基础分支。

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
```
