---
title: Azure Kubernetes Service에 배포
intro: CD(지속적인 배포) 워크플로의 일부로 AKS(Azure Kubernetes Service)에 프로젝트를 배포할 수 있습니다.
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147410125'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## 소개

이 가이드에서는 {% data variables.product.prodname_actions %}를 사용하여 프로젝트를 [Azure Kubernetes Service ](https://azure.microsoft.com/services/kubernetes-service/)에 빌드하고 배포하는 방법에 대해 설명합니다.

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**참고**: {% data reusables.actions.about-oidc-short-overview %} 및 “[Azure에서 OpenID Connect 구성](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure).”

{% endnote %}

{% endif %}

## 필수 조건

{% data variables.product.prodname_actions %} 워크플로를 만들기 전에 먼저 다음 설정 단계를 완료해야 합니다.

1. 대상 AKS 클러스터 및 ACR(Azure Container Registry)을 만듭니다. 자세한 내용은 Azure 설명서의 “[빠른 시작: Azure Portal - Azure Kubernetes Service를 사용하여 AKS 클러스터 배포](https://docs.microsoft.com/azure/aks/kubernetes-walkthrough-portal)” 및 “[빠른 시작 - 포털에서 레지스트리 만들기 - Azure Container Registry](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal)”를 참조하세요.

1. Azure 자격 증명을 저장하기 위해 `AZURE_CREDENTIALS`이라는 비밀을 만듭니다. 이 정보를 찾고 비밀을 구성하는 방법에 대한 자세한 내용은 [`Azure/login` 작업 설명서](https://github.com/Azure/login#configure-a-service-principal-with-a-secret)를 참조하세요.

## 워크플로 만들기

필수 구성 요소를 완료한 후에는 워크플로 만들기를 진행할 수 있습니다.

다음 예제 워크플로에서는 코드를 리포지토리에 푸시할 때 Azure Kubernetes Service 프로젝트를 빌드하고 배포하는 방법을 보여 줍니다.

워크플로 `env` 키에서 다음 값을 바꿉니다.
- `AZURE_CONTAINER_REGISTRY`를 컨테이너 레지스트리의 이름으로 바꿉니다.
- `PROJECT_NAME`을 프로젝트의 이름으로 바꿉니다.
- `RESOURCE_GROUP`을 AKS 클러스터가 포함된 리소스 그룹으로 바꿉니다.
- `CLUSTER_NAME`을 AKS 클러스터 이름으로 바꿉니다.

이 워크플로는 [`azure/k8s-bake` 작업](https://github.com/Azure/k8s-bake)에 대해 `helm` 렌더링 엔진을 사용합니다. `helm` 렌더링 엔진을 사용하는 경우 `CHART_PATH` 값을 helm 파일의 경로로 변경합니다. `CHART_OVERRIDE_PATH`을 재정의 파일 경로 배열로 변경합니다. 다른 렌더링 엔진을 사용하는 경우 `azure/k8s-bake` 작업에 전송된 입력 매개 변수를 업데이트합니다.

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

## 추가 리소스

다음 리소스도 유용할 수 있습니다.

* 원래의 시작 워크플로는 {% data variables.product.prodname_actions %} `starter-workflows` 리포지토리의 [`azure-kubernetes-service.yml `](https://github.com/actions/starter-workflows/blob/main/deployments/azure-kubernetes-service.yml)을 참조하세요.
* 이 워크플로우에서 사용되는 작업은 공식 Azure [`Azure/login`](https://github.com/Azure/login), [`Azure/aks-set-context`](https://github.com/Azure/aks-set-context), [`Azure/CLI`](https://github.com/Azure/CLI), [`Azure/k8s-bake`](https://github.com/Azure/k8s-bake), [`Azure/k8s-deploy`](https://github.com/Azure/k8s-deploy) 작업입니다.
* Azure에 배포하는 GitHub Actions 워크플로에 대한 자세한 예제는 [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) 리포지토리를 참조하세요.
