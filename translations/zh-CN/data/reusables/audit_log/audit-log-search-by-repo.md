---
ms.openlocfilehash: fa28240a725967485b76be7be90384f3010b084a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145098328"
---
### 基于仓库搜索

使用 `repo` 限定符将操作限制到特定存储库。 例如：

  * `repo:my-org/our-repo` 查找 `my-org` 组织中 `our-repo` 存储库发生的所有事件。
  * `repo:my-org/our-repo repo:my-org/another-repo` 查找 `my-org` 组织中 `our-repo` 和 `another-repo` 存储库发生的所有事件。
  * `-repo:my-org/not-this-repo` 排除 `my-org` 组织中 `not-this-repo` 存储库发生的所有事件。

请注意，必须在 `repo` 限定符包括帐户名称；仅搜索 `repo:our-repo` 将不起作用。
