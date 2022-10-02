---
ms.openlocfilehash: fd3590bb212b7c9521cb447ca012b19270469a8c
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145100405"
---
需要访问令牌才能发布、安装和删除包。

可使用个人访问令牌 (PAT) 向 {% data variables.product.prodname_registry %} 或 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 进行身份验证。 创建个人访问令牌时，可根据需要为令牌分配不同的作用域。 有关 PAT 的包相关范围的详细信息，请参阅“[关于 GitHub Packages 的权限](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)”。

要在 {% data variables.product.prodname_actions %} 工作流程内向 {% data variables.product.prodname_registry %} 注册表验证，您可以使用：
- `GITHUB_TOKEN` 发布与工作流存储库相关联的包。
- PAT 来安装与其他专用存储库（`GITHUB_TOKEN` 无法访问）相关联的包。
