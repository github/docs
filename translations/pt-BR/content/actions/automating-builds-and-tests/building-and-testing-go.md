---
title: Criando e testando o Go
intro: É possível criar um fluxo de trabalho de integração contínua (CI) para criar e testar o seu projeto Go.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
shortTitle: Compilar e & testar o Go
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia mostra como criar, testar e publicar um pacote no Go.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %} Os executores hospedados em {% data variables.product.prodname_dotcom %} têm um cache de ferramentas com software pré-instalado, que inclui as dependências do Go. Para obter uma lista completa de software atualizado e as versões pré-instaladas do Go, consulte "[Sobre os executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)."
{% endif %}

## Pré-requisitos

Você já deve estar familiarizado com a sintaxe YAML e como é usado com {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions)".

Recomendamos que você tenha um entendimento básico da linguagem Go. Para obter mais informações, consulte [Primeiros passos com o Go](https://golang.org/doc/tutorial/getting-started).

## Usando o fluxo de trabalho inicial do Go

{% data variables.product.prodname_dotcom %} fornece um fluxo de trabalho inicial do Go que deve funcionar para a maioria dos projetos do Go. Este guia inclui exemplos que você pode usar para personalizar o fluxo de trabalho inicial. Para obter mais informações, consulte o [fluxo de trabalho inicial do Go](https://github.com/actions/starter-workflows/blob/main/ci/go.yml).

Para iniciar rapidamente, adicione o fluxo de trabalho inicial para o diretório `.github/workflows` do seu repositório.

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

## Especificando uma versão do Go

A maneira mais fácil de especificar uma versão do Go é usando a ação `setup-go` fornecida por {% data variables.product.prodname_dotcom %}. Para mais informações, consulte a ação [`setup-go`](https://github.com/actions/setup-go/).

Para usar uma versão pré-instalada do em um executor hospedado em {% data variables.product.prodname_dotcom %}, passe a versão relevante para a propriedade `go-version` da ação `setup-go`. Esta ação encontra uma versão específica de Go do cache de ferramentas em cada executor e adiciona os binários necessários ao `PATH`. Estas alterações persistirão para o resto do trabalho.

A ação `setup-go` é a forma recomendada de usar Go com {% data variables.product.prodname_actions %}, porque ajuda a garantir um comportamento consistente em executores diferentes e versões diferentes do Go. Se você estiver usando um executor auto-hospedado, você deverá instalar o Go e adicioná-lo ao `PATH`.

### Usando várias versões do Go

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

### Usando uma versão específica do Go

Você pode configurar o seu trabalho para usar uma versão específica do Go, como `1.16.2`. Como alternativa, você pode usar a sintaxe da versão semântica para obter a última versão secundária. Esse exemplo usa a última versão de patch 1.16 do Go:

```yaml{:copy}
      - name: Setup Go 1.16.x
        uses: {% data reusables.actions.action-setup-go %}
        with:
          # Semantic version range syntax or exact version of Go
          go-version: '1.16.x'
```

## Instalar dependências

Você pode usar `go get` para instalar as dependências:

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
          go get example.lab/octo-examplemodule
          go get example.lab/octo-examplemodule@v1.3.4
```

{% ifversion actions-caching %}

### Memorizar dependências

Você pode armazenar em cache e restaurar as dependências usando a ação [`setup-go`](https://github.com/actions/setup-go). Por padrão, o cache está desabilitado, mas você pode definir o parâmetro `cache` como `verdadeiro` para habilitá-lo.

Quando o cache está habilitado, a ação `setup-go` pesquisa o arquivo de dependência, `go.sum` na raiz do repositório e usa o hash do arquivo de dependência como parte da chave de cache.

```yaml{:copy}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
          cache: true
```

Como alternativa, você pode usar o parâmetro `cache-dependency-path` para casos em que são usados vários arquivos de dependências ou quando estão localizados em subdiretórios diferentes.

```yaml{:copy}
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.17'
          cache: true
          cache-dependency-path: subdir/go.sum
```

Se você tiver um requisito personalizado ou precisar de melhores controles para cache, você poderá usar a ação [`cache`](https://github.com/marketplace/actions/cache). Para obter mais informações, consulte "[Memorizar dependências para acelerar fluxos de trabalho](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)".

{% endif %}

## Criar e testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código. Este exemplo de fluxo de trabalho demonstra como usar `go build` and `go test` em um trabalho:

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

Após a conclusão de um fluxo de trabalho, você poderá fazer o upload dos artefatos resultantes para análise. Por exemplo, é possível que você precise salvar os arquivos de registro, os despejos de núcleo, os resultados de teste ou capturas de tela. O exemplo a seguir demonstra como você pode usar a ação `upload-artefato` para fazer o upload de resultados de testes.

Para obter mais informações, consulte "[Armazenar dados de fluxo de trabalho como artefatos](/actions/using-workflows/storing-workflow-data-as-artifacts)".

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
