---
title: Restriction de l’image de base pour les codespaces
shortTitle: Restrict base image
intro: Vous pouvez spécifier les images de base à utiliser pour les nouveaux codespaces créés au sein de votre organisation.
permissions: 'To manage image constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
ms.openlocfilehash: f17bb20aa919ca94cd13e14a6f770cea23042b2b
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188279'
---
## Vue d’ensemble

Quand vous créez un codespace, un conteneur Docker est automatiquement créé sur une machine virtuelle distante. Le conteneur Docker est créé à partir d’une image Docker. L’image est en fait un modèle pour les conteneurs Docker et détermine de nombreux aspects de l’environnement résultant fourni par le codespace.

Vous pouvez choisir l’image que vous souhaitez utiliser pour vos codespaces en la spécifiant dans la configuration de conteneur de développement d’un dépôt. Pour cela, vous pouvez par exemple utiliser la propriété `image` dans le fichier `devcontainer.json`.

```json{:copy}
"image": "mcr.microsoft.com/vscode/devcontainers/javascript-node:18",
```

Pour plus d’informations, consultez la [spécification des conteneurs de développement](https://containers.dev/implementors/json_reference/) sur containers.dev.

Si vous ne spécifiez pas d’image dans la configuration de conteneur de développement d’un dépôt, l’image par défaut est utilisée. L’image par défaut contient un certain nombre de versions du runtime pour des langages et des outils couramment utilisés. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration) ».

En tant que propriétaire de l’organisation, vous pouvez ajouter une stratégie afin de restreindre les images pouvant être utilisées pour les codespaces créés au sein de votre organisation.

Si l’image spécifiée dans la configuration de conteneur de développement ne correspond pas à l’une des images autorisées, le message suivant s’affiche quand quelqu’un tente de créer un codespace pour le dépôt :

> Impossible de créer le codespace : l’image de base « DETAILS FROM DEV CONTAINER CONFIGURATION » n’est pas autorisée en raison d’une stratégie d’organisation définie par l’administrateur de votre organisation.

{% note %}

**Remarques**: 
* La stratégie d’image de base est uniquement appliquée quand un codespace est créé. Elle n’est pas actuellement appliquée quand vous regénérez un conteneur. Ceci sera changé dans une future version. Pour plus d’informations, consultez « [Cycle de vie d’un codespace](/codespaces/getting-started/the-codespace-lifecycle#rebuilding-a-codespace) ».
* La stratégie d’image de base ne s’applique ni à l’image par défaut ni à celle utilisée pour récupérer un codespace si une erreur introduite dans une configuration de conteneur de développement empêche la regénération du conteneur. 

{% endnote %}

### Définition de stratégies spécifiques d’un dépôt à l’échelle de l’organisation

Quand vous créez une stratégie, vous choisissez si elle s’applique à tous les dépôts de votre organisation ou uniquement aux dépôts spécifiés. Si vous définissez une stratégie à l’échelle de l’organisation, alors toutes les stratégies que vous définissez pour des dépôts individuels doivent s’inscrire dans cet ensemble de restrictions au niveau de l’organisation. L’ajout de stratégies rend le choix de l’image plus restrictif, et non moins restrictif.

Par exemple, vous pouvez créer une stratégie à l’échelle de l’organisation qui restreint l’image de base à l’une des dix images spécifiées. Vous pouvez ensuite définir une stratégie pour le dépôt A qui restreint l’image à un sous-ensemble de seulement deux des images spécifiées au niveau de l’organisation. La spécification d’images supplémentaires pour le dépôt A n’a aucun effet, car ces images ne sont pas spécifiées dans la stratégie au niveau de l’organisation. Si vous ajoutez une stratégie à l’échelle de l’organisation, vous devez la définir sur le plus grand choix possible d’images disponibles pour n’importe quel dépôt au sein de votre organisation. Vous pouvez ensuite ajouter des stratégies plus précises pour un dépôt afin de restreindre encore ce choix.

{% data reusables.codespaces.codespaces-org-policies-note %}

## Ajout d’une stratégie pour définir les images autorisées

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.codespaces.codespaces-org-policies %}
1. Cliquez sur **Ajouter une contrainte**, puis choisissez **Images de base**.

   ![Capture d’écran du menu déroulant « Ajouter une contrainte »](/assets/images/help/codespaces/add-constraint-dropdown-image.png)

1. Cliquez sur {% octicon "pencil" aria-label="The edit icon" %} pour modifier la contrainte.

   ![Capture d’écran de l’icône de crayon permettant de modifier la contrainte](/assets/images/help/codespaces/edit-image-constraint.png)

1. Dans le champ « Valeurs autorisées », entrez l’URL complète d’une image que vous souhaitez autoriser.

   ![Capture d’écran d’une entrée dans le champ « Valeurs autorisées »](/assets/images/help/codespaces/image-allowed-values.png)
 
   {% note %}

   **Remarque** : Vous devez spécifier une URL d’image qui correspond exactement à la valeur spécifiée dans une configuration de conteneur de développement.

   {% endnote %}

1. Cliquez sur le bouton plus ({% octicon "plus" aria-label="The plus icon" %}) pour ajouter la valeur.
1. Si nécessaire, répétez les deux étapes précédentes pour ajouter d’autres URL d’images.
{% data reusables.codespaces.codespaces-policy-targets %}
1. Pour ajouter une autre contrainte à la stratégie, cliquez sur **Ajouter une contrainte** et choisissez une autre contrainte. Pour plus d’informations sur les autres contraintes, consultez :
   * « [Restriction de l’accès aux types d’ordinateurs](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) »
   * « [Restriction de la visibilité des ports transférés](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports) »
   * « [Restriction de la période du délai d’inactivité](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period) »
   * « [Restriction de la période de conservation pour les codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces) »
1. Une fois que vous avez terminé d’ajouter des contraintes à votre stratégie, cliquez sur **Enregistrer**.

La stratégie est appliquée quand quelqu’un tente de créer un codespace facturable à votre organisation. La contrainte d’image de base n’affecte pas les codespaces existants, qu’ils soient actifs ou arrêtés.

## Modification d’une stratégie

Vous pouvez modifier une stratégie existante. Par exemple, vous avez peut-être besoin d’ajouter ou de supprimer des contraintes dans une stratégie.

1. Affichez la page « Stratégies de codespace ». Pour plus d’informations, consultez « [Ajout d’une stratégie pour définir les images autorisées](#adding-a-policy-to-define-the-allowed-images) ».
1. Cliquez sur le nom de la stratégie à modifier.
1. Cliquez sur l’icône représentant un crayon ({% octicon "pencil" aria-label="The edit icon" %}) à côté de la contrainte « Images de base ».
1. Ajoutez ou supprimez des URL d’images.
1. Cliquez sur **Enregistrer**.

## Suppression d’une stratégie 

1. Affichez la page « Stratégies de codespace ». Pour plus d’informations, consultez « [Ajout d’une stratégie pour définir les images autorisées](#adding-a-policy-to-define-the-allowed-images) ».
1. Cliquez sur le bouton Supprimer à droite de la stratégie à supprimer.

   ![Capture d’écran du bouton de suppression d’une stratégie](/assets/images/help/codespaces/policy-delete.png)
