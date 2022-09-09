---
title: 代码空间的创建和删除疑难解答
intro: 本文提供了在创建或删除代码空间时可能遇到的常见问题（包括存储和配置问题）的疑难解答步骤。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
ms.openlocfilehash: 0a93ef45affe3f19e3e679d909db432ddd6b3e97
ms.sourcegitcommit: 3a16368cd8beb8b8487eb77d3e597cf49f4c4335
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/14/2022
ms.locfileid: '147110832'
---
## <a name="creating-codespaces"></a>创建代码空间

### <a name="no-access-to-create-a-codespace"></a>没有创建代码空间的权限
{% data variables.product.prodname_codespaces %} 并非对所有存储库都可用。 如果缺少“使用 Codespaces 打开”按钮，{% data variables.product.prodname_github_codespaces %} 则可能不适用于该存储库。 有关详细信息，请参阅“[创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces)”。

如果你认为你的组织[已启用 {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization#about-enabling-codespaces-for-your-organization)，请确保组织所有者或帐单管理员已设置 {% data variables.product.prodname_codespaces %} 的支出限制。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”。

### <a name="codespace-does-not-open-when-created"></a>代码空间在创建时未打开

如果创建了代码空间，但未打开：

1. 如果出现缓存或报告问题，请尝试重新加载页面。
2. 转到 {% data variables.product.prodname_github_codespaces %} 页面： https://github.com/codespaces ，检查新的 codespace 是否在此处列出。 该过程可能已成功创建代码空间，但未向浏览器报告。 如果列出了新的代码空间，则可以直接从该页打开它。
3. 重试为存储库创建代码空间，以排除暂时性通信故障。

如果仍然无法为其中 {% data variables.product.prodname_codespaces %} 可用的存储库创建代码空间，请 {% data reusables.codespaces.contact-support %}

## <a name="deleting-codespaces"></a>删除代码空间

代码空间的所有者对其拥有完全控制权限，只有他们才能删除其代码空间。 您不能删除由其他用户创建的代码间。

可以在浏览器中、在 {% data variables.product.prodname_vscode %} 中或使用 {% data variables.product.prodname_cli %} 删除 codespace。 {% data variables.product.prodname_cli %} 还允许批量删除 codespace。 有关详细信息，请参阅“[删除 codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)”。

## <a name="container-storage"></a>容器存储

创建代码空间时，存储量是有限的，随着时间的推移，可能需要释放空间。 尝试在 {% data variables.product.prodname_codespaces %} 终端中运行以下任一命令以释放存储空间。

- 使用 `sudo apt autoremove` 删除不再使用的包。
- 使用 `sudo apt clean` 清理 apt 缓存.
- 使用 `sudo find / -printf '%s %p\n'| sort -nr | head -10` 查看 codespace 中前 10 个最大的文件。
- 删除不需要的文件，如生成工件和日志。

一些更具破坏性的选项：

- 使用 `docker system prune`（如果要删除所有映像，请追加 `-a`；如果要删除所有卷，请追加 `--volumes`）删除不使用的 Docker 映像、网络和容器。
- 从工作树中删除不跟踪的文件：`git clean -i`。

## <a name="configuration"></a>配置

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```

查看创建日志，根据需要更新开发容器配置，并在 {% data variables.product.prodname_vscode_command_palette %} 中运行 Codespaces: Rebuild Container 来重试。 有关详细信息，请参阅“[Codespace 日志](/codespaces/troubleshooting/codespaces-logs)”和“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)”。
