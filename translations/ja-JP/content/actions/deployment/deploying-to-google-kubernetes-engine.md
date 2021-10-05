---
title: Google Kubernetes Engineへのデプロイ
intro: 継続的デプロイメント（CD）ワークフローの一部として、Google Kubernetes Engineへのデプロイを行えます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/guides/deploying-to-google-kubernetes-engine
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - CD
  - Containers
  - Google Kubernetes Engine
shortTitle: Deploy to Kubernetes (GKE)
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## はじめに

このガイドは、{% data variables.product.prodname_actions %}を使ってコンテナ化されたアプリケーションをビルドし、それをGoogle Container Registryにプッシュし、Google Kubernetes Engine (GKE)にデプロイする方法を説明します。

GKEはGoogle CloudによるマネージドなKubernetesクラスタサービスで、コンテナ化されたワークロードをクラウドもしくはユーザ自身のデータセンターでホストできます。 詳しい情報については[Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)を参照してください。

## 必要な環境

ワークフローの作成に進む前に、Kubernetesプロジェクトについて以下のステップを完了しておく必要があります。 このガイドは、プロジェクトのルートに`Dockerfile`とKubernetes Deployment設定ファイルがすでに存在することを前提としています。 例としては[google-github-actions](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/gke)を参照してください。

### GKEクラスタの作成

GKEクラスタを作成するには、まず`gcloud` CLIで認証を受けなければなりません。 このステップに関する詳しい情報については、以下の記事を参照してください。
- [`gcloud auth login`](https://cloud.google.com/sdk/gcloud/reference/auth/login)
- [`gcloud` CLI](https://cloud.google.com/sdk/gcloud/reference)
- [`gcloud` CLIとCloud SDK](https://cloud.google.com/sdk/gcloud#the_gcloud_cli_and_cloud_sdk)

例:

{% raw %}
```bash{:copy}
$ gcloud container clusters create $GKE_CLUSTER \
    --project=$GKE_PROJECT \
    --zone=$GKE_ZONE
```
{% endraw %}

### APIの有効化

Kubernetes Engine及びContainer Registry APIを有効化してください。 例:

{% raw %}
```bash{:copy}
$ gcloud services enable \
    containerregistry.googleapis.com \
    container.googleapis.com
```
{% endraw %}

### サービスアカウントの設定と資格情報の保存

この手順は、GKEインテグレーション用のサービスアカウントの作成方法を示します。 アカウントの作成、アカウントへのロールの追加、アカウントのキーの取得、それらの`GKE_SA_KEY`という名前のbase64エンコードされた[暗号化されたリポジトリシークレット](/actions/reference/encrypted-secrets)としての保存の方法を説明します。

1. 新しいサービスアカウントを作成してください。
  {% raw %}
  ```
  $ gcloud iam service-accounts create $SA_NAME
  ```
  {% endraw %}
1. 作成したサービスアカウントのメールアドレスを取得してください。
  {% raw %}
  ```
  $ gcloud iam service-accounts list
  ```
  {% endraw %}
1. サービスアカウントにロールを追加してください。 ノート: 要件に合わせて、より制約の強いロールを適用してください。
  {% raw %}
  ```
  $ gcloud projects add-iam-policy-binding $GKE_PROJECT \
    --member=serviceAccount:$SA_EMAIL \
    --role=roles/container.admin \
    --role=roles/storage.admin \
    --role=roles/container.clusterViewer
  ```
  {% endraw %}
1. サービスアカウントのJSONキーファイルをダウンロードしてください。
  {% raw %}
  ```
  $ gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL
  ```
  {% endraw %}
1. Store the service account key as a secret named `GKE_SA_KEY`:
  {% raw %}
  ```
  $ export GKE_SA_KEY=$(cat key.json | base64)
  ```
  {% endraw %}

### （オプション）kustomizeの設定
Kustomizeは、YAML仕様を管理するために使われるオプションのツールです。 _kustomization_ ファイルの作成後、以下のワークフローを使用して、イメージのフィールドを動的に設定し、結果を `kubectl` にパイプすることができます。 詳しい情報については、「[kustomize の使い方](https://github.com/kubernetes-sigs/kustomize#usage)」を参照してください。

## ワークフローの作成

必要な環境を整えたら、ワークフローの作成に進むことができます。

以下のワークフロー例は、コンテナイメージを作成して GCR にプッシュする方法を示しています。 次に、Kubernetes ツール（`kubectl` や `kustomize` など）を使用して、イメージをクラスタデプロイメントにプルします。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Build and Deploy to GKE

on:
  release:
    types: [created]

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
    steps:

    - name: Checkout
      uses: actions/checkout@v2

    # Setup gcloud CLI
    - uses: google-github-actions/setup-gcloud@94337306dda8180d967a56932ceb4ddcf01edae7
      with:
        service_account_key: {% raw %}${{ secrets.GKE_SA_KEY }}{% endraw %}
        project_id: {% raw %}${{ secrets.GKE_PROJECT }}{% endraw %}

    # Configure docker to use the gcloud command-line tool as a credential helper
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
        curl --location https://github.com/kubernetes-sigs/kustomize/releases/download/kustomize%2Fv4.2.0/kustomize_v4.2.0_linux_amd64.tar.gz | tar xz
        chmod u+x ./kustomize

    # Deploy the Docker image to the GKE cluster
    - name: Deploy
      run: |-
        ./kustomize edit set image gcr.io/PROJECT_ID/IMAGE:TAG=gcr.io/$PROJECT_ID/$IMAGE:$GITHUB_SHA
        ./kustomize build . | kubectl apply -f -
        kubectl rollout status deployment/$DEPLOYMENT_NAME
        kubectl get services -o wide
```

## 追加リソース

これらの例で使用されているツールの詳細については、次のドキュメントを参照してください。

* For the full starter workflow, see the ["Build and Deploy to GKE" workflow](https://github.com/actions/starter-workflows/blob/main/deployments/google.yml).
* その他のスターターワークフローと付随するコードについては、Google の[{% data variables.product.prodname_actions %}ワークフローの例](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/)を参照してください。
* Kubernetes YAML のカスタマイズエンジンは、「[Kustomize](https://kustomize.io/)」を参照してください。
* Google Kubernetes Engine のドキュメントにある「[コンテナ化された Web アプリケーションのデプロイ](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app)」を参照してください。
