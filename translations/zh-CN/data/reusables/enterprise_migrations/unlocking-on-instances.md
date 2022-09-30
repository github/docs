---
ms.openlocfilehash: 723b3a50c568067f170b08e61be28ac71ec80002
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145097717"
---
1. 使用 `ghe-migrator unlock` 命令解锁所有导入的存储库。 您将需要迁移 GUID：
```shell
$ ghe-migrator unlock -g <em>MIGRATION_GUID</em>
> Unlocked octo-org/octo-project
```
