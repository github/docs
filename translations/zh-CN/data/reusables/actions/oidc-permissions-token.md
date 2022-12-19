---
ms.openlocfilehash: a314ace9dc0cc07e1119fa2a02c5ea45ef3a90fe
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876004"
---
作业或工作流运行需要具有 [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) 的 `permissions` 设置。 如果 `id-token` 的 `permissions` 设置已设置为 `read` 或 `none`，则无法请求 OIDC JWT ID 令牌。

`id-token: write` 设置允许使用下列方法之一从 {% data variables.product.prodname_dotcom %} 的 OIDC 提供程序请求 JWT：

- 在运行器上使用环境变量（`ACTIONS_ID_TOKEN_REQUEST_URL` 和 `ACTIONS_ID_TOKEN_REQUEST_TOKEN`）。
- 使用“操作”工具包中的 `getIDToken()`。

如果需要为工作流提取 OIDC 令牌，则可以在工作流级别设置权限。 例如：

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
  contents: read  # This is required for actions/checkout
```

如果只需要为单个作业提取 OIDC 令牌，则可在该作业中设置此权限。 例如：

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
```

可能需要在此处指定额外权限，具体取决于你的工作流要求。 
