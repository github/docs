---
title: Suppression d’un référentiel
intro: Vous pouvez supprimer n’importe quel dépôt ou duplication (fork) si vous êtes propriétaire d’une organisation ou disposez d’autorisations d’administrateur pour le dépôt ou la duplication. La suppression d’un dépôt dupliqué ne supprime pas le dépôt en amont.
redirect_from:
  - /delete-a-repo
  - /deleting-a-repo
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
  - /github/administering-a-repository/managing-repository-settings/deleting-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 53e6b69113a5483ea37c7ddd34dee7921959b62a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132305'
---
{% data reusables.organizations.owners-and-admins-can %} peuvent supprimer un référentiel de l’organisation. Si l’option **Autoriser les membres à supprimer ou transférer des référentiels pour cette organisation** a été désactivée, seuls les propriétaires de l’organisation peuvent supprimer des référentiels de l’organisation. {% data reusables.organizations.new-repo-permissions-more-info %}

{% ifversion not ghae %}La suppression d’un référentiel public ne supprime aucune duplication du référentiel.{% endif %}

{% warning %}

**Avertissements** :

- La suppression d’un référentiel supprime **définitivement** les pièces jointes de mise en production et les autorisations d’équipe. Cette opération est **irréversible**.
- La suppression d’un référentiel privé{% ifversion ghes or ghec or ghae %} ou interne{% endif %} supprime toutes les duplications du référentiel.

{% endwarning %}

Certains dépôts supprimés peuvent être restaurés dans les 90 jours qui suivent la suppression. {% ifversion ghes or ghae %}Votre administrateur de site peut être en mesure de restaurer un référentiel supprimé pour vous. Pour plus d’informations, consultez « [Restauration d’un dépôt supprimé](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository) ». {% else %}Pour plus d’informations, consultez « [Restauration d’un référentiel supprimé](/articles/restoring-a-deleted-repository) ».{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
2. Sous Zone de danger, cliquez sur **Supprimer ce référentiel**.
   ![Bouton de suppression d’un référentiel](/assets/images/help/repository/repo-delete.png)
3. **Lisez les avertissements**.
4. Pour vérifier que vous supprimez le référentiel qui convient, entrez le nom du référentiel que vous souhaitez supprimer.
   ![Étiquetage de la suppression](/assets/images/help/repository/repo-delete-confirmation.png)
5. Cliquez sur **Je comprends les conséquences, supprimer ce référentiel**.
