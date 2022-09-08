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
ms.openlocfilehash: b55d350e439953defac182eae23423b839ff7cf7
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: '145101245'
---
{% data reusables.codespaces.concurrent-codespace-limit %}

{% note %}

注意：只有创建 codespace 的人才能删除它。 目前，组织所有者无法删除其组织内创建的代码空间。

{% endnote %}

## <a name="deleting-a-codespace"></a>删除代码空间

{% webui %}

1. 导航到 [github.com/codespaces](https://github.com/codespaces) 上的“你的代码空间”页面。

2. 在要删除的代码空间的右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击“{% octicon "trash" aria-label="The trash icon" %}删除”。

   ![“删除”按钮](/assets/images/help/codespaces/delete-codespace.png)

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

如果您有未保存的更改，系统将提示您确认删除。 可以使用 `--force` 标志强制删除，从而避免出现此提示。

有关此命令的详细信息，请参阅 [{% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_codespace_delete)。

{% endcli %}

## <a name="bulk-deleting-codespaces"></a>批量删除 codespace

{% webui %}

可以使用 {% data variables.product.prodname_cli %} 通过单个命令删除多个或所有 codespace。 有关详细信息，请单击此页面顶部附近的“{% data variables.product.prodname_cli %}”选项卡。

{% endwebui %}

{% vscode %}

可以使用 {% data variables.product.prodname_cli %} 通过单个命令删除多个或所有 codespace。 有关详细信息，请单击此页面顶部附近的“{% data variables.product.prodname_cli %}”选项卡。

{% endvscode %}


{% cli %}

可以使用单个命令并在 `gh codespace delete` 后使用以下标志之一来删除多个或所有 codespace：

`--all` - 删除所有 codespace。

`--repo REPOSITORY` - 删除此存储库的所有 codespace。 或者与 `--days` 标志一起使用，按 codespace 的存在时长进行筛选。

`--days NUMBER` - 删除早于指定天数的所有 codespace。 可以与 `--repo` 标志一起使用。

默认情况下，系统会提示确认删除包含未保存更改的任何 codespace。 可以使用 `--force` 标志跳过此确认。 

### <a name="example"></a>示例

删除 `octo-org/octo-repo` 存储库 7 天前创建的所有 codespace。

```
gh cs delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## <a name="further-reading"></a>延伸阅读
- [代码空间生命周期](/codespaces/developing-in-codespaces/codespaces-lifecycle)
