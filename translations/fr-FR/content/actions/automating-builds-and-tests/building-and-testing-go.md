---
title: Création et test de code Go
intro: Vous pouvez créer un workflow d’intégration continue (CI) pour générer et tester votre projet Go.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
shortTitle: Build & test Go
ms.openlocfilehash: 590edc2af0b7f370e52b449f320bdc2a758450bc
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160849'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment générer, tester et publier un package Go.

Les exécuteurs hébergés dans {% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} ont un cache d’outils où des logiciels sont préinstallés, notamment les dépendances pour Go. Pour obtenir la liste complète des logiciels à jour et des versions préinstallées de Go, consultez [À propos des exécuteurs hébergés dans {% data variables.product.prodname_dotcom %}.](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)
{% endif %}

## Prérequis

Vous devez déjà être familiarisé avec la syntaxe YAML et savoir comment elle s’utilise avec {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions) ».

Il est recommandé de connaître les bases du langage Go. Pour plus d’informations, consultez [Bien démarrer avec Go](https://golang.org/doc/tutorial/getting-started).

## Utilisation du workflow de démarrage Go

{% data variables.product.prodname_dotcom %} fournit un workflow de démarrage Go qui doit fonctionner pour la plupart des projets Go. Ce guide inclut des exemples que vous pouvez utiliser pour personnaliser le workflow de démarrage. Pour plus d’informations, consultez [Workflow de démarrage Go](https://github.com/actions/starter-workflows/blob/main/ci/go.yml).

Pour commencer rapidement, ajoutez le workflow de démarrage au répertoire `.github/workflows` de votre dépôt.

```yaml{:copy}
name: Go package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: 1.15

      - name: Build
        run: go build -v ./...

      - name: Test
        run: go test -v ./...
```

## Spécification d’une version de Go

Le moyen le plus simple de spécifier une version Go consiste à utiliser l’action `setup-go` fournie par {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez l’[action `setup-go`](https://github.com/actions/setup-go/).

Pour utiliser une version préinstallée de Go sur un exécuteur hébergé par {% data variables.product.prodname_dotcom %}, passez la version concernée à la propriété `go-version` de l’action `setup-go`. Cette action recherche une version spécifique de Go à partir du cache d’outils de chaque exécuteur, et ajoute les fichiers binaires nécessaires à `PATH`. Ces modifications seront conservées pendant toute la durée du travail.

L’action `setup-go` est recommandée pour l’utilisation de Go avec {% data variables.product.prodname_actions %}, car cela contribue à garantir un comportement cohérent sur tous les exécuteurs et toutes les versions de Go. Si vous utilisez un exécuteur auto-hébergé, vous devez installer Go et l’ajouter à `PATH`.

### Utilisation de plusieurs versions de Go

```yaml{:copy}
name: Go

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go {% raw %}${{ matrix.go-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      # You can test your matrix by printing the current Go version
      - name: Display Go version
        run: go version
```

### Utilisation d’une version spécifique de Go

Vous pouvez configurer votre travail pour qu’il utilise une version spécifique de Go, comme `1.16.2`. Vous pouvez également utiliser la syntaxe de versioning sémantique pour obtenir la dernière version mineure. Cet exemple utilise la dernière version mineure de Go 1.16.

```yaml{:copy}
      - name: Setup Go 1.16.x
        uses: {% data reusables.actions.action-setup-go %}
        with:
          # Semantic version range syntax or exact version of Go
          go-version: '1.16.x'
```

## Installer les dépendances

Vous pouvez utiliser `go get` pour installer des dépendances :

```yaml{:copy}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: |
          go get .
          go get example.com/octo-examplemodule
          go get example.com/octo-examplemodule@v1.3.4
```

{% ifversion actions-caching %}

### Mise en cache des dépendances

Vous pouvez mettre en cache et restaurer les dépendances à l’aide de l’[action `setup-go`](https://github.com/actions/setup-go). Par défaut, la mise en cache est désactivée, mais vous pouvez définir le paramètre `cache` sur `true` pour l’activer.

Lorsque la mise en cache est activée, l’action `setup-go` recherche le fichier de dépendance, `go.sum`, dans la racine du référentiel, et utilise le hachage du fichier de dépendance dans le cadre de la clé de cache.

```yaml{:copy}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
          cache: true
```

Vous pouvez également utiliser le paramètre `cache-dependency-path` pour les cas où plusieurs fichiers de dépendance sont utilisés ou lorsqu’ils se trouvent dans des sous-répertoires différents.

```yaml{:copy}
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.17'
          cache: true
          cache-dependency-path: subdir/go.sum
```

Si vous avez une exigence particulière ou si vous avez besoin d’un contrôle plus précis pour la mise en cache, vous pouvez utiliser l’[action `cache`](https://github.com/marketplace/actions/cache). Pour plus d’informations, consultez « [Mise en cache des dépendances pour accélérer les workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows) ».

{% endif %}

## Génération et test de votre code

Vous pouvez utiliser les mêmes commandes que celles que vous utilisez localement pour générer et tester votre code. Cet exemple de workflow montre comment utiliser `go build` et `go test` dans un travail :

```yaml{:copy}
name: Go
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: go get .
      - name: Build
        run: go build -v ./...
      - name: Test with the Go CLI
        run: go test
```

## Empaquetage des données de workflow en tant qu’artefacts

Une fois le workflow terminé, vous pouvez charger les artefacts résultants à des fins d’analyse. Par exemple, vous devrez peut-être enregistrer des fichiers journaux, des vidages principaux, des résultats de test ou des captures d’écran. L’exemple suivant montre comment utiliser l’action `upload-artifact` pour charger les résultats de test.

Pour plus d’informations, consultez « [Stockage des données de workflow en tant qu’artefacts](/actions/using-workflows/storing-workflow-data-as-artifacts) ».

```yaml{:copy}
name: Upload Go test results

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      - name: Install dependencies
        run: go get .
      - name: Test with Go
        run: go test -json > TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
      - name: Upload Go test results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Go-results-{% raw %}${{ matrix.go-version }}{% endraw %}
          path: TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
```
