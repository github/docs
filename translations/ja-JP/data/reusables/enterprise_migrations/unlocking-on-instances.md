---
ms.openlocfilehash: 723b3a50c568067f170b08e61be28ac71ec80002
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145111301"
---
1. `ghe-migrator unlock` コマンドを使用して、インポートされたすべてのリポジトリのロックを解除します。 移行GUIDが必要になります。
```shell
$ ghe-migrator unlock -g <em>MIGRATION_GUID</em>
> Unlocked octo-org/octo-project
```
