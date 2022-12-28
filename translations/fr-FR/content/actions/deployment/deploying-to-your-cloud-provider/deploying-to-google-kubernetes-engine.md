---
title: Déploiement sur Google Kubernetes Engine
intro: Vous pouvez déployer sur le moteur Google Kubernetes dans le cadre de vos workflows de déploiement continu (CD).
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409546'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide explique comment utiliser {% data variables.product.prodname_actions %} pour créer une application conteneurisée, l’envoyer (push) à Google Container Registry (GCR) et la déployer sur Google Kubernetes Engine (GKE) lors d’un envoi (push) à la branche `main`.

GKE est un service de clusters Kubernetes managés à partir de Google Cloud qui peut héberger vos charges de travail conteneurisées dans le cloud ou dans votre propre centre de données. Pour plus d’informations, consultez [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Remarque** : {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

## Prérequis

Avant de continuer à créer le workflow, vous devez effectuer les étapes suivantes pour votre projet Kubernetes. Ce guide suppose que la racine de votre projet dispose déjà d’un fichier `Dockerfile` et d’un fichier config de déploiement Kubernetes. Pour obtenir un exemple, consultez [google-github-actions](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/gke).

### Création d’un cluster GKE

Pour créer le cluster GKE, vous devez d’abord vous authentifier à l’aide de l’interface CLI `gcloud`. Pour plus d’informations sur cette étape, consultez les articles suivants :
- [`gcloud auth login`](https://cloud.google.com/sdk/gcloud/reference/auth/login)
- [Interface CLI `gcloud`](https://cloud.google.com/sdk/gcloud/reference)
- [`gcloud` CLI et Kit de développement logiciel (SDK) cloud](https://cloud.google.com/sdk/gcloud#the_gcloud_cli_and_cloud_sdk)

Par exemple :

{% raw %}
```bash{:copy}
$ gcloud container clusters create $GKE_CLUSTER \
    --project=$GKE_PROJECT \
    --zone=$GKE_ZONE
```
{% endraw %}

### Activation des API

Activez les API Kubernetes Engine et Container Registry. Par exemple :

{% raw %}
```bash{:copy}
$ gcloud services enable \
    containerregistry.googleapis.com \
    container.googleapis.com
```
{% endraw %}

### Configuration d’un compte de service et stockage de ses informations d’identification

Cette procédure montre comment créer le compte de service pour votre intégration GKE. Il explique comment créer le compte, ajouter des rôles à celui-ci, récupérer ses clés et les stocker en tant que secret de référentiel chiffré codé en base64 nommé `GKE_SA_KEY`.

1. Créer un nouveau compte de service : {% raw %}
  ```
  $ gcloud iam service-accounts create $SA_NAME
  ```
  {% endraw %}
1. Récupérer l’adresse e-mail du compte de service que vous venez de créer : {% raw %}
  ```
  $ gcloud iam service-accounts list
  ```
  {% endraw %}
1. Ajoutez des rôles au compte de service. Remarque : appliquez des rôles plus restrictifs pour répondre à vos besoins.
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
1. Téléchargez le fichier de clés JSON pour le compte de service : {% raw %}
  ```
  $ gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL
  ```
  {% endraw %}
1. Stockez la clé de compte de service en tant que secret nommé `GKE_SA_KEY` : {% raw %}
  ```
  $ export GKE_SA_KEY=$(cat key.json | base64)
  ```
  {% endraw %} Pour plus d’informations sur la façon de stocker un secret, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».

### Stockage du nom de votre projet

Stockez le nom de votre projet en tant que secret nommé `GKE_PROJECT`. Pour plus d’informations sur la façon de stocker un secret, consultez « [Secrets chiffrés](/actions/security-guides/encrypted-secrets) ».

### (Facultatif) Configuration de kustomize
Kustomize est un outil facultatif utilisé pour gérer les spécifications YAML. Après avoir créé un fichier `kustomization`, le workflow ci-dessous peut être utilisé pour définir dynamiquement les champs de l’image et du canal dans le résultat sur `kubectl`. Pour plus d’informations, consultez « [Utilisation de kustomize](https://github.com/kubernetes-sigs/kustomize#usage) ».

### Si vous le souhaitez, configurez un environnement de déploiement.

{% data reusables.actions.about-environments %}

## Création du workflow

Une fois les conditions préalables remplies, vous pouvez procéder à la création du workflow.

L’exemple de workflow suivant montre comment créer une image conteneur et l’envoyer à GCR. Il utilise ensuite les outils Kubernetes (tels que `kubectl` et `kustomize`) pour extraire l’image dans le déploiement du cluster.

Sous la clé `env`, remplacez la valeur de `GKE_CLUSTER` par le nom de votre cluster, `GKE_ZONE` par votre zone de cluster, `DEPLOYMENT_NAME` par le nom de votre déploiement et `IMAGE` par le nom de votre image.

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

## Ressources supplémentaires

Pour plus d’informations sur les outils utilisés dans ces exemples, consultez la documentation suivante :

* Pour obtenir le workflow de démarrage complet, consultez le [workflows « Générer et déployer sur GKE ».](https://github.com/actions/starter-workflows/blob/main/deployments/google.yml)
* Pour obtenir plus de workflow de démarrage et de code associé, consultez les [exemples de workflows {% data variables.product.prodname_actions %}](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/) de Google.
* Moteur de personnalisation Kubernetes YAML : [Kustomize](https://kustomize.io/).
* « [Déploiement d’une application web conteneurisée](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app) » dans la documentation Google Kubernetes Engine.
