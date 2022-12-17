---
title: Recherche et personnalisation d’actions
shortTitle: Finding and customizing actions
intro: 'Les actions sont les éléments constitutifs de votre workflow. Un workflow peut contenir des actions créées par la communauté, ou vous pouvez créer vos propres actions directement dans le référentiel de votre application. Ce guide vous montrera comment découvrir, utiliser et personnaliser les actions.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
  - /actions/getting-started-with-github-actions/using-actions-from-github-marketplace
  - /actions/getting-started-with-github-actions/using-community-workflows-and-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Fundamentals
ms.openlocfilehash: cb2b8bb24e044bd559b0823ec7b0e4be7be1becb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147063793'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble

Les actions que vous utilisez dans votre workflow peuvent être définies dans :

- Le même dépôt que votre fichier de workflow{% ifversion internal-actions %}
- Un dépôt interne dans le même compte d’entreprise configuré pour autoriser l’accès aux workflows{% endif %}
- Tout dépôt public
- Une image conteneur Docker publiée sur Docker Hub

{% data variables.product.prodname_marketplace %} est un emplacement central où vous trouverez les actions créées par la communauté {% data variables.product.prodname_dotcom %}.{% ifversion fpt or ghec %} [La page {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/actions/) vous permet de filtrer les actions par catégorie. {% endif %}

{% data reusables.actions.enterprise-marketplace-actions %}

{% ifversion fpt or ghec %}

## Parcourir les actions de la Place de marché dans l’éditeur de workflow

Vous pouvez rechercher des actions et les parcourir directement dans l’éditeur de workflow de votre dépôt. Dans la barre latérale, vous pouvez rechercher une action spécifique, afficher les actions proposées et parcourir les catégories proposées. Vous pouvez également afficher le nombre d’étoiles qu’une action a reçues de la communauté {% data variables.product.prodname_dotcom %}.

1. Dans votre dépôt, accédez au fichier de workflow que vous souhaitez modifier.
1. Dans le coin supérieur droit de l’affichage des fichiers, pour ouvrir l’éditeur de workflow, cliquez sur {% octicon "pencil" aria-label="The edit icon" %}.
   ![Bouton Modifier le fichier de workflow](/assets/images/help/repository/actions-edit-workflow-file.png)
1. À droite de l’éditeur, utilisez la barre latérale {% data variables.product.prodname_marketplace %} pour parcourir les actions. Les actions avec le badge {% octicon "verified" aria-label="The verified badge" %} indiquent que {% data variables.product.prodname_dotcom %} a vérifié que le créateur de l’action est une organisation partenaire.
   ![Barre latérale du workflow de la Place de marché](/assets/images/help/repository/actions-marketplace-sidebar.png)

## Ajout d’une action à votre workflow

Vous pouvez ajouter une action à votre workflow en référençant l’action dans votre fichier de workflow. 

Vous pouvez afficher les actions référencées dans vos workflows {% data variables.product.prodname_actions %} en tant que dépendances dans le graphe des dépendances du dépôt contenant vos workflows. Pour plus d’informations, consultez « [À propos du graphe des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph) ».

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6269 %}

{% note %}

**Remarque :** Pour améliorer la sécurité, {% data variables.product.prodname_actions %} déprécie les redirections pour les actions. Cela signifie que lorsque le propriétaire ou le nom du dépôt d’une action est modifié, tous les workflows utilisant cette action avec le nom précédent échoueront.

{% endnote %}

{% endif %}

### Ajout d’une action depuis {% data variables.product.prodname_marketplace %}

La page de référencement d’une action inclut la version de l’action et la syntaxe de workflow requises pour utiliser l’action. Pour maintenir votre workflow stable même lorsque des mises à jour sont apportées à une action, vous pouvez référencer la version de l’action à utiliser en spécifiant le numéro d’étiquette Git ou Docker dans votre fichier de workflow.

1. Accédez à l’action que vous souhaitez utiliser dans votre workflow.
1. Sous « Installation », cliquez sur {% octicon "clippy" aria-label="The edit icon" %} pour copier la syntaxe de workflow.
   ![Affichage de la liste des actions](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. Collez la syntaxe en tant que nouvelle étape dans votre workflow. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps) ».
1. Si l’action vous oblige à fournir des entrées, définissez-les dans votre workflow. Pour obtenir des informations sur les entrées qu’une action peut nécessiter, consultez « [Utilisation d’entrées et de sorties avec une action](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action) ».

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}

### Ajout d’une action à partir du même dépôt

Si une action est définie dans le même dépôt que celui où votre fichier de workflow utilise l’action, vous pouvez référencer l’action avec la syntaxe `{owner}/{repo}@{ref}` ou `./path/to/dir` dans votre fichier de workflow.

Exemple de structure de fichier de dépôt :

```
|-- hello-world (repository)
|   |__ .github
|       └── workflows
|           └── my-first-workflow.yml
|       └── actions
|           |__ hello-world-action
|               └── action.yml
```

Exemple de fichier de workflow :

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # This step checks out a copy of your repository.
      - uses: {% data reusables.actions.action-checkout %}
      # This step references the directory that contains the action.
      - uses: ./.github/actions/hello-world-action
```

Le fichier `action.yml` est utilisé pour fournir des métadonnées pour l’action. Découvrez le contenu de ce fichier dans « [Syntaxe de métadonnées pour GitHub Actions](/actions/creating-actions/metadata-syntax-for-github-actions) ».

### Ajout d’une action à partir d’un autre dépôt

Si une action est définie dans un autre dépôt que celui de votre fichier de workflow, vous pouvez référencer l’action avec la syntaxe `{owner}/{repo}@{ref}` dans votre fichier de workflow.

L’action doit être stockée dans un dépôt public{% ifversion internal-actions %} ou un dépôt interne configuré pour autoriser l’accès aux workflows. Pour plus d’informations, consultez « [Partage d’actions et de workflows au sein de votre entreprise](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise) ».{% else %}.{% endif %}

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: {% data reusables.actions.action-setup-node %}
```

### Référencement d’un conteneur sur Docker Hub

Si une action est définie dans une image conteneur Docker publiée sur Docker Hub, vous devez référencer l’action avec la syntaxe `docker://{image}:{tag}` dans votre fichier de workflow. Pour protéger votre code et vos données, nous vous recommandons vivement de vérifier l’intégrité de l’image conteneur Docker à partir de Docker Hub avant de l’utiliser dans votre workflow.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

Pour obtenir des exemples d’actions Docker, consultez le [workflow Docker-image.yml](https://github.com/actions/starter-workflows/blob/main/ci/docker-image.yml) et « [Création d’une action de conteneur Docker](/articles/creating-a-docker-container-action) ».


## Utilisation de la gestion des mises en production pour vos actions personnalisées

Les créateurs d’une action de communauté ont la possibilité d’utiliser des étiquettes, des branches ou des valeurs SHA pour gérer les mises en production de l’action. Comme pour toute dépendance, vous devez indiquer la version de l’action que vous souhaitez utiliser en fonction de votre confort avec l’acceptation automatique des mises à jour de l’action.

Vous désignerez la version de l’action dans votre fichier de workflow. Consultez la documentation de l’action pour obtenir des informations sur son approche de la gestion des mises en production et pour voir quelle balise, branche ou valeur SHA utiliser.

{% note %}

**Remarque :** Nous vous recommandons d’utiliser une valeur SHA lors de l’utilisation d’actions tierces. Pour plus d’informations, consultez [Durcissement de la sécurité pour GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-third-party-actions)

{% endnote %}

### Utilisation des étiquettes

Les étiquettes sont utiles pour vous permettre de décider quand basculer entre les versions principales et mineures, mais elles sont plus éphémères et peuvent être déplacées ou supprimées par le chargé de maintenance. Cet exemple montre comment cibler une action étiquetée `v1.0.1` :

```yaml
steps:
  - uses: actions/javascript-action@v1.0.1
```

### Utilisation des valeurs SHA

Si vous avez besoin d’un contrôle de versions plus fiable, vous devez utiliser la valeur SHA associée à la version de l’action. Les valeurs SHA sont immuables et, par conséquent, plus fiables que les étiquettes ou les branches. Toutefois, cette approche signifie que vous ne recevrez pas automatiquement les mises à jour pour une action, y compris les mises à jour de sécurité et les correctifs de bogues importants. Vous devez utiliser la valeur SHA complète d’un commit et non une valeur abrégée. Cet exemple cible la valeur SHA d’une action :

```yaml
steps:
  - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

### Utilisation des branches

La spécification d’une branche cible pour l’action signifie qu’elle exécutera toujours la version figurant actuellement sur cette branche. Cette approche peut créer des problèmes si une mise à jour de la branche inclut des changements cassants. Cet exemple cible une branche nommée `@main` :

```yaml
steps:
  - uses: actions/javascript-action@main
```

Pour plus d’informations, consultez « [Utilisation de la gestion des mises en production pour les actions](/actions/creating-actions/about-actions#using-release-management-for-actions) ».

## Utilisation d’entrées et de sorties avec une action

Une action accepte ou nécessite souvent des entrées et génère des sorties que vous pouvez utiliser. Par exemple, une action peut exiger que vous spécifiiez un chemin d’accès à un fichier, le nom d’une étiquette ou d’autres données qu’elle utilisera dans le cadre du traitement de l’action.

Pour afficher les entrées et sorties d’une action, vérifiez `action.yml` ou `action.yaml` dans le répertoire racine du dépôt.

Dans cet exemple de fichier `action.yml`, le mot clé `inputs` définit une entrée obligatoire appelée `file-path` et inclut une valeur par défaut qui sera utilisée si aucune valeur n’est spécifiée. Le mot clé `outputs` définit une sortie appelée `results-file`, qui vous indique où localiser les résultats.

```yaml
name: "Example"
description: "Receives file and generates output"
inputs:
  file-path: # id of input
    description: "Path to test script"
    required: true
    default: "test-file.js"
outputs:
  results-file: # id of output
    description: "Path to results file"
```

{% ifversion ghae %}

## Utilisation des actions incluses avec {% data variables.product.prodname_ghe_managed %}

Par défaut, vous pouvez utiliser la plupart des actions officielles créées par {% data variables.product.prodname_dotcom %} dans {% data variables.product.prodname_ghe_managed %}. Pour plus d’informations, consultez « [Utilisation d’actions dans {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/using-actions-in-github-ae) ».
{% endif %}

## Étapes suivantes

Pour continuer à découvrir {% data variables.product.prodname_actions %}, consultez « [Fonctionnalités essentielles de {% data variables.product.prodname_actions %}](/actions/learn-github-actions/essential-features-of-github-actions) ».
