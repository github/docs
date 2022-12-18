---
title: Migration de CircleCI vers GitHub Actions
intro: 'GitHub Actions et CircleCI partagent plusieurs similitudes de configuration, ce qui facilite grandement la migration vers GitHub Actions.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-circleci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CircleCI
  - Migration
  - CI
  - CD
shortTitle: Migrate from CircleCI
ms.openlocfilehash: d3f7a527f21588ec2bd60e04639a861c35b12b7f
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147518967'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

CircleCI et {% data variables.product.prodname_actions %} vous permettent tous deux de créer des workflows qui génèrent, testent, publient, libèrent et déploient automatiquement du code. CircleCI et {% data variables.product.prodname_actions %} partagent certaines similitudes dans la configuration de workflow :

- Les fichiers de configuration de workflow sont écrits en YAML et stockés dans le dépôt.
- Les workflows comportent un ou plusieurs travaux.
- Les travaux incluent une ou plusieurs étapes ou commandes individuelles.
- Les étapes ou les tâches peuvent être réutilisées et partagées avec la communauté.

Pour plus d’informations, consultez « [Concepts de base de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions) ».

## Différences clés

Lors de la migration à partir de CircleCI, tenez compte des différences suivantes :

- Le parallélisme de test automatique de CircleCI regroupe automatiquement les tests en fonction des règles spécifiées par l’utilisateur ou des informations de durée d’historique. Cette fonctionnalité n’est pas intégrée à {% data variables.product.prodname_actions %}.
- Les actions qui s’exécutent dans des conteneurs Docker sont sensibles aux problèmes d’autorisations, car les conteneurs ont un mappage différent des utilisateurs. Vous pouvez éviter un grand nombre de ces problèmes en n’utilisant pas l’instruction `USER` dans votre *Dockerfile*. {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %}Pour plus d’informations sur le système de fichiers Docker sur les exécuteurs hébergés par {% data variables.product.product_name %}, consultez « [À propos des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem) ».
{% endif %}

## Migration de workflows et de travaux

CircleCI définit `workflows` dans le fichier *config.yml*, ce qui vous permet de configurer plusieurs workflows. {% data variables.product.product_name %} nécessite un fichier de workflow par workflow et, par conséquent, ne vous oblige pas à déclarer `workflows`. Vous devez créer un fichier de workflow pour chaque workflow configuré dans *config.yml*.

CircleCI et {% data variables.product.prodname_actions %} configurent `jobs` dans le fichier de configuration à l’aide d’une syntaxe similaire. Si vous configurez des dépendances entre les travaux avec `requires` dans votre workflow CircleCI, vous pouvez utiliser la syntaxe `needs` {% data variables.product.prodname_actions %} équivalente. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds) ».

## Migration d’orbs vers des actions

CircleCI et {% data variables.product.prodname_actions %} fournissent un mécanisme permettant de réutiliser et de partager des tâches dans un workflow. CircleCI utilise un concept appelé orbs, écrits en YAML, pour fournir des tâches que les utilisateurs peuvent réutiliser dans un workflow. {% data variables.product.prodname_actions %} a des composants réutilisables puissants et flexibles appelés actions, que vous générez avec des fichiers JavaScript ou des images Docker. Vous pouvez créer des actions en écrivant du code personnalisé qui interagit avec votre dépôt comme vous le souhaitez, notamment en s’intégrant aux API de {% data variables.product.product_name %} et à n’importe quelle API tierce disponible publiquement. Par exemple, une action peut publier des modules npm, envoyer des alertes par SMS lors de la création de problèmes urgents ou déployer du code prêt pour la production. Pour plus d’informations, consultez « [Création d’actions](/actions/creating-actions) ».

CircleCI peut réutiliser des éléments de workflows avec des ancres et des alias YAML. {% data variables.product.prodname_actions %} prend en charge le besoin le plus courant de réutilisation à l’aide de matrices. Pour plus d’informations sur les matrices, consultez « [Utilisation d’une matrice pour vos travaux](/actions/using-jobs/using-a-matrix-for-your-jobs) ».

## Utilisation des images Docker


CircleCI et {% data variables.product.prodname_actions %} prennent en charge l’exécution des étapes à l’intérieur d’une image Docker.

CircleCI fournit un ensemble d’images prédéfinies avec des dépendances communes. Ces images ont la valeur `USER` définie sur `circleci`, ce qui entraîne un conflit des autorisations avec {% data variables.product.prodname_actions %}.

Nous vous recommandons d’abandonner les images prédéfinies de CircleCI lorsque vous migrez vers {% data variables.product.prodname_actions %}. Dans de nombreux cas, vous pouvez utiliser des actions pour installer les dépendances supplémentaires dont vous avez besoin.

{% ifversion ghae %} Pour plus d’informations sur le système de fichiers Docker, consultez « [Système de fichiers de conteneur Docker](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem) ».

{% data reusables.actions.self-hosted-runners-software %} {% else %} Pour plus d’informations sur le système de fichiers Docker, consultez « [À propos des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem) ».

Pour plus d’informations sur les outils et les packages disponibles dans les images des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}, consultez « [Spécifications pour les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software) ».
{% endif %}

## Utilisation de variables et de secrets

CircleCI et {% data variables.product.prodname_actions %} prennent en charge la définition des variables d’environnement dans le fichier de configuration et la création de secrets à l’aide de l’interface utilisateur CircleCI ou {% data variables.product.product_name %}.

Pour plus d’informations, consultez « [Utilisation de variables d’environnement](/actions/configuring-and-managing-workflows/using-environment-variables) » et « [Création et utilisation de secrets chiffrés](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) ».

## Mise en cache

CircleCI et {% data variables.product.prodname_actions %} fournissent une méthode pour mettre manuellement en cache les fichiers dans le fichier de configuration.

{% ifversion actions-caching %}

Voici un exemple de syntaxe pour chaque système.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- restore_cache:
    keys:
      - v1-npm-deps-{{ checksum "package-lock.json" }}
      - v1-npm-deps-
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
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

{% data variables.product.prodname_actions %} n’a pas d’équivalent de la mise en cache de couche Docker (ou DLC) de CircleCI.

## Persistance des données entre les travaux

CircleCI et {% data variables.product.prodname_actions %} fournissent des mécanismes permettant de conserver des données entre les travaux.

Voici un exemple de syntaxe de configuration CircleCI et {% data variables.product.prodname_actions %}.

<table>
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
- persist_to_workspace:
    root: workspace
    paths:
      - math-homework.txt

...

- attach_workspace:   at: /tmp/workspace
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

...

- name: Download math result for job 1
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: homework
```

</td>
</tr>
</table>

Pour plus d’informations, consultez « [Persistance des données de workflow à l’aide d’artefacts](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts) ».

## Utilisation de bases de données et de conteneurs de service

Les deux systèmes vous permettent d’inclure des conteneurs supplémentaires pour les bases de données, la mise en cache ou d’autres dépendances.

Dans CircleCI, la première image répertoriée dans *config.yaml* est l’image principale utilisée pour exécuter des commandes. {% data variables.product.prodname_actions %} utilise des sections explicites : utiliser `container` pour le conteneur principal et lister des conteneurs supplémentaires dans `services`.

Voici un exemple de syntaxe de configuration CircleCI et {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

jobs:

  ruby-26: docker: - image: circleci/ruby:2.6.3-node-browsers-legacy environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby26 POSTGRES_PASSWORD: ""

    working_directory: ~/administrate

    steps:
      - checkout

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake


workflows: version: 2 build: jobs: - ruby-26 ...

- attach_workspace:   at: /tmp/workspace
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
name: Containers

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    container: circleci/ruby:2.6.3-node-browsers-legacy

    env:
      PGHOST: postgres
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
          - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      # This Docker file changes sets USER to circleci instead of using the default user, so we need to update file permissions for this image to work on GH Actions.
      # See https://docs.github.com/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem

      - name: Setup file system permissions
        run: sudo chmod -R 777 $GITHUB_WORKSPACE /github /__w/_temp
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
```
</td>
</tr>
</table>

Pour plus d’informations, consultez « [À propos des conteneurs de service](/actions/configuring-and-managing-workflows/about-service-containers) ».

## Exemple complet

Voici un exemple concret. Le côté gauche affiche le fichier *config.yml* CircleCI réel pour le dépôt [thoughtbot/administrator](https://github.com/thoughtbot/administrate). Le côté droit affiche l’équivalent dans {% data variables.product.prodname_actions %}.

<table class="d-block">
<tr>
<th>
CircleCI
</th>
<th>
GitHub Actions
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
---
version: 2.1

commands: shared_steps: steps: - checkout

      # Restore Cached Dependencies
      - restore_cache:
          name: Restore bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}

      # Bundle install dependencies
      - run: bundle install --path vendor/bundle

      # Cache Dependencies
      - save_cache:
          name: Store bundle cache
          key: administrate-{{ checksum "Gemfile.lock" }}
          paths:
            - vendor/bundle

      # Wait for DB
      - run: dockerize -wait tcp://localhost:5432 -timeout 1m

      # Setup the environment
      - run: cp .sample.env .env

      # Setup the database
      - run: bundle exec rake db:setup

      # Run the tests
      - run: bundle exec rake

default_job: &default_job working_directory: ~/administrate steps:
    - shared_steps
    # Run the tests against multiple versions of Rails
    - run: bundle exec appraisal install
    - run: bundle exec appraisal rake

jobs: ruby-25: <<: *default_job docker: - image: circleci/ruby:2.5.0-node-browsers environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby25 POSTGRES_PASSWORD: ""

  ruby-26: <<: *default_job docker: - image: circleci/ruby:2.6.3-node-browsers-legacy environment: PGHOST: localhost PGUSER: administrate RAILS_ENV: test - image: postgres:10.1-alpine environment: POSTGRES_USER: administrate POSTGRES_DB: ruby26 POSTGRES_PASSWORD: ""


workflows: version: 2 multiple-rubies: jobs: - ruby-26 - ruby-25
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Containers

on: [push]

jobs:
  build:

    strategy:
      matrix:
        ruby: [2.5, 2.6.3]

    runs-on: ubuntu-latest

    env:
      PGHOST: localhost
      PGUSER: administrate
      RAILS_ENV: test

    services:
      postgres:
        image: postgres:10.1-alpine
        env:
          POSTGRES_USER: administrate
          POSTGRES_DB: ruby25
          POSTGRES_PASSWORD: ""
        ports:
          - 5432:5432
        # Add a health check
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Ruby
        uses: eregon/use-ruby-action@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: {% raw %}${{ matrix.ruby }}{% endraw %}
      - name: Cache dependencies
        uses: {% data reusables.actions.action-cache %}
        with:
          path: vendor/bundle
          key: administrate-{% raw %}${{ matrix.image }}-${{ hashFiles('Gemfile.lock') }}{% endraw %}
      - name: Install postgres headers
        run: |
          sudo apt-get update
          sudo apt-get install libpq-dev
      - name: Install dependencies
        run: bundle install --path vendor/bundle
      - name: Setup environment configuration
        run: cp .sample.env .env
      - name: Setup database
        run: bundle exec rake db:setup
      - name: Run tests
        run: bundle exec rake
      - name: Install appraisal
        run: bundle exec appraisal install
      - name: Run appraisal
        run: bundle exec appraisal rake
```
</td>
</tr>
</table>
