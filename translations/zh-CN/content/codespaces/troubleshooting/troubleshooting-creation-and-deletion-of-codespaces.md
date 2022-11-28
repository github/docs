---
title: codespace 的创建和删除故障排除
intro: 本文提供了在创建或删除代码空间时可能遇到的常见问题（包括存储和配置问题）的疑难解答步骤。
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
ms.openlocfilehash: 4a12c848fa7400ec336f5ad086eb4d2858a431f0
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180817'
---
## 创建代码空间

### 没有创建代码空间的权限
{% data variables.product.prodname_github_codespaces %} 并非对所有存储库都可用。 如果未显示用于创建 codespace 的选项，则 {% data variables.product.prodname_github_codespaces %} 可能不适用于该存储库。 有关详细信息，请参阅“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#access-to-codespaces)”。

如果个人帐户中每月剩余包含的 {% data variables.product.prodname_github_codespaces %} 使用量，或者设置了付款方式和支出限额，则将能够为公共存储库创建 codespaces。 但是，如果可以将更改推送到存储库，或者可以为存储库创建分支，则只能为专用存储库创建 codespace。

有关个人帐户包含的使用量和设置支出限制的详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”和“[管理 {% data variables.product.prodname_github_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)”。

### 代码空间在创建时未打开

如果创建了代码空间，但未打开：

1. 如果出现缓存或报告问题，请尝试重新加载页面。
2. 转到 {% data variables.product.prodname_github_codespaces %} 页面： https://github.com/codespaces ，检查新的 codespace 是否在此处列出。 该过程可能已成功创建代码空间，但未向浏览器报告。 如果列出了新的代码空间，则可以直接从该页打开它。
3. 重试为存储库创建代码空间，以排除暂时性通信故障。

如果仍然无法为其中 {% data variables.product.prodname_github_codespaces %} 可用的存储库创建 codespace，请 {% data reusables.codespaces.contact-support %}

### Codespace 创建失败

如果创建 codespace 失败，则可能是由于云中的临时基础结构问题（例如，为 codespace 预配虚拟机时出现问题）。 失败的一个不太常见的原因是生成容器所需的时间超过一小时。 在这种情况下，将取消生成，并且 codespace 创建将失败。

{% note %}

注意：将永不使用未成功创建的 codespace，并应将其删除。 有关详细信息，请参阅“[删除 codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)”。

{% endnote %}

如果创建 codespace 但创建失败：

1. 检查 {% data variables.product.prodname_dotcom %} 的[“状态”页](https://githubstatus.com)是否有任何活动事件。
1. 转到 [{% data variables.product.prodname_github_codespaces %} 页](https://github.com/codespaces)，删除 codespace，然后创建新的 codespace。
1. 如果容器正在生成，请查看正在流式传输的日志，并确保生成未停滞。 将取消花费超过一小时的容器生成，从而导致创建失败。

   发生这种情况的一种常见情况是，如果正在运行的脚本提示用户输入并等待答案。 如果是这种情况，请删除交互式提示，以便生成以非交互方式完成。

   {% note %}

   注意：若要在生成期间查看日志，请执行以下操作：
   * 在浏览器中，单击“查看日志”。 

   ![Codespaces Web UI 的屏幕截图，其中突出显示了“查看日志”链接](/assets/images/help/codespaces/web-ui-view-logs.png)

   * 在 VS Code 桌面应用程序中，单击显示的“设置远程链接”中的“生成 codespace”。 

   ![VS Code 的屏幕截图，其中突出显示了“生成 codespace”链接](/assets/images/help/codespaces/vs-code-building-codespace.png)

    {% endnote %}
2. 如果容器需要很长时间才能生成，请考虑使用预生成来加快 codespace 创建速度。 有关详细信息，请参阅“[配置预生成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)”。

## 删除代码空间

codespace 只能通过以下方式删除：
* 创建 codespace 的人员。
* 组织拥有的 codespace 的组织所有者。
* 保留期结束时自动删除。 

有关详细信息，请参阅“[删除 codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)”和“[配置 codespace 的自动删除](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)”。

## 容器存储

创建代码空间时，存储量是有限的，随着时间的推移，可能需要释放空间。 尝试在 {% data variables.product.prodname_github_codespaces %} 终端中运行以下任一命令以释放存储空间。

- 使用 `sudo apt autoremove` 删除不再使用的包。
- 使用 `sudo apt clean` 清理 apt 缓存.
- 使用 `sudo find / -printf '%s %p\n'| sort -nr | head -10` 查看 codespace 中前 10 个最大的文件。
- 删除不需要的文件，如生成工件和日志。

一些更具破坏性的选项：

- 使用 `docker system prune`（如果要删除所有映像，请追加 `-a`；如果要删除所有卷，请追加 `--volumes`）删除不使用的 Docker 映像、网络和容器。
- 从工作树中删除不跟踪的文件：`git clean -i`。

## 配置

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```
查看创建日志并根据需要更新开发容器配置。 有关详细信息，请参阅“[{% data variables.product.prodname_github_codespaces %} 日志](/codespaces/troubleshooting/github-codespaces-logs)”。

然后，可以尝试重启 codespace，或重新生成容器。 有关重新生成容器的详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)”。
