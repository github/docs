---
ms.openlocfilehash: a2d715cc94af2755d4161ef0715314caa0e82047
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145084894"
---
若要将 OIDC 集成添加到云部署工作流，需要添加以下代码更改：

- 授予从 {% data variables.product.prodname_dotcom %} OIDC 提供程序提取令牌的权限：
  - 工作流需要具有已定义 `id-token` 值的 `permissions` 设置。 这样，便可以从工作流中的每个作业中提取 OIDC 令牌。 如果只需要为单个作业提取 OIDC 令牌，则可在该作业中设置此权限。
- 向 {% data variables.product.prodname_dotcom %} OIDC 提供商请求 JSON Web 令牌 (JWT)，并将其提供给云提供商以接收访问令牌：
  - 你可以使用操作工具包来获取作业中的令牌，也可以使用云提供商创建的官方操作来获取 JWT 并从云接收访问令牌。
