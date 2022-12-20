---
ms.openlocfilehash: 0957d7c909250bfccb51681eac05e3f3196bb6d5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145100393"
---
{% ifversion fpt or ghec or ghes > 3.4 %}

若要对 {% data variables.product.prodname_actions %} 工作流程中的 {% data variables.product.prodname_container_registry %} 进行身份验证，请使用 `GITHUB_TOKEN` 以获得最佳安全性和体验。 如果你的工作流程使用个人访问令牌 (PAT) 向 `{% data reusables.package_registry.container-registry-hostname %}` 进行身份验证，那么我们强烈建议你更新工作流以使用 `GITHUB_TOKEN`。

{% ifversion fpt or ghec %}有关使用个人访问令牌更新对 `{% data reusables.package_registry.container-registry-hostname %}` 进行身份验证的工作流的指导，请参阅“[升级访问 `ghcr.io` 的工作流](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)”。{% endif %}

有关 `GITHUB_TOKEN` 的详细信息，请参阅“[工作流中的身份验证](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”。

如果你在操作中使用 {% data variables.product.prodname_container_registry %}，请遵循“[GitHub Actions 的安全强化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)”中的安全最佳实践。

{% endif %}
