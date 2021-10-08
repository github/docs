---
title: Construção e teste Swift
intro: É possível criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu projeto no Swift.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/guides/building-and-testing-swift
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - CI
  - Swift
shortTitle: Criar & testar Swift
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Introdução

Este guia mostra como criar e testar um pacote do Swift.

{% ifversion ghae %} To build and test your Swift project on {% data variables.product.prodname_ghe_managed %}, you will need to create a custom operating system image that includes the necessary Swift dependencies. Para obter instruções sobre como garantir que o seu {% data variables.actions.hosted_runner %} tem o software necessário instalado, consulte "[Criar imagens personalizadas](/actions/using-github-hosted-runners/creating-custom-images)".
Executores hospedados em {% else %}{% data variables.product.prodname_dotcom %} têm um cache de ferramentas com software pré-instalado e os executores Ubuntu e macOS incluem as dependências para construir pacotes Swift. Para obter uma lista completa do software atualizado e das versões pré-instaladas do Swift e do Xcode, consulte "[Sobre executores hospedados pelo GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)."{% endif %}

## Pré-requisitos

Você já deve estar familiarizado com a sintaxe YAML e como é usado com {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)."

Recomendamos que você tenha uma compreensão básica dos pacotes Swift. Para obter mais informações, consulte "[Pacotes Swift](https://developer.apple.com/documentation/swift_packages)" na documentação de desenvolvedor da Apple.

## Começando com o modelo de fluxo de trabalho do Swift

{% data variables.product.prodname_dotcom %} fornece um modelo de fluxo de trabalho do Swift que deve funcionar na maioria dos projetos do Swift, e este guia inclui exemplos que mostram como personalizar este modelo. Para obter mais informações, consulte o [Modelo do fluxo de trabalho do Swift](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml).

Para iniciar rapidamente, adicione o modelo ao diretório `.github/workflows` do repositório.

{% raw %}
```yaml{:copy}
name: Swift

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
      - uses: actions/checkout@v2
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```
{% endraw %}

## Especificando uma versão do Swift

Para usar uma versão específica do Swift em um executor hospedado em {% data variables.product.prodname_dotcom %}, use a ação `fwal/setup-fast`. Esta ação encontra uma versão específica do Swift do cache de ferramentas no executor e adiciona os binários necessários a `PATH`. Estas alterações persistirão para o restante de um trabalho. Para obter mais informações, consulte a ação [`fwal/setup-speed`](https://github.com/marketplace/actions/setup-swift).

Se você estiver usando um executor auto-hospedado, você deverá instalar as versões do Swift desejadas e adicioná-las a `PATH`.

Os exemplos abaixo demonstram o uso da ação `fwal/setup-fast`.

### Usando várias versões do Swift

Você pode configurar seu trabalho para usar várias versões do Swift em uma matriz de criação.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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
      - uses: fwal/setup-swift@d43a564349d1341cd990cfbd70d94d63b8899475
        with:
          swift-version: {% raw %}${{ matrix.swift }}{% endraw %}
      - uses: actions/checkout@
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

### Usando uma única versão específica do Swift

Você pode configurar sua tarefa para usar uma única versão específica do Swift como, por exemplo, `5.3.3`.

{% raw %}
```yaml{:copy}
steps:
  - uses: fwal/setup-swift@d43a564349d1341cd990cfbd70d94d63b8899475
    with:
      swift-version: "5.3.3"
  - name: Get swift version
    run: swift --version # Swift 5.3.3
```
{% endraw %}

## Criar e testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código usando o Swift. Este exemplo demonstra como usar `swift build` e `swift test` em um trabalho:

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: fwal/setup-swift@d43a564349d1341cd990cfbd70d94d63b8899475
    with:
      swift-version: "5.3.3"
  - name: Build
    run: swift build
  - name: Run tests
    run: swift test
```
{% endraw %}
