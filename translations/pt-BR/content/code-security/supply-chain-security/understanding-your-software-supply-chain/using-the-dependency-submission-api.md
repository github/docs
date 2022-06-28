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

## About the Dependency submission API

{% data reusables.dependency-submission.about-dependency-submission %}

Dependencies are submitted to the dependency submission API in the form of a snapshot. A snapshot is a set of dependencies associated with a commit SHA and other metadata, that reflects the current state of your repository for a commit. Para obter mais informações sobre a API de envio de dependência, consulte a [a documentação da API de envio de dependência](/rest/dependency-graph/dependency-submission).

## Envio de dependências em tempo de compilação

Você pode usar a API de envio de dependência em um fluxo de trabalho {% data variables.product.prodname_actions %} para enviar dependências para o seu projeto quando seu projeto for construído.

### Usando ações pré-criadas

A maneira mais simples de usar a API de submissão de dependência é adicionando uma ação pré-criada ao seu repositório que reunirá e converterá a lista de dependências para o formato de instantâneo necessário e enviará a lista para a API. As ações que completam essas etapas para diversos ecossistemas estão disponíveis em {% data variables.product.prodname_marketplace %} e mais ações serão criadas durante do beta e posteriormente. Você pode encontrar links para as ações disponíveis na tabela abaixo:

| Ecossistema | Ação                                                                              |
| ----------- | --------------------------------------------------------------------------------- |
| Go          | [Envio de dependência do Go](https://github.com/actions/go-dependency-submission) |

For example, the following [Go Dependency Submission](https://github.com/actions/go-dependency-submission) workflow calculates the dependencies for a Go build-target (a Go file with a `main` function) and submits the list to the Dependency Submission API.

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

Alternatively, you can write your own action to submit dependencies for your project at build-time. Your workflow should:

  1. Generate a list of dependencies for your project.
  2. Translate the list of dependencies into the snapshot format accepted by the Dependency submission API. For more information about the format, see the body parameters for the "Create a repository snapshot" API operation in the [Dependency submission REST API documentation](/rest/dependency-graph/dependency-submission).
  3. Submit the formatted list of dependencies to the Dependency submission API.

{% data variables.product.product_name %} maintains the [Dependency Submission Toolkit](https://github.com/github/dependency-submission-toolkit), a TypeScript library to help you build your own GitHub Action for submitting dependencies to the Dependency submission API. For more information about writing an action, see "[Creating actions](/actions/creating-actions)".
