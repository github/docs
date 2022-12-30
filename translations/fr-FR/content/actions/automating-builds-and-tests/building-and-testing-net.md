---
title: Création et test de code .NET
intro: Vous pouvez créer un workflow CI (intégration continue) pour générer et tester votre projet .NET.
redirect_from:
  - /actions/guides/building-and-testing-net
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Build & test .NET
ms.openlocfilehash: eadb00516976159f2efffcaa04cb4b46471c527f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063617'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment générer, tester et publier un package .NET.

{% ifversion ghae %} Pour générer et tester votre projet .NET dans {% data variables.product.prodname_ghe_managed %}, vous aurez besoin du SDK .NET Core. Les exécuteurs hébergés dans {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} ont un cache d’outils où sont préinstallés des logiciels, notamment le SDK .NET Core. Pour obtenir la liste complète des logiciels à jour et des versions préinstallées du SDK .NET Core, consultez [Logiciels installés sur les exécuteurs hébergés dans {% data variables.product.prodname_dotcom %}.](/actions/reference/specifications-for-github-hosted-runners)
{% endif %}

## Prérequis

Vous devez déjà être familiarisé avec la syntaxe YAML et savoir comment elle s’utilise avec {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions) ».

Il est recommandé de connaître les bases du SDK .NET Core. Pour plus d’informations, consultez [Bien démarrer avec .NET](https://dotnet.microsoft.com/learn).

## Utilisation du workflow de démarrage .NET

{% data variables.product.prodname_dotcom %} fournit un workflow de démarrage .NET qui doit fonctionner pour la plupart des projets .NET. Ce guide inclut des exemples qui montrent comment personnaliser ce workflow de démarrage. Pour plus d’informations, consultez [Workflow de démarrage .NET](https://github.com/actions/setup-dotnet).

Pour commencer rapidement, ajoutez le workflow de démarrage au répertoire `.github/workflows` de votre dépôt.

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: ['3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup .NET Core SDK {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      - name: Install dependencies
        run: dotnet restore
      - name: Build
        run: dotnet build --configuration Release --no-restore
      - name: Test
        run: dotnet test --no-restore --verbosity normal
```

## Spécification d’une version .NET

Pour utiliser une version préinstallée du SDK .NET Core sur un exécuteur hébergé dans {% data variables.product.prodname_dotcom %}, utilisez l’action `setup-dotnet`. Cette action recherche une version spécifique de .NET à partir du cache d’outils de chaque exécuteur, et ajoute les fichiers binaires nécessaires à `PATH`. Ces modifications seront conservées pendant toute la durée du travail.

L’action `setup-dotnet` est recommandée pour l’utilisation de .NET avec {% data variables.product.prodname_actions %}, car cela garantit un comportement cohérent sur tous les exécuteurs et toutes les versions de .NET. Si vous utilisez un exécuteur auto-hébergé, vous devez installer .NET et l’ajouter à `PATH`. Pour plus d’informations, consultez l’action [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk).

### Utilisation de plusieurs versions de .NET

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup dotnet {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      # You can test your matrix by printing the current dotnet version
      - name: Display dotnet version
        run: dotnet --version
```

### Utilisation d’une version spécifique de .NET

Vous pouvez configurer votre travail pour qu’il utilise une version spécifique de .NET, comme `3.1.3`. Vous pouvez également utiliser la syntaxe de versioning sémantique pour obtenir la dernière version mineure. Cet exemple utilise la dernière version mineure de .NET 3.

```yaml
    - name: Setup .NET 3.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x'
```

## Installer les dépendances

Le gestionnaire de package NuGet est installé sur les exécuteurs hébergés dans {% data variables.product.prodname_dotcom %}. Vous pouvez utiliser l’interface CLI dotnet pour installer des dépendances à partir du registre de package NuGet avant de générer et de tester votre code. Par exemple, le YAML ci-dessous installe le package `Newtonsoft`.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% ifversion actions-caching %}

### Mise en cache des dépendances

Vous pouvez mettre en cache les dépendances NuGet à l’aide d’une clé unique, ce qui vous permet de restaurer les dépendances pour les prochains workflows avec l’action [`cache`](https://github.com/marketplace/actions/cache). Par exemple, le YAML ci-dessous installe le package `Newtonsoft`.

Pour plus d’informations, consultez « [Mise en cache des dépendances pour accélérer les workflows](/actions/guides/caching-dependencies-to-speed-up-workflows) ».

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.nuget/packages
    # Look to see if there is a cache hit for the corresponding requirements file
    key: {% raw %}${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}
    restore-keys: |
      ${{ runner.os }}-nuget{% endraw %}
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% note %}

**Remarque :** Selon le nombre de dépendances, il peut être plus rapide d’utiliser le cache des dépendances. Les projets qui ont de nombreuses dépendances doivent voir une amélioration des performances, car cela réduit le temps nécessaire au téléchargement. Les projets qui ont moins de dépendances peuvent ne pas constater d’amélioration significative des performances, et peuvent même voir une légère diminution de celles-ci en raison de la façon dont NuGet installe les dépendances mises en cache. Les performances varient d’un projet à l’autre.

{% endnote %}

{% endif %}

## Génération et test de votre code

Vous pouvez utiliser les mêmes commandes que celles que vous utilisez localement pour générer et tester votre code. Cet exemple montre comment utiliser `dotnet build` et `dotnet test` dans un travail :

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet restore
- name: Build
  run: dotnet build
- name: Test with the dotnet CLI
  run: dotnet test
```

## Empaquetage des données de workflow en tant qu’artefacts

Une fois le workflow terminé, vous pouvez charger les artefacts résultants à des fins d’analyse. Par exemple, vous devrez peut-être enregistrer des fichiers journaux, des vidages principaux, des résultats de test ou des captures d’écran. L’exemple suivant montre comment utiliser l’action `upload-artifact` pour charger les résultats de test.

Pour plus d’informations, consultez « [Rendre persistantes des données de workflow à l’aide d’artefacts](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts) ».

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

      steps:
        - uses: {% data reusables.actions.action-checkout %}
        - name: Setup dotnet
          uses: {% data reusables.actions.action-setup-dotnet %}
          with:
            dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        - name: Install dependencies
          run: dotnet restore
        - name: Test with dotnet
          run: dotnet test --logger trx --results-directory {% raw %}"TestResults-${{ matrix.dotnet-version }}"{% endraw %}
        - name: Upload dotnet test results
          uses: {% data reusables.actions.action-upload-artifact %}
          with:
            name: {% raw %}dotnet-results-${{ matrix.dotnet-version }}{% endraw %}
            path: {% raw %}TestResults-${{ matrix.dotnet-version }}{% endraw %}
          # Use always() to always run this step to publish test results when there are test failures
          if: {% raw %}${{ always() }}{% endraw %}
```

## Publication dans des registres de package

Vous pouvez configurer votre workflow pour publier votre package .NET dans un registre de package une fois vos tests CI réussis. Vous pouvez utiliser des secrets de dépôt pour stocker n’importe quels jetons ou informations d’identification nécessaires à la publication de votre fichier binaire. L’exemple suivant crée et publie un package dans {% data variables.product.prodname_registry %} à l’aide de `dotnet core cli`.

```yaml
name: Upload dotnet package

on:
  release:
    types: [created]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: '3.1.x' # SDK Version to use.
          source-url: https://nuget.pkg.github.com/<owner>/index.json
        env:
          NUGET_AUTH_TOKEN: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
      - run: dotnet build --configuration Release <my project>
      - name: Create the package
        run: dotnet pack --configuration Release <my project>
      - name: Publish the package to GPR
        run: dotnet nuget push <my project>/bin/Release/*.nupkg
```
