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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}


## Introdução

Este guia explica como usar {% data variables.product.prodname_actions %} para criar e implantar um aplicativo web nos [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Observação**: {% data reusables.actions.about-oidc-short-overview %} e "[Configurando OpenID Connect no Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)."

{% endnote %}

{% endif %}

## Pré-requisitos

Antes de criar seu fluxo de trabalho de {% data variables.product.prodname_actions %}, primeiro você precisa concluir as etapas de configuração a seguir:

1. Crie um Azure Static Web App usando a opção "Outro" para fonte de implantação. Para obter mais informações, consulte "[Início rápido: Criando o seu primeiro site estático no portal do Azure](https://docs.microsoft.com/azure/static-web-apps/get-started-portal)" na documentação do Azure.

2. Crie um segredo chamado `AZURE_STATIC_WEB_APPS_API_TOKEN` com o valor do seu token estático de implantação do aplicativo web. Para mais informações sobre como encontrar seu token de implantação, consulte "[tokens de redefinição de deploy nos Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/deployment-token-management)" na documentação do Azure.

## Criar o fluxo de trabalho

Depois de preencher os pré-requisitos, você pode prosseguir com a criação do fluxo de trabalho.

O fluxo de trabalho a seguir demonstra como construir e implantar um aplicativo estático do Azure quando há um push para o branch `principal` ou quando um pull request que direciona o `principal` é aberto, sincronizado ou reaberto. O fluxo de trabalho também desativa a implantação de pré-produção correspondente quando um pull request que aponta para o `principal` é fechado.

Na chave do fluxo de trabalho `env`, altere os seguintes valores:
- `APP_LOCATION` para o local do seu código de cliente
- `API_LOCATION` para o local do seu código-fonte da API. Se `API_LOCATION` não é relevante. Você pode excluir a variável e as linhas onde ele é usado.
- `APP_ARTIFACT_LOCATION` para a localização da saída da compilação do seu código de cliente

Para obter mais informações sobre esses valores, consulte "[Criar configuração para os Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/build-configuration?tabs=github-actions)" na documentação do Azure.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

* Para o fluxo de trabalho inicial original, consulte [`azure-staticwebapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-staticwebapp.yml) no repositório `starter-workflows` de {% data variables.product.prodname_actions %}.
* A ação usada para implantar o aplicativo web é a ação oficial do Azure [`Azure/static-web-apps-deploy`](https://github.com/Azure/static-web-apps-deploy).
* Para obter mais exemplos de fluxos de trabalho do GitHub Action que fazem a implantação no Azure, consulte o repositório [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
