---
ms.openlocfilehash: 902af6bdbe3c48fe8b5930bdf1041151f343b60b
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/27/2022
ms.locfileid: "148113863"
---
如果你的工作流使用 {% data variables.product.pat_generic %} 向注册表进行身份验证，则强烈建议更新工作流以使用 `GITHUB_TOKEN`。

{% ifversion fpt or ghec %}有关更新使用 {% data variables.product.pat_generic %} 对注册表进行身份验证的工作流的指南，请参阅“[升级使用 {% data variables.product.pat_generic %} 访问注册表的工作流](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token)”。{% endif %}

有关 `GITHUB_TOKEN` 的详细信息，请参阅“[工作流中的身份验证](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”。

有关在操作中使用注册表时的最佳做法的详细信息，请参阅“[GitHub Actions 的安全强化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)”。
