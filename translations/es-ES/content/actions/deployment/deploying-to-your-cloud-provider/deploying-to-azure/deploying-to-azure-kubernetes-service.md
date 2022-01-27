---
title: Deploying to Azure Kubernetes Service
intro: You can deploy your project to Azure Kubernetes Service (AKS) as part of your continuous deployment (CD) workflows.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure Kubernetes Service
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}


## Introducción

This guide explains how to use {% data variables.product.prodname_actions %} to build and deploy a project to [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/).

{% ifversion fpt or ghec or ghae-issue-4856 %}

{% note %}

**Nota**: {% data reusables.actions.about-oidc-short-overview %} y "[Configurar OpenID Connect en Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)".

{% endnote %}

{% endif %}

## Prerrequisitos

Antes de crear tu flujo de trabajo de {% data variables.product.prodname_actions %}, primero necesitarás completar los siguientes pasos de configuración:

1. Create a target AKS cluster and an Azure Container Registry (ACR). Para obtener más información, consulta las secciones "[Inicio rápido: Desplegar un clúster de AKS utilizando el portal de Azure - Azure Kubernetes Service](https://docs.microsoft.com/azure/aks/kubernetes-walkthrough-portal)" y "[Inicio ráido - Crear un registro en el portal - Azure Container Registry](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal)" en la documentación de Azure.

1. Create a secret called `AZURE_CREDENTIALS` to store your Azure credentials. For more information about how to find this information and structure the secret, see [the `Azure/login` action documentation](https://github.com/Azure/login#configure-a-service-principal-with-a-secret).

## Crear un flujo de trabajo

Una vez que hayas completado los prerequisitos, puedes proceder con la creación del flujo de trabajo.

The following example workflow demonstrates how to build and deploy a project to Azure Kubernetes Service when code is pushed to your repository.

Under the workflow `env` key, change the following values:
- `AZURE_CONTAINER_REGISTRY` to the name of your container registry
- `PROJECT_NAME` to the name of your project
- `RESOURCE_GROUP` to the resource group containing your AKS cluster
- `CLUSTER_NAME` to the name of your AKS cluster

This workflow uses the `helm` render engine for the [`azure/k8s-bake` action](https://github.com/Azure/k8s-bake). If you will use the `helm` render engine, change the value of `CHART_PATH` to the path to your helm file. Change `CHART_OVERRIDE_PATH` to an array of override file paths. If you use a different render engine, update the input parameters sent to the `azure/k8s-bake` action.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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
    - uses: actions/checkout@master

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

* Para encontrar el flujo de trabajo inicial original, consulta el archivo [`azure-kubernetes-service.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-kubernetes-service.yml) en el repositorio `starter-workflows` de {% data variables.product.prodname_actions %}.
* Las acciones que se utilizan en este flujo de trabajo son las oficiales de Azure: [`Azure/login`](https://github.com/Azure/login),[`Azure/aks-set-context`](https://github.com/Azure/aks-set-context), [`Azure/CLI`](https://github.com/Azure/CLI), [`Azure/k8s-bake`](https://github.com/Azure/k8s-bake) y [`Azure/k8s-deploy`](https://github.com/Azure/k8s-deploy).
* Para encontrar más ejemplos de flujos de trabajo de GitHub Actions que desplieguen a Azure, consulta el repositorio [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
