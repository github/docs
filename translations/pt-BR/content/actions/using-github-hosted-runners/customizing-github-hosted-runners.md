---
title: Personalizando executores hospedados no GitHub
intro: Você pode instalar software adicional em executores hospedados no GitHub como parte do seu fluxo de trabalho.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145096070'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

Se você precisar de pacotes de software adicionais em executores hospedados em {% data variables.product.prodname_dotcom %}, você poderá criar um trabalho que instale os pacotes como parte de seu fluxo de trabalho. 

Para ver os pacotes que já estão instalados por padrão, confira "[Programas de software pré-instalados](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)".

Este guia demonstra como criar um trabalho que instale software adicional em um executor hospedado em {% data variables.product.prodname_dotcom %}.

## Instalando software nos executores do Ubuntu

O exemplo a seguir demonstra como instalar um pacote `apt` como parte de um trabalho.

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

**Observação:** sempre execute `sudo apt-get update` antes de instalar um pacote. Caso o índice `apt` esteja obsoleto, esse comando busca e indexa novamente todos os pacotes disponíveis, o que ajuda a evitar falhas de instalação do pacote. 

{% endnote %}

## Instalando o software nos executores do macOS

O exemplo a seguir demonstra como instalar pacotes de Brew e cascas como parte de um trabalho.

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

## Instalando software em executores do Windows

O exemplo a seguir demonstra como usar o [Chocolatey](https://community.chocolatey.org/packages) para instalar a CLI do {% data variables.product.prodname_dotcom %} como parte de um trabalho.

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
