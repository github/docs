---
title: Развертывание в Google Kubernetes Engine
intro: Вы можете выполнить развертывание в Google Kubernetes Engine в рамках рабочих процессов непрерывного развертывания (CD).
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147409550'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве объясняется, как использовать {% data variables.product.prodname_actions %} для создания контейнерного приложения, его отправки в Реестр контейнеров Google (GCR) и развертывания в Google Kubernetes Engine (GKE) при наличии отправки в ветвь `main`.

GKE — это управляемая служба кластера Kubernetes от Google Cloud, которая может размещать контейнерные рабочие нагрузки в облаке или в вашем собственном центре обработки данных. Дополнительные сведения см. в статье о [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Примечание.** {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

## Предварительные требования

Прежде чем приступить к созданию рабочего процесса, необходимо выполнить следующие действия для проекта Kubernetes. В этом руководстве предполагается, что в корневом каталоге проекта уже есть `Dockerfile` и файл конфигурации развертывания Kubernetes. Пример см. на странице [google-github-actions](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/gke).

### Создание кластера GKE

Чтобы создать кластер GKE, сначала потребуется пройти проверку подлинности с помощью CLI `gcloud`. Дополнительные сведения об этом действии см. в следующих статьях:
- [`gcloud auth login`](https://cloud.google.com/sdk/gcloud/reference/auth/login)
- [`gcloud` CLI](https://cloud.google.com/sdk/gcloud/reference)
- [CLI `gcloud` и пакет Cloud SDK](https://cloud.google.com/sdk/gcloud#the_gcloud_cli_and_cloud_sdk)

Пример.

{% raw %}
```bash{:copy}
$ gcloud container clusters create $GKE_CLUSTER \
    --project=$GKE_PROJECT \
    --zone=$GKE_ZONE
```
{% endraw %}

### Включение API-интерфейсов

Включите API-интерфейсы Kubernetes Engine Реестра контейнеров. Пример.

{% raw %}
```bash{:copy}
$ gcloud services enable \
    containerregistry.googleapis.com \
    container.googleapis.com
```
{% endraw %}

### Настройка учетной записи службы и сохранение ее учетных данных

В этой процедуре показано, как создать учетную запись службы для интеграции GKE. В ней объясняется, как создать учетную запись, добавить в нее роли, получить ключи и сохранить их в виде зашифрованного в кодировке Base64 секрета репозитория с именем `GKE_SA_KEY`.

1. Создайте учетную запись службы: {% raw %}
  ```
  $ gcloud iam service-accounts create $SA_NAME
  ```
  {% endraw %}
1. Получите адрес электронной почты только что созданной учетной записи службы: {% raw %}
  ```
  $ gcloud iam service-accounts list
  ```
  {% endraw %}
1. Добавьте роли в учетную запись службы. Примечание. Примените более ограничительные роли в соответствии с вашими требованиями.
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
1. Скачайте файл ключа JSON для учетной записи службы: {% raw %}
  ```
  $ gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL
  ```
  {% endraw %}
1. Сохраните ключ учетной записи службы в виде секрета с именем `GKE_SA_KEY`: {% raw %}
  ```
  $ export GKE_SA_KEY=$(cat key.json | base64)
  ```
  {% endraw %} Дополнительные сведения о сохранении секрета см. в статье "[Зашифрованные секреты](/actions/security-guides/encrypted-secrets)".

### Сохранение имени проекта

Сохраните имя проекта в виде секрета с именем `GKE_PROJECT`. Дополнительные сведения о сохранении секрета см. в статье "[Зашифрованные секреты](/actions/security-guides/encrypted-secrets)".

### (Необязательно) Настройка kustomize
Kustomize — это необязательное средство, используемое для управления спецификациями YAML. После создания файла `kustomization` приведенный ниже рабочий процесс можно использовать для динамического задания полей образа и канала в результате выполнения команды `kubectl`. Дополнительные сведения см. в разделе об [использовании kustomize](https://github.com/kubernetes-sigs/kustomize#usage).

### (Необязательно) Настройка среды развертывания

{% data reusables.actions.about-environments %}

## Создание рабочего процесса

Выполнив предварительные требования, можно приступить к созданию рабочего процесса.

В следующем примере рабочего процесса показано, как создать образ контейнера и отправить его в GCR. Затем с помощью средств Kubernetes (например, `kubectl` и `kustomize`) образ извлекается в развертывание кластера.

Под ключом `env` измените значение `GKE_CLUSTER` на имя кластера, `GKE_ZONE` на зону кластера, `DEPLOYMENT_NAME` на имя развертывания и `IMAGE` на имя образа.

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

## Дополнительные ресурсы

Дополнительные сведения о средствах, используемых в этих примерах, см. в следующей документации:

* Полный начальный рабочий процесс см. на странице "[Сборка и развертывание в рабочий процесс GKE](https://github.com/actions/starter-workflows/blob/main/deployments/google.yml)".
* Дополнительные начальные рабочие процессы и сопутствующий код см. в статье с [примерами рабочих процессов {% data variables.product.prodname_actions %}](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/) Google.
* Модуль настройки YAML Kubernetes: [Kustomize](https://kustomize.io/).
* "[Развертывание контейнерного веб-приложения](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app)" в документации по Google Kubernetes Engine.
