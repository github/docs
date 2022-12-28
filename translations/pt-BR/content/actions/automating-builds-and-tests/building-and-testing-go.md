---
title: Como criar e testar projetos com o Go
intro: É possível criar um fluxo de trabalho de CI (integração contínua) para criar e testar um projeto Go.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160842'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia mostra como criar, testar e publicar um pacote Go.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} Os executores hospedados no {% data variables.product.prodname_dotcom %} têm um cache de ferramentas com programas de software pré-instalados, incluindo as dependências do Go. Para ver a lista completa de programas de software atualizados e as versões pré-instaladas do Go, confira "[Sobre os executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)".
{% endif %}

## Pré-requisitos

Você já deve estar familiarizado com a sintaxe YAML e como é usado com {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions)".

Recomendamos que você tenha um entendimento básico da linguagem Go. Para obter mais informações, confira [Introdução ao Go](https://golang.org/doc/tutorial/getting-started).

## Como usar o fluxo de trabalho inicial do Go

O {% data variables.product.prodname_dotcom %} oferece um fluxo de trabalho inicial do Go que deve funcionar na maioria dos projetos Go. Este guia inclui exemplos que você pode usar para personalizar o fluxo de trabalho inicial. Para obter mais informações, confira o [fluxo de trabalho inicial do Go](https://github.com/actions/starter-workflows/blob/main/ci/go.yml).

Para experimentar uma introdução rápida, adicione o fluxo de trabalho inicial ao diretório `.github/workflows` do repositório.

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

## Como especificar uma versão do Go

A maneira mais fácil de especificar uma versão do Go é usando a ação `setup-go` fornecida pelo {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira a [ação `setup-go`](https://github.com/actions/setup-go/).

Para usar uma versão pré-instalada do Go em um executor hospedado no {% data variables.product.prodname_dotcom %}, passe a versão relevante para a propriedade `go-version` da ação `setup-go`. Essa ação localiza uma versão específica do Go no cache de ferramentas em cada executor e adiciona os binários necessários a `PATH`. Estas alterações persistirão para o resto do trabalho.

A ação `setup-go` é a maneira recomendada de usar o Go com o {% data variables.product.prodname_actions %}, pois garante um comportamento consistente entre diferentes executores e diferentes versões do Go. Se você estiver usando um executor auto-hospedado, precisará instalar o Go e adicioná-lo a `PATH`.

### Como usar várias versões do Go

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

### Como usar uma versão específica do Go

Você pode configurar o trabalho para usar uma versão específica do Go, como `1.16.2`. Como alternativa, você pode usar a sintaxe da versão semântica para obter a última versão secundária. Este exemplo usa a última versão de patch do Go 1.16.

```yaml{:copy}
      - name: Setup Go 1.16.x
        uses: {% data reusables.actions.action-setup-go %}
        with:
          # Semantic version range syntax or exact version of Go
          go-version: '1.16.x'
```

## Instalar dependências

Você pode usar `go get` para instalar dependências:

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

### Memorizar dependências

Você pode armazenar em cache e restaurar as dependências usando a ação [`setup-go`](https://github.com/actions/setup-go). Por padrão, o cache está desabilitado, mas você pode definir o parâmetro `cache` como `true` para habilitá-lo.

Quando o cache está habilitado, a ação `setup-go` procura o arquivo de dependência, `go.sum`, na raiz do repositório e usa o hash do arquivo de dependência como parte da chave de cache.

```yaml{:copy}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
          cache: true
```

Como alternativa, você pode usar o parâmetro `cache-dependency-path` para casos em que vários arquivos de dependência são usados ou quando eles estão localizados em diferentes subdiretórios.

```yaml{:copy}
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.17'
          cache: true
          cache-dependency-path: subdir/go.sum
```

Se você tiver um requisito personalizado ou precisar ter controles mais refinados para o cache, use a [ação `cache`](https://github.com/marketplace/actions/cache). Para obter mais informações, confira "[Como armazenar dependências em cache para acelerar os fluxos de trabalho](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".

{% endif %}

## Criar e testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código. Este fluxo de trabalho de exemplo demonstra como usar `go build` e `go test` em um trabalho:

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

## Empacotar dados do fluxo de trabalho como artefatos

Após a conclusão de um fluxo de trabalho, você poderá fazer o upload dos artefatos resultantes para análise. Por exemplo, é possível que você precise salvar os arquivos de registro, os despejos de núcleo, os resultados de teste ou capturas de tela. O exemplo a seguir demonstra como você pode usar a ação `upload-artifact` para carregar os resultados do teste.

Para obter mais informações, confira "[Como armazenar dados de fluxo de trabalho como artefatos](/actions/using-workflows/storing-workflow-data-as-artifacts)".

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
