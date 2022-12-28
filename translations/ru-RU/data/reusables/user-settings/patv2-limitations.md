---
ms.openlocfilehash: de2f4c96c3a86d64a11bfb8c5fbdc4f4082601e8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107576"
---
{% note %}

**Примечание.** В настоящее время некоторые функции работают только с {% data variables.product.pat_v1_plural %}:

- Только {% data variables.product.pat_v1_plural %} имеет доступ на запись для общедоступных репозиториев, которые не принадлежат вам или организации, членом которых вы не являетесь. {% ifversion ghec or ghes or ghae %}
- Только {% data variables.product.pat_v1_plural %} автоматически имеют доступ на запись для внутренних репозиториев, принадлежащих вашему предприятию. {% data variables.product.pat_v2_caps %}s должен быть предоставлен доступ к внутренним репозиториям. {% endif %}
- Внешние участники совместной работы могут использовать только {% data variables.product.pat_v1_plural %} для доступа к репозиториям организации, в которых они являются участниками совместной работы. {% ifversion ghec or ghes or ghae %}
- Доступ к предприятиям может получить только {% data variables.product.pat_v1_plural %}. ({% data variables.product.pat_v2_caps %} может получить доступ к организациям, принадлежащим предприятиям.) {% endif %}
- Следующие API поддерживают только {% data variables.product.pat_v1_plural %}. Список операций REST API, поддерживаемых для {% data variables.product.pat_v2 %}, см. в разделе [Конечные точки, доступные для {% data variables.product.pat_v2 %}s](/rest/overview/endpoints-available-for-fine-grained-personal-access-tokens).
  - API GraphQL{% ifversion ghec or ghes or ghae %}
  - REST API для администраторов предприятия{% endif %}{% ifversion ghec or fpt %}
  - REST API для управления импортом источника{% endif %}
  - REST API для управления {% data variables.product.prodname_projects_v1_caps %}
  - REST API для управления {% data variables.product.prodname_registry %}
  - REST API для управления уведомлениями
  - REST API для передачи репозитория
  - REST API для создания репозитория на основе шаблона
  - REST API для создания репозитория для пользователя, прошедшего проверку подлинности

{% endnote %}
