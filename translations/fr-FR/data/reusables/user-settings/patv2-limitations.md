---
ms.openlocfilehash: de2f4c96c3a86d64a11bfb8c5fbdc4f4082601e8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107572"
---
{% note %}

**Remarque** : Pour le moment, certaines fonctionnalités sont utilisables uniquement avec les {% data variables.product.pat_v1_plural %} :

- Seuls les {% data variables.product.pat_v1_plural %} disposent d’un accès en écriture pour les dépôts publics qui ne vous appartiennent pas, ou qui appartiennent à une organisation dont vous n’êtes pas membre.{% ifversion ghec or ghes or ghae %}
- Seuls les {% data variables.product.pat_v1_plural %} disposent automatiquement d’un accès en écriture pour les dépôts internes qui appartiennent à votre entreprise. Les {% data variables.product.pat_v2_caps %} doivent disposer d’un accès aux dépôts internes.{% endif %}
- Les collaborateurs externes peuvent utiliser uniquement les {% data variables.product.pat_v1_plural %} pour accéder aux dépôts d’organisation dont ils sont collaborateurs.{% ifversion ghec or ghes or ghae %}
- Seuls les {% data variables.product.pat_v1_plural %} peuvent accéder aux entreprises. (Un {% data variables.product.pat_v2_caps %} peut accéder aux organisations appartenant aux entreprises).{% endif %}
- Les API suivantes prennent uniquement en charge les {% data variables.product.pat_v1_plural %}. Pour obtenir la liste des opérations d’API REST prises en charge pour un {% data variables.product.pat_v2 %}, consultez « [Points de terminaison disponibles pour les {% data variables.product.pat_v2 %}](/rest/overview/endpoints-available-for-fine-grained-personal-access-tokens) ».
  - API GraphQL{% ifversion ghec or ghes or ghae %}
  - API REST pour les administrateurs d’entreprise{% endif %}{% ifversion ghec or fpt %}
  - API REST pour gérer les importations de sources{% endif %}
  - API REST pour gérer des {% data variables.product.prodname_projects_v1_caps %}
  - API REST pour gérer {% data variables.product.prodname_registry %}
  - API REST pour gérer les notifications
  - API REST pour transférer un dépôt
  - API REST pour créer un dépôt à partir d’un modèle
  - API REST pour créer un dépôt destiné à l’utilisateur authentifié

{% endnote %}
