---
ms.openlocfilehash: 723b3a50c568067f170b08e61be28ac71ec80002
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145102244"
---
1. Entsperre alle importierten Repositorys mit dem `ghe-migrator unlock`-Befehl. Du benötigst Deine Migrations-GUID:
```shell
$ ghe-migrator unlock -g <em>MIGRATION_GUID</em>
> Unlocked octo-org/octo-project
```
