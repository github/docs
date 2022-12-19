---
title: Construção e teste Swift
intro: É possível criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu projeto no Swift.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408992'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia mostra como criar e testar um pacote do Swift.

{% ifversion ghae %} Para criar e testar seu projeto Swift em {% data variables.product.prodname_ghe_managed %}, são necessárias as dependências do Swift. {% data reusables.actions.self-hosted-runners-software %} Os executores hospedados no {% else %}{% data variables.product.prodname_dotcom %} têm um cache de ferramentas com programas de software pré-instalados e os executores do Ubuntu e do macOS incluem as dependências para criação de pacotes do Swift. Para ver a lista completa de programas de software atualizados e as versões pré-instaladas do Swift e do Xcode, confira "[Sobre os executores hospedados no GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)".{% endif %}

## Pré-requisitos

Você já deve estar familiarizado com a sintaxe YAML e como é usado com {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)".

Recomendamos que você tenha uma compreensão básica dos pacotes Swift. Para obter mais informações, confira "[Pacotes do Swift](https://developer.apple.com/documentation/swift_packages)" na documentação do desenvolvedor da Apple.

## Usando o fluxo de trabalho inicial do Swift

{% data variables.product.prodname_dotcom %} fornece um fluxo de trabalho inicial Swift que deve funcionar na maioria dos projetos do Swift, e este guia inclui exemplos que mostram a você como personalizar este fluxo de trabalho inicial. Para obter mais informações, confira o [fluxo de trabalho inicial do Swift](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml).

Para experimentar uma introdução rápida, adicione o fluxo de trabalho inicial ao diretório `.github/workflows` do repositório.

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

## Especificando uma versão do Swift

Para usar uma versão pré-instalada específica do Swift em um executor hospedado no {% data variables.product.prodname_dotcom %}, use a ação `fwal/setup-swift`. Essa ação localiza uma versão específica do Swift do cache de ferramentas no executor e adiciona os binários necessários a `PATH`. Estas alterações persistirão para o restante de um trabalho. Para obter mais informações, confira a ação [`fwal/setup-swift`](https://github.com/marketplace/actions/setup-swift).

Se você estiver usando um executor auto-hospedado, precisará instalar as versões desejadas do Swift e adicioná-las a `PATH`.

Os exemplos abaixo demonstram o uso da ação `fwal/setup-swift`.

### Usando várias versões do Swift

Você pode configurar seu trabalho para usar várias versões do Swift em uma matriz.

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

### Usando uma única versão específica do Swift

Você pode configurar seu trabalho para usar uma só versão específica do Swift, como `5.3.3`.

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

## Criar e testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código usando o Swift. Este exemplo demonstra como usar `swift build` e `swift test` em um trabalho:

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
