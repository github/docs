---
title: Personnalisation des exécuteurs hébergés par GitHub
intro: Vous pouvez installer des logiciels supplémentaires sur les exécuteurs hébergés par GitHub dans le cadre de votre workflow.
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
shortTitle: Customize runners
ms.openlocfilehash: d6793216b099fe3dcec44572da0b3d65cbb13fd9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107138'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

Si vous avez besoin de packages logiciels supplémentaires sur des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}, vous pouvez créer un travail qui installe les packages dans le cadre de votre workflow. 

Pour voir quels packages sont déjà installés par défaut, consultez « [Logiciels préinstallés](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software) ».

Ce guide montre comment créer un travail qui installe des logiciels supplémentaires sur un exécuteur hébergé par {% data variables.product.prodname_dotcom %}.

## Installation de logiciels sur les exécuteurs Ubuntu

L’exemple suivant montre comment installer un package `apt` dans le cadre d’un travail.

```yaml
name: Build on Ubuntu
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install jq tool
        run: |
          sudo apt-get update
          sudo apt-get install jq
```

{% note %}

**Remarque :** Exécutez toujours `sudo apt-get update` avant d’installer un package. Si l’index `apt` est obsolète, cette commande récupère et réindexe tous les packages disponibles, ce qui permet d’éviter des échecs d’installation de packages. 

{% endnote %}

## Installation de logiciels sur des exécuteurs macOS

L’exemple suivant montre comment installer des packages Brew et Cask dans le cadre d’un travail.

```yaml
name: Build on macOS
on: push

jobs:
  build:
    runs-on: macos-latest
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install GitHub CLI
        run: |
          brew update
          brew install gh
      - name: Install Microsoft Edge
        run: |
          brew update
          brew install --cask microsoft-edge
```

## Installation de logiciels sur des exécuteurs Windows

L’exemple suivant montre comment utiliser [Chocolatey](https://community.chocolatey.org/packages) pour installer l’interface CLI {% data variables.product.prodname_dotcom %} dans le cadre d’un travail.

{% raw %}
```yaml
name: Build on Windows
on: push
jobs:
  build:
    runs-on: windows-latest
    steps:
      - run: choco install gh
      - run: gh version
```
{% endraw %}
