---
ms.openlocfilehash: 92ca4fc15d763b82d057c350d787ff97522a2768
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065933"
---
可以使用 `permissions` 修改授予 `GITHUB_TOKEN` 的默认权限，根据需要添加或删除访问权限，以便只授予所需的最低访问权限。 有关的详细信息，请参阅“[工作流中的身份验证](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)”。

可以使用 `permissions` 作为顶级密钥，以应用于工作流中的所有作业或特定作业。 当你在特定作业中添加 `permissions` 密钥时，该作业中使用 `GITHUB_TOKEN` 的所有操作和运行命令都将获得你指定的访问权限。  有关详细信息，请参阅 [`jobs.<job_id>.permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions)。

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

### 示例：为 GITHUB_TOKEN 分配权限

此示例显示为将要应用到工作流中所有作业的 `GITHUB_TOKEN` 设置的权限。 所有权限都被授予读取权限。

```yaml
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```
