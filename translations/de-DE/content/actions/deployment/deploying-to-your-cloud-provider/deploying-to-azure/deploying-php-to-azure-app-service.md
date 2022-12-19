---
title: Bereitstellen von PHP in Azure App Service
intro: Du kannst dein PHP-Projekt im Rahmen deiner Continuous Deployment-Workflows (CD) in Azure App Service bereitstellen.
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410163'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In diesem Leitfaden wird erläutert, wie {% data variables.product.prodname_actions %} zum Erstellen und Bereitstellen eines PHP-Projekts für [Azure App Service](https://azure.microsoft.com/services/app-service/) verwendet wird.

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Hinweis**: {% data reusables.actions.about-oidc-short-overview %} und [Konfigurieren von OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure).

{% endnote %}

{% endif %}

## Voraussetzungen

Bevor du deinen {% data variables.product.prodname_actions %}-Workflow erstellst, musst du die folgenden Einrichtungsschritte ausführen:

{% data reusables.actions.create-azure-app-plan %}

2. Erstellen einer Web-App

   Du kannst beispielsweise die Azure CLI verwenden, um eine Azure App Service-Web-App mit einer PHP-Runtime zu erstellen:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "php|7.4"
   ```

   Ersetze im obigen Befehl die Parameter durch eigene Werte, wobei `MY_WEBAPP_NAME` ein neuer Name für die Web-App ist.

{% data reusables.actions.create-azure-publish-profile %}

5. Konfiguriere optional auch eine Bereitstellungsumgebung. {% data reusables.actions.about-environments %}

## Erstellen des Workflows

Wenn die Voraussetzungen erfüllt sind, kannst du mit dem Erstellen des Workflows fortfahren.

Der folgende Beispielworkflow veranschaulicht, wie ein PHP-Projekt erstellt und in Azure App Service bereitgestellt wird, wenn ein Push zum `main`-Branch vorhanden ist.

Stelle sicher, dass du `AZURE_WEBAPP_NAME` im Workflowschlüssel `env` auf den Namen der von dir erstellten Web-App festgelegt hast. Wenn der Pfad zum Projekt nicht der Repositorystamm ist, ändere `AZURE_WEBAPP_PACKAGE_PATH` in den Pfad zu deinem Projekt. Wenn du eine andere PHP-Version als `8.x` verwendest, ändere `PHP_VERSION` in die von dir verwendete Version.

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

## Zusätzliche Ressourcen

Die folgenden Ressourcen können ebenfalls nützlich sein:

* Den ursprünglichen Startworkflow findest du unter [`azure-webapps-php.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-php.yml) im {% data variables.product.prodname_actions %}-Repository `starter-workflows`.
* Die zum Bereitstellen der Web-App verwendete Aktion ist die offizielle Azure-Aktion [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy).
* Weitere Beispiele für GitHub Action-Workflows, die in Azure bereitgestellt werden können, findest du im Repository [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
