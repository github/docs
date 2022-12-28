---
title: Création et test de code Swift
intro: Vous pouvez créer un workflow d’intégration continue (CI) pour générer et tester votre projet Swift.
redirect_from:
  - /actions/guides/building-and-testing-swift
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Swift
shortTitle: Build & test Swift
ms.openlocfilehash: 5717f9c7a939d2347ea5a49458002185c3ec07eb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408994'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide vous montre comment générer et tester un package Swift.

{% ifversion ghae %} Pour générer et tester votre projet Swift sur {% data variables.product.prodname_ghe_managed %}, vous aurez besoin des dépendances Swift nécessaires. Les exécuteurs hébergés dans {% data reusables.actions.self-hosted-runners-software %} {% else %}{% data variables.product.prodname_dotcom %} ont un cache d’outils où sont préinstallés des logiciels. Les exécuteurs Ubuntu et macOS incluent les dépendances qui permettent de créer des packages Swift. Pour obtenir la liste complète des logiciels à jour et des versions préinstallées de Swift et Xcode, consultez « [À propos des exécuteurs hébergés par GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software) ».{% endif %}

## Prérequis

Vous devez déjà être familiarisé avec la syntaxe YAML et savoir comment elle s’utilise avec {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions) ».

Il est recommandé de connaître les bases des packages Swift. Pour plus d’informations, consultez « [Swift Packages](https://developer.apple.com/documentation/swift_packages) » dans la documentation de développement Apple.

## Utilisation du workflow de démarrage Swift

{% data variables.product.prodname_dotcom %} fournit un workflow de démarrage Swift qui doit fonctionner pour la plupart des projets Swift. Ce guide inclut des exemples qui montrent comment personnaliser ce workflow de démarrage. Pour plus d’informations, consultez [Workflow de démarrage Swift](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml).

Pour commencer rapidement, ajoutez le workflow de démarrage au répertoire `.github/workflows` de votre dépôt.

```yaml{:copy}
name: Swift

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

## Spécification d’une version Swift

Pour utiliser une version préinstallée de Swift sur un exécuteur hébergé dans {% data variables.product.prodname_dotcom %}, utilisez l’action `fwal/setup-swift`. Cette action recherche une version spécifique de Swift à partir du cache d’outils de l’exécuteur, et ajoute les fichiers binaires nécessaires à `PATH`. Ces modifications seront conservées pendant toute la durée du travail. Pour plus d’informations, consultez l’action [`fwal/setup-swift`](https://github.com/marketplace/actions/setup-swift).

Si vous utilisez un exécuteur auto-hébergé, vous devez installer les versions Swift souhaitées et les ajouter à `PATH`.

Les exemples ci-dessous montrent l’utilisation de l’action `fwal/setup-swift`.

### Utilisation de plusieurs versions Swift

Vous pouvez configurer votre travail pour utiliser plusieurs versions de Swift dans une matrice.

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}


name: Swift

on: [push]

jobs:
  build:
    name: {% raw %}Swift ${{ matrix.swift }} on ${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest]
        swift: ["5.2", "5.3"]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
        with:
          swift-version: {% raw %}${{ matrix.swift }}{% endraw %}
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

### Utilisation d’une seule version Swift

Vous pouvez configurer votre travail pour qu’il utilise une seule version de Swift, comme `5.3.3`.

{% raw %}
```yaml{:copy}
steps:
  - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
    with:
      swift-version: "5.3.3"
  - name: Get swift version
    run: swift --version # Swift 5.3.3
```
{% endraw %}

## Génération et test de votre code

Vous pouvez utiliser les mêmes commandes que celles que vous utilisez localement pour générer et tester votre code à l’aide de Swift. Cet exemple montre comment utiliser `swift build` et `swift test` dans un travail :

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
    with:
      swift-version: "5.3.3"
  - name: Build
    run: swift build
  - name: Run tests
    run: swift test
```
