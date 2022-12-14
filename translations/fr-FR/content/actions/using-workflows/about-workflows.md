---
title: À propos des workflows
shortTitle: About workflows
intro: 'Obtenez une vue d’ensemble générale des workflows {% data variables.product.prodname_actions %}, notamment les déclencheurs, la syntaxe et les fonctionnalités avancées.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/learn-github-actions/managing-complex-workflows
  - /actions/using-workflows/advanced-workflow-features
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cb0b834604d49432d34cec48b0c9f27e37161804
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '146180510'
---
## À propos des workflows

{% data reusables.actions.about-workflows-long %}

## Concepts de workflow de base

Un workflow doit contenir les composants de base suivants :

1. Un ou plusieurs _événements_ qui déclenchent le workflow.
1. Un ou plusieurs _travaux_, dont chacun s’exécute sur un ordinateur _exécuteur_ et exécute une série d’une ou plusieurs _étapes_.
1. Chaque étape peut exécuter un script que vous définissez ou une action, qui est une extension réutilisable qui peut simplifier votre workflow.

Pour plus d’informations sur ces composants élémentaires, consultez « [Présentation de GitHub Actions](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions) ».

![Vue d’ensemble du workflow](/assets/images/help/images/overview-actions-simple.png)

## Déclenchement d’un workflow

{% data reusables.actions.about-triggers %}

Pour plus d’informations, consultez « [Déclenchement d’un workflow](/actions/using-workflows/triggering-a-workflow) » et pour obtenir la liste complète des événements, consultez « [Événements qui déclenchent des workflows](/actions/using-workflows/events-that-trigger-workflows) ».

## Syntaxe des workflows

Les workflows sont définis à l’aide de YAML. Pour obtenir la référence complète de la syntaxe YAML pour la création de workflow, consultez « [Syntaxe des workflows pour GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows) ».


{% data reusables.actions.workflow-basic-example-and-explanation %}

Pour plus d’informations sur la gestion des exécutions de workflow, telles que la réexécution, l’annulation ou la suppression d’une exécution de workflow, consultez « [Gestion des exécutions de workflow](/actions/managing-workflow-runs) ».

## Utilisation de workflows de démarrage

{% data reusables.actions.workflow-template-overview %}

Pour plus d’informations sur l’utilisation et la création de workflows de démarrage, consultez « [Utilisation des workflows de démarrage](/actions/using-workflows/using-starter-workflows) » et « [Création de workflows de démarrage pour votre organisation](/actions/using-workflows/creating-starter-workflows-for-your-organization) ».

## Fonctionnalités de workflow avancées

Cet section décrit brièvement certaines des fonctionnalités avancées de {% data variables.product.prodname_actions %} qui vous aident à créer des workflows plus complexes.

### Stockage des secrets

Si vos workflows utilisent des données sensibles, telles que des mots de passe ou des certificats, vous pouvez les enregistrer dans {% data variables.product.prodname_dotcom %} en tant que _secrets_, puis les utiliser dans vos workflows en tant que variables d’environnement. Cela signifie que vous pourrez créer et partager des workflows sans avoir à incorporer des valeurs sensibles directement dans la source YAML du workflow.

Cet exemple de travail montre comment référencer un secret existant en tant que variable d’environnement et l’envoyer en tant que paramètre à un exemple de commande.

{% raw %}
```yaml
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Retrieve secret
        env:
          super_secret: ${{ secrets.SUPERSECRET }}
        run: |
          example-command "$super_secret"
```
{% endraw %}

Pour plus d’informations, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».

### Création de travaux dépendants

Par défaut, les travaux de votre workflow s’exécutent simultanément en parallèle. Si vous avez un travail qui doit s’exécuter uniquement une fois qu’un autre travail est terminé, vous pouvez utiliser le mot clé `needs` pour créer cette dépendance. Si l’un des travaux échoue, tous les travaux dépendants sont ignorés. Toutefois, si vous avez besoin que les travaux continuent, vous pouvez le définir à l’aide de l’instruction conditionnelle `if`.

Dans cet exemple, les travaux `setup`, `build` et `test` s’exécutent en série, avec `build` et `test` dépendants de la réussite du travail qui les précède :

```yaml
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - run: ./setup_server.sh
  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: ./build_server.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ./test_server.sh
```

Pour plus d’informations, consultez « [Définition des travaux prérequis](/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs) ».

### Utilisation d’une matrice

{% data reusables.actions.jobs.about-matrix-strategy %} La matrice est créée à l’aide du mot clé `strategy`, qui reçoit les options de génération sous forme de tableau. Par exemple, cette matrice exécute le travail plusieurs fois, à l’aide de différentes versions de Node.js :

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [12, 14, 16]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
```

Pour plus d’informations, consultez « [Utilisation d’une matrice pour vos travaux](/actions/using-jobs/using-a-matrix-for-your-jobs) ».

{% ifversion actions-caching %}
### Mise en cache des dépendances

Si vos travaux réutilisent régulièrement les dépendances, vous pouvez envisager de mettre en cache ces fichiers pour améliorer les performances. Une fois le cache créé, il est disponible pour tous les workflows dans le même dépôt.

Cet exemple montre comment mettre en cache le répertoire ` ~/.npm` :

```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
```

Pour plus d’informations, consultez « [Mise en cache des dépendances pour accélérer les workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows) ».
{% endif %}

### Utilisation de bases de données et de conteneurs de service

Si votre travail nécessite un service de base de données ou de cache, vous pouvez utiliser le mot clé [`services`](/actions/using-jobs/running-jobs-in-a-container) pour créer un conteneur éphémère afin d’héberger le service. Le conteneur obtenu est ensuite disponible pour toutes les étapes de ce travail et est supprimé une fois le travail terminé. Cet exemple montre comment un travail peut utiliser `services` pour créer un conteneur `postgres`, puis utiliser `node` pour se connecter au service.

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie
    services:
      postgres:
        image: postgres
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

Pour plus d’informations, consultez « [Utilisation des services conteneurisés](/actions/using-containerized-services) ».

### Utilisation d’étiquettes pour router des workflows

Si vous souhaitez vous assurer qu’un type particulier d’exécuteur traitera votre travail, vous pouvez utiliser des étiquettes pour contrôler l’emplacement d’exécution des travaux. Vous pouvez affecter des étiquettes à un exécuteur auto-hébergé en plus de son étiquette par défaut `self-hosted`. Ensuite, vous pouvez faire référence à ces étiquettes dans votre workflow YAML, en vous assurant que le travail est routé de manière prévisible.{% ifversion not ghae %} Des étiquettes prédéfinies sont affectées aux exécuteurs hébergés par {% data variables.product.prodname_dotcom %}.{% endif %}

Cet exemple montre comment un workflow peut utiliser des étiquettes pour spécifier l’exécuteur requis :

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

Un workflow s’exécute uniquement sur un exécuteur qui a toutes les étiquettes du tableau `runs-on`. Le travail va de préférence vers un exécuteur auto-hébergé inactif disposant des étiquettes spécifiées. {% ifversion fpt or ghec %}Si aucun n’est disponible et qu’il existe un exécuteur hébergé par {% data variables.product.prodname_dotcom %} disposant des étiquettes spécifiées, le travail va vers cet exécuteur hébergé par {% data variables.product.prodname_dotcom %}.{% endif %}

Pour en savoir plus sur les étiquettes d’exécuteur auto-hébergé, consultez « [Utilisation d’étiquettes avec des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners) ».

{% ifversion fpt or ghec %} Pour en savoir plus sur les étiquettes d’exécuteur hébergé par {% data variables.product.prodname_dotcom %}, consultez « [Exécuteurs et ressources matérielles pris en charge](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources) ».
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Réutilisation des workflows
{% data reusables.actions.reusable-workflows %} {% endif %}

### Utilisation des environnements

Vous pouvez configurer des environnements avec des règles de protection et des secrets pour contrôler l’exécution des travaux dans un workflow. Chaque travail d’un workflow peut référencer un seul environnement. Pour qu’un travail faisant référence à l’environnement soit envoyé à un exécuteur, toutes les règles de protection configurées pour l’environnement doivent d’abord être respectées. Pour plus d’informations, consultez « [Utilisation d’environnements pour le déploiement](/actions/deployment/using-environments-for-deployment) ».
