---
title: Google Kubernetes Engine에 배포
intro: CD(지속적인 배포) 워크플로의 일부로 Google Kubernetes Engine에 배포할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147409549'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 {% data variables.product.prodname_actions %}를 사용하여 컨테이너화된 애플리케이션을 빌드하고, GCR(Google Container Registry)에 푸시하고, `main` 분기에 대한 푸시가 있는 경우 GKE(Google Kubernetes Engine)에 배포하는 방법을 설명합니다.

GKE는 클라우드 또는 사용자 고유의 데이터 센터에서 컨테이너화된 워크로드를 호스트할 수 있는 Google Cloud의 관리형 Kubernetes 클러스터 서비스입니다. 자세한 내용은 [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)을 참조하세요.

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**참고**: {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

## 필수 조건

워크플로 만들기를 계속 진행하기 전에 Kubernetes 프로젝트에 대해 다음 단계를 완료해야 합니다. 이 가이드에서는 프로젝트의 루트에 `Dockerfile` 및 Kubernetes 배포 구성 파일이 이미 있다고 가정합니다. 예제는 [google-github-actions](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/gke)를 참조하세요.

### GKE 클러스터 만들기

GKE 클러스터를 만들려면 먼저 `gcloud` CLI를 사용하여 인증해야 합니다. 이 단계에 대한 자세한 내용은 다음 문서를 참조하세요.
- [`gcloud auth login`](https://cloud.google.com/sdk/gcloud/reference/auth/login)
- [`gcloud` CLI](https://cloud.google.com/sdk/gcloud/reference)
- [`gcloud` CLI 및 클라우드 SDK](https://cloud.google.com/sdk/gcloud#the_gcloud_cli_and_cloud_sdk)

예를 들면 다음과 같습니다.

{% raw %}
```bash{:copy}
$ gcloud container clusters create $GKE_CLUSTER \
    --project=$GKE_PROJECT \
    --zone=$GKE_ZONE
```
{% endraw %}

### API 사용

Kubernetes Engine 및 Container Registry API를 사용하도록 설정합니다. 예를 들면 다음과 같습니다.

{% raw %}
```bash{:copy}
$ gcloud services enable \
    containerregistry.googleapis.com \
    container.googleapis.com
```
{% endraw %}

### 서비스 계정 구성 및 자격 증명 저장

이 절차에서는 GKE 통합의 서비스 계정을 만드는 방법을 보여 줍니다. 계정을 만들고, 계정에 역할을 추가하고, 계정의 키를 검색하고 `GKE_SA_KEY`라는 base64로 인코드된 암호화된 리포지토리 비밀로 저장하는 방법을 설명합니다.

1. 새 서비스 계정을 만듭니다. {% raw %}
  ```
  $ gcloud iam service-accounts create $SA_NAME
  ```
  {% endraw %}
1. 방금 만든 서비스 계정의 메일 주소를 검색합니다. {% raw %}
  ```
  $ gcloud iam service-accounts list
  ```
  {% endraw %}
1. 서비스 계정에 역할을 추가합니다. 참고: 요구 사항에 맞게 더 제한적인 역할을 적용합니다.
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
1. 서비스 계정에 대한 JSON 키 파일을 다운로드합니다. {% raw %}
  ```
  $ gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL
  ```
  {% endraw %}
1. 서비스 계정 키를 `GKE_SA_KEY`라는 비밀로 저장합니다. {% raw %}
  ```
  $ export GKE_SA_KEY=$(cat key.json | base64)
  ```
  {% endraw %} 비밀을 저장하는 방법에 대한 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

### 프로젝트 이름 저장

프로젝트 이름을 `GKE_PROJECT`라는 비밀로 저장합니다. 비밀을 저장하는 방법에 대한 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

### (선택 사항) kustomize 구성
kustomize는 YAML 사양을 관리하는 데 사용되는 선택적 도구입니다. `kustomization` 파일을 만든 후 아래 워크플로를 사용하여 이미지의 필드를 동적으로 설정하고 결과를 `kubectl`로 파이프할 수 있습니다. 자세한 내용은 [kustomize 사용법](https://github.com/kubernetes-sigs/kustomize#usage)을 참조하세요.

### (선택 사항) 배포 환경 구성

{% data reusables.actions.about-environments %}

## 워크플로 만들기

필수 조건을 완료한 후 워크플로 만들기를 계속 진행할 수 있습니다.

다음 예제 워크플로에서는 컨테이너 이미지를 빌드하고 GCR에 푸시하는 방법을 보여 줍니다. 그런 다음, Kubernetes 도구(예: `kubectl` 및 `kustomize`)를 사용하여 이미지를 클러스터 배포로 풀합니다.

`env` 키에서 `GKE_CLUSTER` 값을 클러스터 이름으로, `GKE_ZONE`을 클러스터 영역으로, `DEPLOYMENT_NAME`을 배포 이름으로, `IMAGE`를 이미지 이름으로 변경합니다.

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

## 추가 리소스

예제에서 사용된 도구에 대한 자세한 내용은 다음 설명서를 참조하세요.

* 전체 시작 워크플로는 [“빌드 및 GKE에 배포” 워크플로](https://github.com/actions/starter-workflows/blob/main/deployments/google.yml)를 참조하세요.
* 더 많은 시작 워크플로 및 함께 제공되는 코드는 Google의 [{% data variables.product.prodname_actions %} 예제 워크플로](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/)를 참조하세요.
* Kubernetes YAML 사용자 지정 엔진: [Kustomize](https://kustomize.io/)
* Google Kubernetes Engine 설명서의 “[컨테이너화된 웹 애플리케이션 배포](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app)”
