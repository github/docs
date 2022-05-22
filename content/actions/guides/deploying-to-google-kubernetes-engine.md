---
title: Deploying to Google Kubernetes Engine
intro: You can deploy to Google Kubernetes Engine as part of your continuous deployment (CD) workflows.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - CD
  - Containers
  - Google Kubernetes Engine
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introduction

This guide explains how to use {% data variables.product.prodname_actions %} to build a containerized application, push it to Google Container Registry (GCR), and deploy it to Google Kubernetes Engine (GKE).

GKE is a managed Kubernetes cluster service from Google Cloud that can host your containerized workloads in the cloud or in your own datacenter. For more information, see [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine).

### Prerequisites

Before you proceed with creating the workflow, you will need to complete the following steps for your Kubernetes project. This guide assumes the root of your project already has a `Dockerfile` and a Kubernetes Deployment configuration file. For an example, see [google-github-actions](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/gke).

#### Creating a GKE cluster

To create the GKE cluster, you will first need to authenticate using the `gcloud` CLI. For more information on this step, see the following articles:
- [`gcloud auth login`](https://cloud.google.com/sdk/gcloud/reference/auth/login)
- [`gcloud` CLI](https://cloud.google.com/sdk/gcloud/reference)
- [`gcloud` CLI and Cloud SDK](https://cloud.google.com/sdk/gcloud#the_gcloud_cli_and_cloud_sdk)

For example:

{% raw %}
```bash{:copy}
$ gcloud container clusters create $GKE_CLUSTER \
	--project=$GKE_PROJECT \
	--zone=$GKE_ZONE
```
{% endraw %}

#### Enabling the APIs

Enable the Kubernetes Engine and Container Registry APIs. For example:

{% raw %}
```bash{:copy}
$ gcloud services enable \
	containerregistry.googleapis.com \
	container.googleapis.com
```
{% endraw %}

#### Configuring a service account and storing its credentials

This procedure demonstrates how to create the service account for your GKE integration. It explains how to create the account, add roles to it, retrieve its keys, and store them as a base64-encoded [encrypted repository secret](/actions/reference/encrypted-secrets) named `GKE_SA_KEY`.

1. Create a new service account:
  {% raw %}
  ```
  $ gcloud iam service-accounts create $SA_NAME
  ```
  {% endraw %}
1. Retrieve the email address of the service account you just created:
  {% raw %}
  ```
  $ gcloud iam service-accounts list
  ```
  {% endraw %}
1. Add roles to the service account. Note: Apply more restrictive roles to suit your requirements.
  {% raw %}
  ```
  $ gcloud projects add-iam-policy-binding $GKE_PROJECT \
    --member=serviceAccount:$SA_EMAIL \
    --role=roles/container.admin \
    --role=roles/storage.admin
  ```
  {% endraw %}
1. Download the JSON keyfile for the service account:
  {% raw %}
  ```
  $ gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL
  ```
  {% endraw %}
1. Store the project ID as a secret named `GKE_PROJECT`:
  {% raw %}
  ```
  $ export GKE_SA_KEY=$(cat key.json | base64)
  ```
  {% endraw %}

#### (Optional) Configuring kustomize
Kustomize is an optional tool used for managing YAML specs. After creating a _kustomization_ file, the workflow below can be used to dynamically set fields of the image and pipe in the result to `kubectl`. For more information, see [kustomize usage](https://github.com/kubernetes-sigs/kustomize#usage).

### Creating the workflow

Once you've completed the prerequisites, you can proceed with creating the workflow.

The following example workflow demonstrates how to build a container image and push it to GCR. It then uses the Kubernetes tools (such as `kubectl` and `kustomize`) to pull the image into the cluster deployment.

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

    # Setup gcloud CLI
    - uses: google-github-actions/setup-gcloud@v0.2.0
      with:
        service_account_key: ${{ secrets.GKE_SA_KEY }}
        project_id: ${{ secrets.GKE_PROJECT }}

    # Configure docker to use the gcloud command-line tool as a credential helper
    - run: |-
        gcloud --quiet auth configure-docker

    # Get the GKE credentials so we can deploy to the cluster
    - uses: google-github-actions/get-gke-credentials@v0.2.1
      with:
        cluster_name: ${{ env.GKE_CLUSTER }}
        location: ${{ env.GKE_ZONE }}
        credentials: ${{ secrets.GKE_SA_KEY }}

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
{% endraw %}

### Additional resources

For more information on the tools used in these examples, see the following documentation:

* For the full starter workflow, see the ["Build and Deploy to GKE" workflow](https://github.com/actions/starter-workflows/blob/master/ci/google.yml).
* For more starter workflows and accompanying code, see Google's [{% data variables.product.prodname_actions %} example workflows](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/).
* The Kubernetes YAML customization engine: [Kustomize](https://kustomize.io/).
* "[Deploying a containerized web application](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app)" in the Google Kubernetes Engine documentation.
