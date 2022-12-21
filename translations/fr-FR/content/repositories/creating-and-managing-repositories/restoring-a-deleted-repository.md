---
title: Restauration d’un dépôt supprimé
intro: '{% ifversion ghes or ghae %}Un propriétaire d’entreprise{% elsif fpt or ghec %}Vous{% endif %} pouvez restaurer certains référentiels supprimés pour récupérer leur contenu.'
permissions: '{% ifversion ghes or ghae %}{% elsif fpt or ghec %}Anyone can restore deleted repositories that were owned by their own personal account. Organization owners can restore deleted repositories that were owned by the organization.{% endif %}'
redirect_from:
  - /articles/restoring-a-deleted-repository
  - /github/administering-a-repository/restoring-a-deleted-repository
  - /github/administering-a-repository/managing-repository-settings/restoring-a-deleted-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Restore deleted repository
ms.openlocfilehash: 233785cc42ac6dd97a35d042186ae198dd69502a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146200097'
---
{% ifversion ghes or ghae %}

En règle générale, les référentiels supprimés peuvent être restaurés dans les 90 jours par un propriétaire d’entreprise{% ifversion ghes %} sur {% data variables.product.product_location %}{% endif %}. Pour plus d’informations, consultez « [Restauration d’un dépôt supprimé](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository) ». 

{% else %}

## À propos de la restauration de dépôt

Un référentiel supprimé peut être restauré dans les 90 jours, sauf si le référentiel faisait partie d’un réseau de duplications qui n’est pas actuellement vide. Un réseau de duplications se compose d’un référentiel parent, des duplications du référentiel et des duplications des duplications du référentiel. Si votre référentiel faisait partie d’un réseau de duplications, il ne peut pas être restauré, à moins que tous les autres référentiels du réseau soient supprimés ou détachés du réseau. Pour plus d’informations sur les duplications, consultez « [À propos des duplications](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) ».

Si vous souhaitez restaurer un référentiel qui faisait partie d’un réseau de duplications qui n’est pas actuellement vide, vous pouvez contacter {% data variables.contact.contact_support %}.

Quand un dépôt est supprimé, il peut s’écouler jusqu’à une heure avant qu’il ne soit disponible pour restauration.

La restauration d’un dépôt ne restaure pas les pièces jointes de mise en production ni les autorisations d’équipe. Les problèmes restaurés ne seront pas étiquetés.

## Restauration d’un référentiel supprimé appartenant à un compte personnel

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.repo-tab %} {% data reusables.user-settings.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## Restauration d’un référentiel supprimé appartenant à une organisation


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## Pour aller plus loin

- « [Suppression d’un dépôt](/articles/deleting-a-repository) »

{% endif %}
