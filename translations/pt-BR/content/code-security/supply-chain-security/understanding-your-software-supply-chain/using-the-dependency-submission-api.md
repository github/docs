---
title: Como usar a API de envio de dependência
intro: 'Você pode usar a API de envio de dependência para enviar dependências para projetos, como as dependências resolvidas quando um projeto é compilado ou compilado.'
shortTitle: Dependency submission API
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  feature: dependency-submission-api
ms.openlocfilehash: f81967a46763d299afd14727cd884a36cb0b3d9c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880811'
---
{% data reusables.dependency-submission.dependency-submission-api-beta %}

## Sobre a API de envio de Dependência

{% data reusables.dependency-submission.about-dependency-submission %}

As dependências são enviadas à API Envio de dependência em forma de instantâneo. Um instantâneo é um conjunto de dependências associadas a um SHA de confirmação e outros metadados, que refletem o estado atual do repositório de um commit. Para ver mais informações sobre a API de envio de dependência, confira a [Documentação da API REST de envio de dependência](/rest/dependency-graph/dependency-submission).

## Como enviar dependências em tempo de build

Você pode usar a API de envio de dependência em um fluxo de trabalho {% data variables.product.prodname_actions %} para enviar dependências para seu projeto quando ele é criado. 

### Usando ações pré-fabricadas

A maneira mais simples de usar a API de envio de dependência é adicionando uma ação pré-criada ao seu repositório que reunirá e converterá a lista de dependências para o formato de instantâneo necessário e enviará a lista para a API. As ações que concluem essas etapas para vários ecossistemas estão disponíveis em {% data variables.product.prodname_marketplace %} e mais ações serão criadas durante a versão beta e posteriores. Você pode encontrar links para as ações atualmente disponíveis na tabela abaixo:

Ecossistema | Ação |
--- | --- |
Go | [Envio de Dependência Go](https://github.com/actions/go-dependency-submission)

Por exemplo, o seguinte fluxo de trabalho de [Envio de Dependência Go](https://github.com/actions/go-dependency-submission) calcula as dependências para um destino de build Go (um arquivo Go com uma função `main`) e envia a lista para a API de envio de dependência. 

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
### Como criar sua própria ação

Como alternativa, você pode escrever sua própria ação para enviar dependências para seu projeto em tempo de compilação. Seu fluxo de trabalho deve:

  1. Gere uma lista de dependências para seu projeto.
  2. Traduza a lista de dependências para o formato de instantâneo aceito pela API de envio de dependência. Para obter mais informações sobre o formato, consulte os parâmetros do corpo da operação da API "Criar um instantâneo do repositório" na [Documentação da API REST de envio de dependência](/rest/dependency-graph/dependency-submission).
  3. Envie a lista formatada de dependências para a API de envio de dependência.

{% data variables.product.product_name %} mantém o [Kit de ferramentas de envio de dependência](https://github.com/github/dependency-submission-toolkit), uma biblioteca TypeScript para ajudar você a criar sua própria ação do GitHub para enviar dependências à API de envio de dependências. Para ver mais informações sobre como escrever uma ação, confira "[Criando ações](/actions/creating-actions)".
