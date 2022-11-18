---
ms.openlocfilehash: 444e70adced8ef2f4fdc5f91b06a28bba89c898a
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877227"
---
{% warning %}

**Avertissement :**

- Si vous supprimez l’accès d’une personne à un dépôt privé, l’une de ses duplications de ce dépôt privé est supprimée. Les clones locaux du dépôt privé sont conservés. Si l’accès d’une équipe à un dépôt privé est révoqué ou si l’accès à un dépôt privé est supprimé et que les membres de l’équipe n’ont pas accès au dépôt via une autre équipe, les duplications privées du dépôt sont supprimées. {% ifversion ghes %}
- Quand la [synchronisation LDAP est activée](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync), si vous supprimez une personne d’un dépôt, celle-ci perd l’accès, mais ses duplications ne sont pas supprimées. Si la personne est ajoutée à une équipe ayant accès au dépôt d’origine de l’organisation dans un délai de trois mois, son accès aux duplications est automatiquement restauré à la prochaine synchronisation.{% endif %}
- Vous êtes chargé de veiller à ce que les personnes qui ont perdu l’accès à un dépôt suppriment toute information confidentielle ou propriété intellectuelle.

- Les personnes avec des autorisations d’administration sur un dépôt privé{% ifversion ghes or ghae or ghec %} ou interne{% endif %} peuvent interdire la duplication de ce dépôt, tandis que les propriétaires de l’organisation peuvent interdire la duplication de tout dépôt privé{% ifversion ghes or ghae or ghec %} ou interne{% endif %} dans une organisation. Pour plus d’informations, consultez « [Gestion de la stratégie de duplication pour votre organisation](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) » et « [Gestion de la stratégie de duplication pour votre dépôt](/github/administering-a-repository/managing-the-forking-policy-for-your-repository) ».

{% endwarning %}
