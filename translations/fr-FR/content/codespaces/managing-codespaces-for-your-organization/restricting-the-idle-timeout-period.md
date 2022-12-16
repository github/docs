---
title: Restriction de la période du délai d’inactivité
shortTitle: Restrict timeout periods
intro: Vous pouvez définir un délai d’expiration maximal pour tous les codespaces appartenant à votre organisation.
permissions: 'To manage timeout constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: b07d1834078b065eee89acdb84e0e80a2db1e8a6
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158988'
---
## Vue d’ensemble

Par défaut, les espaces de code expirent après 30 minutes d’inactivité. Lorsqu’un espace de code expire, il est arrêté et n’entraîne plus de frais pour l’utilisation du calcul. 

Les paramètres personnels d’un utilisateur {% data variables.product.prodname_dotcom %} lui permettent de définir sa propre période d’expiration pour les espaces de code qu’il crée. Cela peut être plus long que la période par défaut de 30 minutes. Pour plus d’informations, consultez « [Définition de votre délai d’expiration pour {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces) ».

En tant que propriétaire de l’organisation, vous pouvez configurer des contraintes sur le délai d’inactivité maximal pour les codespaces qui appartiennent à votre organisation. Cela peut vous aider à limiter les coûts associés aux espaces de code que vous laissez expirer après de longues périodes d’inactivité. Vous pouvez définir un délai d’expiration maximal pour les codespaces de tous les dépôts appartenant à votre organisation ou pour ceux situés dans certains dépôts. 

{% note %}

**Remarque** : Les contraintes de délai d’inactivité maximales s’appliquent uniquement aux espaces de code appartenant à votre organisation.

{% endnote %}

Pour plus d’informations sur les tarifs appliqués pour l’utilisation du calcul {% data variables.product.prodname_github_codespaces %}, consultez « [À propos de la facturation pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing) ».

### Comportement lorsque vous définissez une contrainte de délai d’inactivité maximale

Si une personne définit le délai d’inactivité par défaut sur 90 minutes dans ses paramètres personnels, puis démarre un espace de code pour un référentiel avec une contrainte de délai d’inactivité maximale de 60 minutes, l’espace de code expire après 60 minutes d’inactivité. Une fois la création de l’espace de code terminée, un message expliquant cela s’affiche :

> Le délai d’inactivité de cet espace de code est défini sur 60 minutes en conformité avec la stratégie de votre organisation.

### Définition de stratégies spécifiques à l’organisation et au référentiel

Lorsque vous créez une stratégie, vous choisissez si elle s’applique à tous les référentiels de votre organisation ou uniquement aux référentiels spécifiés. Si vous créez une stratégie à l’échelle de l’organisation avec une contrainte de délai d’expiration, les contraintes de délai d’expiration dans toutes les stratégies ciblant des référentiels spécifiques doivent se trouver dans la restriction configurée pour l’ensemble de l’organisation. La période d’expiration la plus courte (dans une stratégie à l’échelle de l’organisation, une stratégie ciblée sur les référentiels spécifiés ou dans les paramètres personnels d’une personne) est appliquée.

Si vous ajoutez une stratégie à l’échelle de l’organisation avec une contrainte de délai d’expiration, vous devez définir le délai d’expiration sur la période acceptable la plus longue. Vous pouvez ensuite ajouter des stratégies distinctes qui définissent le délai d’expiration maximal sur une période plus courte pour des référentiels spécifiques dans votre organisation.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Ajout d’une stratégie pour définir un délai d’inactivité maximal

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Cliquez sur **Ajouter une contrainte** et choisissez **Délai d’inactivité maximal**.

   ![Capture d’écran du menu déroulant « Ajouter une contrainte »](/assets/images/help/codespaces/add-constraint-dropdown-timeout.png)

1. Cliquez sur {% octicon "pencil" aria-label="The edit icon" %} pour modifier la contrainte.

   ![Capture d’écran de l’icône de crayon permettant de modifier la contrainte](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Entrez le nombre maximal de minutes pendant lesquelles les espaces de code peuvent rester inactifs avant d’expirer, puis cliquez sur **Enregistrer**.

   ![Capture d’écran de la définition du délai d’expiration maximal en minutes](/assets/images/help/codespaces/maximum-minutes-timeout.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Pour ajouter une autre contrainte à la stratégie, cliquez sur **Ajouter une contrainte** et choisissez une autre contrainte. Pour plus d’informations sur les autres contraintes, consultez :
   * « [Restriction de l’accès aux types d’ordinateurs](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) »
   * « [Restriction de l’image de base pour les codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces) »
   * « [Restriction de la visibilité des ports transférés](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports) »
   * « [Restriction de la période de conservation pour les codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces) »
1. Une fois que vous avez terminé d’ajouter des contraintes à votre stratégie, cliquez sur **Enregistrer**.

La stratégie sera appliquée à tous les nouveaux codespaces facturables à votre organisation. La contrainte d’expiration est également appliquée aux codespaces existants lors de leur prochain démarrage.

## Modification d’une stratégie

Vous pouvez modifier une stratégie existante. Par exemple, vous avez peut-être besoin d’ajouter ou de supprimer des contraintes dans une stratégie.

1. Affichez la page « Stratégies d’espace de code ». Pour plus d’informations, consultez « [Ajout d’une stratégie pour définir une période d’inactivité maximale](#adding-a-policy-to-set-a-maximum-idle-timeout-period) ».
1. Cliquez sur le nom de la stratégie à modifier.
1. Cliquez sur l’icône de crayon ({% octicon "pencil" aria-label="The edit icon" %}) à côté de la contrainte « Délai d’inactivité maximal ».
1. Apportez les changements nécessaires, puis cliquez sur **Enregistrer**.

## Suppression d’une stratégie 

1. Affichez la page « Stratégies d’espace de code ». Pour plus d’informations, consultez « [Ajout d’une stratégie pour définir une période d’inactivité maximale](#adding-a-policy-to-set-a-maximum-idle-timeout-period) ».
1. Cliquez sur le bouton Supprimer à droite de la stratégie à supprimer.

   ![Capture d’écran du bouton de suppression d’une stratégie](/assets/images/help/codespaces/policy-delete.png)
