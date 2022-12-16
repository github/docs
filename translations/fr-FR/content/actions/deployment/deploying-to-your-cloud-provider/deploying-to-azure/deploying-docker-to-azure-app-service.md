---
title: Déploiement de Docker sur Azure App Service
intro: Vous pouvez déployer un conteneur Docker sur Azure App Service dans le cadre de vos workflows de déploiement continu (CD).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Containers
  - Docker
  - Azure App Service
ms.openlocfilehash: bfae92b757e4d3224efc1e94f1f4377a4183e4d2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410354'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment utiliser {% data variables.product.prodname_actions %} pour créer et déployer un conteneur Docker sur [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Remarque :** {% data reusables.actions.about-oidc-short-overview %} et « [Configuration d’OpenID Connecter dans Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure) ».

{% endnote %}

{% endif %}

## Prérequis

Avant de créer votre workflow {% data variables.product.prodname_actions %}, vous devez suivre les étapes de configuration suivantes :

{% data reusables.actions.create-azure-app-plan %}

1. Créez une application web.

   Par exemple, vous pouvez utiliser Azure CLI pour créer une application web Azure App Service :

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --deployment-container-image-name nginx:latest
   ```

   Dans la commande ci-dessus, remplacez les paramètres par vos propres valeurs, où `MY_WEBAPP_NAME` correspond au nouveau nom de l’application web.

{% data reusables.actions.create-azure-publish-profile %}

1. Définissez les informations d’identification du Registre pour votre application web.

   Créez un jeton d’accès personnel avec les étendues `repo` et `read:packages`. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».

   Définissez `DOCKER_REGISTRY_SERVER_URL` sur `https://ghcr.io`, `DOCKER_REGISTRY_SERVER_USERNAME` sur le nom d’utilisateur GitHub ou l’organisation propriétaire du référentiel, et `DOCKER_REGISTRY_SERVER_PASSWORD` sur votre jeton d’accès personnel ci-dessus. Cela donnera à votre application web des informations d’identification qui lui permettront d’extraire l’image conteneur une fois que votre workflow aura envoyé une image nouvellement générée au Registre. Pour ce faire, vous pouvez utiliser la commande Azure CLI suivante :

   ```shell
    az webapp config appsettings set \
        --name MY_WEBAPP_NAME \
        --resource-group MY_RESOURCE_GROUP \
        --settings DOCKER_REGISTRY_SERVER_URL=https://ghcr.io DOCKER_REGISTRY_SERVER_USERNAME=MY_REPOSITORY_OWNER DOCKER_REGISTRY_SERVER_PASSWORD=MY_PERSONAL_ACCESS_TOKEN
```

5. Si vous le souhaitez, configurez un environnement de déploiement. {% data reusables.actions.about-environments %}

## Création du workflow

Une fois les conditions préalables remplies, vous pouvez procéder à la création du workflow.

L’exemple de workflow suivant montre comment créer et déployer un conteneur Docker sur Azure App Service lorsqu’il y a un envoi (push) vers la branche `main`.

Veillez à définir le paramètre `AZURE_WEBAPP_NAME` de la clé `env` du workflow sur le nom de l’application web que vous avez créée.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Build and deploy a container to an Azure Web App

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name

on:
  push:
    branches:
      - main

permissions:
  contents: 'read'
  packages: 'write'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1

      - name: Log in to GitHub container registry
        uses: docker/login-action@v1.10.0
        with:
          registry: ghcr.io
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}

      - name: Lowercase the repo name
        run: echo "REPO=${GITHUB_REPOSITORY,,}" >>${GITHUB_ENV}

      - name: Build and push container image to registry
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: ghcr.io/{% raw %}${{ env.REPO }}{% endraw %}:{% raw %}${{ github.sha }}{% endraw %}
          file: ./Dockerfile

  deploy:
    runs-on: ubuntu-latest

    needs: build

    environment:
      name: 'production'
      url: {% raw %}${{ steps.deploy-to-webapp.outputs.webapp-url }}{% endraw %}

    steps:
      - name: Lowercase the repo name
        run: echo "REPO=${GITHUB_REPOSITORY,,}" >>${GITHUB_ENV}

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
          images: 'ghcr.io/{% raw %}${{ env.REPO }}{% endraw %}:{% raw %}${{ github.sha }}{% endraw %}'
```

## Ressources supplémentaires

Les ressources suivantes peuvent également être utiles :

* Pour le workflow de démarrage d’origine, consultez [`azure-container-webapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-container-webapp.yml) dans le dépôt `starter-workflows` de {% data variables.product.prodname_actions %}.
* L’action utilisée pour déployer l’application web est l’action Azure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) officielle.
* Pour obtenir d’autres exemples de workflows GitHub Action qui se déploient sur Azure, reportez-vous au dépôt [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
