---
title: Déploiement de Node.js sur Azure App Service
intro: Vous pouvez déployer votre projet Node.js sur Azure App Service dans le cadre de vos workflows de déploiement continu (CD).
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410170'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment utiliser {% data variables.product.prodname_actions %} pour créer, tester et déployer un projet Node.js sur [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Remarque :** {% data reusables.actions.about-oidc-short-overview %} et « [Configuration d’OpenID Connecter dans Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure) ».

{% endnote %}

{% endif %}

## Prérequis

Avant de créer votre workflow {% data variables.product.prodname_actions %}, vous devez suivre les étapes de configuration suivantes :

{% data reusables.actions.create-azure-app-plan %}

2. Créez une application web.

   Par exemple, vous pouvez utiliser Azure CLI pour créer une application web Azure App Service avec un runtime Node.js :

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "NODE|14-lts"
   ```

   Dans la commande ci-dessus, remplacez les paramètres par vos propres valeurs, où `MY_WEBAPP_NAME` correspond à un nouveau nom de l’application web.

{% data reusables.actions.create-azure-publish-profile %}

5. Si vous le souhaitez, configurez un environnement de déploiement. {% data reusables.actions.about-environments %}

## Création du workflow

Une fois les conditions préalables remplies, vous pouvez procéder à la création du workflow.

L’exemple de workflow suivant montre comment créer, tester et déployer le projet Node.js sur Azure App Service lorsqu’il existe une poussée (push) vers la branche `main`.

Veillez à définir le paramètre `AZURE_WEBAPP_NAME` de la clé `env` du workflow sur le nom de l’application web que vous avez créée. Si le chemin d’accès à votre projet n’est pas la racine du dépôt, remplacez `AZURE_WEBAPP_PACKAGE_PATH` par le chemin d’accès de votre projet. Si vous utilisez une version de Node.js autre que `10.x`, remplacez `NODE_VERSION` par la version que vous utilisez.

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

## Ressources supplémentaires

Les ressources suivantes peuvent également être utiles :

* Pour le workflow de démarrage d’origine, consultez [`azure-webapps-node.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-node.yml) dans le dépôt `starter-workflows` de {% data variables.product.prodname_actions %}.
* L’action utilisée pour déployer l’application web est l’action Azure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) officielle.
* Pour obtenir d’autres exemples de workflows GitHub Action qui se déploient sur Azure, reportez-vous au dépôt [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
* Le guide de démarrage rapide « [Créer une application web Node.js dans Azure](https://docs.microsoft.com/azure/app-service/quickstart-nodejs) » dans la documentation de l’application web Azure illustre l’utilisation de {% data variables.product.prodname_vscode %} avec l’[extension Azure App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice).
