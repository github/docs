---
title: 删除代码空间
intro: 您可以删除不再需要的代码空间。
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/deleting-a-codespace
  - /github/developing-online-with-codespaces/deleting-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Delete a codespace
---



{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

**注意：**只有创建代码空间的人才能将其删除。 目前，组织所有者无法删除其组织内创建的代码空间。

{% endnote %}


{% webui %}

1. 导航到 [github.com/codespaces](https://github.com/codespaces) 上的“您的代码空间”页面。

2. 在要删除的代码空间的右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击 **{% octicon "trash" aria-label="The trash icon" %} Delete（删除）**

   ![删除按钮](/assets/images/help/codespaces/delete-codespace.png)

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

若要删除代码空间，请使用 `gh codespace delete` 子命令，然后从显示的列表中选择一个代码空间。

```shell
gh codespace delete
```

如果您有未保存的更改，系统将提示您确认删除。 您可以使用 `-f` 标志强制删除，从而避免出现此提示。

有关此命令的详细信息，请参阅 [ {% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_codespace_delete)。

{% endcli %}

## 延伸阅读
- [代码空间生命周期](/codespaces/developing-in-codespaces/codespaces-lifecycle)
