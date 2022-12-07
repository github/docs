---
title: Restriction de l’accès aux types de machines
shortTitle: Restrict machine types
intro: Vous pouvez définir des contraintes sur les types d’ordinateurs que les utilisateurs peuvent choisir quand ils créent des espaces de code dans votre organisation.
permissions: 'To manage access to machine types for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: 202a2cf9f28a55514450415230686c0c0e94600f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159156'
---
## Vue d’ensemble

En règle générale, quand vous créez un codespace, vous pouvez choisir les spécifications de la machine qui va l’exécuter. Vous pouvez choisir le type de machine qui convient le mieux à vos besoins. Pour plus d’informations, consultez « [Création d’un codespace pour un dépôt](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository) ». 

Si vous payez l’utilisation de {% data variables.product.prodname_github_codespaces %}, le type de machine que vous choisissez a des répercussions sur votre facture. Le coût de calcul d’un codespace est proportionnel au nombre de cœurs de processeur dans le type de machine que vous choisissez. Par exemple, le coût de calcul de l’utilisation d’un codespace pendant une heure sur une machine à 16 cœurs est huit fois supérieur à celui d’une machine à 2 cœurs. Pour plus d’informations sur la tarification, consultez « [À propos de la facturation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) ».

En tant que propriétaire d’une organisation, vous pouvez avoir envie de configurer des contraintes sur les types de machines disponibles. Par exemple, si le travail au sein de votre organisation ne nécessite pas de puissance de calcul ni d’espace de stockage importants, vous pouvez supprimer les machines à fortes ressources de la liste des options sélectionnables. Pour cela, définissez une ou plusieurs stratégies dans les paramètres {% data variables.product.prodname_github_codespaces %} de votre organisation.

### Comportement quand vous définissez une contrainte de type de machine

S’il existe des codespaces qui ne sont plus conformes à une stratégie que vous avez définie, ils continuent de fonctionner jusqu’à ce qu’ils soient arrêtés ou qu’ils aient expiré. Quand l’utilisateur essaie de reprendre un tel codespace, un message lui indique que le type de machine actuellement sélectionné n’est plus autorisé pour cette organisation et l’invite à en choisir un autre.

Si vous supprimez des types de machines dont les spécifications sont supérieures et qui sont exigés par la configuration {% data variables.product.prodname_github_codespaces %} d’un dépôt individuel dans votre organisation, il n’est pas possible de créer un codespace pour ce dépôt. Quand vous essayez de créer un codespace, un message vous indique qu’il n’existe aucun type de machine valide disponible qui répond aux exigences de la configuration {% data variables.product.prodname_github_codespaces %} du dépôt.

{% note %}

**Remarque** : Toute personne pouvant modifier le fichier de configuration `devcontainer.json` dans un dépôt peut définir une spécification minimale pour les machines utilisables pour les codespaces pour ce dépôt. Pour plus d’informations, consultez « [Définition d’une spécification minimale pour les machines de codespaces](/codespaces/setting-up-your-project-for-codespaces/setting-a-minimum-specification-for-codespace-machines) ».

{% endnote %}

Si la définition d’une stratégie pour des types de machines vous empêche d’utiliser {% data variables.product.prodname_github_codespaces %} pour un dépôt particulier, vous avez deux possibilités :

* Vous pouvez ajuster vos stratégies pour supprimer spécifiquement les restrictions du dépôt concerné.
* Toute personne qui a un codespace auquel elle ne peut plus accéder, en raison de la nouvelle stratégie, peut exporter son codespace vers une branche. Cette branche va contenir tous les changements que la personne apporte au codespace. Cette dernière peut alors ouvrir un nouveau codespace sur cette branche avec un type de machine conforme ou travailler sur cette branche localement. Pour plus d’informations, consultez « [Exportation des changements vers une branche](/codespaces/troubleshooting/exporting-changes-to-a-branch) ».

### Définition de stratégies propres à un dépôt à l’échelle de l’organisation

Quand vous créez une stratégie, vous choisissez si elle s’applique à tous les dépôts de votre organisation ou uniquement aux dépôts spécifiés. Si vous définissez une stratégie à l’échelle de l’organisation, alors toutes les stratégies que vous définissez pour des dépôts individuels doivent s’inscrire dans cet ensemble de restrictions au niveau de l’organisation. L’ajout de stratégies rend le choix du type de machine plus restrictif, et non moins restrictif.

Par exemple, vous pouvez créer une stratégie à l’échelle de l’organisation qui limite les types de machines à 2 ou 4 cœurs. Vous pouvez ensuite définir une stratégie pour le dépôt A qui les limite à seulement 2 cœurs. Si vous définissez une stratégie pour le dépôt A qui le limite à des machines dotées de 2, 4 ou 8 cœurs, vous pouvez uniquement choisir des machines à 2 et 4 cœurs, car la stratégie à l’échelle de l’organisation empêche l’accès à des machines à 8 cœurs.

Si vous ajoutez une stratégie à l’échelle de l’organisation, vous devez la définir sur le plus grand choix possible de types de machines disponibles pour un dépôt au sein de votre organisation. Vous pouvez ensuite ajouter des stratégies plus précises pour un dépôt afin de restreindre encore ce choix.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Ajout d’une stratégie pour limiter les types de machines disponibles

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Cliquez sur **Ajouter une contrainte** et choisissez **Types de machines**.

   ![Capture d’écran du menu déroulant « Ajouter une contrainte »](/assets/images/help/codespaces/add-constraint-dropdown.png)

1. Cliquez sur {% octicon "pencil" aria-label="The edit icon" %} pour modifier la contrainte, puis effacez la sélection des types de machines que vous ne voulez pas rendre disponibles.

   ![Capture d’écran de l’icône de crayon permettant de modifier la contrainte](/assets/images/help/codespaces/edit-machine-constraint.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Pour ajouter une autre contrainte à la stratégie, cliquez sur **Ajouter une contrainte** et choisissez une autre contrainte. Pour plus d’informations sur les autres contraintes, consultez :
   * « [Restriction de l’image de base pour les codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces) »
   * « [Restriction de la visibilité des ports transférés](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports) »
   * « [Restriction de la période du délai d’inactivité](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period) »
   * « [Restriction de la période de conservation pour les codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces) »
1. Une fois que vous avez terminé d’ajouter des contraintes à votre stratégie, cliquez sur **Enregistrer**.

La stratégie sera appliquée à tous les nouveaux codespaces facturables à votre organisation. La contrainte de type de machine est également appliquée aux codespaces existants quand une personne tente de redémarrer un codespace arrêté ou de se reconnecter à un codespace actif.

## Modification d’une stratégie

Vous pouvez modifier une stratégie existante. Par exemple, vous avez peut-être besoin d’ajouter ou de supprimer des contraintes dans une stratégie.

1. Affichez la page « Stratégies de codespace ». Pour plus d’informations, consultez « [Ajout d’une stratégie pour limiter les types de machines disponibles](#adding-a-policy-to-limit-the-available-machine-types) ».
1. Cliquez sur le nom de la stratégie à modifier.
1. Cliquez sur l’icône de crayon ({% octicon "pencil" aria-label="The edit icon" %}) à côté de la contrainte « Types de machine ».
1. Apportez les changements nécessaires, puis cliquez sur **Enregistrer**.

## Suppression d’une stratégie 

1. Affichez la page « Stratégies de codespace ». Pour plus d’informations, consultez « [Ajout d’une stratégie pour limiter les types de machines disponibles](#adding-a-policy-to-limit-the-available-machine-types) ».
1. Cliquez sur le bouton Supprimer à droite de la stratégie à supprimer.

   ![Capture d’écran du bouton de suppression d’une stratégie](/assets/images/help/codespaces/policy-delete.png)

## Pour aller plus loin

- « [Gestion des limites de dépenses pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces) »
