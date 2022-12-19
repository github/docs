---
title: Bereitstellen von Python in Azure App Service
intro: Du kannst dein Python-Projekt im Rahmen deiner Continuous Deployment-Workflows (CD) in Azure App Service bereitstellen.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Python
  - Azure App Service
ms.openlocfilehash: c9f1bc719068a250aaabfbb8dcb3581335dabdb1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409459'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In diesem Leitfaden wird erläutert, wie {% data variables.product.prodname_actions %} zum Erstellen und Bereitstellen eines Python-Projekts für [Azure App Service](https://azure.microsoft.com/services/app-service/) verwendet wird.

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Hinweis**: {% data reusables.actions.about-oidc-short-overview %} und [Konfigurieren von OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure).

{% endnote %}

{% endif %}

## Voraussetzungen

Bevor du deinen {% data variables.product.prodname_actions %}-Workflow erstellst, musst du die folgenden Einrichtungsschritte ausführen:

{% data reusables.actions.create-azure-app-plan %}

1. Erstellen einer Web-App

   Du kannst beispielsweise die Azure CLI verwenden, um eine Azure App Service-Web-App mit einer Python-Runtime zu erstellen:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "python|3.8"
   ```

   Ersetze im obigen Befehl die Parameter durch eigene Werte, wobei `MY_WEBAPP_NAME` ein neuer Name für die Web-App ist.

{% data reusables.actions.create-azure-publish-profile %}

1. Füge eine App-Einstellung namens `SCM_DO_BUILD_DURING_DEPLOYMENT` hinzu, und lege den Wert auf `1` fest.

5. Konfiguriere optional auch eine Bereitstellungsumgebung. {% data reusables.actions.about-environments %}

## Erstellen des Workflows

Wenn die Voraussetzungen erfüllt sind, kannst du mit dem Erstellen des Workflows fortfahren.

Der folgende Beispielworkflow veranschaulicht, wie ein Python-Projekt erstellt und in Azure App Service bereitgestellt wird, wenn ein Push zum `main`-Branch vorhanden ist.

Stelle sicher, dass du `AZURE_WEBAPP_NAME` im Workflowschlüssel `env` auf den Namen der von dir erstellten Web-App festgelegt hast. Wenn du eine andere Python-Version als `3.8` verwendest, ändere `PYTHON_VERSION` in die von dir verwendete Version.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Build and deploy Python app to Azure Web App

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  PYTHON_VERSION: '3.8'               # set this to the Python version to use

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Python version
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: {% raw %}${{ env.PYTHON_VERSION }}{% endraw %}

      - name: Create and start virtual environment
        run: |
          python -m venv venv
          source venv/bin/activate
      
      - name: Set up dependency caching for faster installs
        uses: {% data reusables.actions.action-cache %}
        with:
          path: ~/.cache/pip
          key: {% raw %}${{ runner.os }}-pip-${{ hashFiles('**/requirements.txt') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-pip-{% endraw %}

      - name: Install dependencies
        run: pip install -r requirements.txt

      # Optional: Add a step to run tests here (PyTest, Django test suites, etc.)

      - name: Upload artifact for deployment jobs
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: python-app
          path: |
            .
            !venv/
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
          name: python-app
          path: .

      - name: 'Deploy to Azure Web App'
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
```

## Zusätzliche Ressourcen

Die folgenden Ressourcen können ebenfalls nützlich sein:

* Den ursprünglichen Startworkflow findest du unter [`azure-webapps-python.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-python.yml) im {% data variables.product.prodname_actions %}-Repository `starter-workflows`.
* Die zum Bereitstellen der Web-App verwendete Aktion ist die offizielle Azure-Aktion [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy).
* Weitere Beispiele für GitHub Action-Workflows, die in Azure bereitgestellt werden können, findest du im Repository [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
