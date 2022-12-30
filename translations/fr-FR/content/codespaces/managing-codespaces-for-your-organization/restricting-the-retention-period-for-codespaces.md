---
title: Restriction de la période de conservation pour les codespaces
shortTitle: Restrict the retention period
intro: Vous pouvez définir une période de conservation maximale pour tous les codespaces appartenant à votre organisation.
permissions: 'To manage retention constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 3c114fe41b06176899f9dd11a6dcd51c038c88e5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158980'
---
## Vue d’ensemble

Les {% data variables.product.prodname_github_codespaces %} sont automatiquement supprimés quand ils ont été arrêtés et qu’ils sont restés inactifs pendant un nombre défini de jours. La période de conservation de chaque codespace est définie lors de la création de celui-ci, et ne peut pas être modifiée. 

Tous ceux qui ont accès à {% data variables.product.prodname_github_codespaces %} peuvent configurer une période de conservation pour les codespaces qu’ils créent. Le paramètre initial de cette période de conservation par défaut est de 30 jours. Les utilisateurs peuvent définir cette période sur 0 à 30 jours. Pour plus d’informations, consultez « [Configuration de la suppression automatique de vos espaces de code](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces) ». 

En tant que propriétaire de l’organisation, vous pouvez configurer des contraintes sur la période d’inactivité maximale pour les codespaces qui appartiennent à votre organisation. Cela peut vous aider à limiter les coûts de stockage qui sont associés aux codespaces arrêtés puis inutilisés jusqu’à ce qu’ils soient automatiquement supprimés. Pour plus d’informations sur les frais de stockage, consultez « [À propos de la facturation pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing) ». Vous pouvez définir une période de conservation maximale pour tous les dépôts appartenant à votre organisation, ou pour certains dépôts uniquement. 

### Définition de stratégies spécifiques à l’organisation et au référentiel

Lorsque vous créez une stratégie, vous choisissez si elle s’applique à tous les référentiels de votre organisation ou uniquement aux référentiels spécifiés. Si vous créez une stratégie à l’échelle de l’organisation comprenant une contrainte sur la conservation des codespaces, les contraintes de conservation des stratégies qui ciblent certains dépôts devront être plus courtes que celles configurées pour l’ensemble de l’organisation, sinon, elles n’auront aucun effet. La période de conservation la plus courte (dans une stratégie à l’échelle de l’organisation, une stratégie ciblant des dépôts spécifiés, ou la période de conservation par défaut définie dans les paramètres personnels d’un utilisateur) est appliquée.

Si vous ajoutez une stratégie à l’échelle de l’organisation comprenant une contrainte de conservation, vous devez définir une période de conservation la plus longue possible. Vous pouvez ensuite ajouter des stratégies distinctes qui définissent la période de conservation maximale sur une période plus courte pour certains dépôts de votre organisation.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Ajout d’une stratégie pour définir une période de conservation maximale des codespaces

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Cliquez sur **Ajouter une contrainte** et choisissez **Période de conservation**.

   ![Capture d’écran du menu déroulant « Ajouter une contrainte »](/assets/images/help/codespaces/add-constraint-dropdown-retention.png)

1. Cliquez sur {% octicon "pencil" aria-label="The edit icon" %} pour modifier la contrainte.

   ![Capture d’écran de l’icône de crayon permettant de modifier la contrainte](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Entrez le nombre maximal de jours pendant lesquels les codespaces peuvent rester arrêtés avant d’être supprimés automatiquement, puis cliquez sur **Enregistrer**.

   ![Capture d’écran de la définition de la période de conservation en jours](/assets/images/help/codespaces/maximum-days-retention.png)

   {% note %}

   **Remarques**: 
   * Dans ce contexte, un jour correspond à une période de 24 heures, commençant à l’heure à laquelle le codespace a été arrêté.
   * La plage valide va de 0 à 30 jours.
   * Si vous définissez la période sur `0`, les codespaces seront immédiatement supprimés après leur arrêt ou lorsqu’ils expireront après un certain délai d’inactivité.

   {% endnote %}

{% data reusables.codespaces.codespaces-policy-targets %}
1. Pour ajouter une autre contrainte à la stratégie, cliquez sur **Ajouter une contrainte** et choisissez une autre contrainte. Pour plus d’informations sur les autres contraintes, consultez :
   * « [Restriction de l’accès aux types d’ordinateurs](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) »
   * « [Restriction de l’image de base pour les codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces) »
   * « [Restriction de la visibilité des ports transférés](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports) »
   * « [Restriction de la période du délai d’inactivité](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period) »
1. Une fois que vous avez terminé d’ajouter des contraintes à votre stratégie, cliquez sur **Enregistrer**.

La stratégie sera appliquée à tous les nouveaux codespaces facturables à votre organisation. La contrainte de période de conservation n’est appliquée qu’à la création d’un codespace.

## Modification d’une stratégie

Vous pouvez modifier une stratégie existante. Par exemple, vous avez peut-être besoin d’ajouter ou de supprimer des contraintes dans une stratégie.

La contrainte de période de conservation est appliquée aux codespaces uniquement lors de leur création. La modification d’une stratégie n’a aucun effet sur les codespaces existants.

1. Affichez la page « Stratégies de codespace ». Pour plus d’informations, consultez « [Ajout d’une stratégie pour définir une période de conservation maximale des codespaces](#adding-a-policy-to-set-a-maximum-codespace-retention-period) ».
1. Cliquez sur le nom de la stratégie à modifier.
1. Cliquez sur l’icône de crayon ({% octicon "pencil" aria-label="The edit icon" %}) à côté de la contrainte « Période de conservation ».
1. Apportez les changements nécessaires, puis cliquez sur **Enregistrer**.

## Suppression d’une stratégie 

Vous pouvez supprimer une stratégie à tout moment. La suppression d’une stratégie n’a aucun effet sur les codespaces existants.

1. Affichez la page « Stratégies de codespace ». Pour plus d’informations, consultez « [Ajout d’une stratégie pour définir une période de conservation maximale des codespaces](#adding-a-policy-to-set-a-maximum-codespace-retention-period) ».
1. Cliquez sur le bouton Supprimer à droite de la stratégie à supprimer.

   ![Capture d’écran du bouton de suppression d’une stratégie](/assets/images/help/codespaces/policy-delete.png)
