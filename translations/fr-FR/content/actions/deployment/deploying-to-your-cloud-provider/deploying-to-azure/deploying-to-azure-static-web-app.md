---
title: Déploiement sur Azure Static Web Apps
intro: Vous pouvez déployer votre application web sur Azure Static Web App dans le cadre de vos workflows de déploiement continu (CD).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure Static Web Apps
ms.openlocfilehash: 3e5b9a90e91e237fbd1b5679624ed3cdb3865856
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410546'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## Introduction

Ce guide explique comment utiliser {% data variables.product.prodname_actions %} pour générer et déployer une application web sur [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Remarque :** {% data reusables.actions.about-oidc-short-overview %} et « [Configuration d’OpenID Connecter dans Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure) ».

{% endnote %}

{% endif %}

## Prérequis

Pour pouvoir créer votre flux de travail {% data variables.product.prodname_actions %}, vous devez d’abord suivre la procédure de configuration ci-dessous :

1. Créez une application Azure Static Web Apps en utilisant l’option « Autre » comme source de déploiement. Pour plus d’informations, consultez « [Démarrage rapide : Création d’un premier site statique sur le Portail Azure](https://docs.microsoft.com/azure/static-web-apps/get-started-portal) » dans la documentation Azure. 

2. Créez un secret appelé `AZURE_STATIC_WEB_APPS_API_TOKEN` avec la valeur de votre jeton de déploiement d’application Static Web Apps. Pour savoir comment trouver votre jeton de déploiement, consultez « [Réinitialisation des jetons de déploiement dans Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/deployment-token-management) » dans la documentation Azure.

## Création du flux de travail

Une fois que vous avez rempli les prérequis, vous pouvez passer à la création du flux de travail.

L’exemple de flux de travail suivant montre comment générer et déployer une application Azure Static Web Apps en cas d’envoi (push) vers la branche `main` ou lorsqu’une demande de tirage (pull request) ciblant `main` est ouverte, synchronisée ou rouverte. Le flux de travail supprime également le déploiement de préproduction correspondant dès lors qu’une demande de tirage visant `main` est fermée.

Sous la clé de flux de travail `env`, remplacez les valeurs suivantes :
- `APP_LOCATION` par l’emplacement de votre code client ;
- `API_LOCATION` par l’emplacement de votre code source d’API (si `API_LOCATION` n’est pas pertinent, vous pouvez supprimer la variable et les lignes où elle est utilisée) ;
- `APP_ARTIFACT_LOCATION` par l’emplacement de la sortie de build de votre code client.

Pour plus d’informations sur ces valeurs, consultez « [Configuration de build pour Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/build-configuration?tabs=github-actions) » dans la documentation Azure.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Deploy web app to Azure Static Web Apps

env:
  APP_LOCATION: "/" # location of your client code
  API_LOCATION: "api" # location of your api source code - optional
  APP_ARTIFACT_LOCATION: "build" # location of client code build output

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

permissions:
  issues: write
  contents: read

jobs:
  build_and_deploy:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          submodules: true
      - name: Build And Deploy
        uses: Azure/static-web-apps-deploy@1a947af9992250f3bc2e68ad0754c0b0c11566c9
        with:
          azure_static_web_apps_api_token: {% raw %}${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}{% endraw %}
          repo_token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          action: "upload"
          app_location: {% raw %}${{ env.APP_LOCATION }}{% endraw %}
          api_location: {% raw %}${{ env.API_LOCATION }}{% endraw %}
          app_artifact_location: {% raw %}${{ env.APP_ARTIFACT_LOCATION }}{% endraw %}

  close:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close
    steps:
      - name: Close
        uses: Azure/static-web-apps-deploy@1a947af9992250f3bc2e68ad0754c0b0c11566c9
        with:
          azure_static_web_apps_api_token: {% raw %}${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}{% endraw %}
          action: "close"
```

## Ressources supplémentaires

Les ressources suivantes peuvent également être utiles :

* Pour le workflow de démarrage d’origine, consultez [`azure-staticwebapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-staticwebapp.yml) dans le dépôt `starter-workflows` de {% data variables.product.prodname_actions %}.
* L’action utilisée pour déployer l’application web est l’action Azure [`Azure/static-web-apps-deploy`](https://github.com/Azure/static-web-apps-deploy) officielle.
* Pour obtenir d’autres exemples de workflows GitHub Action qui se déploient sur Azure, reportez-vous au dépôt [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
