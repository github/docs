---
title: Bereitstellen für Azure Kubernetes Service
intro: Im Rahmen deines Continuous Deployment-Workflows (CD) kannst du dein Projekt in Azure Kubernetes Service (AKS) bereitstellen.
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410123'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## Einführung

In diesem Leitfaden wird erläutert, wie {% data variables.product.prodname_actions %} zum Erstellen und Bereitstellen eines Projekts für [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) verwendet wird.

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Hinweis**: {% data reusables.actions.about-oidc-short-overview %} und [Konfigurieren von OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure).

{% endnote %}

{% endif %}

## Voraussetzungen

Bevor du deinen {% data variables.product.prodname_actions %}-Workflow erstellst, musst du die folgenden Einrichtungsschritte ausführen:

1. Erstelle einen AKS-Zielcluster und eine Instanz von Azure Container Registry (ACR). Weitere Informationen findest du unter [Schnellstart: Bereitstellen eines AKS-Clusters mithilfe des Azure-Portals – Azure Kubernetes Service](https://docs.microsoft.com/azure/aks/kubernetes-walkthrough-portal) und [Schnellstart: Erstellen einer Registrierung im Portal – Azure Container Registry](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal) in der Azure-Dokumentation.

1. Erstelle ein Geheimnis mit dem Namen `AZURE_CREDENTIALS` zum Speichern deiner Azure-Anmeldeinformationen. Weitere Informationen dazu, wie du diese Informationen findest, sowie zur Struktur des Geheimnisses findest du in [der Dokumentation zur `Azure/login`-Aktion](https://github.com/Azure/login#configure-a-service-principal-with-a-secret).

## Erstellen des Workflows

Nachdem die Voraussetzungen erfüllt sind, kannst du mit dem Erstellen des Workflows fortfahren.

Der folgende Beispielworkflow zeigt, wie du ein Projekt erstellst und für Azure Kubernetes Service bereitstellst, wenn Code in dein Repository gepusht wird.

Ändere unter dem Workflowschlüssel `env` die folgenden Werte:
- `AZURE_CONTAINER_REGISTRY` in den Namen deiner Containerregistrierung
- `PROJECT_NAME` in den Namen deines Projekts
- `RESOURCE_GROUP` in die Ressourcengruppe mit deinem AKS-Cluster
- `CLUSTER_NAME` in den Namen deines AKS-Clusters

Dieser Workflow verwendet das `helm`-Rendermodul für die [`azure/k8s-bake`-Aktion](https://github.com/Azure/k8s-bake). Wenn du das `helm`-Rendermodul verwendest, ändere den Wert von `CHART_PATH` in den Pfad deiner Helm-Datei. Ändere `CHART_OVERRIDE_PATH` in ein Array aus Außerkraftsetzungsdateipfaden. Wenn du ein anderes Rendermodul verwendest, aktualisiere die Eingabeparameter, die an die Aktion `azure/k8s-bake` gesendet werden.

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

## Zusätzliche Ressourcen

Die folgenden Ressourcen können ebenfalls nützlich sein:

* Den ursprünglichen Startworkflow findest du unter [`azure-kubernetes-service.yml `](https://github.com/actions/starter-workflows/blob/main/deployments/azure-kubernetes-service.yml) im {% data variables.product.prodname_actions %}-Repository `starter-workflows`.
* In diesem Workflow werden die offiziellen Azure-Aktionen [`Azure/login`](https://github.com/Azure/login),[`Azure/aks-set-context`](https://github.com/Azure/aks-set-context), [`Azure/CLI`](https://github.com/Azure/CLI), [`Azure/k8s-bake`](https://github.com/Azure/k8s-bake) und [`Azure/k8s-deploy`](https://github.com/Azure/k8s-deploy) verwendet.
* Weitere Beispiele für GitHub Action-Workflows, die in Azure bereitgestellt werden können, findest du im Repository [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
