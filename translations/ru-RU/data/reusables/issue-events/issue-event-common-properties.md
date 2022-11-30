---
ms.openlocfilehash: 7ddb09d4432677f68ccc7dcb757548555cd65db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080979"
---
Имя | Тип | Описание
-----|------|--------------
`id` | `integer` | Уникальный идентификатор события.
`node_id` | `string` | [Идентификатор глобального узла](/graphql/guides/using-global-node-ids) события.
`url`| `string` | URL-адрес REST API для получения события.
`actor` | `object`| Пользователь, создавший событие.
`event` | `string` | Идентифицирует фактический тип наступившего события.
`commit_id` | `string` | SHA фиксации, которая ссылалась на эту проблему.
`commit_url` | `string` | Ссылка REST API GitHub на фиксацию, которая ссылалась на эту проблему.
`created_at` | `string` | Метка времени, указывающая, когда произошло событие.
