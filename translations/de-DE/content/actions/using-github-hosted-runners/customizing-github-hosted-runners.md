---
title: Anpassen von auf GitHub gehosteten Runnern
intro: 'Als Teil deines Workflows kannst du zusätzliche Software auf Runnern installieren, die in GitHub gehostet werden.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107139'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

Wenn du zusätzliche Softwarepakete für {% data variables.product.prodname_dotcom %}-gehostete Runner benötigst, kannst du einen Auftrag erstellen, der die Pakete im Rahmen deines Workflows installiert. 

Informationen dazu, welche Pakete bereits standardmäßig installiert sind, findest du unter [Vorinstallierte Software](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software).

In diesem Leitfaden wird gezeigt, wie du einen Auftrag erstellst, der zusätzliche Software auf einem {% data variables.product.prodname_dotcom %}-gehosteten Runner installiert.

## Installieren von Software auf Ubuntu-Runnern

Im folgenden Beispiel wird veranschaulicht, wie du ein `apt`-Paket als Teil eines Auftrags installierst.

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

**Hinweis**: Führe vor dem Installieren eines Pakets immer `sudo apt-get update` aus. Wenn der `apt`-Index veraltet ist, ruft dieser Befehl alle verfügbaren Pakete ab und indiziert sie erneut, wodurch Paketinstallationsfehler vermieden werden. 

{% endnote %}

## Installieren von Software auf macOS-Runnern

Im folgenden Beispiel wird veranschaulicht, wie du Brew-Pakete und Casks als Teil eines Auftrags installierst.

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

## Installieren von Software auf Windows-Runnern

Im folgenden Beispiel wird veranschaulicht, wie du mit [Chocolatey](https://community.chocolatey.org/packages) die {% data variables.product.prodname_dotcom %}-CLI als Teil eines Auftrags installierst.

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
