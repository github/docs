---
ms.openlocfilehash: bca045d426382da6dd8b62890b5c2d0ef1658858
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: "148008926"
---
1. Разблокируйте все импортированные репозитории с помощью команды `ghe-migrator unlock`. Вам потребуется GUID миграции:
```shell
$ ghe-migrator unlock -g MIGRATION-GUID
> Unlocked octo-org/octo-project
```
