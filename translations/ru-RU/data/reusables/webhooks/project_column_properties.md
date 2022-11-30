---
ms.openlocfilehash: c29755014aac40c0ab7e96f879d19a3fb06d79fb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088949"
---
Ключ | Тип | Описание
----|------|-------------
`action`|`string` | Действие, выполненное в столбце проекта. Это может быть `created`, `edited`, `moved` или `deleted`.
`changes`|`object` | Изменения в столбце проекта, если выполнялось действие `edited`.
`changes[name][from]` |`string` | Предыдущая версия имени, если действие было `edited`.
`after_id`|`integer` | Идентификатор столбца, который теперь следует присвоен этому столбцу, если действие было "перемещено". Будет `null`, если это первый столбец в проекте.
`project_column`|`object` | Сам [столбец проекта](/rest/reference/projects#columns).
