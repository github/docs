---
ms.openlocfilehash: d3eda8a12037f1da8ec915c4652fa658f34fcc6b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148110115"
---
При удалении группы содержавшиеся в ней средства выполнения автоматически возвращаются в группу по умолчанию.

{% ifversion ghes or ghae or ghec %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
1. В списке групп справа от группы, которую хотите удалить, щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. Чтобы удалить эту группу, нажмите **Удалить группу**.
3. Просмотрите запросы на подтверждение и нажмите **Удалить эту группу средств выполнения**. Все средства выполнения, по-прежнему находящиеся в этой группе, будут автоматически перемещены в группу по умолчанию, где они наследуют разрешения на доступ, назначенные этой группе.

{% endif %}
