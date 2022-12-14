---
title: Bereitstellen in der Google Kubernetes Engine
intro: Du kannst Bereitstellungen in Google Kubernetes Engine im Rahmen deiner Continuous-Deployment-Workflows (CD) vornehmen.
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147409547'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In diesem Leitfaden wird erläutert, wie {% data variables.product.prodname_actions %} verwendet wird, um eine containerisierte Anwendung zu erstellen, sie in Google Container Registry (GCR) zu pushen und sie in Google Kubernetes Engine (GKE) bereitzustellen, wenn ein Push in den `main`-Branch erfolgt.

GKE ist ein verwalteter Kubernetes-Clusterdienst von Google Cloud, der deine containerisierten Workloads in der Cloud oder in deinem eigenen Rechenzentrum hosten kann. Weitere Informationen findest du unter [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Hinweis**: {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

## Voraussetzungen

Bevor du mit dem Erstellen des Workflows fortfährst, musst du die folgenden Schritte für dein Kubernetes-Projekt ausführen. In diesem Leitfaden wird davon ausgegangen, dass der Stamm deines Projekts bereits über eine `Dockerfile`-Datei und eine Konfigurationsdatei für die Kubernetes-Bereitstellung verfügt. Ein Beispiel findest du unter [google-github-actions](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/gke).

### Erstellen eines GKE-Clusters

Um den GKE-Cluster zu erstellen, musst du dich zuerst mithilfe der `gcloud`-CLI authentifizieren. Weitere Informationen zu diesem Schritt findest du in den folgenden Artikeln:
- [`gcloud auth login`](https://cloud.google.com/sdk/gcloud/reference/auth/login)
- [`gcloud` CLI](https://cloud.google.com/sdk/gcloud/reference)
- [`gcloud`-CLI und Cloud SDK](https://cloud.google.com/sdk/gcloud#the_gcloud_cli_and_cloud_sdk)

Beispiel:

{% raw %}
```bash{:copy}
$ gcloud container clusters create $GKE_CLUSTER \
    --project=$GKE_PROJECT \
    --zone=$GKE_ZONE
```
{% endraw %}

### Aktivieren der APIs

Aktiviere die Kubernetes Engine- und Container Registry-APIs. Beispiel:

{% raw %}
```bash{:copy}
$ gcloud services enable \
    containerregistry.googleapis.com \
    container.googleapis.com
```
{% endraw %}

### Konfigurieren eines Dienstkontos und Speichern seiner Anmeldeinformationen

In diesem Verfahren wird gezeigt, wie du das Dienstkonto für deine GKE-Integration erstellst. Es wird erläutert, wie du das Konto erstellst, ihm Rollen hinzufügst, seine Schlüssel abrufst und sie als base64-codiertes verschlüsseltes Repositorygeheimnis namens `GKE_SA_KEY` speicherst.

1. Erstelle ein neues Dienstkonto: {% raw %}
  ```
  $ gcloud iam service-accounts create $SA_NAME
  ```
  {% endraw %}
1. Rufe die E-Mail-Adresse des soeben erstellten Dienstkontos ab: {% raw %}
  ```
  $ gcloud iam service-accounts list
  ```
  {% endraw %}
1. Füge dem Dienstkonto Rollen hinzu. Hinweis: Wende restriktivere Rollen an, um deine Anforderungen zu erfüllen.
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
1. Lade die JSON-Schlüsseldatei für das Dienstkonto herunter: {% raw %}
  ```
  $ gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL
  ```
  {% endraw %}
1. Speichere den Dienstkontoschlüssel als Geheimnis namens `GKE_SA_KEY`: {% raw %}
  ```
  $ export GKE_SA_KEY=$(cat key.json | base64)
  ```
  {% endraw %} Weitere Informationen zum Speichern eines Geheimnisses findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

### Speichern des Projektnamens

Speichere den Namen deines Projekts als Geheimnis namens `GKE_PROJECT`. Weitere Informationen zum Speichern eines Geheimnisses findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

### (Optional) Konfigurieren von Kustomize
Kustomize ist ein optionales Tool zum Verwalten von YAML-Spezifikationen. Nach dem Erstellen einer `kustomization`-Datei kann der folgende Workflow verwendet werden, um dynamisch Felder des Images festzulegen und das Ergebnis an `kubectl` weiterzuleiten. Weitere Informationen findest du unter [Kustomize-Syntax](https://github.com/kubernetes-sigs/kustomize#usage).

### (Optional) Konfigurieren einer Bereitstellungsumgebung

{% data reusables.actions.about-environments %}

## Erstellen des Workflows

Wenn die Voraussetzungen erfüllt sind, kannst du mit dem Erstellen des Workflows fortfahren.

Im folgenden Beispielworkflow wird gezeigt, wie du ein Containerimage erstellst und in GCR pushst. Anschließend werden die Kubernetes-Tools (z. B `kubectl` und `kustomize`) verwendet, um das Image in die Clusterbereitstellung zu pullen.

Ändere unter dem `env`-Schlüssel den Wert von `GKE_CLUSTER` in den Namen deines Clusters, `GKE_ZONE` in deine Clusterzone, `DEPLOYMENT_NAME` in den Namen deiner Bereitstellung und `IMAGE` in den Namen deines Images.

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

## Zusätzliche Ressourcen

Weitere Informationen zu den in diesen Beispielen verwendeten Tools findest du in der folgenden Dokumentation:

* Den vollständigen Startworkflow findest du unter [Erstellen und Bereitstellen in GKE](https://github.com/actions/starter-workflows/blob/main/deployments/google.yml).
* Weitere Startworkflows und den zugehörigen Code findest du in den [{% data variables.product.prodname_actions %}-Beispielworkflows](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/) von Google.
* Die Kubernetes YAML-Anpassungs-Engine: [Kustomize](https://kustomize.io/).
* [Bereitstellen einer containerisierten Webanwendung](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app) in der Google Kubernetes Engine-Dokumentation.
