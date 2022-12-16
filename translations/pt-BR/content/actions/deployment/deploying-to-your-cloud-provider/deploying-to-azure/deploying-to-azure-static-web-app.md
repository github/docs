---
title: Fazendo a implantação no Azure Static Web App
intro: Você pode fazer a implantação do seu aplicativo web para o Azure Static Web App como parte dos fluxos de trabalho de implantação contínua (CD).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure Static Web Apps
ms.openlocfilehash: 3e5b9a90e91e237fbd1b5679624ed3cdb3865856
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410544'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## Introdução

Este guia explica como usar o {% data variables.product.prodname_actions %} para criar e implantar um aplicativo Web nos [Aplicativos Web Estáticos do Azure](https://azure.microsoft.com/services/app-service/static/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Observação**: {% data reusables.actions.about-oidc-short-overview %} e "[Como configurar o OpenID Connect no Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)".

{% endnote %}

{% endif %}

## Pré-requisitos

Antes de criar seu fluxo de trabalho de {% data variables.product.prodname_actions %}, primeiro você precisa concluir as etapas de configuração a seguir:

1. Crie um Azure Static Web App usando a opção "Outro" para fonte de implantação. Para obter mais informações, confira "[Guia de Início Rápido: Como criar seu primeiro site estático no portal do Azure](https://docs.microsoft.com/azure/static-web-apps/get-started-portal)" na documentação do Azure. 

2. Crie um segredo chamado `AZURE_STATIC_WEB_APPS_API_TOKEN` com o valor do token de implantação do aplicativo Web estático. Para obter mais informações sobre como encontrar o token de implantação, confira "[Redefinir tokens de implantação nos Aplicativos Web Estáticos do Azure](https://docs.microsoft.com/azure/static-web-apps/deployment-token-management)" na documentação do Azure.

## Criar o fluxo de trabalho

Depois de preencher os pré-requisitos, você pode prosseguir com a criação do fluxo de trabalho.

O exemplo de fluxo de trabalho a seguir demonstra como criar e implantar um aplicativo Web estático do Azure quando há um push para o branch `main` ou quando uma solicitação de pull direcionada a `main` é aberta, sincronizada ou reaberta. O fluxo de trabalho também destrói a implantação de pré-produção correspondente quando uma solicitação de pull direcionada a `main` é fechada.

Abaixo da chave `env` de fluxo de trabalho, altere os seguintes valores:
- `APP_LOCATION` para o local do código do cliente
- `API_LOCATION` para o local do código-fonte da API. Se `API_LOCATION` não for relevante, você poderá excluir a variável e as linhas em que ela é usada.
- `APP_ARTIFACT_LOCATION` para o local da saída de build do código do cliente

Para obter mais informações sobre esses valores, confira "[Configuração de build para Aplicativos Web Estáticos do Azure](https://docs.microsoft.com/azure/static-web-apps/build-configuration?tabs=github-actions)" na documentação do Azure.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Deploy web app to Azure Static Web Apps

env:
  APP_LOCATION: "/" # location of your client code
  API_LOCATION: "api" # location of your api source code - optional
  APP_ARTIFACT_LOCATION: "build" # location of client code build output

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

permissions:
  issues: write
  contents: read

jobs:
  build_and_deploy:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          submodules: true
      - name: Build And Deploy
        uses: Azure/static-web-apps-deploy@1a947af9992250f3bc2e68ad0754c0b0c11566c9
        with:
          azure_static_web_apps_api_token: {% raw %}${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}{% endraw %}
          repo_token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          action: "upload"
          app_location: {% raw %}${{ env.APP_LOCATION }}{% endraw %}
          api_location: {% raw %}${{ env.API_LOCATION }}{% endraw %}
          app_artifact_location: {% raw %}${{ env.APP_ARTIFACT_LOCATION }}{% endraw %}

  close:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close
    steps:
      - name: Close
        uses: Azure/static-web-apps-deploy@1a947af9992250f3bc2e68ad0754c0b0c11566c9
        with:
          azure_static_web_apps_api_token: {% raw %}${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}{% endraw %}
          action: "close"
```

## Recursos adicionais

Os seguintes recursos também podem ser úteis:

* Para o fluxo de trabalho inicial original, confira [`azure-staticwebapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-staticwebapp.yml) no repositório `starter-workflows` do {% data variables.product.prodname_actions %}.
* A ação usada para implantar o aplicativo Web é a ação [`Azure/static-web-apps-deploy`](https://github.com/Azure/static-web-apps-deploy) oficial do Azure.
* Para ver mais exemplos de fluxos de trabalho do GitHub Action que são implantados no Azure, confira o repositório [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
