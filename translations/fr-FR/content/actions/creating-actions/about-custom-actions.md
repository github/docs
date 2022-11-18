---
title: À propos des actions personnalisées
intro: 'Les actions sont des tâches individuelles que vous pouvez combiner pour créer des travaux et personnaliser votre workflow. Vous pouvez soit créer vos propres actions, soit utiliser et personnaliser celles qui sont partagées par la communauté {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/about-actions
  - /github/automating-your-workflow-with-github-actions/about-actions
  - /actions/automating-your-workflow-with-github-actions/about-actions
  - /actions/building-actions/about-actions
  - /actions/creating-actions/about-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Action development
  - Fundamentals
ms.openlocfilehash: ac933a5014750f75373fafa7f8dd52333b79a469
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147154572'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des actions personnalisées

Vous pouvez créer des actions en écrivant du code personnalisé qui interagit avec votre dépôt comme vous le souhaitez, notamment en s’intégrant aux API de {% data variables.product.prodname_dotcom %} et à n’importe quelle API tierce disponible publiquement. Par exemple, une action peut publier des modules npm, envoyer des alertes par SMS lors de la création de problèmes urgents ou déployer du code prêt pour la production.

{% ifversion fpt or ghec %} Vous pouvez écrire vos propres actions afin de les utiliser dans votre workflow ou partager les actions que vous créez avec la communauté {% data variables.product.prodname_dotcom %}. Si vous souhaitez partager les actions que vous avez créées avec tout le monde, votre dépôt doit être public. {% ifversion internal-actions %}Pour partager des actions uniquement au sein de votre entreprise, votre référentiel doit être interne.{% endif %} {% endif %}

Les actions peuvent s’exécuter directement sur un ordinateur ou dans un conteneur Docker. Vous pouvez définir les entrées, les sorties et les variables d’environnement d’une action.

## Types d’actions

Vous pouvez créer des actions de conteneur Docker et JavaScript. Les actions nécessitent un fichier de métadonnées pour définir les entrées, les sorties et le point d’entrée principal de votre action. Le nom de fichier des métadonnées doit être soit `action.yml`, soit `action.yaml`. Pour plus d’informations, consultez « [Syntaxe des métadonnées pour {% data variables.product.prodname_actions %} »](/articles/metadata-syntax-for-github-actions).

| Type | Système d’exploitation |
| ---- | ------------------- |
| Conteneur Docker | Linux |
| JavaScript | Linux, macOS, Windows |
| Actions composites | Linux, macOS, Windows |

### Actions de conteneur Docker

Les conteneurs Docker empaquettent l’environnement avec le code {% data variables.product.prodname_actions %}. Cela crée une unité de travail plus cohérente et plus fiable, car le consommateur de l’action n’a pas à s’inquiéter des outils ou des dépendances.

Un conteneur Docker vous permet d’utiliser des versions spécifiques du système d’exploitation, des dépendances, des outils et du code. Pour les actions qui doivent s’exécuter dans une configuration d’environnement spécifique, Docker est idéal car il permet de personnaliser le système d’exploitation et les outils. Étant donné la latence nécessaire à la création et à la récupération du conteneur, les actions de conteneur Docker sont souvent plus lentes que les actions JavaScript.

Les actions de conteneur Docker peuvent uniquement s’exécuter sur des exécuteurs où est installé un système d’exploitation Linux. {% data reusables.actions.self-hosted-runner-reqs-docker %}

### Actions JavaScript

Les actions JavaScript peuvent s’exécuter directement sur la machine de l’exécuteur et séparer le code d’action de l’environnement qui est utilisé pour exécuter le code. L’utilisation d’une action JavaScript simplifie le code d’action et permet une exécution plus rapide qu’une action de conteneur Docker.

{% data reusables.actions.pure-javascript %}

Si vous développez un projet Node.js, le kit de ressources {% data variables.product.prodname_actions %} fournit des packages que vous pouvez utiliser dans votre projet pour accélérer le développement. Pour plus d’informations, consultez le dépôt [actions/toolkit](https://github.com/actions/toolkit).

### Actions composites

Une action _composite_ permet de combiner plusieurs étapes de workflow dans une même action. Par exemple, vous pouvez utiliser cette fonctionnalité pour regrouper plusieurs commandes d’exécution dans une action, puis utiliser un workflow pour exécuter les commandes groupées en une seule étape à l’aide de cette action. Pour voir un exemple, consultez « [Création d’une action composite](/actions/creating-actions/creating-a-composite-action) ».

## Choisir un emplacement pour votre action

Si vous développez une action pour que d’autres personnes l’utilisent, nous vous recommandons de stocker l’action dans son propre dépôt au lieu de la regrouper avec d’autres codes d’application. Ceci vous permet de versionner, d’effectuer le suivi et de publier l’action comme vous le feriez pour n’importe quel autre logiciel.

{% ifversion fpt or ghec %} Le stockage d’une action dans son propre dépôt facilite la découverte de l’action par la communauté {% data variables.product.prodname_dotcom %}, restreint l’étendue de la base de code pour les développeurs qui corrigent les problèmes et étendent l’action, et dissocient le versioning de l’action de celui des autres codes d’application.
{% endif %}

{% data reusables.actions.internal-actions-summary %}

{% ifversion fpt or ghec %}Si vous créez une action que vous ne prévoyez pas de mettre à disposition d’autres personnes, vous {% else %} Vous{% endif %} pouvez stocker les fichiers de l’action dans n’importe quel emplacement de votre dépôt. Si vous prévoyez de combiner le code des actions, des workflows et de l’application dans un même dépôt, nous vous recommandons de stocker les actions dans le référentiel `.github`. Par exemple : `.github/actions/action-a` et `.github/actions/action-b`.

## Compatibilité avec {% data variables.product.prodname_ghe_server %}

Pour garantir la compatibilité de votre action avec {% data variables.product.prodname_ghe_server %}, vous ne devez utiliser aucune référence codée en dur aux URL d’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. Vous devez plutôt utiliser des variables d’environnement pour référencer l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} :

- Pour l’API REST, utilisez la variable d’environnement `GITHUB_API_URL`.
- Pour GraphQL, utilisez la variable d’environnement `GITHUB_GRAPHQL_URL`.

Pour plus d’informations, consultez « [Variables d’environnement par défaut](/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables) ».

## Using release management for actions

Cette section explique comment utiliser la gestion des mises en production pour distribuer les mises à jour de vos actions de manière prévisible.

### Bonnes pratiques concernant la gestion des mises en production

Si vous développez une action pour que d’autres personnes l’utilisent, nous vous recommandons d’utiliser la gestion des mises en production afin de contrôler la façon dont vous distribuez les mises à jour. Les utilisateurs peuvent s’attendre à ce que la version corrective d’une action inclue les correctifs critiques et les correctifs de sécurité nécessaires, tout en restant compatibles avec leurs workflows existants. Il est conseillé de publier une nouvelle version majeure chaque fois que vos modifications affectent la compatibilité.

Dans cette approche de gestion des mises en production, les utilisateurs ne doivent pas référencer la branche par défaut d’une action, car celle-ci est susceptible de contenir le code le plus récent et donc, d’être instable. Vous pouvez plutôt recommander à vos utilisateurs de spécifier une version majeure lorsqu’ils utilisent votre action, et les diriger vers une version plus spécifique uniquement s’ils rencontrent des problèmes.

Pour utiliser une version d’action spécifique, les utilisateurs peuvent configurer leur workflow {% data variables.product.prodname_actions %} pour cibler une étiquette, un SHA de commit ou une branche nommée dans le cadre d’une publication.

### Utilisation d’étiquettes pour la gestion des mises en production

Nous vous recommandons d’utiliser des étiquettes pour la gestion des mises en production des actions. Cette approche permet aux utilisateurs de facilement distinguer les versions majeures des versions mineures.

- Créez et validez une publication sur une branche de publication (comme `release/v1`) avant de créer l’étiquette de publication (par exemple `v1.0.2`).
- Créez une version à l’aide du versioning sémantique. Pour plus d’informations, consultez « [Création de versions](/articles/creating-releases) ».
- Déplacez l’étiquette de version majeure (par exemple `v1`, `v2`) pour qu’elle pointe vers la référence Git de la publication actuelle. Pour plus d’informations, consultez « [Git basics - tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) ».
- Introduisez une nouvelle étiquette de version majeure (`v2`) pour les modifications qui vont casser les workflows existants. Par exemple, la modification des entrées d’une action constituerait un changement cassant.
- Les versions principales peuvent être initialement publiées avec une étiquette `beta` pour indiquer leur état, par exemple `v2-beta`. L’étiquette `-beta` peut ensuite être supprimée une fois la version prête.

Cet exemple montre comment un utilisateur peut référencer une étiquette de version principale :

```yaml
steps:
    - uses: actions/javascript-action@v1
```

Cet exemple montre comment un utilisateur peut référencer une étiquette de version corrective :

```yaml
steps:
    - uses: actions/javascript-action@v1.0.1
```

### Utilisation de branches pour la gestion des mises en production

Si vous préférez utiliser des noms de branche pour la gestion des mises en production, cet exemple montre comment référencer une branche nommée :

```yaml
steps:
    - uses: actions/javascript-action@v1-beta
```

### Utilisation du SHA d’un commit pour la gestion des mises en production

Chaque commit Git reçoit une valeur de SHA calculée, qui est unique et non modifiable. Les utilisateurs de votre action peuvent préférer s’appuyer sur la valeur SHA d’un commit, car cette approche peut être plus fiable que la spécification d’une étiquette, qui peut être supprimée ou déplacée. Toutefois, cela signifie que les utilisateurs ne recevront pas les prochaines mises à jour de l’action. Vous devez utiliser la valeur SHA complète d’un commit et non une valeur abrégée.

```yaml
steps:
    - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

## Création d’un fichier README pour votre action

Nous vous recommandons de créer un fichier README pour aider les utilisateurs à utiliser votre action. Vous pouvez inclure les informations suivantes dans votre `README.md` :

- Une description détaillée de ce que fait l’action
- Les arguments d’entrée et de sortie obligatoires
- Les arguments d’entrée et de sortie facultatifs
- Les secrets utilisés par l’action
- Les variables d’environnement utilisées par l’action
- Un exemple d’utilisation de votre action dans un workflow

## Comparaison de {% data variables.product.prodname_actions %} et de {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_marketplace %} offre des outils qui permettent d’améliorer votre workflow. Le fait de comprendre les différences qui existent entre chaque outil et les avantages que chacun présente vous permettra de sélectionner celui qui est le mieux adapté à votre travail. Pour plus d’informations sur la création d’applications, consultez « [À propos des applications](/apps/about-apps/) ».

### Points forts de GitHub Actions et de GitHub Apps

Même si {% data variables.product.prodname_actions %} et {% data variables.product.prodname_github_apps %} permettent tous les deux de créer des outils d’automatisation et de workflow, ils ont chacun des points forts qui les rendent utiles de différentes manières.

{% data variables.product.prodname_github_apps %} :
* S’exécute en continu et peut réagir rapidement aux événements.
* Fonctionne très bien lorsque des données persistantes sont nécessaires.
* Fonctionne mieux avec les requêtes d’API qui ne prennent pas beaucoup de temps.
* S’exécute sur un serveur ou une infrastructure de calcul que vous fournissez.

{% data variables.product.prodname_actions %} :
* Fournit une automatisation capable d’effectuer une intégration continue et un déploiement continu.
* Peut s’exécuter directement sur des machines d’exécuteurs ou dans des conteneurs Docker.
* Peut inclure l’accès à un clone de votre dépôt, l’activation des outils de déploiement et de publication, des formateurs de code et des outils en ligne de commande pour accéder à votre code.
* Ne nécessite pas le déploiement de code ni la distribution d’une application.
* Dispose d’une interface simple pour créer et utiliser des secrets, ce qui permet aux actions d’interagir avec des services tiers sans avoir à stocker les informations d’identification de la personne qui utilise l’action.

## Pour aller plus loin

- [Outils de développement pour {% data variables.product.prodname_actions %}](/articles/development-tools-for-github-actions)
