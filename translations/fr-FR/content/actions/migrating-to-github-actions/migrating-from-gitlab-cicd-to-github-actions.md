---
title: Migration de GitLab CI/CD vers GitHub Actions
intro: "{% data variables.product.prodname_actions %} et GitLab\_CI/CD partagent plusieurs similitudes de configuration, ce qui facilite grandement la migration vers {% data variables.product.prodname_actions %}."
redirect_from:
  - /actions/learn-github-actions/migrating-from-gitlab-cicd-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - GitLab
  - Migration
  - CI
  - CD
shortTitle: Migrate from GitLab CI/CD
ms.openlocfilehash: d0d5f2cae928f95b1a614826f270342f376db0de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178982'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

GitLab CI/CD et {% data variables.product.prodname_actions %} vous permettent tous deux de créer des workflows qui génèrent, testent, publient, libèrent et déploient automatiquement du code. GitLab CI/CD et {% data variables.product.prodname_actions %} partagent certaines similitudes dans la configuration de workflow :

- Les fichiers de configuration de workflow sont écrits en YAML et sont stockés dans le dépôt du code.
- Les workflows comportent un ou plusieurs travaux.
- Les travaux incluent une ou plusieurs étapes ou commandes individuelles.
- Les travaux peuvent s’exécuter sur des machines gérées ou auto-hébergées.

Il existe quelques différences, et ce guide vous montre les différences importantes afin que vous puissiez migrer votre workflow vers {% data variables.product.prodname_actions %}.

## travaux

Les travaux dans GitLab CI/CD sont très similaires aux travaux dans {% data variables.product.prodname_actions %}. Dans les deux systèmes, les travaux présentent les caractéristiques suivantes :

* Les travaux contiennent une série d’étapes ou de scripts qui s’exécutent de manière séquentielle.
* Les travaux peuvent s’exécuter sur des machines distinctes ou dans des conteneurs distincts.
* Les travaux s’exécutent en parallèle par défaut, mais peuvent être configurés pour s’exécuter séquentiellement.

Vous pouvez exécuter un script ou une commande d’environnement dans un travail. Dans GitLab CI/CD, les étapes de script sont spécifiées à l’aide de la clé `script`. Dans {% data variables.product.prodname_actions %}, tous les scripts sont spécifiés à l’aide de la clé `run`.

Voici un exemple de syntaxe pour chaque système :

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
job1:
  variables:
    GIT_CHECKOUT: "true"
  script:
    - echo "Run your script here"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  job1:
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: echo "Run your script here"
```

</td>
</tr>
</table>

## Exécuteurs

Les exécuteurs sont des ordinateurs sur lesquels les travaux s’exécutent. GitLab CI/CD et {% data variables.product.prodname_actions %} offrent des variantes managées et auto-hébergées des exécuteurs. Dans GitLab CI/CD, des `tags` sont utilisées pour exécuter des travaux sur différentes plateformes, tandis que dans {% data variables.product.prodname_actions %}, cette opération est effectuée avec la clé `runs-on`.

Voici un exemple de syntaxe pour chaque système :

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  tags:
    - windows
  script:
    - echo Hello, %USERNAME%!

linux_job: tags:
    - linux script:
    - echo "Hello, $USER!"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  runs-on: windows-latest
  steps:
    - run: echo Hello, %USERNAME%!

linux_job:
  runs-on: ubuntu-latest
  steps:
    - run: echo "Hello, $USER!"
```
{% endraw %}
</td>
</tr>
</table>

Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) ».

## docker images

GitLab CI/CD et {% data variables.product.prodname_actions %} prennent en charge l’exécution de travaux dans une image Docker. Dans GitLab CI/CD, les images Docker sont définies avec une clé `image`, tandis que dans {% data variables.product.prodname_actions %}, cette opération est effectuée avec la clé `container`.

Voici un exemple de syntaxe pour chaque système :

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
my_job:
  image: node:10.16-jessie
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  my_job:
    container: node:10.16-jessie
```
{% endraw %}
</td>
</tr>
</table>

Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer) ».

## Syntaxe de condition et d’expression

GitLab CI/CD utilise des `rules` pour déterminer si un travail s’exécutera pour une condition spécifique. {% data variables.product.prodname_actions %} utilise le mot clé `if` pour empêcher l’exécution d’un travail, sauf si une condition est remplie.

Voici un exemple de syntaxe pour chaque système :

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
deploy_prod:
  stage: deploy
  script:
    - echo "Deploy to production server"
  rules:
    - if: '$CI_COMMIT_BRANCH == "master"'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  deploy_prod:
    if: contains( github.ref, 'master')
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploy to production server"
```
{% endraw %}
</td>
</tr>
</table>

Pour plus d’informations, consultez « [Expressions](/actions/learn-github-actions/expressions) ».

## Dépendances entre les travaux

GitLab CI/CD et {% data variables.product.prodname_actions %} vous permettent de définir des dépendances pour un travail. Dans les deux systèmes, les travaux s’exécutent en parallèle par défaut, mais les dépendances de travaux dans {% data variables.product.prodname_actions %} peuvent être spécifiées explicitement avec la clé `needs`. GitLab CI/CD a également un concept de `stages`, où les travaux d’une phase s’exécutent simultanément, mais la phase suivante commence lorsque tous les travaux de la phase précédente sont terminés. Vous pouvez recréer ce scénario dans {% data variables.product.prodname_actions %} avec la clé `needs`.

Voici un exemple de syntaxe pour chaque système. Les workflows commencent avec deux travaux nommés `build_a` et `build_b` exécutés en parallèle et, une fois ces travaux terminés, un autre travail appelé `test_ab` s’exécute. Enfin, une fois `test_ab` terminé, le travail `deploy_ab` s’exécute.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
stages:
  - build
  - test
  - deploy

build_a: stage: build script:
    - echo "This job will run first."

build_b: stage: build script:
    - echo "This job will run first, in parallel with build_a."

test_ab: stage: test script:
    - echo "This job will run after build_a and build_b have finished."

deploy_ab: stage: deploy script:
    - echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build_a:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first."

  build_b:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first, in parallel with build_a"

  test_ab:
    runs-on: ubuntu-latest
    needs: [build_a,build_b]
    steps:
      - run: echo "This job will run after build_a and build_b have finished"

  deploy_ab:
    runs-on: ubuntu-latest
    needs: [test_ab]
    steps:
      - run: echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
</tr>
</table>

Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds) ».

## Planification des workflows

GitLab CI/CD et {% data variables.product.prodname_actions %} vous permettent d’exécuter des workflows à un intervalle spécifique. Dans GitLab CI/CD, les planifications de pipelines sont configurées avec l’interface utilisateur, tandis que dans {% data variables.product.prodname_actions %}, vous pouvez déclencher un workflow selon un intervalle planifié avec la clé « on ».

Pour plus d’informations, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows#scheduled-events) ».

## Variables et secrets

GitLab CI/CD et {% data variables.product.prodname_actions %} prennent en charge la définition des variables d’environnement dans le fichier de configuration du pipeline ou du workflow, et la création de secrets à l’aide de l’interface utilisateur GitLab ou {% data variables.product.product_name %}.

Pour plus d’informations, consultez « [Variables d’environnement](/actions/reference/environment-variables) » et « [Secrets chiffrés](/actions/reference/encrypted-secrets) ».

## Mise en cache

GitLab CI/CD et {% data variables.product.prodname_actions %} fournissent une méthode dans le fichier de configuration pour mettre manuellement en cache les fichiers de workflow.

{% ifversion actions-caching %}

Voici un exemple de syntaxe pour chaque système :

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
image: node:latest

cache: key: $CI_COMMIT_REF_SLUG paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline

test_async: script:
    - node ./specs/start.js ./specs/async.spec.js
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  test_async:
    runs-on: ubuntu-latest
    steps:
    - name: Cache node modules
      uses: {% data reusables.actions.action-cache %}
      with:
        path: ~/.npm
        key: {% raw %}v1-npm-deps-${{ hashFiles('**/package-lock.json') }}{% endraw %}
        restore-keys: v1-npm-deps-
```

</td>
</tr>
</table>

{% else %}

{% data reusables.actions.caching-availability %}

{% endif %}

## Artifacts

GitLab CI/CD et {% data variables.product.prodname_actions %} peuvent charger des fichiers et des répertoires créés par un travail en tant qu’artefacts. Dans {% data variables.product.prodname_actions %}, les artefacts peuvent être utilisés pour conserver des données entre plusieurs travaux.

Voici un exemple de syntaxe pour chaque système :

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
script:
artifacts:
  paths:
    - math-homework.txt
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Upload math result for job 1
  uses: {% data reusables.actions.action-upload-artifact %}
  with:
    name: homework
    path: math-homework.txt
```

</td>
</tr>
</table>

Pour plus d’informations, consultez « [Stockage des données de workflow en tant qu’artefacts](/actions/guides/storing-workflow-data-as-artifacts) ».

## Bases de données et conteneurs de service

Les deux systèmes vous permettent d’inclure des conteneurs supplémentaires pour les bases de données, la mise en cache ou d’autres dépendances.

Dans GitLab CI/CD, un conteneur pour le travail est spécifié avec la clé `image`, tandis que {% data variables.product.prodname_actions %} utilise la clé `container`. Dans les deux systèmes, des conteneurs de service supplémentaires sont spécifiés avec la clé `services`.

Voici un exemple de syntaxe pour chaque système :

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
container-job:
  variables:
    POSTGRES_PASSWORD: postgres
    # The hostname used to communicate with the
    # PostgreSQL service container
    POSTGRES_HOST: postgres
    # The default PostgreSQL port
    POSTGRES_PORT: 5432
  image: node:10.18-jessie
  services:
    - postgres
  script:
    # Performs a clean installation of all dependencies
    # in the `package.json` file
    - npm ci
    # Runs a script that creates a PostgreSQL client,
    # populates the client with data, and retrieves data
    - node client.js
  tags:
    - docker
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie

    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres

    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies
      # in the `package.json` file
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # Runs a script that creates a PostgreSQL client,
        # populates the client with data, and retrieves data
        run: node client.js
        env:
          # The hostname used to communicate with the
          # PostgreSQL service container
          POSTGRES_HOST: postgres
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```

</td>
</tr>
</table>

Pour plus d’informations, consultez « [À propos des conteneurs de service](/actions/guides/about-service-containers) ».
