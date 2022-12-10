---
title: Création d’une action composite
shortTitle: Create a composite action
intro: 'Dans ce guide, vous allez apprendre à générer une action composite.'
redirect_from:
  - /actions/creating-actions/creating-a-composite-run-steps-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
ms.openlocfilehash: 5c7d332d2b3626a5628e85b09c35ffa6a0ca5f33
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192038'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Dans ce guide, vous allez découvrir les composants de base qui sont nécessaires pour créer et utiliser une action composite empaquetée. Afin de nous concentrer sur les composants nécessaires à l’empaquetage de l’action, nous avons réduit la fonctionnalité du code de l’action à son strict minimum. L’action affiche « Hello World », puis « Goodbye ». Si vous fournissez un nom personnalisé, elle affichera « Hello [who-to-greet] », puis « Goodbye ». L’action mappe également un nombre aléatoire à la variable de sortie `random-number` et exécute un script nommé `goodbye.sh`.

Une fois que vous aurez terminé ce projet, vous saurez comment créer votre propre action composite et la tester dans un workflow.

{% data reusables.actions.context-injection-warning %}

## Prérequis

Avant de commencer, vous allez créer un référentiel dans {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}.

1. Créez un nouveau référentiel public dans {% data variables.location.product_location %}. Vous pouvez choisir n’importe quel nom de dépôt ou utiliser l’exemple `hello-world-composite-action` suivant. Vous pouvez ajouter ces fichiers une fois que votre projet a été poussé vers {% data variables.product.product_name %}. Pour en savoir plus, consultez « [Créer un dépôt](/articles/creating-a-new-repository) ».

1. Clonez votre dépôt sur votre ordinateur. Pour plus d’informations, consultez « [Clonage d’un dépôt](/articles/cloning-a-repository) ».

1. À partir de votre terminal, remplacez les répertoires par votre nouveau dépôt.

  ```shell
  cd hello-world-composite-action
  ```

2. Dans le dépôt `hello-world-composite-action`, créez un fichier nommé `goodbye.sh`et ajoutez l’exemple de code suivant :

  ```bash
  echo "Goodbye"
  ```

3. À partir de votre terminal, rendez `goodbye.sh` exécutable.

  ```shell
  chmod +x goodbye.sh
  ```

1. À partir de votre terminal, effectuez le check-in de votre fichier `goodbye.sh`.
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

## Création d’un fichier de métadonnées d’action

1. Dans le dépôt `hello-world-composite-action`, créez un fichier nommé `action.yml` et ajoutez l’exemple de code suivant. Pour plus d’informations sur cette syntaxe, consultez « [`runs` pour les actions composites](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions) ».

    {% raw %}  **action.yml**
    ```yaml
    name: 'Hello World'
    description: 'Greet someone'
    inputs:
      who-to-greet:  # id of input
        description: 'Who to greet'
        required: true
        default: 'World'
    outputs:
      random-number:
        description: "Random number"
        value: ${{ steps.random-number-generator.outputs.random-number }}
    runs:
      using: "composite"
      steps:
        - run: echo Hello ${{ inputs.who-to-greet }}.
          shell: bash
        - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
          run: echo "random-number=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
          run: echo "::set-output name=random-number::$(echo $RANDOM)"
{%- endif %}{% raw %}
          shell: bash
        - run: echo "${{ github.action_path }}" >> $GITHUB_PATH
          shell: bash
        - run: goodbye.sh
          shell: bash
    ```
    {% endraw %} Ce fichier définit l’entrée `who-to-greet`, mappe le nombre généré aléatoirement à la variable de sortie `random-number`, ajoute le chemin d’accès de l’action au chemin du système de l’exécuteur (pour localiser le script `goodbye.sh` pendant l’exécution ) et exécute le script `goodbye.sh`.

  Pour plus d’informations sur la gestion des sorties, consultez « [`outputs` pour une action composite](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions) ».

  Pour plus d’informations sur l’utilisation de `github.action_path`, consultez « [`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) ».

1. À partir de votre terminal, effectuez le check-in de votre fichier `action.yml`.

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. À partir de votre terminal, ajoutez une étiquette. Cet exemple utilise une étiquette nommée `v1`. Pour plus d’informations, consultez « [À propos des actions](/actions/creating-actions/about-actions#using-release-management-for-actions) ».

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

## Tester votre action dans un workflow

Le code de workflow suivant utilise l’action Hello World achevée que vous avez effectuée dans « [Création d’un fichier de métadonnées d’action](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file) ».

Copiez le code de workflow dans un fichier `.github/workflows/main.yml` d’un autre dépôt, mais remplacez `actions/hello-world-composite-action@v1` par le dépôt et l’étiquette que vous avez créés. Vous pouvez également remplacer l’entrée `who-to-greet` par votre nom.

**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - id: foo
        uses: actions/hello-world-composite-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      - run: echo random-number {% raw %}${{ steps.foo.outputs.random-number }}{% endraw %}
        shell: bash
```

Dans votre dépôt, cliquez sur l’onglet **Actions**, puis sélectionnez la dernière exécution du workflow. La sortie doit inclure : « Hello Mona the Octocat », le résultat de l’exécution du script « Goodbye » et un nombre aléatoire.
