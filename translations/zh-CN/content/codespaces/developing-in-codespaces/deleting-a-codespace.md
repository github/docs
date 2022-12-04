---
title: 删除代码空间
intro: 您可以删除不再需要的代码空间。
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
ms.openlocfilehash: 24b53cc0cead2b6b15894ada4c799abc8e1c6e7a
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188254'
---
可以通过多种方式删除 codespace：在终端中使用 {% data variables.product.prodname_cli %}、在 {% data variables.product.prodname_vscode %} 中或在 Web 浏览器中。 使用本文中的选项卡可显示删除 codespace 的每种方法的说明。

{% note %}

注意：无法从 JetBrains 网关或 JetBrains 客户端应用程序或 JupyterLab 中删除 codespace。

{% endnote %}

存储 codespace 会产生费用。 因此，应删除任何不再需要的 codespace。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”。

{% data reusables.codespaces.max-number-codespaces %}

## 删除代码空间

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. 在要删除的代码空间的右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击“{% octicon "trash" aria-label="The trash icon" %}删除”。

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

## 批量删除 codespace

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

### 示例

删除 `octo-org/octo-repo` 存储库 7 天前创建的所有 codespace。

```
gh codespace delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## 删除组织中的 codespace

作为组织所有者，可以使用 {% data variables.product.prodname_cli %} 删除组织中的任何 codespace。

{% webui %}

有关详细信息，请单击此页面顶部附近的“{% data variables.product.prodname_cli %}”选项卡。

{% endwebui %}

{% vscode %}

有关详细信息，请单击此页面顶部附近的“{% data variables.product.prodname_cli %}”选项卡。

{% endvscode %}

{% cli %}

1. 输入以下命令之一以显示 codespace 列表。
   * `gh codespace delete --org ORGANIZATION` - 列出指定组织中的当前 codespace。 
   * `gh codespace delete --org ORGANIZATION --user USER` - 仅列出指定用户创建的 codespace。
   你必须是指定组织的所有者。
1. 在 codespace 列表中，导航到要删除的 codespace。
1. 要删除选定的 codespace，请按 <kbd>Enter</kbd>。

   如果 codespace 包含未保存的更改，系统会提示确认删除。

{% endcli %}

还可以使用 REST API 删除组织的 codespace。 有关详细信息，请参阅“[Codespaces 组织](/rest/codespaces/organizations#delete-a-codespace-from-the-organization)”。

## 延伸阅读
- [codespace 生命周期](/codespaces/getting-started/the-codespace-lifecycle)
- [配置 codespace 的自动删除](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)
