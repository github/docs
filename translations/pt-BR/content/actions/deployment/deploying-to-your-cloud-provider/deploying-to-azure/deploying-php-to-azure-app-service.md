---
title: Implantando o PHP no Azure App Service
intro: Você pode fazer a implantação do seu projeto PHP no Azure App Service como parte de seus fluxos de trabalho de implantação contínua (CD).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure App Service
ms.openlocfilehash: 28314e1ccea9af232ff86712e86d7e6aec2d61a7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410160'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia explica como usar o {% data variables.product.prodname_actions %} para criar e implantar um projeto PHP no [Serviço de Aplicativo do Azure](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Observação**: {% data reusables.actions.about-oidc-short-overview %} e "[Como configurar o OpenID Connect no Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)".

{% endnote %}

{% endif %}

## Pré-requisitos

Antes de criar seu fluxo de trabalho de {% data variables.product.prodname_actions %}, primeiro você precisa concluir as etapas de configuração a seguir:

{% data reusables.actions.create-azure-app-plan %}

2. Crie um aplicativo Web.

   Por exemplo, você pode usar o CLI do Azure para criar um aplicativo web do com o tempo de execução do PHP:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "php|7.4"
   ```

   No comando acima, substitua os parâmetros por valores próprios, em que `MY_WEBAPP_NAME` é um novo nome para o aplicativo Web.

{% data reusables.actions.create-azure-publish-profile %}

5. Opcionalmente, configure um ambiente de implantação. {% data reusables.actions.about-environments %}

## Criar o fluxo de trabalho

Depois de preencher os pré-requisitos, você pode prosseguir com a criação do fluxo de trabalho.

O exemplo de fluxo de trabalho a seguir demonstra como criar e implantar um projeto PHP no Serviço de Aplicativo do Azure quando houver um push para o branch `main`.

Defina `AZURE_WEBAPP_NAME` na chave `env` de fluxo de trabalho como o nome do aplicativo Web que você criou. Se o caminho para seu projeto não for a raiz do repositório, altere `AZURE_WEBAPP_PACKAGE_PATH` para o caminho para o projeto. Se você usar uma versão do PHP diferente de `8.x`, altere `PHP_VERSION` para a versão usada.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Build and deploy PHP app to Azure Web App

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  AZURE_WEBAPP_PACKAGE_PATH: '.'      # set this to the path to your web app project, defaults to the repository root
  PHP_VERSION: '8.x'                  # set this to the PHP version to use

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: {% raw %}${{ env.PHP_VERSION }}{% endraw %}

      - name: Check if composer.json exists
        id: check_files
        uses: andstor/file-existence-action@v1
        with:
          files: 'composer.json'

      - name: Get Composer Cache Directory
        id: composer-cache
        if: steps.check_files.outputs.files_exists == 'true'
        run: |
          echo "::set-output name=dir::$(composer config cache-files-dir)"

      - name: Set up dependency caching for faster installs
        uses: {% data reusables.actions.action-cache %}
        if: steps.check_files.outputs.files_exists == 'true'
        with:
          path: {% raw %}${{ steps.composer-cache.outputs.dir }}{% endraw %}
          key: {% raw %}${{ runner.os }}-composer-${{ hashFiles('**/composer.lock') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-composer-{% endraw %}

      - name: Run composer install if composer.json exists
        if: steps.check_files.outputs.files_exists == 'true'
        run: composer validate --no-check-publish && composer install --prefer-dist --no-progress

      - name: Upload artifact for deployment job
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: php-app
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
          name: php-app

      - name: 'Deploy to Azure Web App'
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
          package: .
```

## Recursos adicionais

Os seguintes recursos também podem ser úteis:

* Para o fluxo de trabalho inicial original, confira [`azure-webapps-php.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-php.yml) no repositório `starter-workflows` do {% data variables.product.prodname_actions %}.
* A ação usada para implantar o aplicativo Web é a ação [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) oficial do Azure.
* Para ver mais exemplos de fluxos de trabalho do GitHub Action que são implantados no Azure, confira o repositório [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
