---
ms.openlocfilehash: 37a70890c8fc5dc4e1109c4625b67998974b7eac
ms.sourcegitcommit: ae862229f8c6d32af4230e73d28cb7050dec82d5
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/06/2022
ms.locfileid: "148010463"
---
Клавиши | Тип | Описание
---|---|---
`action` | `string` | Действие, которое было выполнено. Это может быть `created`, `dismissed`, `reopened`, `fixed` или `reintroduced`.
`alert` | `object` | Dependabot [`alert`](/rest/dependabot/alerts#get-a-dependabot-alert) , участвующий в событии.
{% данных reusables.webhooks.repo_desc %} {% данных reusables.webhooks.org_desc %} {% данных reusables.webhooks.app_desc %} `sender` | `object` | `action` Если объект is `dismissed` или `reopened`, `sender` то это [`user`](/rest/users/users#get-a-user) активировало событие. Значение `sender` равно {% ifversion ghes или ghae %}`github-enterprise`{% else %}`github`{% endif %} для всех остальных действий.
