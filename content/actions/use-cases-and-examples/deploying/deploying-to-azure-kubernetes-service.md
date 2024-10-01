---
title: Deploying to Azure Kubernetes Service
intro: You can deploy your project to Azure Kubernetes Service (AKS) as part of your continuous deployment (CD) workflows.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure Kubernetes Service
redirect_from:
  - /actions/deployment/deploying-to-your-cloud-provider/deploying-to-azure/deploying-to-azure-kubernetes-service
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide explains how to use {% data variables.product.prodname_actions %} to build and deploy a project to [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/).

{% note %}

**Note**: {% data reusables.actions.about-oidc-short-overview %} and "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)."

{% endnote %}

## Prerequisites

Before creating your {% data variables.product.prodname_actions %} workflow, you will first need to complete the following setup steps:

1. Create a target AKS cluster and an Azure Container Registry (ACR). For more information, see "[Quickstart: Deploy an AKS cluster by using the Azure portal - Azure Kubernetes Service](https://docs.microsoft.com/azure/aks/kubernetes-walkthrough-portal)" and "[Quickstart - Create registry in portal - Azure Container Registry](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal)" in the Azure documentation.

1. Create a secret called `AZURE_CREDENTIALS` to store your Azure credentials. For more information about how to find this information and structure the secret, see [the `Azure/login` action documentation](https://github.com/Azure/login#configure-a-service-principal-with-a-secret).

## Creating the workflow

Once you've completed the prerequisites, you can proceed with creating the workflow.

The following example workflow demonstrates how to build and deploy a project to Azure Kubernetes Service when code is pushed to your repository.

Under the workflow `env` key, change the following values:
* `AZURE_CONTAINER_REGISTRY` to the name of your container registry
* `PROJECT_NAME` to the name of your project
* `RESOURCE_GROUP` to the resource group containing your AKS cluster
* `CLUSTER_NAME` to the name of your AKS cluster

This workflow uses the `helm` render engine for the [`azure/k8s-bake` action](https://github.com/Azure/k8s-bake). If you will use the `helm` render engine, change the value of `CHART_PATH` to the path to your helm file. Change `CHART_OVERRIDE_PATH` to an array of override file paths. If you use a different render engine, update the input parameters sent to the `azure/k8s-bake` action.

```yaml copy
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
      uses: azure/login@14a755a4e2fd6dff25794233def4f2cf3f866955
      with:
        creds: {% raw %}${{ secrets.AZURE_CREDENTIALS }}{% endraw %}

    - name: Build image on ACR
      uses: azure/CLI@61bb69d64d613b52663984bf12d6bac8fd7b3cc8
      with:
        azcliversion: 2.29.1
        inlineScript: |
          az configure --defaults acr={% raw %}${{ env.AZURE_CONTAINER_REGISTRY }}{% endraw %}
          az acr build -t  -t {% raw %}${{ env.REGISTRY_URL }}{% endraw %}/{% raw %}${{ env.PROJECT_NAME }}{% endraw %}:{% raw %}${{ github.sha }}{% endraw %}

    - name: Gets K8s context
      uses: azure/aks-set-context@94ccc775c1997a3fcfbfbce3c459fec87e0ab188
      with:
          creds: {% raw %}${{ secrets.AZURE_CREDENTIALS }}{% endraw %}
          resource-group: {% raw %}${{ env.RESOURCE_GROUP }}{% endraw %}
          cluster-name: {% raw %}${{ env.CLUSTER_NAME }}{% endraw %}
      id: login

    - name: Configure deployment
      uses: azure/k8s-bake@61041e8c2f75c1f01186c8f05fb8b24e1fc507d8
      with:
        renderEngine: 'helm'
        helmChart: {% raw %}${{ env.CHART_PATH }}{% endraw %}
        overrideFiles: {% raw %}${{ env.CHART_OVERRIDE_PATH }}{% endraw %}
        overrides: |
          replicas:2
        helm-version: 'latest'
      id: bake

    - name: Deploys application
      uses: Azure/k8s-deploy@dd4bbd13a5abd2fc9ca8bdcb8aee152bb718fa78
      with:
        manifests: {% raw %}${{ steps.bake.outputs.manifestsBundle }}{% endraw %}
        images: |
          {% raw %}${{ env.AZURE_CONTAINER_REGISTRY }}{% endraw %}.azurecr.io/{% raw %}${{ env.PROJECT_NAME }}{% endraw %}:{% raw %}${{ github.sha }}{% endraw %}
        imagepullsecrets: |
          {% raw %}${{ env.PROJECT_NAME }}{% endraw %}
```

## Additional resources

The following resources may also be useful:

* For the original workflow template, see [`azure-kubernetes-service.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-kubernetes-service.yml) in the {% data variables.product.prodname_actions %} `starter-workflows` repository.
* The actions used to in this workflow are the official Azure [`Azure/login`](https://github.com/Azure/login),[`Azure/aks-set-context`](https://github.com/Azure/aks-set-context), [`Azure/CLI`](https://github.com/Azure/CLI), [`Azure/k8s-bake`](https://github.com/Azure/k8s-bake), and [`Azure/k8s-deploy`](https://github.com/Azure/k8s-deploy)actions.
* For more examples of GitHub Action workflows that deploy to Azure, see the [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) repository.
