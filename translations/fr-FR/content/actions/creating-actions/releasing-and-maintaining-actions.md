---
title: Publication et gestion des actions
shortTitle: Releasing and maintaining actions
intro: Vous pouvez tirer parti de l’automatisation et des bonnes pratiques open source pour la mise en production et la gestion des actions.
type: tutorial
topics:
  - Action development
  - Actions
  - Community
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
ms.openlocfilehash: 563a63a3af79c75c6912777c1c3f0ecdace6403e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145066880'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Après avoir créé une action, vous souhaiterez probablement publier d’autres fonctionnalités tout en utilisant les contributions de la communauté. Ce tutoriel décrit un exemple de processus que vous pouvez suivre pour publier et gérer des actions open source. L'exemple :

* Tire parti de {% data variables.product.prodname_actions %} pour l’intégration continue, les mises à jour des dépendances, la gestion des mises en production et l’automatisation des tâches.
* Garantit la confiance grâce aux tests automatisés et aux badges de build.
* Indique comment l’action peut être utilisée, idéalement dans le cadre d’un workflow plus étendu.
* Signale le type de contributions de la communauté qui sont les bienvenues. (par exemple : problèmes, demandes de tirage (pull request) ou rapports sur les vulnérabilités)

Pour obtenir un exemple d’application de ce processus, consultez [github-developer/javascript-action](https://github.com/github-developer/javascript-action).

## Développement et publication des actions

Dans cette section, nous allons aborder un exemple de processus de développement et de publication d’actions, et nous verrons comment utiliser {% data variables.product.prodname_actions %} pour automatiser le processus.

### À propos des actions JavaScript

Les actions JavaScript sont des dépôts Node.js contenant des métadonnées. Toutefois, les actions JavaScript ont des propriétés supplémentaires par rapport aux projets Node.js traditionnels :

* Les packages dépendants sont commités en même temps que le code, généralement dans un format compilé et minifié. Cela signifie que les builds automatisées et les contributions sécurisées de la communauté sont importantes.

{% ifversion fpt or ghec %}

* Les versions étiquetées peuvent être publiées directement dans {% data variables.product.prodname_marketplace %} et consommées par les workflows dans {% data variables.product.prodname_dotcom %}.

{% endif %}

* De nombreuses actions utilisent les API de {% data variables.product.prodname_dotcom %} et les API tierces. Nous encourageons donc à effectuer des tests robustes de bout en bout.

### Configuration des workflows {% data variables.product.prodname_actions %}

Pour prendre en charge le processus de développement dans la section suivante, ajoutez deux workflows {% data variables.product.prodname_actions %} à votre dépôt :

1. Ajoutez un workflow qui se déclenche lorsqu’un commit est poussé (push) à une branche de fonctionnalité ou à `main`, ou lorsqu’une demande de tirage (pull request) est créée. Configurez le workflow pour exécuter vos tests unitaires et vos tests d’intégration. Pour obtenir un exemple, consultez [ce workflow](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/test.yml).
2. Ajoutez un workflow qui se déclenche lorsqu’une version est publiée ou modifiée. Configurez le workflow de sorte que les étiquettes sémantiques soient en place. Vous pouvez utiliser une action comme [JasonEtco/build-and-tag-action](https://github.com/JasonEtco/build-and-tag-action) pour compiler et regrouper le fichier JavaScript et les métadonnées, et pour pousser les étiquettes sémantiques des versions majeures, mineures et correctives. Pour obtenir un exemple, consultez [ce workflow](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/publish.yml). Pour plus d’informations sur les étiquettes sémantiques, consultez « [À propos de la gestion sémantique de version](https://docs.npmjs.com/about-semantic-versioning) ».

### Exemple de processus de développement

Voici un exemple de processus que vous pouvez suivre pour exécuter automatiquement des tests, créer une version {% ifversion fpt or ghec%}, la publier dans {% data variables.product.prodname_marketplace %}{% endif %}, puis publier votre action.

1. Effectuez le travail relatif aux fonctionnalités dans les branches de chaque flux GitHub. Pour en savoir plus, consultez « [Flux GitHub](/get-started/quickstart/github-flow) ».
   * Chaque fois qu’un commit est poussé vers la branche de fonctionnalité, votre workflow de test exécute automatiquement les tests.

2. Créez des demandes de tirage pour la branche `main` afin de lancer une discussion et une révision, et d’effectuer une fusion lorsque vous êtes prêt.

   * Lorsqu’une demande de tirage est effectuée à partir d’une branche ou d’une duplication (fork), votre workflow de test réexécute les tests, cette fois avec le commit de fusion.

   * **Remarque :** Pour des raisons de sécurité, les workflows déclenchés par `pull_request` à partir de duplications ont des autorisations `GITHUB_TOKEN` limitées et n’ont pas accès aux secrets. Si vos tests ou d’autres workflows déclenchés lors de la demande de tirage nécessitent un accès aux secrets, utilisez un autre événement comme un [déclencheur manuel](/actions/reference/events-that-trigger-workflows#manual-events) ou un [`pull_request_target`](/actions/reference/events-that-trigger-workflows#pull_request_target). En savoir plus [ici](/actions/reference/events-that-trigger-workflows#pull-request-events-for-forked-repositories).

3. Créez une version étiquetée sémantiquement. {% ifversion fpt or ghec %} Vous pouvez également publier dans {% data variables.product.prodname_marketplace %} avec une simple case à cocher. {% endif %} Pour plus d’informations, consultez « [Gestion des versions dans un dépôt](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release) »{% ifversion fpt or ghec %} et « [Publication d’actions dans {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action) »{% endif %}.

   * Lorsqu’une version est publiée ou modifiée, votre workflow de version s’occupe automatiquement de la compilation et de l’ajustement des étiquettes.

   * Nous vous recommandons de créer des versions à l’aide d’étiquettes versionnées sémantiquement (par exemple `v1.1.3`) et de maintenir à jour les étiquettes des versions majeures (`v1`) et mineures (`v1.1`) à l’aide du dernier commit approprié. Pour plus d’informations, consultez « [À propos des actions personnalisées](/actions/creating-actions/about-custom-actions#using-release-management-for-actions) » et « [À propos du versioning sémantique](https://docs.npmjs.com/about-semantic-versioning) ».

### Résultats

Contrairement à d’autres stratégies automatisées de gestion des mises en production, ce processus choisit intentionnellement de ne pas commiter les dépendances dans la branche `main`, mais seulement les commits des versions étiquetées. Ainsi, vous encouragez les utilisateurs de votre action à référencer des étiquettes nommées ou des `sha`, et vous contribuez à garantir la sécurité des demandes de tirage tierces en effectuant la génération vous-même lors du processus de publication.

Avec l’utilisation des versions sémantiques, les utilisateurs de vos actions peuvent épingler leurs workflows à une version et savoir ainsi qu’ils continueront à recevoir les dernières fonctionnalités stables et non cassantes, selon leur niveau de confort :

## Collaborer avec la communauté

{% data variables.product.product_name %} fournit des outils et des guides qui vous aideront à travailler avec la communauté open source. Voici quelques outils que nous vous recommandons de configurer pour une bonne communication bidirectionnelle. En envoyant les signaux suivants à la communauté, vous encouragez les autres à utiliser, modifier et contribuer à votre action :

* Gérez un fichier `README` avec un grand nombre d’exemples d’utilisation et de conseils. Pour plus d’informations, consultez « [À propos des fichiers README](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) ».
* Incluez un badge d’état de workflow dans votre fichier `README`. Pour plus d’informations, consultez « [Ajout d’un badge d’état de workflow](/actions/managing-workflow-runs/adding-a-workflow-status-badge) ». Consultez également [shields.io](https://shields.io/) pour en savoir plus sur les autres badges que vous pouvez ajouter.{% ifversion fpt or ghec %}
* Ajoutez des fichiers d’intégrité de la communauté comme `CODE_OF_CONDUCT`, `CONTRIBUTING` et `SECURITY`. Pour plus d’informations, consultez « [Création d’un fichier d’intégrité de la communauté par défaut](/github/building-a-strong-community/creating-a-default-community-health-file#supported-file-types) ».{% endif %}
* Maintenez à jour l’état des problèmes en utilisant des actions comme [actions/stale](https://github.com/actions/stale).

## Pour aller plus loin

Voici quelques exemples où des modèles similaires sont utilisés :

* [github/super-linter](https://github.com/github/super-linter)
* [octokit/request-action](https://github.com/octokit/request-action)
* [github-developer/javascript-action](https://github.com/github-developer/javascript-action)
