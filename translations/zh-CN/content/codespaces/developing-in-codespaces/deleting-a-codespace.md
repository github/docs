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
shortTitle: 删除代码空间
---



{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

**注意：**只有创建代码空间的人才能将其删除。 目前，组织所有者无法删除其组织内创建的代码空间。

{% endnote %}

## 删除代码空间

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

如果您有未保存的更改，系统将提示您确认删除。 您可以使用 `--force` 标志强制删除，从而避免出现此提示。

有关此命令的详细信息，请参阅 [ {% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_codespace_delete)。

{% endcli %}

## 批量删除代码空间

{% webui %}

可以使用 {% data variables.product.prodname_cli %} 通过单个命令删除多个或全部代码空间。 有关详细信息，请单击此页面顶部附近的 **{% data variables.product.prodname_cli %}** 选项卡。

{% endwebui %}

{% vscode %}

可以使用 {% data variables.product.prodname_cli %} 通过单个命令删除多个或全部代码空间。 有关详细信息，请单击此页面顶部附近的 **{% data variables.product.prodname_cli %}** 选项卡。

{% endvscode %}


{% cli %}

您可以使用 `gh codespace delete` 后接以下标志之一，以单个命令删除多个或全部代码空间：

`--all` - 删除所有代码空间。

`--repo REPOSITORY` - 删除此存储库的所有代码空间。 或者与 `--days` 标志一起使用，以按代码空间存在的时长进行筛选。

`--all` - 删除早于指定天数的所有代码空间。 可以与 `--repo` 标志一起使用。

默认情况下，系统会提示您确认删除包含未保存更改的任何代码空间。 您可以使用 `--force` 标志跳过此确认。

### 示例

删除您 7 天以前创建的 `octo-org/octo-repo` 存储库的所有代码空间。

```
gh cs delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## 延伸阅读
- [代码空间生命周期](/codespaces/developing-in-codespaces/codespaces-lifecycle)
