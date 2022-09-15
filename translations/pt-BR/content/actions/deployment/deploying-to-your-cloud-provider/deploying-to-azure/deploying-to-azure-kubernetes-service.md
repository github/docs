---
title: Implantando no Azure Kubernetes Service
intro: Você pode fazer deploy de seu projeto no Azure Kubernetes Service (AKS) como parte de fluxos de trabalho para implantação contínua (CD).
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410120'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## Introdução

Este guia explica como usar o {% data variables.product.prodname_actions %} para criar e implantar um projeto no [Serviço de Kubernetes do Azure](https://azure.microsoft.com/services/kubernetes-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Observação**: {% data reusables.actions.about-oidc-short-overview %} e "[Como configurar o OpenID Connect no Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)".

{% endnote %}

{% endif %}

## Pré-requisitos

Antes de criar seu fluxo de trabalho de {% data variables.product.prodname_actions %}, primeiro você precisa concluir as etapas de configuração a seguir:

1. Crie um cluster-alvo do AKS e um Azure Container Registry (ACR). Para obter mais informações, confira "[Guia de Início Rápido: Implantar um cluster do AKS usando o portal do Azure – Serviço de Kubernetes do Azure](https://docs.microsoft.com/azure/aks/kubernetes-walkthrough-portal)" e "[Guia de Início Rápido – Criar um registro no portal – Registro de Contêiner do Azure](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal)" na documentação do Azure.

1. Crie um segredo chamado `AZURE_CREDENTIALS` para armazenar suas credenciais do Azure. Para obter mais informações sobre como encontrar essas informações e estruturar o segredo, confira [a documentação da ação `Azure/login`](https://github.com/Azure/login#configure-a-service-principal-with-a-secret).

## Criar o fluxo de trabalho

Depois de preencher os pré-requisitos, você pode prosseguir com a criação do fluxo de trabalho.

O exemplo de fluxo de trabalho a seguir demonstra como criar e implantar um projeto no Azure Kubernetes Services quando o código for enviado por push para o seu repositório.

Abaixo da chave `env` de fluxo de trabalho, altere os seguintes valores:
- `AZURE_CONTAINER_REGISTRY` para o nome do registro de contêiner
- `PROJECT_NAME` para o nome do projeto
- `RESOURCE_GROUP` para o grupo de recursos que contém o cluster do AKS
- `CLUSTER_NAME` para o nome do cluster do AKS

Esse fluxo de trabalho usa o mecanismo de renderização `helm` da [ação `azure/k8s-bake`](https://github.com/Azure/k8s-bake). Se você usar o mecanismo de renderização `helm`, altere o valor de `CHART_PATH` para o caminho para o arquivo do Helm. Altere `CHART_OVERRIDE_PATH` para uma matriz de caminhos de arquivo de substituição. Se você usar outro mecanismo de renderização, atualize os parâmetros de entrada enviados para a ação `azure/k8s-bake`.

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

## Recursos adicionais

Os seguintes recursos também podem ser úteis:

* Para o fluxo de trabalho inicial original, confira [`azure-kubernetes-service.yml `](https://github.com/actions/starter-workflows/blob/main/deployments/azure-kubernetes-service.yml) no repositório `starter-workflows` do {% data variables.product.prodname_actions %}.
* As ações usadas nesse fluxo de trabalho são as ações [`Azure/login`](https://github.com/Azure/login), [`Azure/aks-set-context`](https://github.com/Azure/aks-set-context), [`Azure/CLI`](https://github.com/Azure/CLI) e [`Azure/k8s-bake`](https://github.com/Azure/k8s-bake) oficiais do Azure e as ações [`Azure/k8s-deploy`](https://github.com/Azure/k8s-deploy).
* Para ver mais exemplos de fluxos de trabalho do GitHub Action que são implantados no Azure, confira o repositório [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
