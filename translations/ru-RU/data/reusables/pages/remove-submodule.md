---
ms.openlocfilehash: bdb353e5425d7c6bbb7488c1cea8803cf72646da
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: "148009151"
---
Чтобы устранить неполадки, сначала определите, хотите ли вы использовать субмодуль, который является проектом Git внутри проекта Git; субмодули иногда создаются непреднамеренно.

Если вы не хотите использовать субмодуль, удалите его и замените PATH-TO-SUBMODULE на путь к субмодулю:
```shell
$ git submodule deinit PATH-TO-SUBMODULE
$ git rm PATH-TO-SUBMODULE
$ git commit -m "Remove submodule"
$ rm -rf .git/modules/PATH-TO-SUBMODULE
```
