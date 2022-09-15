---
title: Desplegar a Azure Kubernetes Service
intro: Puedes desplegar tu proyecto a Azure Kubernetes Service (AKS) como parte de tus flujos de trabajo de despliegue continuo (DC).
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410127'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## Introducción

En esta guía se explica cómo usar {% data variables.product.prodname_actions %} para compilar e implementar un proyecto en [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Nota**: {% data reusables.actions.about-oidc-short-overview %} y "[Configuración de OpenID Connect en Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)".

{% endnote %}

{% endif %}

## Requisitos previos

Antes de crear tu flujo de trabajo de {% data variables.product.prodname_actions %}, primero necesitarás completar los siguientes pasos de configuración:

1. Crea un clúster de AKS destino y un Registro de Contenedor de Azure (ACR). Para más información, vea "[Inicio rápido: Implementación de un clúster de AKS mediante Azure Portal: Azure Kubernetes Service](https://docs.microsoft.com/azure/aks/kubernetes-walkthrough-portal)" e "[Inicio rápido: Creación de un registro en el portal: Azure Container Registry](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal)" en la documentación de Azure.

1. Cree un secreto llamado `AZURE_CREDENTIALS` para almacenar las credenciales de Azure. Para más información sobre cómo encontrar esta información y estructurar el secreto, vea [la documentación de la acción`Azure/login`](https://github.com/Azure/login#configure-a-service-principal-with-a-secret).

## Crear un flujo de trabajo

Una vez que hayas completado los prerequisitos, puedes proceder con la creación del flujo de trabajo.

El siguiente flujo de trabajo de ejemplo demuestra cómo compilar y desplegar un proyecto a Azure Kibernetes Service cuando el código se sube a tu repositorio.

Debajo de la clave `env` del flujo de trabajo, cambie los valores siguientes:
- `AZURE_CONTAINER_REGISTRY` por el nombre del registro de contenedor
- `PROJECT_NAME` por el nombre del proyecto
- `RESOURCE_GROUP` por el grupo de recursos que contiene el clúster de AKS
- `CLUSTER_NAME` por el nombre del clúster de AKS

En este flujo de trabajo se usa el motor de representación `helm` para la [acción `azure/k8s-bake`](https://github.com/Azure/k8s-bake). Si va a usar el motor de representación `helm`, cambie el valor de `CHART_PATH` por la ruta del archivo helm. Cambie `CHART_OVERRIDE_PATH` por una matriz de rutas de archivo de invalidación. Si usa otro motor de representación, actualice los parámetros de entrada que se envían a la acción `azure/k8s-bake`.

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

## Recursos adicionales

Los siguientes recursos también pueden ser útiles:

* Para obtener el flujo de trabajo de inicio original, vea [`azure-kubernetes-service.yml `](https://github.com/actions/starter-workflows/blob/main/deployments/azure-kubernetes-service.yml) en el repositorio `starter-workflows` de {% data variables.product.prodname_actions %}.
* Las acciones que se usan en este flujo de trabajo son las acciones oficiales de Azure [`Azure/login`](https://github.com/Azure/login),[`Azure/aks-set-context`](https://github.com/Azure/aks-set-context), [`Azure/CLI`](https://github.com/Azure/CLI), [`Azure/k8s-bake`](https://github.com/Azure/k8s-bake) y [`Azure/k8s-deploy`](https://github.com/Azure/k8s-deploy).
* Para obtener más ejemplos de flujos de trabajo de acción de GitHub que se implementan en Azure, vea el repositorio [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
