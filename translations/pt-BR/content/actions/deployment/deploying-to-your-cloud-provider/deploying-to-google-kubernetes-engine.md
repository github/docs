---
title: Implantar no Google Kubernetes Engine
intro: Você pode realizar a implantação no Google Kubernetes Engine como parte dos seus fluxos de trabalho de implantação contínua (CD).
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
shortTitle: Implantar no Google Kubernetes Engine
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia explica como usar {% data variables.product.prodname_actions %} para criar um aplicativo de contêiner e fazer push para o Google Container Registry (GCR) e fazer a implantação para o Google Kubernetes Engine (GKE) quando houver um push no branch `principal`.

O GKE é um serviço de cluster gerenciado do Kubernetes pelo Google Cloud que pode hospedar suas cargas de trabalho containerizadas na nuvem ou em seu próprio centro de dados. Para obter mais informações, consulte [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine).

{% ifversion fpt or ghec or ghae-issue-4856 %}

{% note %}

**Observação**: {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

## Pré-requisitos

Antes de prosseguir com a criação do fluxo de trabalho, você precisará concluir as etapas a seguir para seu projeto do Kubernetes. Este guia assume que a raiz do seu projeto já possui um `arquivo Docker` e um arquivo de configuração de implantação do Kubernetes. Por exemplo, consulte [google-github-actions](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/gke).

### Criar um cluster do GKE

Para criar o cluster do GKE, primeiro você precisará efetuar a autenticação usando o CLI de `gcloud`. Para obter mais informações sobre esta etapa, veja os artigos a seguir:
- [`gcloud auth login`](https://cloud.google.com/sdk/gcloud/reference/auth/login)
- [`gcloud` CLI](https://cloud.google.com/sdk/gcloud/reference)
- [`gcloud` CLI e Cloud SDK](https://cloud.google.com/sdk/gcloud#the_gcloud_cli_and_cloud_sdk)

Por exemplo:

{% raw %}
```bash{:copy}
$ gcloud container clusters create $GKE_CLUSTER \
    --project=$GKE_PROJECT \
    --zone=$GKE_ZONE
```
{% endraw %}

### Habilitar as APIs

Habilitar as APIs do Kubernetes Engine e do Registro de Contêiner. Por exemplo:

{% raw %}
```bash{:copy}
$ gcloud services enable \
    containerregistry.googleapis.com \
    container.googleapis.com
```
{% endraw %}

### Configurar uma conta de serviço e armazenar as suas credenciais

Este procedimento demonstra como criar a conta de serviço para sua integração com o GKE. Ele explica como criar a conta, adicionar funções, recuperar suas chaves, e armazená-las como um segredo de repositório criptografado codificado em base64 denominado `GKE_SA_KEY`.

1. Crie uma nova conta de serviço:
  {% raw %}
  ```
  $ gcloud iam service-accounts create $SA_NAME
  ```
  {% endraw %}
1. Recupere o endereço de e-mail da conta de serviço que você acabou de criar:
  {% raw %}
  ```
  $ gcloud iam service-accounts list
  ```
  {% endraw %}
1. Adicionar funções à conta de serviço. Observação: Aplique funções mais restritivas para atender aos seus requisitos.
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
1. Faça o download do arquivo chave do JSON para a conta de serviço:
  {% raw %}
  ```
  $ gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL
  ```
  {% endraw %}
1. Armazenar a chave da conta de serviço como um segredo denominado `GKE_SA_KEY`:
  {% raw %}
  ```
  $ export GKE_SA_KEY=$(cat key.json | base64)
  ```
  {% endraw %}
  Para obter mais informações sobre como armazenar um segredo, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

### Armazenando o nome do seu projeto

Armazene o nome do seu projeto como um segredo denominado `GKE_PROJECT`. Para obter mais informações sobre como armazenar um segredo, consulte "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

### (Opcional) Configurar kustomize
Kustomize é uma ferramenta opcional usada para gerenciar especificações do YAML. Depois de criar um arquivo do `kustomization`, o fluxo de trabalho abaixo pode ser usado para definir dinamicamente os campos da imagem e adicionar o resultado ao `kubectl`. Para obter mais informações, consulte [uso de kustomize](https://github.com/kubernetes-sigs/kustomize#usage).

### (Opcional) Configure um ambiente de implantação

{% data reusables.actions.about-environments %}

## Criar o fluxo de trabalho

Depois de preencher os pré-requisitos, você pode prosseguir com a criação do fluxo de trabalho.

O fluxo de trabalho a seguir mostra como construir uma imagem de contêiner e como carregá-los no GCR. Em seguida, ele usa as ferramentas do Kubernetes (como `kubectl` e `kustomize`) para mover a imagem para a implantação do cluster.

Na chave `env`, altere o valor de `GKE_CLUSTER` para o nome do seu cluster, `GKE_ZONE` à sua zona de clustering. `DEPLOYMENT_NAME` ao nome da sua implantação e `IMAGE` ao nome da sua imagem.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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
      uses: actions/checkout@v2

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

## Recursos adicionais

Para mais informações sobre as ferramentas usadas nesses exemplos, consulte a documentação a seguir:

* Para o fluxo de trabalho inicial completo, consulte o [Fluxo de trabalho de "criar e implantar no GKE"](https://github.com/actions/starter-workflows/blob/main/deployments/google.yml).
* Para mais fluxos de trabalho iniciais e código de acompanhamento, consulte o [fluxos de trabalho de exemplos de {% data variables.product.prodname_actions %} do Google](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/).
* Mecanismo de personalização do YAML do Kubernetes: [Kustomize](https://kustomize.io/).
* "[Implantarum aplicativo web conteinerizado](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app)" na documentação do Google Kubernetes Engine .
