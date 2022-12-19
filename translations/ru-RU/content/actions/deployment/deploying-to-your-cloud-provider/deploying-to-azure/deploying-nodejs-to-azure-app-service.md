---
title: Развертывание Node.js в Службе приложений Azure
intro: Проект Node.js можно развернуть для Службы приложений Azure в рамках рабочих процессов непрерывного развертывания (CD).
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410174'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

Это руководство объясняет, как использовать {% data variables.product.prodname_actions %} для создания, тестирования и развертывания проекта Node.js в [Службе приложений Azure](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Примечание**. {% data reusables.actions.about-oidc-short-overview %} и [Настройка OpenID Connect в Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure).

{% endnote %}

{% endif %}

## Предварительные требования

Перед созданием рабочего процесса {% data variables.product.prodname_actions %} сначала нужно выполнить следующие действия по настройке:

{% data reusables.actions.create-azure-app-plan %}

2. Создание веб-приложения.

   Например, можно использовать Azure CLI для создания веб-приложения Службы приложений Azure с помощью среды выполнения Node.js:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "NODE|14-lts"
   ```

   В приведенной выше команде замените параметры собственными значениями, где `MY_WEBAPP_NAME` — это новое имя для веб-приложения.

{% data reusables.actions.create-azure-publish-profile %}

5. При необходимости настройте среду развертывания. {% data reusables.actions.about-environments %}

## Создание рабочего процесса

Выполнив предварительные требования, можно приступить к созданию рабочего процесса.

В следующем примере рабочего процесса показано, как создать, протестировать и развернуть проект Node.js в Службе приложений Azure при отправке в ветвь `main`.

Убедитесь, что в ключе `env` рабочего процесса в качестве имени созданного веб-приложения задано значение `AZURE_WEBAPP_NAME`. Если путь к проекту не является корнем репозитория, замените `AZURE_WEBAPP_PACKAGE_PATH`  на путь к вашему проекту. Если вы используете версию Node.js, отличную от версии `10.x`, замените `NODE_VERSION` на используемую версию.

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

## Дополнительные ресурсы

Следующие ресурсы также содержат полезные сведения на эти темы:

* Исходный начальный рабочий процесс см. в [`azure-webapps-node.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-node.yml) из репозитория `starter-workflows` {% data variables.product.prodname_actions %}.
* Действие, используемое для развертывания веб-приложения, является официальным действием [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) Azure.
* Дополнительные примеры рабочих процессов GitHub Actions, которые развертываются в Azure, см. в репозитории [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
* Краткое руководство [Создание веб-приложения Node.js в Azure](https://docs.microsoft.com/azure/app-service/quickstart-nodejs) в документации по веб-приложениям Azure демонстрирует использование {% data variables.product.prodname_vscode %} с [расширением Службы приложений Azure](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice).
