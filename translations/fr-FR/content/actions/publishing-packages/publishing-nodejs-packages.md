---
title: Publication de packages Node.js
intro: Vous pouvez publier des packages Node.js sur un registre dans le cadre de votre workflow d’intégration continue (CI).
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
  - /actions/guides/publishing-nodejs-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Node
  - JavaScript
shortTitle: Node.js packages
ms.openlocfilehash: 61196d4a5d63af6d52769a7a937d8c26f2c5a9a5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147705026'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide vous montre comment créer un workflow qui publie des packages Node.js sur les registres {% data variables.product.prodname_registry %} et npm après la réussite des tests d’intégration continue (CI).

## Prérequis

Il est recommandé d’avoir une compréhension de base des options de configuration de workflows et de la création de fichiers de workflow. Pour plus d’informations, consultez « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) ».

Pour plus d’informations sur la création d’un workflow CI pour votre projet Node.js, consultez « [Utilisation de Node.js avec {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions) ».

Vous pouvez également trouver utile d’avoir une compréhension de base des éléments suivants :

- « [Utilisation du registre npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) »
- « [Variables d’environnement](/actions/reference/environment-variables) »
- « [Secrets chiffrés](/actions/reference/encrypted-secrets) »
- « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow) »

## À propos de la configuration d’un package

 Les champs `name` et `version` dans le fichier *package.json* créent un identificateur unique que les registres utilisent pour lier votre package à un registre. Vous pouvez ajouter un résumé pour la page de la liste des packages en incluant un champ `description` dans le fichier *package.json*. Pour plus d’informations, consultez « [Création d’un fichier package.json](https://docs.npmjs.com/creating-a-package-json-file) » et « [Création de modules Node.js](https://docs.npmjs.com/creating-node-js-modules) » dans la documentation npm.

Lorsqu’un fichier *.npmrc* local existe et a une valeur `registry` spécifiée, la commande `npm publish` utilise le registre configuré dans le fichier *.npmrc*. {% data reusables.actions.setup-node-intro %}

Vous pouvez spécifier la version de Node.js installée sur l’exécuteur à l’aide de l’action `setup-node`.

Si vous ajoutez des étapes dans votre workflow pour configurer les champs `publishConfig` de votre fichier *package.json*, vous n’avez pas besoin de spécifier l’URL de registre à l’aide de l’action `setup-node`, mais vous serez limité à la publication du package sur un registre. Pour plus d’informations, consultez « [publishConfig](https://docs.npmjs.com/files/package.json#publishconfig) » dans la documentation npm.

## Publication de packages sur le registre npm

Chaque fois que vous créez une version, vous pouvez déclencher un workflow pour publier votre package. Le workflow de l’exemple ci-dessous s’exécute lorsque l’événement `release` se déclenche avec le type `created`. Le workflow publie le package sur le registre npm si les tests CI réussissent.

Pour effectuer des opérations authentifiées sur le registre npm dans votre workflow, vous devez stocker votre jeton d’authentification npm en tant que secret. Par exemple, créez un secret de dépôt appelé `NPM_TOKEN`. Pour plus d’informations, consultez « [Création et utilisation de secrets chiffrés](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

Par défaut, npm utilise le champ `name` du fichier *package.json* pour déterminer le nom de votre package publié. Lorsque vous publiez sur un espace de noms global, vous devez uniquement inclure le nom du package. Par exemple, vous allez publier un package nommé `npm-hello-world-test` sur `https://www.npmjs.com/package/npm-hello-world-test`.

Si vous publiez un package qui inclut un préfixe d’étendue, incluez l’étendue dans le nom de votre fichier *package.json*. Par exemple, si votre préfixe d’étendue npm est octocat et que le nom du package est hello-world, le `name` dans votre fichier *package.json* doit être `@octocat/hello-world`. Si votre package npm utilise un préfixe d’étendue et que le package est public, vous devez utiliser l’option `npm publish --access public`. Il s’agit d’une option requise par npm pour empêcher une personne de publier involontairement un package privé.

Cet exemple stocke le secret `NPM_TOKEN` dans la variable d’environnement `NODE_AUTH_TOKEN`. Lorsque l’action `setup-node` crée un fichier *.npmrc*, elle fait référence au jeton à partir de la variable d’environnement `NODE_AUTH_TOKEN`.

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

Dans l’exemple ci-dessus, l’action `setup-node` crée un fichier *.npmrc* sur l’exécuteur avec le contenu suivant :

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

Notez que vous devez définir l’`registry-url` sur `https://registry.npmjs.org/` dans `setup-node` pour configurer correctement vos informations d’identification.

## Publication de packages sur {% data variables.product.prodname_registry %}

Chaque fois que vous créez une version, vous pouvez déclencher un workflow pour publier votre package. Le workflow de l’exemple ci-dessous s’exécute chaque fois que l’événement `release` avec le type `created` se produit. Le workflow publie le package sur {% data variables.product.prodname_registry %} si les tests CI réussissent.

### Configuration du dépôt de destination

La liaison de votre package à {% data variables.product.prodname_registry %} à l’aide de la clé `repository` est facultative. Si vous choisissez de ne pas fournir la clé `repository` dans votre fichier *package.json*, {% data variables.product.prodname_registry %} publie un package sur le dépôt {% data variables.product.prodname_dotcom %} que vous spécifiez dans le champ `name` du fichier *package.json*. Par exemple, un package nommé `@my-org/test` est publié sur le dépôt {% data variables.product.prodname_dotcom %} `my-org/test`. Si le `url` spécifié dans la clé `repository` n’est pas valide, votre package pourra quand même être publié. Cependant, il ne sera pas lié à la source du dépôt comme prévu.

Si vous fournissez la clé `repository` de votre fichier *package.json*, le dépôt de cette clé est utilisé comme registre npm de destination pour {% data variables.product.prodname_registry %}. Par exemple, la publication du fichier *package.json* ci-dessous entraîne la publication d’un package nommé `my-amazing-package` sur le dépôt {% data variables.product.prodname_dotcom %} `octocat/my-other-repo`. Une fois publié, seule la source du dépôt est mise à jour et le package n’hérite d’aucune autorisation du dépôt de destination.

```json
{
  "name": "@octocat/my-amazing-package",
  "repository": {
    "type": "git",
    "url": "https://github.com/octocat/my-other-repo.git"
  },
```

### Authentification auprès du dépôt de destination

Pour effectuer des opérations authentifiées sur le registre {% data variables.product.prodname_registry %} dans votre workflow, vous pouvez utiliser `GITHUB_TOKEN`. {% data reusables.actions.github-token-permissions %}

Si vous souhaitez publier votre package sur un autre dépôt, vous devez utiliser un jeton d’accès personnel (PAT) qui a l’autorisation d’écrire dans des packages dans le dépôt de destination. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) » et « [Secrets chiffrés](/actions/reference/encrypted-secrets) ».

### Exemple de flux de travail

Cet exemple stocke le secret `GITHUB_TOKEN` dans la variable d’environnement `NODE_AUTH_TOKEN`. Lorsque l’action `setup-node` crée un fichier *.npmrc*, elle fait référence au jeton à partir de la variable d’environnement `NODE_AUTH_TOKEN`.

```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to GitHub Packages
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://npm.pkg.github.com'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

L’action `setup-node` crée un fichier *.npmrc* sur l’exécuteur. Lorsque vous utilisez l’entrée `scope` pour l’action `setup-node`, le fichier *.npmrc* inclut le préfixe d’étendue. Par défaut, l’action `setup-node` définit l’étendue dans le fichier *.npmrc* sur le compte qui contient ce fichier de workflow.

```ini
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

## Publication de packages à l’aide de yarn

Si vous utilisez le gestionnaire de package Yarn, vous pouvez installer et publier des packages à l’aide de Yarn.

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: yarn
      - run: yarn publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```
