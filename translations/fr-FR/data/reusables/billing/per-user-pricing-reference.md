---
ms.openlocfilehash: c8432b756590deab759f023a78453a482b8091fd
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145103398"
---
Avec la tarification par utilisateur, chaque personne consomme une licence. {% data variables.product.company_short %} identifie les individus par leur adresse e-mail principale.

{% data variables.product.company_short %} facture les personnes suivantes.

{%- ifversion ghec %}
- Propriétaires d’entreprise qui sont membres ou propriétaires d’au moins une organisation dans l’entreprise {%- endif %}
- Membres d’organisation, y compris les propriétaires
- Collaborateurs externes sur des référentiels privés{% ifversion ghec %} ou internes{% endif %} appartenant à votre organisation, à l’exception des duplications (forks).
- Toute personne ayant reçu une invitation pour devenir propriétaire ou membre d’une organisation
- Toute personne ayant reçu une invitation pour devenir un collaborateur externe sur des référentiels privés{% ifversion ghec %} ou internes{% endif %} appartenant à votre organisation, à l’exception des duplications (forks) {%- ifversion ghec %}.
- Chaque utilisateur d’une instance de {% data variables.product.prodname_ghe_server %} que vous déployez {% endif %}

{% data variables.product.company_short %} ne facture aucune des personnes suivantes.

{%- ifversion ghec %}
- Propriétaires d’entreprise qui ne sont pas membres ou propriétaires d’au moins une organisation dans l’entreprise
- Gestionnaires de facturation d’entreprise {%- endif %}
- Gestionnaires de facturation d’organisation{% ifversion ghec %} pour les organisations individuelles sur {% data variables.product.prodname_ghe_cloud %}{% endif %}
- Toute personne ayant une invitation en attente pour devenir gestionnaire de facturation d’une entreprise{% ifversion ghec %} ou d’une organisation {% endif %}
- Toute personne ayant une invitation en attente pour devenir un collaborateur externe sur un référentiel public appartenant à votre organisation

{% note %}

**Remarque** : {% data reusables.organizations.org-invite-scim %}

{% endnote %}
