---
title: Creating a Docker container action
intro: 'Ce guide vous montre les étapes minimales nécessaires pour générer une action de conteneur Docker. '
redirect_from:
  - /articles/creating-a-docker-container-action
  - /github/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/building-actions/creating-a-docker-container-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - Docker
shortTitle: Docker container action
ms.openlocfilehash: f22b361f25f406dfdb1233f4d9ce62f2b6b919dc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518783'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Dans ce guide, vous allez découvrir les composants de base qui sont nécessaires pour créer et utiliser une action de conteneur Docker empaquetée. Afin de nous concentrer sur les composants nécessaires à l’empaquetage de l’action, nous avons réduit la fonctionnalité du code de l’action à son strict minimum. L’action affiche « Hello World » dans les journaux ou « Hello [who-to-greet] » si vous fournissez un nom personnalisé.

Une fois que vous aurez terminé ce projet, vous saurez comment créer votre propre action de conteneur Docker et la tester dans un workflow.

{% data reusables.actions.self-hosted-runner-reqs-docker %}

{% data reusables.actions.context-injection-warning %}

## Prérequis

Une compréhension de base des variables d’environnement {% data variables.product.prodname_actions %} et du système de fichiers conteneur Docker pourra vous être utile :

- « [Utilisation des variables d’environnement](/actions/automating-your-workflow-with-github-actions/using-environment-variables) » {% ifversion ghae %}
- « [Système de fichiers conteneur Docker](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem) ».
{% else %} 
- « [À propos des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem) » {% endif %}

Avant de commencer, vous devez créer un dépôt {% data variables.product.prodname_dotcom %}.

1. Créez un dépôt dans {% data variables.product.product_location %}. Vous pouvez choisir n’importe quel nom de dépôt ou utiliser « hello-world-docker-action » comme dans cet exemple. Pour en savoir plus, consultez « [Créer un dépôt](/articles/creating-a-new-repository) ».

1. Clonez votre dépôt sur votre ordinateur. Pour plus d’informations, consultez « [Clonage d’un dépôt](/articles/cloning-a-repository) ».

1. À partir de votre terminal, remplacez les répertoires par votre nouveau dépôt.

  ```shell{:copy}
  cd hello-world-docker-action
  ```

## Création d’un Dockerfile

Dans le nouveau répertoire `hello-world-docker-action`, créez un fichier `Dockerfile`. Vérifiez que le nom de votre fichier est bien en majuscules (utilisez un `D` majuscule et non un `f` majuscule) si vous rencontrez des problèmes. Pour plus d’informations, consultez « [Prise en charge de Dockerfile pour {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions) ».

**Dockerfile**
```Dockerfile{:copy}
# Container image that runs your code
FROM alpine:3.10

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

## Création d’un fichier de métadonnées d’action

Créez un fichier `action.yml` dans le répertoire `hello-world-docker-action` que vous avez créé ci-dessus. Pour plus d’informations, consultez « [Syntaxe des métadonnées pour {% data variables.product.prodname_actions %} »](/actions/creating-actions/metadata-syntax-for-github-actions).

{% raw %} **action.yml**
```yaml{:copy}
# action.yml
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
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.who-to-greet }}
```
{% endraw %}

Ces métadonnées définissent une entrée `who-to-greet` et un paramètre de sortie `time`. Pour passer des entrées au conteneur Docker, vous devez déclarer les entrées à l’aide de `inputs` et les passer dans le mot clé `args`. Tout ce que vous incluez dans `args` est passé au conteneur. Toutefois, pour que les utilisateurs puissent mieux découvrir votre action, nous vous recommandons d’utiliser des entrées.

{% data variables.product.prodname_dotcom %} crée une image à partir de votre `Dockerfile`et exécute les commandes dans un nouveau conteneur à l’aide de cette image.

## Écriture du code d’action

Vous pouvez choisir n’importe quelle image Docker de base et, donc, n’importe quel langage pour votre action. L’exemple de script shell suivant utilise la variable d’entrée `who-to-greet` pour afficher « Hello [who-to-greet] » dans le fichier journal.

Ensuite, le script obtient l’heure actuelle et la définit comme une variable de sortie que pourront utiliser les prochaines actions d’un travail. Pour que {% data variables.product.prodname_dotcom %} reconnaisse les variables de sortie, vous devez utiliser une commande de workflow en utilisant une syntaxe spécifique : `echo "::set-output name=<output name>::<value>"`. Pour plus d’informations, consultez « [Syntaxe des commandes pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter) ».

1. Dans le répertoire `hello-world-docker-action`, créez un fichier `entrypoint.sh`.

1. Ajoutez le code suivant à votre fichier `entrypoint.sh`.

  **entrypoint.sh**
  ```shell{:copy}
  #!/bin/sh -l

  echo "Hello $1"
  time=$(date)
  echo "::set-output name=time::$time"
  ```
  Si `entrypoint.sh` s’exécute sans erreur, l’état de l’action est défini sur `success`. Pour indiquer l’état d’une action, vous pouvez définir explicitement des codes de sortie dans le code de l’action. Pour plus d’informations, consultez « [Définition de codes de sortie pour les actions](/actions/creating-actions/setting-exit-codes-for-actions) ».

1. Rendez votre fichier `entrypoint.sh` exécutable en exécutant la commande suivante sur votre système.

  ```shell{:copy}
  $ chmod +x entrypoint.sh
  ```

## Création d’un fichier README

Pour expliquer aux utilisateurs comment utiliser votre action, vous pouvez créer un fichier README. Un fichier README est très utile si vous prévoyez de partager votre action publiquement, mais c’est aussi un excellent moyen de vous rappeler comment utiliser l’action.

Dans votre répertoire `hello-world-docker-action`, créez un fichier `README.md` qui spécifie les informations suivantes :

- Une description détaillée de ce que fait l’action.
- Les arguments d’entrée et de sortie obligatoires.
- Les arguments d’entrée et de sortie facultatifs.
- Les secrets utilisés par l’action.
- Les variables d’environnement utilisées par l’action.
- Un exemple d’utilisation de votre action dans un workflow.

**README.md**
```markdown{:copy}
# Hello world docker action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-docker-action@v1
with:
  who-to-greet: 'Mona the Octocat'
```

## Commiter, étiqueter et pousser votre action vers {% data variables.product.product_name %}

À partir de votre terminal, commitez vos fichiers `action.yml`, `entrypoint.sh`, `Dockerfile` et `README.md`.

Il est recommandé d’ajouter également une étiquette de version pour les versions de votre action. Pour plus d’informations sur le versioning de votre action, consultez « [À propos des actions](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions) ».

```shell{:copy}
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

## Tester votre action dans un workflow

Vous êtes maintenant prêt à tester votre action dans un workflow. Quand une action se trouve dans un dépôt privé, elle peut être utilisée seulement dans des workflows du même dépôt. Les actions publiques peuvent être utilisées par les workflows dans n’importe quel dépôt.

{% data reusables.actions.enterprise-marketplace-actions %}

### Exemple utilisant une action publique

Le code du workflow suivant utilise l’action _hello world_ terminée dans le dépôt public [`actions/hello-world-docker-action`](https://github.com/actions/hello-world-docker-action). Copiez l’exemple de code de workflow suivant dans un fichier `.github/workflows/main.yml`, en remplaçant `actions/hello-world-docker-action` par le nom de votre dépôt et le nom de votre action. Vous pouvez également remplacer l’entrée `who-to-greet` par votre nom. {% ifversion fpt or ghec %}Les actions publiques peuvent être utilisées même si elles ne sont pas publiées dans {% data variables.product.prodname_marketplace %}. Pour plus d’informations, consultez « [Publication d’une action](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action) ». {% endif %}

{% raw %} **.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: actions/hello-world-docker-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

### Exemple utilisant une action privée

Copiez le code de l’exemple de workflow suivant dans un fichier `.github/workflows/main.yml` du dépôt de votre action. Vous pouvez également remplacer l’entrée `who-to-greet` par votre nom. {% ifversion fpt or ghec %} Cette action privée ne peut pas être publiée dans {% data variables.product.prodname_marketplace %}, et ne peut être utilisée que dans ce dépôt. {% endif %}

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
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}"{% endraw %}
```

Dans votre dépôt, cliquez sur l’onglet **Actions**, puis sélectionnez la dernière exécution du workflow. Sous **Travaux** ou dans le graphe de visualisation, cliquez sur **A job to say hello**. Vous devez voir « Hello Mona the Octocat » ou le nom que vous avez utilisé pour l’entrée `who-to-greet`, ainsi que l’horodatage affiché dans le journal.

![Capture d’écran de l’utilisation de votre action dans un workflow](/assets/images/help/repository/docker-action-workflow-run-updated.png)

