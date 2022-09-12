---
title: Personalizar los ejecutores hospedados en GitHub
intro: Puedes instalar software adicional en los ejecutores hospedados en GitHub como parte de tu flujo de trabajo.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121089'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

Si requieres paquetes de software adicionales en los ejecutores hospedados en {% data variables.product.prodname_dotcom %}, puedes crear un job que instale los paquetes como parte de tu flujo de trabajo. 

Para ver qué paquetes ya están instalados de forma predeterminada, vea "[Software preinstalado](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)".

Esta guía demuestra cómo crear un job que instala software adicional en un ejecutor hospedado en {% data variables.product.prodname_dotcom %}.

## Instalar software en ejecutores Ubuntu

En el siguiente ejemplo se muestra cómo instalar un paquete `apt` como parte de un trabajo.

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

**Nota:** Ejecute `sudo apt-get update` siempre antes de instalar un paquete. En caso de que el índice `apt` esté obsoleto, este comando recupera y vuelve a indexar todos los paquetes disponibles, lo que ayuda a prevenir errores en la instalación de los paquetes. 

{% endnote %}

## Instalar el software en los ejecutores de macOS

El siguiente ejemplo demuestra cómo instalar paquetes y barriles de Brew como parte de un job.

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

## Instalar software en ejecutores Windows

En el ejemplo siguiente se muestra cómo usar [Chocolatey](https://community.chocolatey.org/packages) para instalar la CLI de {% data variables.product.prodname_dotcom %} como parte de un trabajo.

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
