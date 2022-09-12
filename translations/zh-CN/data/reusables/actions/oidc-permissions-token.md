---
ms.openlocfilehash: 9634dbe779ef8c4bf0707adfe45d6e5084d95196
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065926"
---
作业或工作流运行需要具有 [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) 的 `permissions` 设置。 如果 `id-token` 的 `permissions` 设置已设置为 `read` 或 `none`，则无法请求 OIDC JWT ID 令牌。

`id-token: write` 设置允许使用下列方法之一从 {% data variables.product.prodname_dotcom %} 的 OIDC 提供程序请求 JWT：

- 在运行器上使用环境变量（`ACTIONS_ID_TOKEN_REQUEST_URL` 和 `ACTIONS_ID_TOKEN_REQUEST_TOKEN`）。
- 使用“操作”工具包中的 `getIDToken()`。

如果只需要为单个作业提取 OIDC 令牌，则可在该作业中设置此权限。 例如：

```yaml{:copy}
permissions:
  id-token: write
```

可能需要在此处指定额外权限，具体取决于你的工作流要求。 
