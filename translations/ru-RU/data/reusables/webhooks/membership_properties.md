---
ms.openlocfilehash: e2df86df5d4919f4c55bb1963b66e9114eb03e44
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088994"
---
Ключ | Тип | Описание
----|------|-------------
`action` |`string` | Действие, которое было выполнено. Может иметь значение `added` или `removed`.
`scope`  |`string` | Область членства. В настоящее время может иметь только значение `team`.
`member` |`object` | [Пользователь](/rest/reference/users), который был добавлен или удален.
`team`   |`object` | [Команда](/rest/reference/teams) для членства.
