---
title: Création et test de code Ruby
intro: Vous pouvez créer un workflow d’intégration continue (CI) pour générer et tester votre projet Ruby.
redirect_from:
  - /actions/guides/building-and-testing-ruby
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Ruby
shortTitle: Build & test Ruby
ms.openlocfilehash: d6408613be9666dc86e982f99dcba47bbe3f7f9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408986'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment créer un workflow d’intégration continue (CI) qui génère et teste une application Ruby. Si vos tests CI réussissent, vous pouvez déployer votre code ou publier un gem.

## Prérequis

Il est recommandé d’avoir une compréhension de base de Ruby, du YAML, des options de configuration de workflows et de la création de fichiers de workflow. Pour plus d'informations, consultez les pages suivantes :

- [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions)
- [Ruby in 20 minutes](https://www.ruby-lang.org/en/documentation/quickstart/)

## Utilisation du workflow de démarrage Ruby

{% data variables.product.prodname_dotcom %} fournit un workflow de démarrage Ruby qui fonctionnera pour la plupart des projets Ruby. Pour plus d’informations, consultez [Workflow de démarrage Ruby](https://github.com/actions/starter-workflows/blob/master/ci/ruby.yml).

Pour commencer rapidement, ajoutez le workflow de démarrage au répertoire `.github/workflows` de votre dépôt. Le workflow indiqué ci-dessous suppose que la branche par défaut de votre dépôt est `main`.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Ruby

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:

    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Ruby
        uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
        with:
          ruby-version: '3.1'
      - name: Install dependencies
        run: bundle install
      - name: Run tests
        run: bundle exec rake
```

## Spécification de la version Ruby

Le moyen le plus simple de spécifier une version Ruby consiste à utiliser l’action `ruby/setup-ruby` fournie par Ruby sur GitHub. L’action ajoute toute version Ruby prise en charge à `PATH` pour chaque exécution de travail d’un workflow. Pour plus d’informations et pour connaître les versions Ruby disponibles, consultez [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby).

L’action `ruby/setup-ruby` de Ruby est recommandée pour utiliser Ruby avec GitHub Actions, car elle garantit un comportement cohérent entre les différents exécuteurs et les différentes versions de Ruby.

L’action `setup-ruby` prend une version Ruby en tant qu’entrée et configure cette version sur l’exécuteur.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1' # Not needed with a .ruby-version file
- run: bundle install
- run: bundle exec rake
```

Vous pouvez également effectuer le check-in d’un fichier `.ruby-version` à la racine de votre dépôt pour que `setup-ruby` utilise la version définie dans ce fichier.

## Effectuer des tests avec plusieurs versions de Ruby

Vous pouvez ajouter une stratégie de matrice pour exécuter votre workflow avec plusieurs versions de Ruby. Par exemple, vous pouvez tester votre code par rapport aux dernières versions correctives des versions 3.1, 3.0 et 2.7.

{% raw %}
```yaml
strategy:
  matrix:
    ruby-version: ['3.1', '3.0', '2.7']
```
{% endraw %}

Chaque version de Ruby spécifiée dans le tableau `ruby-version` crée un travail qui exécute les mêmes étapes. Le contexte {% raw %}`${{ matrix.ruby-version }}`{% endraw %} est utilisé pour accéder à la version du travail actuel. Pour plus d’informations sur les stratégies de matrice et les contextes, consultez « [Syntaxe des workflows pour {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions) » et « [Contextes](/actions/learn-github-actions/contexts) ».

Le workflow complet mis à jour avec une stratégie de matrice peut ressembler à ceci :

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Ruby CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        ruby-version: ['3.1', '3.0', '2.7']

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: {% raw %}Set up Ruby ${{ matrix.ruby-version }}{% endraw %}
        uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
        with:
          ruby-version: {% raw %}${{ matrix.ruby-version }}{% endraw %}
      - name: Install dependencies
        run: bundle install
      - name: Run tests
        run: bundle exec rake
```

## Installation de dépendances avec Bundler

L’action `setup-ruby` installe automatiquement Bundler. La version est déterminée par votre fichier `gemfile.lock`. Si aucune version n’est présente dans votre lockfile, la dernière version compatible sera installée.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
  with:
    ruby-version: '3.1'
- run: bundle install
```

{% ifversion actions-caching %}

### Mise en cache des dépendances

Les actions `setup-ruby` fournissent une méthode pour gérer automatiquement la mise en cache de vos gemmes entre les exécutions.

Pour activer la mise en cache, définissez les éléments suivants.

{% raw %}
```yaml
steps:
- uses: ruby/setup-ruby@359bebbc29cbe6c87da6bc9ea3bc930432750108
    with:
      bundler-cache: true
```
{% endraw %}

Cela configurera Bundler de manière à installer vos gems sur `vendor/cache`. Pour chaque exécution réussie de votre workflow, ce dossier sera mis en cache par {% data variables.product.prodname_actions %}, puis re-téléchargé pour les exécutions de workflows suivantes. Un hachage de votre gemfile.lock et la version Ruby sont utilisés comme clé de cache. Si vous installez de nouveaux gems ou modifiez une version, le cache ne sera plus valide et Bundler effectuera une nouvelle installation.

**Mise en cache sans setup-ruby**

Pour mieux contrôler la mise en cache, vous pouvez utiliser l’action `actions/cache` directement. Pour plus d’informations, consultez « [Mise en cache des dépendances pour accélérer les workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows) ».

```yaml
steps:
- uses: {% data reusables.actions.action-cache %}
  with:
    path: vendor/bundle
    key: {% raw %}${{ runner.os }}-gems-${{ hashFiles('**/Gemfile.lock') }}{% endraw %}
    restore-keys: |
      {% raw %}${{ runner.os }}-gems-{% endraw %}
- name: Bundle install
  run: |
    bundle config path vendor/bundle
    bundle install --jobs 4 --retry 3
```

Si vous utilisez une build de matrice, vous devez inclure les variables de matrice dans votre clé de cache. Par exemple, si vous avez une stratégie de matrice pour différentes versions de Ruby (`matrix.ruby-version`) et différents systèmes d’exploitation (`matrix.os`), vos étapes de workflows peuvent ressembler à ceci :

```yaml
steps:
- uses: {% data reusables.actions.action-cache %}
  with:
    path: vendor/bundle
    key: {% raw %}bundle-use-ruby-${{ matrix.os }}-${{ matrix.ruby-version }}-${{ hashFiles('**/Gemfile.lock') }}{% endraw %}
    restore-keys: |
      {% raw %}bundle-use-ruby-${{ matrix.os }}-${{ matrix.ruby-version }}-{% endraw %}
- name: Bundle install
  run: |
    bundle config path vendor/bundle
    bundle install --jobs 4 --retry 3
```

{% endif %}

## Tester votre code avec la matrice

L’exemple de matrice suivant teste toutes les versions stables et versions principales de MRI, JRuby et TruffleRuby sur Ubuntu et macOS.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Matrix Testing

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: {% raw %}${{ matrix.os }}-latest{% endraw %}
    strategy:
      fail-fast: false
      matrix:
        os: [ubuntu, macos]
        ruby: [2.5, 2.6, 2.7, head, debug, jruby, jruby-head, truffleruby, truffleruby-head]
    continue-on-error: {% raw %}${{ endsWith(matrix.ruby, 'head') || matrix.ruby == 'debug' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: {% raw %}${{ matrix.ruby }}{% endraw %}
      - run: bundle install
      - run: bundle exec rake
```

## Linting de votre code

L’exemple suivant installe `rubocop`, et l’utilise pour effectuer le linting de tous les fichiers. Pour plus d’informations, consultez [RuboCop](https://github.com/rubocop-hq/rubocop). Vous pouvez [configurer Rubocop](https://docs.rubocop.org/rubocop/configuration.html) pour décider des règles de linting.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Linting

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: 2.6
      - run: bundle install
      - name: Rubocop
        run: rubocop
```

## Publication de gems

Vous pouvez configurer votre workflow pour publier votre package Ruby dans n’importe quel registre de packages lorsque vos tests d’intégration continue réussissent.

Vous pouvez stocker tous les jetons d’accès ou informations d’identification nécessaires pour publier votre package à l’aide de secrets de dépôt. L’exemple suivant crée et publie un package sur `GitHub Package Registry` et `RubyGems`.

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Ruby Gem

on:
  # Manually publish
  workflow_dispatch:
  # Alternatively, publish whenever changes are merged to the `main` branch.
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    name: Build + Publish
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Ruby 2.6
        uses: ruby/setup-ruby@477b21f02be01bcb8030d50f37cfec92bfa615b6
        with:
          ruby-version: 2.6
      - run: bundle install

      - name: Publish to GPR
        run: |{% raw %}
          mkdir -p $HOME/.gem
          touch $HOME/.gem/credentials
          chmod 0600 $HOME/.gem/credentials
          printf -- "---\n:github: ${GEM_HOST_API_KEY}\n" > $HOME/.gem/credentials
          gem build *.gemspec
          gem push --KEY github --host https://rubygems.pkg.github.com/${OWNER} *.gem
        env:
          GEM_HOST_API_KEY: "Bearer ${{secrets.GITHUB_TOKEN}}"
          OWNER: ${{ github.repository_owner }}

      - name: Publish to RubyGems
        run: |
          mkdir -p $HOME/.gem
          touch $HOME/.gem/credentials
          chmod 0600 $HOME/.gem/credentials
          printf -- "---\n:rubygems_api_key: ${GEM_HOST_API_KEY}\n" > $HOME/.gem/credentials
          gem build *.gemspec
          gem push *.gem
        env:
          GEM_HOST_API_KEY: "${{secrets.RUBYGEMS_AUTH_TOKEN}}"{% endraw %}
```
