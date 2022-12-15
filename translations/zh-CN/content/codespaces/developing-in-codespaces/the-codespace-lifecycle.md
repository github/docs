---
title: codespace 生命周期
intro: 可以在 {% data variables.product.prodname_github_codespaces %} 环境中进行开发，并在整个 codespace 生命周期中维护数据。
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Codespaces
- Developer
redirect_from:
- /codespaces/developing-in-codespaces/codespaces-lifecycle
ms.openlocfilehash: 660ced63e34c6de8025c65946542baca43534cfe
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180793"
---
## 关于代码空间的生命周期

代码空间的生命周期从创建代码空间时开始，到删除代码空间时结束。 您可以断开连接并重新连接到活动代码空间，而不会影响其正在运行的进程。 您可以停止并重新启动代码空间，而不会丢失对项目所做的更改。

## 创建 codespace

当您要处理项目时，可以选择创建新代码空间或打开现有代码空间。 你可能希望每次在 {% data variables.product.prodname_github_codespaces %} 中开发时从存储库的分支创建新的 codespace，或者为功能保留长时间运行的 codespace。 {% data reusables.codespaces.starting-new-project-template %} 有关详细信息，请参阅“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)”和“[从模板创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)”。

{% data reusables.codespaces.max-number-codespaces %} 同样，如果达到最大活动 codespace 数并尝试启动另一个活动 codespace，系统将提示你停止其中一个活动 codespace。

如果选择在每次处理项目时都创建新的代码空间，则应定期推送更改，以便任何新提交都位于 {% data variables.product.prodname_dotcom %} 上。 如果选择对项目使用长时间运行的代码空间，则每次开始在代码空间中工作时，都应从存储库的默认分支中提取代码空间，以便您的环境具有最新的提交。 此工作流程与在本地计算机上处理项目时非常相似。 

{% data reusables.codespaces.prebuilds-crossreference %}

## 在代码空间中保存更改

当您通过 Web 连接到代码空间时，将自动为 Web 编辑器启用自动保存，并配置为在延迟后保存更改。 当您通过桌面上运行的 {% data variables.product.prodname_vscode %} 连接到代码空间时，必须启用自动保存。 有关详细信息，请参阅 {% data variables.product.prodname_vscode %} 文档中的[保存/自动保存](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save)。

你的工作将保存在云中的虚拟机上。 可以关闭和停止 codespace，稍后返回到保存的工作。 如果您有未保存的更改，编辑器将在退出之前提示您保存这些更改。 但是，如果 codespace 被删除，则你的工作也会被删除。 若要持久保存工作，需要提交更改并将其推送到远程存储库，或者将工作发布到新的远程存储库（如果从模板创建 codespace）。 有关详细信息，请参阅[在 codespace 中使用源代码管理](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)。

## {% data variables.product.prodname_github_codespaces %} 超时

如果使代码空间在没有交互的情况下保持运行状态，或者退出代码空间而不显式停止它，则代码空间将在一段时间不活动后超时并停止运行。 默认情况下，代码空间将在处于非活动状态 30 分钟后超时，但您可以自定义所创建的新代码空间的超时期限的持续时间。 有关为 codespace 设置默认超时期限的详细信息，请参阅“[为 {% data variables.product.prodname_github_codespaces %} 设置超时期限](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)”。 有关停止 codespace 的详细信息，请参阅“[停止 codespace](#stopping-a-codespace)”。

当代码空间超时时，将保留上次保存更改时的数据。 有关详细信息，请参阅“[在 codespace 中保存更改](#saving-changes-in-a-codespace)”。

## 重建代码空间

可以重新生成 codespace 来实施对开发容器配置的更改。 对于大多数使用，可以创建新的代码空间作为重新构建代码空间的替代方法。 默认情况下，重新生成 codespace 时，{% data variables.product.prodname_github_codespaces %} 将重复使用缓存中的映像，以加快重新生成过程。 或者，可以执行完全重新生成，以清除缓存并使用新映像重新生成容器。

有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)”和“[完全重新生成容器](/codespaces/codespaces-reference/performing-a-full-rebuild-of-a-container)”。

## 停止代码空间

{% data reusables.codespaces.stopping-a-codespace %} 有关详细信息，请参阅“[停止和启动 codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)”。

## 删除代码空间

您可以为特定任务创建代码空间，然后在将更改推送到远程分支后安全地删除该代码空间。

如果您尝试删除包含未填充 git 提交的代码空间，编辑器将通知您有尚未推送到远程分支的更改。 您可以推送任何所需的更改，然后删除代码空间，或继续删除代码空间和任何未提交的更改。 还可以将代码导出到新分支，而无需创建新的代码空间。 有关详细信息，请参阅“[将更改导出到分支](/codespaces/troubleshooting/exporting-changes-to-a-branch)”。

将自动删除已停止并在指定时间段内保持非活动状态的 codespace。 默认情况下，非活动 codespace 在 30 天后删除，但你可以自定义 codespace 保持期。 有关详细信息，请参阅“[配置 codespace 的自动删除](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)”。

如果创建一个 codespace，无论是处于活动状态还是已停止，它将持续产生存储费用，直到被删除。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage)”。 删除 codespace 不会减少 {% data variables.product.prodname_github_codespaces %} 的当前计费金额，该金额在每个月度计费周期内累积。 有关详细信息，请参阅“[查看 {% data variables.product.prodname_github_codespaces %} 使用情况](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”。

有关删除 codespace 的详细信息，请参阅“[删除 codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)”。

## 使用 {% data variables.product.prodname_github_codespaces %} 时丢失连接

{% data variables.product.prodname_github_codespaces %} 是一个基于云的开发环境，需要连接 Internet。 如果您在代码空间中工作时失去互联网连接，您将无法访问代码空间。 但是，任何未提交的更改将保存。 当您再次接入互联网时，可以按离开时完全相同的状态连接到代码空间。 如果您的互联网连接不稳定，则应经常提交并推送更改。

如果知道自己会经常脱机工作，则可以使用[扩展名为“Dev Containers”](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)的 `devcontainer.json` 文件，以便 {% data variables.product.prodname_vscode_shortname %} 生成并附加到存储库的本地开发容器。 有关详细信息，请参阅 {% data variables.product.prodname_vscode %} 文档中的[在容器内开发](https://code.visualstudio.com/docs/remote/containers)。
