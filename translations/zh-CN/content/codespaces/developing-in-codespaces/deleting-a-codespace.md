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
---

 

{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

**注意：**只有创建代码空间的人才能将其删除。 目前，组织所有者无法删除其组织内创建的代码空间。

{% endnote %}

{% include tool-switcher %}

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

To delete a codespace use the `gh codespace delete` subcommand and then choose a codespace from the list that's displayed.

```shell
gh codespace delete
```

If you have unsaved changes, you'll be prompted to confirm deletion. You can use the `-f` flag to force deletion, avoiding this prompt.

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

## 延伸阅读
- [Codespaces lifecycle](/codespaces/developing-in-codespaces/codespaces-lifecycle)
