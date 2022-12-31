---
title: Déploiement sur Azure Kubernetes Service
intro: Vous pouvez déployer votre projet sur AKS (Azure Kubernetes Service) dans le cadre de vos workflows de déploiement continu (CD).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure Kubernetes Service
ms.openlocfilehash: 5c3052f1f432663a38be6aa15376c186c96193ca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410122'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## Introduction

Ce guide explique comment utiliser {% data variables.product.prodname_actions %} pour créer et déployer un projet sur [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Remarque :** {% data reusables.actions.about-oidc-short-overview %} et « [Configuration d’OpenID Connecter dans Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure) ».

{% endnote %}

{% endif %}

## Prérequis

Avant de créer votre workflow {% data variables.product.prodname_actions %}, vous devez suivre les étapes de configuration suivantes :

1. Créez un cluster AKS cible et un registre de conteneurs Azure (ACR). Pour plus d’informations, consultez « [Démarrage rapide – Déployer un cluster AKS avec le portail Azure – Azure Kubernetes Service](https://docs.microsoft.com/azure/aks/kubernetes-walkthrough-portal) » et « [Démarrage rapide – Créer un registre dans le portail – Azure Container Registry](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal) » dans la documentation Azure.

1. Créez un secret appelé `AZURE_CREDENTIALS` pour stocker vos informations d’identification Azure. Pour plus d’informations sur la façon de trouver ces informations et de structurer le secret, consultez [la documentation de l’action `Azure/login`](https://github.com/Azure/login#configure-a-service-principal-with-a-secret).

## Création du workflow

Une fois les conditions préalables remplies, vous pouvez procéder à la création du workflow.

L’exemple de workflow suivant montre comment générer et déployer un projet sur Azure Kubernetes Service lorsque le code est poussé (push) vers votre dépôt.

Sous la clé `env` de workflow, remplacez les valeurs suivantes :
- `AZURE_CONTAINER_REGISTRY` par le nom de votre registre de conteneurs
- `PROJECT_NAME` par le nom de votre projet
- `RESOURCE_GROUP` par le groupe de ressources contenant votre cluster AKS
- `CLUSTER_NAME` par le nom de votre cluster AKS

Ce workflow utilise le moteur de rendu `helm` pour l’[action `azure/k8s-bake`](https://github.com/Azure/k8s-bake). Si vous envisagez d’utiliser le moteur de rendu `helm`, remplacez la valeur de `CHART_PATH` par le chemin d’accès à votre fichier helm. Remplacez `CHART_OVERRIDE_PATH` par un tableau de chemins de fichiers de remplacement. Si vous utilisez un autre moteur de rendu, mettez à jour les paramètres d’entrée envoyés à l’action `azure/k8s-bake`.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Build and deploy to Azure Kubernetes Service

env:
  AZURE_CONTAINER_REGISTRY: MY_REGISTRY_NAME # set this to the name of your container registry
  PROJECT_NAME: MY_PROJECT_NAME              # set this to your project's name
  RESOURCE_GROUP: MY_RESOURCE_GROUP          # set this to the resource group containing your AKS cluster
  CLUSTER_NAME: MY_CLUSTER_NAME              # set this to the name of your AKS cluster
  REGISTRY_URL: MY_REGISTRY_URL              # set this to the URL of your registry
  # If you bake using helm:
  CHART_PATH: MY_HELM_FILE                   # set this to the path to your helm file
  CHART_OVERRIDE_PATH: MY_OVERRIDE_FILES     # set this to an array of override file paths

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: {% data reusables.actions.action-checkout %}

    - name: Azure Login
      uses: azure/login@89d153571fe9a34ed70fcf9f1d95ab8debea7a73
      with:
        creds: {% raw %}${{ secrets.AZURE_CREDENTIALS }}{% endraw %}

    - name: Build image on ACR
      uses: azure/CLI@7378ce2ca3c38b4b063feb7a4cbe384fef978055
      with:
        azcliversion: 2.29.1
        inlineScript: |
          az configure --defaults acr={% raw %}${{ env.AZURE_CONTAINER_REGISTRY }}{% endraw %}
          az acr build -t  -t {% raw %}${{ env.REGISTRY_URL }}{% endraw %}/{% raw %}${{ env.PROJECT_NAME }}{% endraw %}:{% raw %}${{ github.sha }}{% endraw %}
    
    - name: Gets K8s context
      uses: azure/aks-set-context@4e5aec273183a197b181314721843e047123d9fa
      with:
          creds: {% raw %}${{ secrets.AZURE_CREDENTIALS }}{% endraw %}
          resource-group: {% raw %}${{ env.RESOURCE_GROUP }}{% endraw %}
          cluster-name: {% raw %}${{ env.CLUSTER_NAME }}{% endraw %}
      id: login

    - name: Configure deployment
      uses: azure/k8s-bake@773b6144a3732e3bf4c78b146a0bb9617b2e016b
      with:
        renderEngine: 'helm'
        helmChart: {% raw %}${{ env.CHART_PATH }}{% endraw %}
        overrideFiles: {% raw %}${{ env.CHART_OVERRIDE_PATH }}{% endraw %}
        overrides: |     
          replicas:2
        helm-version: 'latest' 
      id: bake

    - name: Deploys application
    - uses: Azure/k8s-deploy@c8fbd76ededaad2799c054a9fd5d0fa5d4e9aee4
      with:
        manifests: {% raw %}${{ steps.bake.outputs.manifestsBundle }}{% endraw %}
        images: |
          {% raw %}${{ env.AZURE_CONTAINER_REGISTRY }}{% endraw %}.azurecr.io/{% raw %}${{ env.PROJECT_NAME }}{% endraw %}:{% raw %}${{ github.sha }}{% endraw %}
        imagepullsecrets: |
          {% raw %}${{ env.PROJECT_NAME }}{% endraw %}
```

## Ressources supplémentaires

Les ressources suivantes peuvent également être utiles :

* Pour le workflow de démarrage d’origine, consultez [`azure-kubernetes-service.yml `](https://github.com/actions/starter-workflows/blob/main/deployments/azure-kubernetes-service.yml) dans le dépôt `starter-workflows` de {% data variables.product.prodname_actions %}.
* Les actions utilisées dans ce workflow sont les actions Azure [`Azure/login`](https://github.com/Azure/login), [`Azure/aks-set-context`](https://github.com/Azure/aks-set-context), [`Azure/CLI`](https://github.com/Azure/CLI), [`Azure/k8s-bake`](https://github.com/Azure/k8s-bake) et [`Azure/k8s-deploy`](https://github.com/Azure/k8s-deploy) officielles.
* Pour obtenir d’autres exemples de workflows GitHub Action qui se déploient sur Azure, reportez-vous au dépôt [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
