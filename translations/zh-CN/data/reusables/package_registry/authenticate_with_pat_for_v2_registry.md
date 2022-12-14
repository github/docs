---
ms.openlocfilehash: 4cf4347384a6be2cadb240a15bc78efea0097799
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192751"
---
某些 {% data variables.product.prodname_registry %} 注册表支持精细权限。 这意味着你可以选择允许包由用户或组织拥有，或者链接到存储库。 有关支持精细权限的注册表列表，请参阅“[关于 {% data variables.product.prodname_registry %} 的权限](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)”。

对于支持精细权限的注册表，如果工作流使用 {% data variables.product.pat_generic %} 向注册表进行身份验证，则强烈建议更新工作流以使用 `GITHUB_TOKEN`。

有关更新使用 {% data variables.product.pat_generic %} 对注册表进行身份验证的工作流的指南，请参阅“[升级使用 {% data variables.product.pat_generic %} 访问注册表的工作流](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token)”。

有关 `GITHUB_TOKEN` 的详细信息，请参阅“[工作流中的身份验证](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)”。

有关在操作中使用注册表时的最佳做法的详细信息，请参阅“[GitHub Actions 的安全强化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)”。
