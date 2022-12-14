---
title: Azure Kubernetes Service へのデプロイ
intro: 継続的デプロイ (CD) ワークフローの一部として、プロジェクトを Azure Kubernetes Service (AKS) にデプロイできます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410124'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## はじめに

このガイドでは、{% data variables.product.prodname_actions %} を使用して、プロジェクトを作成し、[Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) にデプロイする方法について説明します。

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**注**: {% data reusables.actions.about-oidc-short-overview %} と「[Configuring OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)」 (Azure での OpenID Connect の構成)。

{% endnote %}

{% endif %}

## 前提条件

{% data variables.product.prodname_actions %}ワークフローを作成する前に、まず以下のセットアップのステップを完了しておかなければなりません。

1. ターゲット AKS クラスターと Azure Container Registry (ACR) を作成します。 詳細については、Azure ドキュメントの「[クイック スタート:Azure portal を使用して AKS クラスターをデプロイする - Azure Kubernetes Service](https://docs.microsoft.com/azure/aks/kubernetes-walkthrough-portal)」、および[ポータルでのレジストリの作成に関するクイックスタート (Azure Container Registry)](https://docs.microsoft.com/azure/container-registry/container-registry-get-started-portal) を参照してください。

1. Azure 資格情報を格納するための `AZURE_CREDENTIALS` という名前のシークレットを作成します。 この情報の検索方法とシークレットの構成方法に関する詳細については、[`Azure/login` アクションのドキュメント](https://github.com/Azure/login#configure-a-service-principal-with-a-secret)を参照してください。

## ワークフローの作成

必要な環境を整えたら、ワークフローの作成に進むことができます。

次のワークフローの例では、コードがリポジトリにプッシュされる場合に、プロジェクトを作成し、Azure Kubernetes Service にデプロイする方法のデモを行います。

ワークフロー `env` キーで、次の値を変更します。
- `AZURE_CONTAINER_REGISTRY` をコンテナー レジストリの名前に
- `PROJECT_NAME` をプロジェクトの名前に
- `RESOURCE_GROUP` を AKS クラスターを含むリソース グループに
- `CLUSTER_NAME` を AKS クラスターの名前に

このワークフローでは、[`azure/k8s-bake` アクション](https://github.com/Azure/k8s-bake)に、`helm` レンダリング エンジンを使用します。 `helm` レンダリング エンジンを使用する場合は、`CHART_PATH` の値を helm ファイルへのパスに変更します。 `CHART_OVERRIDE_PATH` をオーバーライド ファイル パスの配列に変更します。 別のレンダリング エンジンを使用する場合は、`azure/k8s-bake` アクションに送信される入力パラメーターを更新します。

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

## その他のリソース

以下のリソースも役に立つでしょう。

* 元のスターター ワークフローについては、{% data variables.product.prodname_actions %} `starter-workflows` リポジトリの [`azure-kubernetes-service.yml `](https://github.com/actions/starter-workflows/blob/main/deployments/azure-kubernetes-service.yml) を参照してください。
* このワークフローで使用されるアクションは、Azure の公式な [`Azure/login`](https://github.com/Azure/login)、[`Azure/aks-set-context`](https://github.com/Azure/aks-set-context)、[`Azure/CLI`](https://github.com/Azure/CLI)、[`Azure/k8s-bake`](https://github.com/Azure/k8s-bake)、および [`Azure/k8s-deploy`](https://github.com/Azure/k8s-deploy) アクションです。
* Azure にデプロイする GitHub アクション ワークフローの例が他にも必要であれば、[actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) リポジトリを参照してください。
