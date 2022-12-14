---
title: Déploiement de PHP sur Azure App Service
intro: Vous pouvez déployer votre projet PHP sur Azure App Service dans le cadre de vos workflows de déploiement continu (CD).
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410162'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment utiliser {% data variables.product.prodname_actions %} pour créer et déployer un projet PHP sur [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Remarque :** {% data reusables.actions.about-oidc-short-overview %} et « [Configuration d’OpenID Connecter dans Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure) ».

{% endnote %}

{% endif %}

## Prérequis

Avant de créer votre workflow {% data variables.product.prodname_actions %}, vous devez suivre les étapes de configuration suivantes :

{% data reusables.actions.create-azure-app-plan %}

2. Créez une application web.

   Par exemple, vous pouvez utiliser Azure CLI pour créer une application web Azure App Service avec un runtime PHP :

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "php|7.4"
   ```

   Dans la commande ci-dessus, remplacez les paramètres par vos propres valeurs, où `MY_WEBAPP_NAME` correspond au nouveau nom de l’application web.

{% data reusables.actions.create-azure-publish-profile %}

5. Si vous le souhaitez, configurez un environnement de déploiement. {% data reusables.actions.about-environments %}

## Création du workflow

Une fois les conditions préalables remplies, vous pouvez procéder à la création du workflow.

L’exemple de workflow suivant montre comment créer et déployer un projet PHP sur Azure App Service lorsqu’il existe une poussée (push) vers la branche `main`.

Veillez à définir le paramètre `AZURE_WEBAPP_NAME` de la clé `env` du workflow sur le nom de l’application web que vous avez créée. Si le chemin d’accès à votre projet n’est pas la racine du référentiel, remplacez `AZURE_WEBAPP_PACKAGE_PATH` par le chemin d’accès à votre projet. Si vous utilisez une version de PHP autre que `8.x`, remplacez `PHP_VERSION` par la version que vous utilisez.

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

## Ressources supplémentaires

Les ressources suivantes peuvent également être utiles :

* Pour le workflow de démarrage d’origine, consultez [`azure-webapps-php.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-php.yml) dans le dépôt `starter-workflows` de {% data variables.product.prodname_actions %}.
* L’action utilisée pour déployer l’application web est l’action Azure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) officielle.
* Pour obtenir d’autres exemples de workflows GitHub Action qui se déploient sur Azure, reportez-vous au dépôt [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
