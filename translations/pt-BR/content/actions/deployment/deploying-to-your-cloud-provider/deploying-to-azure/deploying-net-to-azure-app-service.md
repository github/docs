---
title: Implantando o .NET no Azure App Service
intro: Você pode fazer a implantação do seu projeto .NET no Azure App Service como parte de seus fluxos de trabalho de implantação contínua (CD).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure App Service
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia explica como usar {% data variables.product.prodname_actions %} para criar e implantar um projeto .NET no [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 %}

{% note %}

**Observação**: {% data reusables.actions.about-oidc-short-overview %} e "[Configurando OpenID Connect no Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)."

{% endnote %}

{% endif %}

## Pré-requisitos

Antes de criar seu fluxo de trabalho de {% data variables.product.prodname_actions %}, primeiro você precisa concluir as etapas de configuração a seguir:

{% data reusables.actions.create-azure-app-plan %}

2. Crie um aplicativo web.

   Por exemplo, você pode usar o CLI do Azure para criar um aplicativo web do Azure App Service com um tempo de execução do .NET:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "DOTNET|5.0"
   ```

   No comando acima, substitua os parâmetros pelos seus próprios valores, em que `MY_WEBAPP_NAME` é um novo nome para o aplicativo web.

{% data reusables.actions.create-azure-publish-profile %}

5. Opcionalmente, configure um ambiente de implantação. {% data reusables.actions.about-environments %}

## Criar o fluxo de trabalho

Depois de preencher os pré-requisitos, você pode prosseguir com a criação do fluxo de trabalho.

O exemplo a seguir de fluxo de trabalho demonstra como construir e implantar um projeto .NET para o Azure App Service quando há um push para o branch `principal`.

Certifique-se de definir `AZURE_WEBAPP_NAME` na chave de fluxo de trabalho `env` como o nome do aplicativo web que você criou. Se o caminho para o seu projeto não for a raiz do repositório, altere `AZURE_WEBAPP_PACKAGE_PATH`.  Se você usar uma versão do .NET diferente de `5`, altere o `DOTNET_VERSON`.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Build and deploy ASP.Net Core app to an Azure Web App

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  AZURE_WEBAPP_PACKAGE_PATH: '.'      # set this to the path to your web app project, defaults to the repository root
  DOTNET_VERSION: '5'                 # set this to the .NET Core version to use

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Set up .NET Core
        uses: actions/setup-dotnet@v1
        with:
          dotnet-version: {% raw %}${{ env.DOTNET_VERSION }}{% endraw %}

      - name: Set up dependency caching for faster builds
        uses: actions/cache@v2
        with:
          path: ~/.nuget/packages
          key: {% raw %}${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-nuget-{% endraw %}

      - name: Build with dotnet
        run: dotnet build --configuration Release

      - name: dotnet publish
        run: dotnet publish -c Release -o {% raw %}${{env.DOTNET_ROOT}}{% endraw %}/myapp

      - name: Upload artifact for deployment job
        uses: actions/upload-artifact@v3
        with:
          name: .net-app
          path: {% raw %}${{env.DOTNET_ROOT}}{% endraw %}/myapp

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: 'production'
      url: {% raw %}${{ steps.deploy-to-webapp.outputs.webapp-url }}{% endraw %}

    steps:
      - name: Download artifact from build job
        uses: actions/download-artifact@v3
        with:
          name: .net-app

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
          package: {% raw %}${{ env.AZURE_WEBAPP_PACKAGE_PATH }}{% endraw %}
```

## Recursos adicionais

Os seguintes recursos também podem ser úteis:

* Para o fluxo de trabalho inicial original, consulte [`azure-webapps-dotnet-core.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-dotnet-core.yml) no repositório `starter-workflows` de {% data variables.product.prodname_actions %}.
* A ação usada para fazer a implantação do aplicativo web é a ação oficial [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) do Azure.
* Para obter mais exemplos de fluxos de trabalho do GitHub Action que fazem a implantação no Azure, consulte o repositório [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
