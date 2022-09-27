---
ms.openlocfilehash: a314a101135f5b47bfd573b1be6d7867db4ac26d
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145129709"
---
#### 存储库分支中的工作流

默认情况下，工作流不在存储库分支中运行。 必须在存储库分支的“操作”选项卡中启用 GitHub Actions。

{% data reusables.actions.forked-secrets %} `GITHUB_TOKEN` 在存储库分支中具有只读权限。 有关详细信息，请参阅“[使用 GITHUB_TOKEN 进行身份验证](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”。

#### 复刻的仓库的拉取请求事件

对于从存储库分支到基础存储库的拉取请求，{% data variables.product.product_name %} 会将 `pull_request`、`issue_comment`、`pull_request_review_comment`、`pull_request_review` 和 `pull_request_target` 事件发送到基础存储库。 存储库分支上不会发生拉取请求事件。

{% ifversion fpt or ghec %} 当参与者第一次向公共存储库提交拉取请求时，拥有写入权限的维护者可能需要审核拉取请求上运行的工作流。 有关详细信息，请参阅“[审核公共分支中的工作流运行](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)”。
{% endif %}

{% note %}

注意：如果从存储库分支打开拉取请求，工作流不会在专用基础存储库上运行。

{% endnote %}

{% note %}

注意：{% data variables.product.prodname_dependabot %} 拉取请求触发的工作流被视为来自存储库分支，也受到这些限制。

{% endnote %}
