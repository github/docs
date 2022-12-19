---
title: Déploiement de Python sur Azure App Service
intro: Vous pouvez déployer votre projet Python sur Azure App Service dans le cadre de vos workflows de déploiement continu (CD).
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
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886813'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment utiliser {% data variables.product.prodname_actions %} pour créer et déployer un projet Python sur [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Remarque :** {% data reusables.actions.about-oidc-short-overview %} et « [Configuration d’OpenID Connecter dans Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure) ».

{% endnote %}

{% endif %}

## Prérequis

Avant de créer votre workflow {% data variables.product.prodname_actions %}, vous devez suivre les étapes de configuration suivantes :

{% data reusables.actions.create-azure-app-plan %}

1. Créez une application web.

   Par exemple, vous pouvez utiliser Azure CLI pour créer une application web Azure App Service avec un runtime Python :

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "python|3.8"
   ```

   Dans la commande ci-dessus, remplacez les paramètres par vos propres valeurs, où `MY_WEBAPP_NAME` est un nouveau nom pour l’application web.

{% data reusables.actions.create-azure-publish-profile %}

1. Ajoutez un paramètres d’application appelé `SCM_DO_BUILD_DURING_DEPLOYMENT` et définissez sa valeur sur `1`.

5. Si vous le souhaitez, configurez un environnement de déploiement. {% data reusables.actions.about-environments %}

## Création du workflow

Une fois que vous avez terminé les prérequis, vous pouvez passer à la création du workflow.

L’exemple de workflow suivant montre comment créer et déployer un projet Python sur Azure App Service lorsqu’il existe une poussée (push) vers la branche `main`.

Vérifiez que vous définissez `AZURE_WEBAPP_NAME` dans la clé `env` du workflow sur le nom de l’application web que vous avez créée. Si vous utilisez une version de Python autre que `3.8`, remplacez `PYTHON_VERSION` par la version que vous utilisez.

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

## Ressources supplémentaires

Les ressources suivantes peuvent également être utiles :

* Pour le workflow de démarrage d’origine, consultez [`azure-webapps-python.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-python.yml) dans le dépôt `starter-workflows` de {% data variables.product.prodname_actions %}.
* L’action utilisée pour déployer l’application web est l’action Azure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) officielle.
* Pour obtenir d’autres exemples de workflows GitHub Action qui se déploient sur Azure, reportez-vous au dépôt [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
