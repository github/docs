---
ms.openlocfilehash: fec57b88af5ef5b7227d88a8c70e5a4b4bb9c769
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163814"
---
能够写入仓库的维护者可按照以下步骤来审查和运行来自贡献者、需要审批的拉取请求上的工作流程。

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
1. 检查拉取请求中的拟议更改，确保您在拉取请求分支上自由运行您的工作流程。 应特别注意 `.github/workflows/` 目录中影响工作流文件的任何拟议更改。
1. 如果能自由在拉取请求分支上运行工作流，请返回到 {% octicon "comment-discussion" aria-label="The discussion icon" %}“转换”选项卡，在“等待审批的工作流”下，单击“批准并运行” 。

   ![批准并运行工作流程](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)