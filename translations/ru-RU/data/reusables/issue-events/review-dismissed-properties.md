---
ms.openlocfilehash: 78d6d0b4d9cf98f834352dca2df0de06275e4db9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145123504"
---
`dismissed_review` | `object` | Сведения об отклоненной проверке.
`dismissed_review[state]` | `string` | Состояние запроса на вытягивание на момент его отклонения. Это может быть `commented`, `approved` или `changes_requested`.
`dismissed_review[review_id]` | `string` | Уникальный идентификатор проверки запроса на вытягивание.
`dismissed_review[dismissal_message]` | `string` | Сообщение, которое было включено пользователем при отклонении проверки.
`dismissed_review[dismissal_commit_id]` | `string` | Уникальный идентификатор фиксации, в рамках которой была отклонена проверка (если есть).
