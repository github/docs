---
title: Google Kubernetes Engineへのデプロイ
intro: 継続的デプロイメント（CD）ワークフローの一部として、Google Kubernetes Engineへのデプロイを行えます。
redirect_from:
  - /actions/guides/deploying-to-google-kubernetes-engine
  - /actions/deployment/deploying-to-google-kubernetes-engine
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Containers
  - Google Kubernetes Engine
shortTitle: Deploy to Google Kubernetes Engine
ms.openlocfilehash: 0572a326d52654b256e0e1ad7fe9c9c4e9d547ac
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147409548'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドは、`main` ブランチへのプッシュがある場合、{% data variables.product.prodname_actions %} を使ってコンテナー化されたアプリケーションをビルドし、それを Google Container Registry (GCR) にプッシュし、Google Kubernetes Engine (GKE) にデプロイする方法を説明します。

GKEはGoogle CloudによるマネージドなKubernetesクラスタサービスで、コンテナ化されたワークロードをクラウドもしくはユーザ自身のデータセンターでホストできます。 詳細については、「[Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)」を参照してください。

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**注**: {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

## 前提条件

ワークフローの作成に進む前に、Kubernetesプロジェクトについて以下のステップを完了しておく必要があります。 このガイドは、プロジェクトのルートに `Dockerfile` と Kubernetes Deployment 構成ファイルが既にあることを前提としています。 例については、[google-github-actions](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/gke) を参照してください。

### GKEクラスタの作成

GKE クラスターを作成するには、まず `gcloud` CLI を使用して認証する必要があります。 このステップに関する詳しい情報については、以下の記事を参照してください。
- [`gcloud auth login`](https://cloud.google.com/sdk/gcloud/reference/auth/login)
- [`gcloud` CLI](https://cloud.google.com/sdk/gcloud/reference)
- [`gcloud` CLI と Cloud SDK](https://cloud.google.com/sdk/gcloud#the_gcloud_cli_and_cloud_sdk)

次に例を示します。

{% raw %}
```bash{:copy}
$ gcloud container clusters create $GKE_CLUSTER \
    --project=$GKE_PROJECT \
    --zone=$GKE_ZONE
```
{% endraw %}

### APIの有効化

Kubernetes Engine及びContainer Registry APIを有効化してください。 次に例を示します。

{% raw %}
```bash{:copy}
$ gcloud services enable \
    containerregistry.googleapis.com \
    container.googleapis.com
```
{% endraw %}

### サービスアカウントの設定と資格情報の保存

この手順は、GKEインテグレーション用のサービスアカウントの作成方法を示します。 アカウントを作成し、ロールを追加し、そのキーを取得し、`GKE_SA_KEY` という名前の、base64 でエンコードされた暗号化されたリポジトリ シークレットとして格納する方法について説明します。

1. 新しいサービス アカウントを作成します。{% raw %}
  ```
  $ gcloud iam service-accounts create $SA_NAME
  ```
  {% endraw %}
1. 作成したサービス アカウントのメール アドレスを取得します。{% raw %}
  ```
  $ gcloud iam service-accounts list
  ```
  {% endraw %}
1. サービスアカウントにロールを追加してください。 ノート: 要件に合わせて、より制約の強いロールを適用してください。
  {% raw %}
  ```
  $ gcloud projects add-iam-policy-binding $GKE_PROJECT \
    --member=serviceAccount:$SA_EMAIL \
    --role=roles/container.admin
  $ gcloud projects add-iam-policy-binding $GKE_PROJECT \
    --member=serviceAccount:$SA_EMAIL \
    --role=roles/storage.admin
  $ gcloud projects add-iam-policy-binding $GKE_PROJECT \
    --member=serviceAccount:$SA_EMAIL \
    --role=roles/container.clusterViewer
  ```
  {% endraw %}
1. サービス アカウントの JSON キーファイルをダウンロードします。{% raw %}
  ```
  $ gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL
  ```
  {% endraw %}
1. サービス アカウント キーを `GKE_SA_KEY` という名前のシークレットとして格納します。{% raw %}
  ```
  $ export GKE_SA_KEY=$(cat key.json | base64)
  ```
  {% endraw %} シークレットを格納する方法の詳細については、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

### プロジェクト名の保存

プロジェクトの名前を `GKE_PROJECT` という名前のシークレットとして保存します。 シークレットを保存する方法の詳細については、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

### （オプション）kustomizeの設定
Kustomizeは、YAML仕様を管理するために使われるオプションのツールです。 `kustomization` ファイルを作成した後、次のワークフローを使用して、イメージのフィールドを動的に設定し、結果を `kubectl` にパイプできます。 詳細については、「[kustomize の使用](https://github.com/kubernetes-sigs/kustomize#usage)」を参照してください。

### (省略可能) デプロイ環境を構成する

{% data reusables.actions.about-environments %}

## ワークフローの作成

必要な環境を整えたら、ワークフローの作成に進むことができます。

以下のワークフロー例は、コンテナイメージを作成して GCR にプッシュする方法を示しています。 次に、Kubernetes ツール (`kubectl` や `kustomize` など) を使用して、イメージがクラスター デプロイにプルされます。

`env` キーの下で、`GKE_CLUSTER` の値をクラスターの名前に、`GKE_ZONE` をクラスター ゾーンに、`DEPLOYMENT_NAME` をデプロイの名前に、`IMAGE` をイメージの名前に変更します。

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Build and Deploy to GKE

on:
  push:
    branches:
      - main

env:
  PROJECT_ID: {% raw %}${{ secrets.GKE_PROJECT }}{% endraw %}
  GKE_CLUSTER: cluster-1    # Add your cluster name here.
  GKE_ZONE: us-central1-c   # Add your cluster zone here.
  DEPLOYMENT_NAME: gke-test # Add your deployment name here.
  IMAGE: static-site

jobs:
  setup-build-publish-deploy:
    name: Setup, Build, Publish, and Deploy
    runs-on: ubuntu-latest
    environment: production

    steps:
    - name: Checkout
      uses: {% data reusables.actions.action-checkout %}

    # Setup gcloud CLI
    - uses: google-github-actions/setup-gcloud@94337306dda8180d967a56932ceb4ddcf01edae7
      with:
        service_account_key: {% raw %}${{ secrets.GKE_SA_KEY }}{% endraw %}
        project_id: {% raw %}${{ secrets.GKE_PROJECT }}{% endraw %}

    # Configure Docker to use the gcloud command-line tool as a credential
    # helper for authentication
    - run: |-
        gcloud --quiet auth configure-docker

    # Get the GKE credentials so we can deploy to the cluster
    - uses: google-github-actions/get-gke-credentials@fb08709ba27618c31c09e014e1d8364b02e5042e
      with:
        cluster_name: {% raw %}${{ env.GKE_CLUSTER }}{% endraw %}
        location: {% raw %}${{ env.GKE_ZONE }}{% endraw %}
        credentials: {% raw %}${{ secrets.GKE_SA_KEY }}{% endraw %}

    # Build the Docker image
    - name: Build
      run: |-
        docker build \
          --tag "gcr.io/$PROJECT_ID/$IMAGE:$GITHUB_SHA" \
          --build-arg GITHUB_SHA="$GITHUB_SHA" \
          --build-arg GITHUB_REF="$GITHUB_REF" \
          .

    # Push the Docker image to Google Container Registry
    - name: Publish
      run: |-
        docker push "gcr.io/$PROJECT_ID/$IMAGE:$GITHUB_SHA"

    # Set up kustomize
    - name: Set up Kustomize
      run: |-
        curl -sfLo kustomize https://github.com/kubernetes-sigs/kustomize/releases/download/v3.1.0/kustomize_3.1.0_linux_amd64
        chmod u+x ./kustomize

    # Deploy the Docker image to the GKE cluster
    - name: Deploy
      run: |-
        ./kustomize edit set image gcr.io/PROJECT_ID/IMAGE:TAG=gcr.io/$PROJECT_ID/$IMAGE:$GITHUB_SHA
        ./kustomize build . | kubectl apply -f -
        kubectl rollout status deployment/$DEPLOYMENT_NAME
        kubectl get services -o wide
```

## その他のリソース

これらの例で使用されているツールの詳細については、次のドキュメントを参照してください。

* 完全なスターター ワークフローについては、「["GKE へのビルドとデプロイ" ワークフロー](https://github.com/actions/starter-workflows/blob/main/deployments/google.yml)」を参照してください。
* より多くのスターター ワークフローと付随するコードについては、Google の [{% data variables.product.prodname_actions %} サンプル ワークフロー](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/)を参照してください。
* Kubernetes YAML カスタマイズ エンジン: [Kustomize](https://kustomize.io/)。
* Google Kubernetes Engine ドキュメントの「[コンテナ化されたウェブ アプリケーションのデプロイ](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app)」。
