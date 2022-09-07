---
ms.openlocfilehash: 723b3a50c568067f170b08e61be28ac71ec80002
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145111301"
---
1. `ghe-migrator unlock` コマンドを使用して、インポートされたすべてのリポジトリのロックを解除します。 移行GUIDが必要になります。
```shell
$ ghe-migrator unlock -g <em>MIGRATION_GUID</em>
> Unlocked octo-org/octo-project
```
