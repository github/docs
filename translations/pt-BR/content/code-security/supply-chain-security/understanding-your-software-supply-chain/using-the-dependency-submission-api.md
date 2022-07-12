---
title: Usando a API de envio de dependência
intro: 'Você pode usar a API de submissão de dependência para enviar dependências para projetos, como as dependências resolvidas quando um projeto é criado ou compilado.'
shortTitle: API de envio de dependência
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  feature: dependency-submission-api
---

{% data reusables.dependency-submission.dependency-submission-api-beta %}

## Sobre a API de envio de dependência

{% data reusables.dependency-submission.about-dependency-submission %}

As dependências são enviadas para a API de envio de dependência na forma de um instantâneo. Um instantâneo é um conjunto de dependências associadas a um commit SHA e outros metadados, que reflete o estado atual do seu repositório para um commit. Para obter mais informações sobre a API de envio de dependência, consulte a [a documentação da API de envio de dependência](/rest/dependency-graph/dependency-submission).

## Envio de dependências em tempo de compilação

Você pode usar a API de envio de dependência em um fluxo de trabalho {% data variables.product.prodname_actions %} para enviar dependências para o seu projeto quando seu projeto for construído.

### Usando ações pré-criadas

A maneira mais simples de usar a API de submissão de dependência é adicionando uma ação pré-criada ao seu repositório que reunirá e converterá a lista de dependências para o formato de instantâneo necessário e enviará a lista para a API. As ações que completam essas etapas para diversos ecossistemas estão disponíveis em {% data variables.product.prodname_marketplace %} e mais ações serão criadas durante do beta e posteriormente. Você pode encontrar links para as ações disponíveis na tabela abaixo:

| Ecossistema | Ação                                                                              |
| ----------- | --------------------------------------------------------------------------------- |
| Go          | [Envio de dependência do Go](https://github.com/actions/go-dependency-submission) |

Por exemplo, o fluxo de trabalho a seguir do [Envio de dependência do Go](https://github.com/actions/go-dependency-submission) calcula as dependências para uma meta de compilação do Go (um arquivo do Go com uma função `principal`) e envia a lista para a API de envio de dependência.

```yaml

name: Go Dependency Submission
on:
  push:
    branches:
      - main

# The API requires write permission on the repository to submit dependencies
permissions:
  contents: write

# Envionment variables to configure Go and Go modules. Customize as necessary
env:
  GOPROXY: '' # A Go Proxy server to be used
  GOPRIVATE: '' # A list of modules are considered private and not requested from GOPROXY
jobs:
  go-action-detection:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}

      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: ">=1.18.0"

      - name: Run snapshot action
        uses: @actions/go-dependency-submission@v1
        with:
            # Required: Define the repo path to the go.mod file used by the
            # build target
            go-mod-path: go-example/go.mod
            #
            # Optional. Define the repo path of a build target,
            # a file with a `main()` function.
            # If undefined, this action will collect all dependencies
            # used by all build targets for the module. This may
            # include Go dependencies used by tests and tooling.
            go-build-target: go-example/cmd/octocat.go

```
### Criando sua própria ação

Como alternativa, você pode escrever sua própria ação para enviar dependências para o seu projeto no momento da compilação. Seu fluxo de trabalho deverá:

  1. Gerar uma lista de dependências para o seu projeto.
  2. Traduzir a lista de dependências no formato snapshot aceito pela API de envio de dependência. Para obter mais informações sobre o formato, consulte os parâmetros do texto para a operação da API de "Criar um instantâneo de repositório" na [Dcocumentação da API REST de envio de dependência](/rest/dependency-graph/dependency-submission).
  3. Enviar a lista de dependências formatadas à API de envio de dependência.

{% data variables.product.product_name %} mantém o [Kit de ferramentas de envio de dependência](https://github.com/github/dependency-submission-toolkit), uma biblioteca TypeScript para ajudar você a construir o seu próprio GitHub Action para enviar dependências à API de envio de dependência. Para obter mais informações sobre como escrever uma ação, consulte "[Criando ações](/actions/creating-actions)".
