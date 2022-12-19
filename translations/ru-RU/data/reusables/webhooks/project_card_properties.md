---
ms.openlocfilehash: 4c9dffae916ec9dd367a0d8b92a3a1831a6e9b41
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088954"
---
Ключ | Тип | Описание
----|------|-------------
`action`|`string` | Действие, выполненное в карточке проекта. Может быть `created`, `edited`, `moved`, `converted` или `deleted`.
`changes`|`object` | Изменения в карточке проекта, если выполнялось действие `edited` или `converted`.
`changes[note][from]` |`string` | Предыдущая версия примечания, если выполнялось действие `edited` или `converted`.
`after_id`|`integer` | Идентификатор карточки, который теперь присвоен этой карточке, если выполнялось действие "перемещено". Для первой карточки в столбце будет иметь значение `null`.
`project_card`|`object` | Сама [карточка проекта](/rest/reference/projects#cards).
