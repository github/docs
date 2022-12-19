---
title: Implantando o Node.js no Azure App Service
intro: Você pode fazer a implantação do seu projeto Node.js no Azure App Service como parte de seus fluxos de trabalho de implantação contínua (CD).
redirect_from:
  - /actions/guides/deploying-to-azure-app-service
  - /actions/deployment/deploying-to-azure-app-service
  - /actions/deployment/deploying-to-your-cloud-provider/deploying-to-azure-app-service
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Node
  - JavaScript
  - Azure App Service
ms.openlocfilehash: d4b5a5f19098d2b84b63ae56791814eadb0fcb72
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410168'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia explica como usar o {% data variables.product.prodname_actions %} para criar, testar e implantar um projeto do Node.js no [Serviço de Aplicativo do Azure](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Observação**: {% data reusables.actions.about-oidc-short-overview %} e "[Como configurar o OpenID Connect no Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)".

{% endnote %}

{% endif %}

## Pré-requisitos

Antes de criar seu fluxo de trabalho de {% data variables.product.prodname_actions %}, primeiro você precisa concluir as etapas de configuração a seguir:

{% data reusables.actions.create-azure-app-plan %}

2. Crie um aplicativo Web.

   Por exemplo, você pode usar o CLI do Azure para criar um aplicativo web do Azure App Service com um tempo de execução do Node.js:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "NODE|14-lts"
   ```

   No comando acima, substitua os parâmetros por valores próprios, em que `MY_WEBAPP_NAME` é um novo nome para o aplicativo Web.

{% data reusables.actions.create-azure-publish-profile %}

5. Opcionalmente, configure um ambiente de implantação. {% data reusables.actions.about-environments %}

## Criar o fluxo de trabalho

Depois de preencher os pré-requisitos, você pode prosseguir com a criação do fluxo de trabalho.

O fluxo de trabalho a seguir demonstra como criar, testar e implantar o projeto do Node.js no Serviço de Aplicativo do Azure quando há um push no branch `main`.

Defina `AZURE_WEBAPP_NAME` na chave `env` de fluxo de trabalho como o nome do aplicativo Web que você criou. Se o caminho para o projeto não for a raiz do repositório, altere `AZURE_WEBAPP_PACKAGE_PATH` para o caminho do seu projeto. Se você usar uma versão do Node.js diferente de `10.x`, altere `NODE_VERSION` para a versão usada.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

on:
  push:
    branches:
      - main

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  AZURE_WEBAPP_PACKAGE_PATH: '.'      # set this to the path to your web app project, defaults to the repository root
  NODE_VERSION: '14.x'                # set this to the node version to use

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: {% data reusables.actions.action-checkout %}

    - name: Set up Node.js
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ env.NODE_VERSION }}{% endraw %}
        cache: 'npm'

    - name: npm install, build, and test
      run: |
        npm install
        npm run build --if-present
        npm run test --if-present
    - name: Upload artifact for deployment job
      uses: {% data reusables.actions.action-upload-artifact %}
      with:
        name: node-app
        path: .

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: 'production'
      url: {% raw %}${{ steps.deploy-to-webapp.outputs.webapp-url }}{% endraw %}

    steps:
    - name: Download artifact from build job
      uses: {% data reusables.actions.action-download-artifact %}
      with:
        name: node-app

    - name: 'Deploy to Azure WebApp'
      id: deploy-to-webapp 
      uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
      with:
        app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
        publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
        package: {% raw %}${{ env.AZURE_WEBAPP_PACKAGE_PATH }}{% endraw %}
```

## Recursos adicionais

Os seguintes recursos também podem ser úteis:

* Para o fluxo de trabalho inicial original, confira [`azure-webapps-node.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-node.yml) no repositório `starter-workflows` do {% data variables.product.prodname_actions %}.
* A ação usada para implantar o aplicativo Web é a ação [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) oficial do Azure.
* Para ver mais exemplos de fluxos de trabalho do GitHub Action que são implantados no Azure, confira o repositório [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
* O início rápido "[Criar um aplicativo Web Node.js no Azure](https://docs.microsoft.com/azure/app-service/quickstart-nodejs)" na documentação do aplicativo Web do Azure demonstra como usar o {% data variables.product.prodname_vscode %} com a [extensão do Serviço de Aplicativo do Azure](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice).
