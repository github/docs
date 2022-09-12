---
ms.openlocfilehash: 723b3a50c568067f170b08e61be28ac71ec80002
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145097717"
---
1. 使用 `ghe-migrator unlock` 命令解锁所有导入的存储库。 您将需要迁移 GUID：
```shell
$ ghe-migrator unlock -g <em>MIGRATION_GUID</em>
> Unlocked octo-org/octo-project
```
