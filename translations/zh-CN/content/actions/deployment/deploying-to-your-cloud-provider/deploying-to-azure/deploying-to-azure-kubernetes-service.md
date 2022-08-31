---
title: 部署到 Azure Kubernetes Service
intro: 作为持续部署 (CD) 工作流程的一部分，您可以将项目部署到 Azure Kubernetes Service (AKS)。
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


## 简介

本指南说明如何使用 {% data variables.product.prodname_actions %} 构建并部署 Php 项目到 [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/)。

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**注意**：{% data reusables.actions.about-oidc-short-overview %} 和“[在 Azure 中配置 OpenID Connect](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)”。

{% endnote %}

{% endif %}

## 基本要求

在创建 {% data variables.product.prodname_actions %} 工作流程之前，首先需要完成以下设置步骤：

1. 创建目标 AKS 群集和 Azure 容器注册表 (ACR)。 更多信息请参阅 Azure 文档中的“[快速入门：使用 Azure 门户部署 AKS 群集 - Azure Kubernetes Service](https://docs.microsoft.com/azure/aks/kubernetes-walkthrough-portal)”和“[快速入门 - 在门户中创建注册表 - Azure 容器注册表](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal)”。

1. 创建名为 `AZURE_CREDENTIALS` 的机密来存储 Azure 凭据。 有关如何查找此信息和构建密钥的详细信息，请参阅[ `Azure/login` 操作文档](https://github.com/Azure/login#configure-a-service-principal-with-a-secret)。

## 创建工作流程

完成先决条件后，可以继续创建工作流程。

以下示例工作流程演示在将代码推送到存储库时，如何构建项目并将其部署到 Azure Kubernetes Service。

在工作流程 `env` 键下，更改以下值：
- 将 `AZURE_CONTAINER_REGISTRY` 更改为您的容器注册表的名称
- 将 `PROJECT_NAME` 更改为您的项目名称
- 将 `Resources URCE_GROUP` 更改为包含您的 AKS 集群的资源组
- 将 `CLUSTER_NAME` 更改为您的 AKS 集群名称

此工作流程对 [`azure/k8s-bake` 操作](https://github.com/Azure/k8s-bake)使用 `helm` 渲染引擎。 如果要使用 `helm` 渲染引擎，请将 `CHART_PATH` 的值更改为 helm 文件的路径。 将 `CHART_OVERRIDE_PATH` 更改为覆盖文件路径数组。 如果使用其他渲染引擎，请更新发送到 `azure/k8s-bake` 操作的输入参数。

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

## 其他资源

以下资源也可能有用：

* 有关原始入门工作流程，请参阅 {% data variables.product.prodname_actions %} `starter-workflows` 仓库中的 [`azure-kubernetes-service.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-kubernetes-service.yml)。
* 用于此工作流程的操作是正式的 Azure [`Azure/login`](https://github.com/Azure/login)、[`Azure/aks-set-context`](https://github.com/Azure/aks-set-context)、[`Azure/CLI`](https://github.com/Azure/CLI)、[`Azure/k8s-bake`](https://github.com/Azure/k8s-bake) 和 [`Azure/k8s-deploy`](https://github.com/Azure/k8s-deploy) 操作。
* 有关部署到 Azure 的 GitHub 操作工作流程的更多示例，请参阅 [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) 存储库。
