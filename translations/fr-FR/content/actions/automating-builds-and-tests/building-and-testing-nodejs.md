---
title: Création et test de code Node.js
intro: Vous pouvez créer un workflow d’intégration continue (CI) pour générer et tester votre projet Node.js.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions
  - /actions/language-and-framework-guides/using-nodejs-with-github-actions
  - /actions/guides/building-and-testing-nodejs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Node
  - JavaScript
shortTitle: Build & test Node.js
ms.openlocfilehash: 25e44f1454387a84dd198ea9998d1ebc2f94cfe7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179022'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment créer un workflow d’intégration continue (CI) qui génère et teste du code Node.js. Si vos tests CI réussissent, vous pouvez déployer votre code ou publier un package.

## Prérequis

Il est recommandé d’avoir une compréhension de base du Node.js, du YAML, des options de configuration de workflows et de la création de fichiers de workflow. Pour plus d'informations, consultez les pages suivantes :

- « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) »
- « [Bien démarrer avec Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/) »

{% data reusables.actions.enterprise-setup-prereq %}

## Utilisation du workflow de démarrage Node.js

{% data variables.product.prodname_dotcom %} fournit un workflow de démarrage Node.js qui fonctionnera pour la plupart des projets Node.js. Ce guide inclut des exemples npm et Yarn que vous pouvez utiliser pour personnaliser le workflow de démarrage. Pour plus d’informations, consultez le [Workflow de démarrage Node.js](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml).

Pour commencer rapidement, ajoutez le workflow de démarrage au répertoire `.github/workflows` de votre dépôt. Le workflow indiqué ci-dessous suppose que la branche par défaut de votre dépôt est `main`.

```yaml{:copy}
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x, 15.x]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```

{% data reusables.actions.example-github-runner %}

## Spécification de la version de Node.js

Le moyen le plus simple de spécifier une version Node.js consiste à utiliser l’action `setup-node` fournie par {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez [`setup-node`](https://github.com/actions/setup-node/).

L’action `setup-node` prend une version Node.js en tant qu’entrée et configure cette version sur l’exécuteur. L’action `setup-node` recherche une version spécifique de Node.js dans le cache d’outils de chaque exécuteur et ajoute les fichiers binaires nécessaires à `PATH`, qui est conservé pour la suite du travail. L’action `setup-node` est recommandée pour utiliser Node.js avec {% data variables.product.prodname_actions %}, car cela garantit un comportement cohérent sur tous les exécuteurs et toutes les versions de Node.js. Si vous utilisez un exécuteur auto-hébergé, vous devez installer Node.js et l’ajouter à `PATH`.

Le workflow de démarrage inclut une stratégie de matrice qui génère et teste votre code avec quatre versions de Node.js : 10.x, 12.x, 14.x et 15.x. « x » est un caractère générique qui correspond à la dernière version mineure et corrective disponible d’une version donnée. Chaque version de Node.js spécifiée dans le tableau `node-version` crée un travail qui exécute les mêmes étapes.

Chaque travail peut accéder à la valeur définie dans le tableau matriciel `node-version` à l’aide du contexte `matrix`. L’action `setup-node` utilise le contexte comme entrée `node-version`. L’action `setup-node` configure chaque travail avec une version de Node.js différente avant de générer et de tester le code. Pour plus d’informations sur les stratégies de matrice et les contextes, consultez « [Syntaxe des workflows pour {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix) » et « [Contextes](/actions/learn-github-actions/contexts) ».

```yaml{:copy}
strategy:
  matrix:
    node-version: [10.x, 12.x, 14.x, 15.x]

steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
```

Vous pouvez également créer et tester du code avec des versions exactes de Node.js.

```yaml{:copy}
strategy:
  matrix:
    node-version: [8.16.2, 10.17.0]
```

Enfin, vous pouvez générer et tester du code à l’aide d’une seule version de Node.js.

```yaml{:copy}
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '12.x'
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```

Si vous ne spécifiez pas de version Node.js, {% data variables.product.prodname_dotcom %} utilise la version par défaut de l’environnement Node.js.
{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} Pour plus d’informations, consultez « [Spécifications pour les exécuteurs hébergés dans {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software) ».
{% endif %}

## Installer les dépendances

Des gestionnaires de dépendances npm et Yarn sont installés sur les exécuteurs qui sont hébergés dans {% data variables.product.prodname_dotcom %}. Vous pouvez utiliser npm et Yarn pour installer des dépendances dans votre workflow avant de générer et de tester votre code. Les exécuteurs Windows et Linux hébergés dans {% data variables.product.prodname_dotcom %} disposent également de Grunt, Gulp et Bower.

{% ifversion actions-caching %}Vous pouvez également mettre en cache les dépendances pour accélérer votre workflow. Pour plus d’informations, consultez « [Mise en cache des dépendances pour accélérer les workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows) ».{% endif %}

### Exemple d’utilisation de npm

Cet exemple installe les dépendances définies dans le fichier *package.json*. Pour plus d’informations, consultez [`npm install`](https://docs.npmjs.com/cli/install).

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm install
```

L’utilisation de `npm ci` installe les versions dans le fichier *package-lock.json* ou *npm-shrinkwrap.json*, et empêche les mises à jour du fichier verrouillé. L’utilisation de `npm ci` est généralement plus rapide que l’exécution de `npm install`. Pour plus d’informations, consultez [`npm ci`](https://docs.npmjs.com/cli/ci.html) et « [Présentation de `npm ci` pour des builds plus rapides et plus fiables](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable) ».

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm ci
```

### Exemple d’utilisation de Yarn

Cet exemple installe les dépendances définies dans le fichier *package.json*. Pour plus d’informations, consultez [`yarn install`](https://yarnpkg.com/en/docs/cli/install).

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn
```

Vous pouvez également passer `--frozen-lockfile` pour installer les versions dans le fichier `yarn.lock` et empêcher les mises à jour du fichier `yarn.lock`.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn --frozen-lockfile
```

### Exemple d’utilisation d’un registre privé et de création du fichier .npmrc

{% data reusables.actions.setup-node-intro %}

Pour vous authentifier auprès de votre registre privé, vous devez stocker votre jeton d’authentification npm en tant que secret. Par exemple, créez un secret de dépôt appelé `NPM_TOKEN`. Pour plus d’informations, consultez « [Création et utilisation de secrets chiffrés](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

Dans l’exemple ci-dessous, le secret `NPM_TOKEN` stocke le jeton d’authentification npm. L’action `setup-node` configure le fichier  *.npmrc* pour lire le jeton d’authentification npm à partir de la variable d’environnement `NODE_AUTH_TOKEN`. Lorsque vous utilisez l’action `setup-node` pour créer un fichier  *.npmrc*, vous devez définir la variable d’environnement avec le secret `NODE_AUTH_TOKEN` qui contient votre jeton d’authentification npm.

Avant d’installer des dépendances, utilisez l’action `setup-node` pour créer le fichier  *.npmrc*. L’action a deux paramètres d’entrée. Le paramètre `node-version` définit la version Node.js, et le paramètre `registry-url` définit le registre par défaut. Si votre registre de package utilise des étendues, vous devez utiliser le paramètre `scope`. Pour plus d’informations, consultez [`npm-scope`](https://docs.npmjs.com/misc/scope).

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    always-auth: true
    node-version: '12.x'
    registry-url: https://registry.npmjs.org
    scope: '@octocat'
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

L’exemple ci-dessus crée un fichier  *.npmrc* avec le contenu suivant :

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

{% ifversion actions-caching %}

### Exemple de mise en cache des dépendances

Vous pouvez mettre en cache et restaurer les dépendances à l’aide de l’[action `setup-node`](https://github.com/actions/setup-node).

L’exemple suivant met en cache les dépendances pour npm.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'npm'
- run: npm install
- run: npm test
```

L’exemple suivant met en cache les dépendances pour Yarn.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'yarn'
- run: yarn
- run: yarn test
```

L’exemple suivant met en cache les dépendances pour pnpm (v6.10+).

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

# NOTE: pnpm caching support requires pnpm version >= 6.10.0

steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: pnpm/action-setup@646cdf48217256a3d0b80361c5a50727664284f2
  with:
    version: 6.10.0
- uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '14'
    cache: 'pnpm'
- run: pnpm install
- run: pnpm test
```

Si vous avez une exigence particulière ou si vous avez besoin d’un contrôle plus précis pour la mise en cache, vous pouvez utiliser l’[action `cache`](https://github.com/marketplace/actions/cache). Pour plus d’informations, consultez « [Mise en cache des dépendances pour accélérer les workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows) ».

{% endif %}

## Génération et test de votre code

Vous pouvez utiliser les mêmes commandes que celles que vous utilisez localement pour générer et tester votre code. Par exemple, si vous exécutez `npm run build` pour exécuter des étapes de génération définies dans votre fichier *package.json*, et `npm test` pour exécuter votre suite de tests, vous devez ajouter ces commandes dans votre fichier de workflow.

```yaml{:copy}
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Use Node.js
  uses: {% data reusables.actions.action-setup-node %}
  with:
    node-version: '12.x'
- run: npm install
- run: npm run build --if-present
- run: npm test
```

## Empaquetage des données de workflow en tant qu’artefacts

Vous pouvez enregistrer les artefacts de vos étapes de génération et de test afin de les examiner une fois le travail terminé. Par exemple, vous devrez peut-être enregistrer des fichiers journaux, des vidages principaux, des résultats de test ou des captures d’écran. Pour plus d’informations, consultez « [Rendre persistantes des données de workflow à l’aide d’artefacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts) ».

## Publication dans des registres de package

Vous pouvez configurer votre workflow pour publier votre package Node.js dans un registre de package une fois vos tests CI réussis. Pour plus d’informations sur la publication dans npm et {% data variables.product.prodname_registry %}, consultez « [Publication de packages Node.js](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages) ».
