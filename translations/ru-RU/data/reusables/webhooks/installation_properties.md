---
ms.openlocfilehash: 2bd293f62b5fcf467c379c315347056245029ff6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145087411"
---
Ключ | Тип | Описание
----|------|------------
`action` | `string` | Действие, которое было выполнено. Возможные значения:<ul><li>`created` — кто-то устанавливает {% data variables.product.prodname_github_app %}.</li><li>`deleted` — кто-то удаляет {% data variables.product.prodname_github_app %}.</li><li>`suspend` — кто-то приостанавливает установку {% data variables.product.prodname_github_app %}.</li><li>`unsuspend` — кто-то разблокирует установку {% data variables.product.prodname_github_app %}.</li><li>`new_permissions_accepted` — кто-то принимает новые разрешения для установки {% data variables.product.prodname_github_app %}. Когда владелец {% data variables.product.prodname_github_app %} запрашивает новые разрешения, пользователь, установивший {% data variables.product.prodname_github_app %}, должен принять новый запрос разрешений. </li></ul>
`repositories` | `array` | Массив объектов репозитория, к которым может получить доступ установка.
