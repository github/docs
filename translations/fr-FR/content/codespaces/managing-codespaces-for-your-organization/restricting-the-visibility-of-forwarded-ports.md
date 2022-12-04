---
title: Restriction de la visibilité des ports transférés
shortTitle: Restrict port visibility
intro: Vous pouvez définir des contraintes sur les options de visibilité que les utilisateurs peuvent choisir lorsqu’ils transfèrent des ports à partir d’espaces de codes dans votre organisation.
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: ad670b43e0ac2a80e43048ffa61e0c83a8d12130
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158972'
---
## Vue d’ensemble

En règle générale, dans un codespace, vous pouvez transférer des ports de manière privée (uniquement à vous-même), aux membres de votre organisation ou publiquement (à toute personne qui dispose de l’URL). Pour plus d’informations, consultez « [Transfert de ports dans votre codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) ».

En tant que propriétaire de l’organisation, vous pouvez configurer des contraintes sur les options de visibilité que les utilisateurs peuvent définir lors du transfert de ports. Par exemple, pour des raisons de sécurité, vous pouvez interdire le transfert de ports public. Pour cela, définissez une ou plusieurs stratégies dans les paramètres {% data variables.product.prodname_github_codespaces %} de votre organisation.

### Comportement quand vous définissez une contrainte de visibilité des ports

S’il existe des codespaces qui ne sont plus conformes à une stratégie que vous avez définie, ils continuent de fonctionner tant qu’ils ne sont pas arrêtés ou qu’ils n’ont pas expiré. Quand l’utilisateur reprend le codespace, il est soumis aux contraintes de la stratégie.

{% note %}

**Remarque** : Vous ne pouvez pas désactiver le transfert de ports privé, car il est exigé par {% data variables.product.prodname_github_codespaces %} pour continuer à fonctionner normalement, par exemple pour transférer SSH sur le port 22.

{% endnote %}

### Définition de stratégies spécifiques d’un dépôt à l’échelle de l’organisation

Quand vous créez une stratégie, vous choisissez si elle s’applique à tous les dépôts de votre organisation ou uniquement aux dépôts spécifiés. Si vous définissez une stratégie à l’échelle de l’organisation, alors toutes les stratégies que vous définissez pour des dépôts individuels doivent s’inscrire dans cet ensemble de restrictions au niveau de l’organisation. L’ajout de stratégies rend le choix des options de visibilité plus restrictif, et non moins restrictif.

Par exemple, vous pouvez créer une stratégie à l’échelle de l’organisation qui limite les options de visibilité à l’organisation uniquement. Vous pouvez ensuite définir une stratégie pour le dépôt A qui interdit à la fois la visibilité publique et celle à l’échelle de l’organisation. Ainsi, seul le transfert de ports privé est disponible pour ce dépôt. Si vous définissez une stratégie pour le dépôt A qui autorise à la fois la visibilité publique et celle à l’échelle de l’organisation, seule la visibilité à l’échelle de l’organisation est disponible, car la stratégie à l’échelle de l’organisation n’autorise pas de visibilité publique.

Si vous ajoutez une stratégie à l’échelle de l’organisation, vous devez la définir sur l’option de visibilité la moins stricte disponible pour un dépôt au sein de votre organisation. Vous pouvez ensuite ajouter des stratégies plus précises pour un dépôt afin de restreindre encore ce choix.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Ajout d’une stratégie pour limiter les options de visibilité des ports

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Cliquez sur **Ajouter une contrainte** et choisissez **Visibilité des ports**.

   ![Capture d’écran du menu déroulant « Ajouter une contrainte »](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. Cliquez sur {% octicon "pencil" aria-label="The edit icon" %} pour modifier la contrainte.

   ![Capture d’écran de l’icône de crayon permettant de modifier la contrainte](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. Effacez la sélection des options de visibilité des ports (**Organisation** ou **Publique**) que vous ne souhaitez pas rendre disponibles.

   ![Capture d’écran de l’effacement d’une option de visibilité des ports](/assets/images/help/codespaces/choose-port-visibility-options.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Pour ajouter une autre contrainte à la stratégie, cliquez sur **Ajouter une contrainte** et choisissez une autre contrainte. Pour plus d’informations sur les autres contraintes, consultez :
   * « [Restriction de l’accès aux types d’ordinateurs](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) »
   * « [Restriction de l’image de base pour les codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces) »
   * « [Restriction de la période du délai d’inactivité](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period) »
   * « [Restriction de la période de conservation pour les codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces) »
1. Une fois que vous avez terminé d’ajouter des contraintes à votre stratégie, cliquez sur **Enregistrer**.

La stratégie sera appliquée à tous les nouveaux codespaces facturables à votre organisation. La contrainte de visibilité des ports est également appliquée aux codespaces existants lors de leur prochain démarrage.

## Modification d’une stratégie

Vous pouvez modifier une stratégie existante. Par exemple, vous avez peut-être besoin d’ajouter ou de supprimer des contraintes dans une stratégie.

1. Affichez la page « Stratégies de codespace ». Pour plus d’informations, consultez « [Ajout d’une stratégie pour limiter les options de visibilité des ports](#adding-a-policy-to-limit-the-port-visibility-options) ».
1. Cliquez sur le nom de la stratégie à modifier.
1. Cliquez sur l’icône de crayon ({% octicon "pencil" aria-label="The edit icon" %}) à côté de la contrainte « Visibilité des ports ».
1. Apportez les changements nécessaires, puis cliquez sur **Enregistrer**.

## Suppression d’une stratégie 

1. Affichez la page « Stratégies de codespace ». Pour plus d’informations, consultez « [Ajout d’une stratégie pour limiter les options de visibilité des ports](#adding-a-policy-to-limit-the-port-visibility-options) ».
1. Cliquez sur le bouton Supprimer à droite de la stratégie à supprimer.

   ![Capture d’écran du bouton de suppression d’une stratégie](/assets/images/help/codespaces/policy-delete.png)
