---
title: Развертывание PHP в Службе приложений Azure
intro: Проект PHP можно развернуть для Службы приложений Azure в рамках рабочих процессов непрерывного развертывания (CD).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure App Service
ms.openlocfilehash: 64ff9b94f950d434c2621367fdcbd7be8bed5914
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099279'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

Это руководство объясняет, как использовать {% data variables.product.prodname_actions %} для создания и развертывания проекта PHP в [Службе приложений Azure](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghes > 3.4 %}

{% note %}

**Примечание**. {% data reusables.actions.about-oidc-short-overview %} и [Настройка OpenID Connect в Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure).

{% endnote %}

{% endif %}

## Предварительные требования

Перед созданием рабочего процесса {% data variables.product.prodname_actions %} сначала нужно выполнить следующие действия по настройке:

{% data reusables.actions.create-azure-app-plan %}

2. Создание веб-приложения.

   Например, можно использовать Azure CLI для создания веб-приложения Службы приложений Azure с помощью среды выполнения PHP:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "php|7.4"
   ```

   В приведенной выше команде замените параметры собственными значениями, где `MY_WEBAPP_NAME` — это новое имя для веб-приложения.

{% data reusables.actions.create-azure-publish-profile %}

5. При необходимости настройте среду развертывания. {% data reusables.actions.about-environments %}

## Создание рабочего процесса

Выполнив предварительные требования, можно приступить к созданию рабочего процесса.

В следующем примере рабочего процесса показано, как создать и развернуть проект PHP в Службе приложений Azure при отправке в ветвь `main`.

Убедитесь, что в ключе `env` рабочего процесса в качестве имени созданного веб-приложения задано значение `AZURE_WEBAPP_NAME`. Если путь к проекту не является корнем репозитория, замените `AZURE_WEBAPP_PACKAGE_PATH` путем к вашему проекту. Если вы используете версию PHP, отличную от версии `8.x`, замените `PHP_VERSION` используемой версией.

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
{%- ifversion actions-save-state-set-output-envs %}
          echo "dir=$(composer config cache-files-dir)" >> $GITHUB_OUTPUT
{%- else %}
          echo "::set-output name=dir::$(composer config cache-files-dir)"
{%- endif %}

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

## Дополнительные ресурсы

Следующие ресурсы также содержат полезные сведения на эти темы:

* Исходный начальный рабочий процесс см. в [`azure-webapps-php.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-php.yml) из репозитория `starter-workflows` {% data variables.product.prodname_actions %}.
* Действие, используемое для развертывания веб-приложения, является официальным действием [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) Azure.
* Дополнительные примеры рабочих процессов GitHub Actions, которые развертываются в Azure, см. в репозитории [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
