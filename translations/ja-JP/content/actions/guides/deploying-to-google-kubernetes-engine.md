---
title: Google Kubernetes Engineへのデプロイ
intro: 継続的デプロイメント（CD）ワークフローの一部として、Google Kubernetes Engineへのデプロイを行えます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - CD
  - コンテナ
  - Google Kubernetes Engine
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### はじめに

このガイドは、{% data variables.product.prodname_actions %}を使ってコンテナ化されたアプリケーションをビルドし、それをGoogle Container Registryにプッシュし、Google Kubernetes Engine (GKE)にデプロイする方法を説明します。

GKEはGoogle CloudによるマネージドなKubernetesクラスタサービスで、コンテナ化されたワークロードをクラウドもしくはユーザ自身のデータセンターでホストできます。 詳しい情報については[Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)を参照してください。

### 必要な環境

ワークフローの作成に進む前に、Kubernetesプロジェクトについて以下のステップを完了しておく必要があります。 このガイドは、プロジェクトのルートに`Dockerfile`とKubernetes Deployment設定ファイルがすでに存在することを前提としています。 例としては[google-github-actions](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/gke)を参照してください。

#### GKEクラスタの作成

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

#### APIの有効化

Kubernetes Engine及びContainer Registry APIを有効化してください。 例:

{% raw %}
```bash{:copy}
$ gcloud services enable \
    containerregistry.googleapis.com \
    container.googleapis.com
```
{% endraw %}

#### サービスアカウントの設定と資格情報の保存

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
    --role=roles/storage.admin
  ```
  {% endraw %}
1. サービスアカウントのJSONキーファイルをダウンロードしてください。
  {% raw %}
  ```
  $ gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL
  ```
  {% endraw %}
1. プロジェクトIDを`GKE_PROJECT`という名前のシークレットとして保存してください。
  {% raw %}
  ```
  $ export GKE_SA_KEY=$(cat key.json | base64)
  ```
  {% endraw %}

#### （オプション）kustomizeの設定
Kustomizeは、YAML仕様を管理するために使われるオプションのツールです。 _kustomization_ ファイルの作成後、以下のワークフローを使用して、イメージのフィールドを動的に設定し、結果を `kubectl` にパイプすることができます。 詳しい情報については、「[kustomize の使い方](https://github.com/kubernetes-sigs/kustomize#usage)」を参照してください。

### ワークフローの作成

必要な環境を整えたら、ワークフローの作成に進むことができます。

以下のワークフロー例は、コンテナイメージを作成して GCR にプッシュする方法を示しています。 次に、Kubernetes ツール（`kubectl` や `kustomize` など）を使用して、イメージをクラスタデプロイメントにプルします。

{% raw %}
```yaml{:copy}
name: Build and Deploy to GKE

on:
  release:
    types: [created]

env:
  PROJECT_ID: ${{ secrets.GKE_PROJECT }}
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

    # gcloud CLI のセットアップ
    - uses: google-github-actions/setup-gcloud@v0.2.0
      with:
        service_account_key: ${{ secrets.GKE_SA_KEY }}
        project_id: ${{ secrets.GKE_PROJECT }}

    # gcloud コマンドラインツールを認証情報ヘルパーとして使用するようにDockerを設定する
    - run: |-
        gcloud --quiet auth configure-docker

    # GKE 認証情報を取得して、クラスタにデプロイできるようにする
    - uses: google-github-actions/get-gke-credentials@v0.2.1
      with:
        cluster_name: ${{ env.GKE_CLUSTER }}
        location: ${{ env.GKE_ZONE }}
        credentials: ${{ secrets.GKE_SA_KEY }}

    # Docker イメージをビルドする
    - name: Build
      run: |-
        docker build \
          --tag "gcr.io/$PROJECT_ID/$IMAGE:$GITHUB_SHA" \
          --build-arg GITHUB_SHA="$GITHUB_SHA" \
          --build-arg GITHUB_REF="$GITHUB_REF" \
          .

    # Docker イメージを Google Container Registry にプッシュする
    - name: Publish
      run: |-
        docker push "gcr.io/$PROJECT_ID/$IMAGE:$GITHUB_SHA"

    # kustomize を設定する
    - name: Set up Kustomize
      run: |-
        curl -sfLo kustomize https://github.com/kubernetes-sigs/kustomize/releases/download/v3.1.0/kustomize_3.1.0_linux_amd64
        chmod u+x ./kustomize

    # Docker イメージを GKE クラスタにデプロイする
    - name: Deploy
      run: |-
        ./kustomize edit set image gcr.io/PROJECT_ID/IMAGE:TAG=gcr.io/$PROJECT_ID/$IMAGE:$GITHUB_SHA
        ./kustomize build . | kubectl apply -f -
        kubectl rollout status deployment/$DEPLOYMENT_NAME
        kubectl get services -o wide
```
{% endraw %}

### 追加リソース

これらの例で使用されているツールの詳細については、次のドキュメントを参照してください。

* 完全なスターターワークフローについては、「[ビルドして GKE にデプロイするワークフロー](https://github.com/actions/starter-workflows/blob/master/ci/google.yml)」を参照してください。
* その他のスターターワークフローと付随するコードについては、Google の[{% data variables.product.prodname_actions %}ワークフローの例](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/)を参照してください。
* Kubernetes YAML のカスタマイズエンジンは、「[Kustomize](https://kustomize.io/)」を参照してください。
* Google Kubernetes Engine のドキュメントにある「[コンテナ化された Web アプリケーションのデプロイ](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app)」を参照してください。
