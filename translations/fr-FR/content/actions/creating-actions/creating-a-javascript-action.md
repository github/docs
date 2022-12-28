---
title: Creating a JavaScript action
shortTitle: Create a JavaScript action
intro: 'Dans ce guide, vous allez apprendre à générer une action JavaScript à l’aide du kit de ressources d’actions.'
redirect_from:
  - /articles/creating-a-javascript-action
  - /github/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/building-actions/creating-a-javascript-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - JavaScript
ms.openlocfilehash: 60fd562df55756afd081c395d9cffee89c2c04d6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192744'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Dans ce guide, vous allez découvrir les composants de base qui sont nécessaires pour créer et utiliser une action JavaScript empaquetée. Afin de nous concentrer sur les composants nécessaires à l’empaquetage de l’action, nous avons réduit la fonctionnalité du code de l’action à son strict minimum. L’action affiche « Hello World » dans les journaux ou « Hello [who-to-greet] » si vous fournissez un nom personnalisé.

Ce guide utilise le module Node.js du kit de ressources {% data variables.product.prodname_actions %} pour accélérer le développement. Pour plus d’informations, consultez le dépôt [actions/toolkit](https://github.com/actions/toolkit).

Une fois que vous aurez terminé ce projet, vous saurez comment créer votre propre action JavaScript et la tester dans un workflow.

{% data reusables.actions.pure-javascript %}

{% data reusables.actions.context-injection-warning %}

## Prérequis

Avant de commencer, vous devez télécharger Node.js et créer un dépôt public {% data variables.product.prodname_dotcom %}.

1. Téléchargez et installez Node.js {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}16.x{% else %}12.x{% endif %}, qui inclut npm.

  {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} https://nodejs.org/en/download/{% else %} https://nodejs.org/en/download/releases/{% endif %}

1. Créez un dépôt public sur {% data variables.location.product_location %} et appelez-le « hello-world-javascript-action ». Pour en savoir plus, consultez « [Créer un dépôt](/articles/creating-a-new-repository) ».

1. Clonez votre dépôt sur votre ordinateur. Pour plus d’informations, consultez « [Clonage d’un dépôt](/articles/cloning-a-repository) ».

1. À partir de votre terminal, remplacez les répertoires par votre nouveau dépôt.

  ```shell{:copy}
  cd hello-world-javascript-action
  ```

1. À partir de votre terminal, initialisez le répertoire avec npm pour générer un fichier `package.json`.

  ```shell{:copy}
  npm init -y
  ```

## Création d’un fichier de métadonnées d’action

Créez un fichier nommé `action.yml` dans le répertoire `hello-world-javascript-action` avec l’exemple de code suivant. Pour plus d’informations, consultez « [Syntaxe des métadonnées pour {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions) ».

```yaml{:copy}
name: 'Hello World'
description: 'Greet someone and record the time'
inputs:
  who-to-greet:  # id of input
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  time: # id of output
    description: 'The time we greeted you'
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
```

Ce fichier définit l’entrée `who-to-greet` et la sortie`time`. Il indique également à l’exécuteur d’actions comment exécuter cette action JavaScript.

## Ajout de packages de kit de ressources d’actions

Le kit de ressources d’actions est une collection de packages Node.js qui vous permet de créer rapidement des actions JavaScript avec plus de cohérence.

Le package [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) du kit de ressources fournit une interface aux commandes de workflow, aux variables d’entrée et de sortie, aux états de sortie et aux messages de débogage.

Le kit de ressources offre également un package [`@actions/github`](https://github.com/actions/toolkit/tree/main/packages/github) qui retourne un client REST Octokit authentifié et un accès aux contextes GitHub Actions.

Le kit de ressources offre plus que les packages `core` et `github`. Pour plus d’informations, consultez le dépôt [actions/toolkit](https://github.com/actions/toolkit).

À partir de votre terminal, installez les packages `core` et `github` du kit de ressources d’actions.

```shell{:copy}
npm install @actions/core
npm install @actions/github
```

Vous devez maintenant voir un répertoire `node_modules` avec les modules que vous venez d’installer, et un fichier `package-lock.json` comprenant les dépendances du module installé et les versions de chaque module installé.

## Écriture du code d’action

Cette action utilise le kit de ressources pour obtenir la variable d’entrée `who-to-greet` nécessaire dans le fichier de métadonnées de l’action, et affiche « Hello [who-to-greet] » dans un message de débogage dans le journal. Ensuite, le script obtient l’heure actuelle et la définit comme une variable de sortie que pourront utiliser les prochaines actions d’un travail.

GitHub Actions fournit des informations contextuelles sur l’événement webhook, les références Git, le workflow, l’action et la personne qui a déclenché le workflow. Pour accéder aux informations de contexte, vous pouvez utiliser le package `github`. L’action que vous allez écrire affiche la charge utile de l’événement webhook dans le journal.

Ajoutez un fichier nommé `index.js` en utilisant le code suivant.

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
```
{% endraw %}

Si une erreur est levée dans l’exemple `index.js` ci-dessus, `core.setFailed(error.message);` utilise le package [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) du kit de ressources d’actions pour journaliser un message et définir un code de sortie d’échec. Pour plus d’informations, consultez « [Définition de codes de sortie pour les actions](/actions/creating-actions/setting-exit-codes-for-actions) ».

## Création d’un fichier README

Pour expliquer aux utilisateurs comment utiliser votre action, vous pouvez créer un fichier README. Un fichier README est très utile si vous prévoyez de partager votre action publiquement, mais c’est aussi un excellent moyen de vous rappeler comment utiliser l’action.

Dans votre répertoire `hello-world-javascript-action`, créez un fichier `README.md` qui spécifie les informations suivantes :

- Une description détaillée de ce que fait l’action.
- Les arguments d’entrée et de sortie obligatoires.
- Les arguments d’entrée et de sortie facultatifs.
- Les secrets utilisés par l’action.
- Les variables d’environnement utilisées par l’action.
- Un exemple d’utilisation de votre action dans un workflow.

````markdown{:copy}
# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'
```
````

## Commiter, étiqueter et pousser (push) votre action dans GitHub

{% data variables.product.product_name %} télécharge chaque action exécutée dans un workflow au moment du runtime, et l’exécute en tant que package complet de code avant que vous puissiez utiliser des commandes de workflow comme `run` pour interagir avec la machine de l’exécuteur. Cela signifie que vous devez inclure toutes les dépendances de package qui sont nécessaires pour exécuter le code JavaScript. Vous devrez effectuer le check-in des packages `core` et `github` du kit de ressources dans le dépôt de votre action.

À partir de votre terminal, commitez vos fichiers `action.yml`, `index.js`, `node_modules`, `package.json`, `package-lock.json` et `README.md`. Si vous avez ajouté un fichier `.gitignore` qui liste `node_modules`, vous devez supprimer cette ligne pour commiter le répertoire `node_modules`.

Il est recommandé d’ajouter également une étiquette de version pour les versions de votre action. Pour plus d’informations sur le versioning de votre action, consultez « [À propos des actions](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions) ».

```shell{:copy}
git add action.yml index.js node_modules/* package.json package-lock.json README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

Le check-in de votre répertoire `node_modules` peut entraîner des problèmes. Vous pouvez également utiliser un outil appelé [`@vercel/ncc`](https://github.com/vercel/ncc) pour compiler votre code et vos modules dans un fichier utilisé pour la distribution.

1. Installez `vercel/ncc` en exécutant cette commande dans votre terminal.
  `npm i -g @vercel/ncc`

1. Compilez votre fichier `index.js`.
  `ncc build index.js --license licenses.txt`

  Vous verrez un nouveau fichier `dist/index.js` avec votre code et les modules compilés.
  Vous verrez également un fichier `dist/licenses.txt` contenant toutes les licences de `node_modules` que vous utilisez.

1. Modifiez le mot clé `main` dans votre fichier `action.yml` pour utiliser le nouveau fichier `dist/index.js`.
 `main: 'dist/index.js'`

1. Si vous avez déjà effectué le check-in de votre répertoire `node_modules`, supprimez-le.
  `rm -rf node_modules/*`

1. À partir de votre terminal, commitez les mises à jour de vos fichiers `action.yml`, `dist/index.js` et `node_modules`.
```shell{:copy}
git add action.yml dist/index.js node_modules/*
git commit -m "Use vercel/ncc"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

## Tester votre action dans un workflow

Vous êtes maintenant prêt à tester votre action dans un workflow. Quand une action se trouve dans un dépôt privé, elle peut être utilisée seulement dans des workflows du même dépôt. Les actions publiques peuvent être utilisées par les workflows dans n’importe quel dépôt.

{% data reusables.actions.enterprise-marketplace-actions %}

### Exemple utilisant une action publique

Cet exemple montre comment votre nouvelle action publique peut être exécutée à partir d’un dépôt externe.

Copiez le code YAML suivant dans un nouveau fichier à l’emplacement `.github/workflows/main.yml`, puis mettez à jour la ligne `uses: octocat/hello-world-javascript-action@v1.1` avec votre nom d’utilisateur et le nom du dépôt public que vous avez créé ci-dessus. Vous pouvez également remplacer l’entrée `who-to-greet` par votre nom.

{% raw %}
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: octocat/hello-world-javascript-action@v1.1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

Lorsque ce workflow sera déclenché, l’exécuteur téléchargera l’action `hello-world-javascript-action` à partir de votre dépôt public, puis l’exécutera.

### Exemple utilisant une action privée

Copiez le code du workflow dans un fichier `.github/workflows/main.yml` du dépôt de votre action. Vous pouvez également remplacer l’entrée `who-to-greet` par votre nom.

**.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Hello world action step
        uses: ./ # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}{% endraw %}"
```

Dans votre dépôt, cliquez sur l’onglet **Actions**, puis sélectionnez la dernière exécution du workflow. Sous **Travaux** ou dans le graphe de visualisation, cliquez sur **A job to say hello**. Vous devez voir « Hello Mona the Octocat » ou le nom que vous avez utilisé pour l’entrée `who-to-greet`, ainsi que l’horodatage affiché dans le journal.

![Capture d’écran de l’utilisation de votre action dans un workflow](/assets/images/help/repository/javascript-action-workflow-run-updated-2.png)

## Dépôts de modèles pour créer des actions JavaScript

{% data variables.product.prodname_dotcom %} fournit des dépôts de modèles pour créer des actions JavaScript et TypeScript. Vous pouvez utiliser ces modèles pour commencer rapidement à créer une action qui inclut des tests, un linting et d’autres pratiques recommandées.

* [Dépôt de modèles `javascript-action`](https://github.com/actions/javascript-action)
* [Dépôt de modèles `typescript-action`](https://github.com/actions/typescript-action)
