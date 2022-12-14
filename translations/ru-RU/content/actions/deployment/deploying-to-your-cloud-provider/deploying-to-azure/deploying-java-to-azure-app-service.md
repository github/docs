---
title: Развертывание Java в Службе приложений Azure
intro: Проект Java можно развернуть для Службы приложений Azure в рамках рабочих процессов непрерывного развертывания (CD).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Java
  - Azure App Service
ms.openlocfilehash: ede24c0173cfe0493ad529b2f5d8a03f97ade7b9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410102'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

Это руководство объясняет, как использовать {% data variables.product.prodname_actions %} для создания и развертывания проекта Java в [Службе приложений Azure](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Примечание**. {% data reusables.actions.about-oidc-short-overview %} и [Настройка OpenID Connect в Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure).

{% endnote %}

{% endif %}

## Предварительные требования

Перед созданием рабочего процесса {% data variables.product.prodname_actions %} сначала нужно выполнить следующие действия по настройке:

{% data reusables.actions.create-azure-app-plan %}

1. Создание веб-приложения.

   Например, можно использовать Azure CLI для создания веб-приложения Службы приложений Azure с помощью среды выполнения Java:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "JAVA|11-java11"
   ```

   В приведенной выше команде замените параметры собственными значениями, где `MY_WEBAPP_NAME` — это новое имя для веб-приложения.

{% data reusables.actions.create-azure-publish-profile %}

1. При необходимости настройте среду развертывания. {% data reusables.actions.about-environments %}

## Создание рабочего процесса

Выполнив предварительные требования, можно приступить к созданию рабочего процесса.

В следующем примере рабочего процесса показано, как создать и развернуть проект Java в Службе приложений Azure при отправке в ветвь `main`.

Убедитесь, что в ключе `env` рабочего процесса в качестве имени созданного веб-приложения задано значение `AZURE_WEBAPP_NAME`. Если вы хотите использовать версию Java, отличную от `11`, измените `JAVA_VERSION`.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Build and deploy JAR app to Azure Web App

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  JAVA_VERSION: '11'                  # set this to the Java version to use

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Java version
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: {% raw %}${{ env.JAVA_VERSION }}{% endraw %}
          cache: 'maven'

      - name: Build with Maven
        run: mvn clean install

      - name: Upload artifact for deployment job
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: java-app
          path: '{% raw %}${{ github.workspace }}{% endraw %}/target/*.jar'

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
          name: java-app

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
          package: '*.jar'
```

## Дополнительные ресурсы

Следующие ресурсы также содержат полезные сведения на эти темы:

* Исходный начальный рабочий процесс см. в [`azure-webapps-java-jar.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-java-jar.yml) из репозитория `starter-workflows` {% data variables.product.prodname_actions %}.
* Действие, используемое для развертывания веб-приложения, является официальным действием [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) Azure.
* Дополнительные примеры рабочих процессов GitHub Actions, которые развертываются в Azure, см. в репозитории [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
