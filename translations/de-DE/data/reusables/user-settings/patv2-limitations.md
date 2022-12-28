---
ms.openlocfilehash: de2f4c96c3a86d64a11bfb8c5fbdc4f4082601e8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107573"
---
{% note %}

**Hinweis**: Derzeit funktionieren einige Features nur mit {% data variables.product.pat_v1_plural %}:

- Nur {% data variables.product.pat_v1_plural %} verfügen über Schreibzugriff für öffentliche Repositorys, die nicht dir gehören oder sich im Besitz einer Organisation befinden, der du nicht angehörst.{% ifversion ghec or ghes or ghae %}
- Nur {% data variables.product.pat_v1_plural %} verfügen automatisch über Schreibzugriff für interne Repositorys, die sich im Besitz deines Unternehmens befinden. {% data variables.product.pat_v2_caps %} muss Zugriff auf interne Repositorys gewährt werden.{% endif %}
- Externe Mitwirkende können nur {% data variables.product.pat_v1_plural %} verwenden, um auf Organisationsrepositorys zuzugreifen, an denen sie mitwirken.{% ifversion ghec or ghes or ghae %}
- Nur {% data variables.product.pat_v1_plural %} können auf Unternehmen zugreifen. ({% data variables.product.pat_v2_caps %} können auf Organisationen im Besitz von Unternehmen zugreifen.){% endif %}
- Die folgenden APIs unterstützen nur {% data variables.product.pat_v1_plural %}. Eine Liste der REST-API-Vorgänge, die für {% data variables.product.pat_v2 %} unterstützt werden, findest du unter [Verfügbare Endpunkte für {% data variables.product.pat_v2 %}s](/rest/overview/endpoints-available-for-fine-grained-personal-access-tokens).
  - GraphQL-API{% ifversion ghec or ghes or ghae %}
  - REST-API für Unternehmensadministratoren{% endif %}{% ifversion ghec or fpt %}
  - REST-API zum Verwalten von Quellimporten{% endif %}
  - REST-API zum Verwalten von {% data variables.product.prodname_projects_v1_caps %}
  - REST-API zum Verwalten von {% data variables.product.prodname_registry %}
  - REST-API zum Verwalten von Benachrichtigungen
  - REST-API zum Übertragen eines Repositorys
  - REST-API zum Erstellen eines Repositorys aus einer Vorlage
  - REST-API zum Erstellen eines Repositorys für den authentifizierten Benutzer

{% endnote %}
