---
title: Deploying to Google Kubernetes Engine
intro: You can deploy to Google Kubernetes Engine as part of your continuous deployment (CD) workflows.
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
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide explains how to use {% data variables.product.prodname_actions %} to build a containerized application, push it to Google Container Registry (GCR), and deploy it to Google Kubernetes Engine (GKE) when there is a push to the `main` branch.

GKE is a managed Kubernetes cluster service from Google Cloud that can host your containerized workloads in the cloud or in your own datacenter. For more information, see [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine).

{% ifversion fpt or ghec or ghes %}

{% note %}

**Note**: {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

## Prerequisites

Before you proceed with creating the workflow, you will need to complete the following steps for your Kubernetes project. This guide assumes the root of your project already has a `Dockerfile` and a Kubernetes Deployment configuration file.

### Creating a GKE cluster

To create the GKE cluster, you will first need to authenticate using the `gcloud` CLI. For more information on this step, see the following articles:
- [`gcloud auth login`](https://cloud.google.com/sdk/gcloud/reference/auth/login)
- [`gcloud` CLI](https://cloud.google.com/sdk/gcloud/reference)
- [`gcloud` CLI and Cloud SDK](https://cloud.google.com/sdk/gcloud#the_gcloud_cli_and_cloud_sdk)

For example:

```shell copy
$ gcloud container clusters create $GKE_CLUSTER \
	--project=$GKE_PROJECT \
	--zone=$GKE_ZONE
```

### Enabling the APIs

Enable the Kubernetes Engine and Container Registry APIs. For example:

```shell copy
$ gcloud services enable \
	containerregistry.googleapis.com \
	container.googleapis.com
```

### Configuring a service account and storing its credentials

This procedure demonstrates how to create the service account for your GKE integration. It explains how to create the account, add roles to it, retrieve its keys, and store them as a base64-encoded {% ifversion fpt or ghec %}encrypted {% endif %}repository secret named `GKE_SA_KEY`.

1. Create a new service account:

   ```shell copy
   gcloud iam service-accounts create $SA_NAME
   ```

1. Retrieve the email address of the service account you just created:

   ```shell copy
   gcloud iam service-accounts list
   ```

1. Add roles to the service account.

   {% note %}

   **Note**: Apply more restrictive roles to suit your requirements.

   {% endnote %}

   ```shell copy
   gcloud projects add-iam-policy-binding $GKE_PROJECT \
  	 --member=serviceAccount:$SA_EMAIL \
  	 --role=roles/container.admin
   gcloud projects add-iam-policy-binding $GKE_PROJECT \
  	 --member=serviceAccount:$SA_EMAIL \
  	 --role=roles/storage.admin
   gcloud projects add-iam-policy-binding $GKE_PROJECT \
  	 --member=serviceAccount:$SA_EMAIL \
  	 --role=roles/container.clusterViewer
   ```

1. Download the JSON keyfile for the service account:

   ```shell copy
   gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL
   ```

1. Store the service account key as a secret named `GKE_SA_KEY`:

   ```shell copy
   export GKE_SA_KEY=$(cat key.json | base64)
   ```

   For more information about how to store a secret, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

### Storing your project name

Store the name of your project as a secret named `GKE_PROJECT`. For more information about how to store a secret, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

### (Optional) Configuring kustomize

Kustomize is an optional tool used for managing YAML specs. After creating a `kustomization` file, the workflow below can be used to dynamically set fields of the image and pipe in the result to `kubectl`. For more information, see [kustomize usage](https://github.com/kubernetes-sigs/kustomize#usage).

### (Optional) Configure a deployment environment

{% data reusables.actions.about-environments %}

## Creating the workflow

Once you've completed the prerequisites, you can proceed with creating the workflow.

The following example workflow demonstrates how to build a container image and push it to GCR. It then uses the Kubernetes tools (such as `kubectl` and `kustomize`) to pull the image into the cluster deployment.

Under the `env` key, change the value of `GKE_CLUSTER` to the name of your cluster, `GKE_ZONE` to your cluster zone, `DEPLOYMENT_NAME` to the name of your deployment, and `IMAGE` to the name of your image.

{% data reusables.actions.delete-env-key %}

```yaml copy
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
    - uses: google-github-actions/setup-gcloud@1bee7de035d65ec5da40a31f8589e240eba8fde5
      with:
        service_account_key: {% raw %}${{ secrets.GKE_SA_KEY }}{% endraw %}
        project_id: {% raw %}${{ secrets.GKE_PROJECT }}{% endraw %}

    # Configure Docker to use the gcloud command-line tool as a credential
    # helper for authentication
    - run: |-
        gcloud --quiet auth configure-docker

    # Get the GKE credentials so we can deploy to the cluster
    - uses: google-github-actions/get-gke-credentials@db150f2cc60d1716e61922b832eae71d2a45938f
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

## Additional resources

For more information on the tools used in these examples, see the following documentation:

- For the full starter workflow, see the ["Build and Deploy to GKE" workflow](https://github.com/actions/starter-workflows/blob/main/deployments/google.yml).
- The Kubernetes YAML customization engine: [Kustomize](https://kustomize.io/).
- "[Deploying a containerized web application](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app)" in the Google Kubernetes Engine documentation.
