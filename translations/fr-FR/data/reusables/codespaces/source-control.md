---
ms.openlocfilehash: c760b3f26f89437d485cc222de4fbc54fa907735
ms.sourcegitcommit: f464cc9bfc41132f315ea172c591bfd145a06736
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/15/2022
ms.locfileid: "148165459"
---
## Publication d’un codespace créé à partir d’un modèle

Lorsque vous créez un codespace à partir d’un dépôt de modèles ou d’un modèle de la page « Vos codespaces », le travail que vous effectuez n’est pas stocké dans un dépôt sur {% data variables.product.prodname_dotcom %} tant que vous n’avez pas publié votre codespace. Pour plus d’informations, consultez « [Création d’un codespace à partir d’un modèle](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-repository-on-github) ».

{% data reusables.codespaces.publishing-template-codespaces %}

## Création ou changement de branches

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**Conseil** : Si quelqu’un a récemment changé un fichier sur le dépôt distant, dans la branche vers laquelle vous avez basculé, il est possible que vous ne voyiez pas ces modifications tant que vous n’avez pas tiré les modifications dans votre codespace. 

{% endtip %}

## Validation (commit) de vos modifications 

{% data reusables.codespaces.source-control-commit-changes %} 

## Tirage de modifications à partir du dépôt distant

Vous pouvez tirer des modifications à partir du dépôt distant dans votre espace de code à tout moment. 

{% data reusables.codespaces.source-control-display-dark %}
1. En haut de la barre latérale, cliquez sur les points de suspension ( **…** ). ![Bouton Points de suspension pour Afficher et Autres actions](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. Dans le menu déroulant, cliquez sur **Tirer**.

Si la configuration du conteneur de développement a été modifiée depuis que vous avez créé l’espace de code, vous pouvez appliquer les modifications en recréant le conteneur pour l’espace de code. Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration) ».

## Définition de votre espace de code pour extraire automatiquement les nouvelles modifications 

Vous pouvez définir votre espace de code pour extraire automatiquement les détails des nouveaux commits qui ont été effectués dans le dépôt distant. Cela vous permet de voir si votre copie locale du dépôt est obsolète, auquel cas vous pouvez choisir d’extraire les nouvelles modifications. 

Si l’opération d’extraction détecte de nouvelles modifications sur le dépôt distant, vous voyez le nombre de nouveaux commits dans la barre d’état. Vous pouvez ensuite tirer les modifications dans votre copie locale.

1. Cliquez sur le bouton **Gérer** en bas de la barre d’activité.
![Bouton Gérer](/assets/images/help/codespaces/manage-button.png)
1. Dans le menu, cliquez sur **Paramètres**.
1. Dans la page Paramètres, recherchez : `autofetch`.
![Rechercher l’auto-extraction](/assets/images/help/codespaces/autofetch-search.png)
1. Pour extraire les détails des mises à jour pour tous les dépôts distants inscrits pour le dépôt actuel, définissez **Git : Auto-extraction** sur `all`.
![Activer l’auto-extraction Git](/assets/images/help/codespaces/autofetch-all.png)
1. Si vous souhaitez modifier le nombre de secondes entre deux extractions automatiques, modifiez la valeur de **Git : Période d’auto-extraction**.

## Création d’une demande de tirage

{% data reusables.codespaces.source-control-pull-request %} 

## Poussée (push) de modifications vers votre dépôt distant

Vous pouvez pousser les modifications que vous avez enregistrées et commitées. Cette opération applique ces modifications à la branche en amont sur le référentiel distant. Vous souhaitez peut-être effectuer cette opération si vous n’êtes pas encore prêt à créer une demande de tirage (pull request) ou si vous préférez créer une demande de tirage (pull request) sur {% data variables.product.prodname_dotcom %}.

1. En haut de la barre latérale, cliquez sur les points de suspension ( **…** ). ![Bouton Points de suspension pour Afficher et Autres actions](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. Dans le menu déroulant, cliquez sur **Pousser**.
