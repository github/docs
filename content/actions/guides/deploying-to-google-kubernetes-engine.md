---
title: Deploying to Google Kubernetes Engine
intro: You can deploy to Google Kubernetes Engine as part of your continuous deployment (CD) workflows.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introduction
[Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine) (GKE) is a managed Kubernetes cluster service from Google Cloud and is a great option for hosting your containerized workloads in the cloud or on premise.

This guide will show you how to use GitHub Actions to build and deploy a containerized application from Google Container Registry (GCR) to GKE. 

### Prerequisites
To adopt this workflow, you will first need to complete the following setup steps:

#### Create a GKE cluster
For example, after [authenticating](https://cloud.google.com/sdk/gcloud/reference/auth/login) with the [`gcloud` CLI](https://cloud.google.com/sdk/gcloud/reference), part of the [Cloud SDK](https://cloud.google.com/sdk/gcloud#the_gcloud_cli_and_cloud_sdk):

{% raw %}
```bash{:copy}
gcloud container clusters create $GKE_CLUSTER \
	--project=$GKE_PROJECT \
	--zone=$GKE_ZONE
```
{% endraw %}

#### Enable required APIs
The Kubernetes Engine and Container Registry APIs are needed:

{% raw %}
```bash{:copy}
gcloud services enable \
	containerregistry.googleapis.com \
	container.googleapis.com
```
{% endraw %}

#### Configure service account and store credentials as a secret, `GKE_SA_KEY`
Create a new service account, add roles to it, retrieve keys for it, and store it as a base64-encoded, [encrypted repository secret](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets) named `GKE_SA_KEY`.

Also store the project ID as a secret named `GKE_PROJECT`.

{% raw %}
```bash{:copy}
# Create new service account
gcloud iam service-accounts create $SA_NAME
 
# Retrieve email address of service account just created
gcloud iam service-accounts list
 
# Add roles to service account
# Note: restrict these further in production
gcloud projects add-iam-policy-binding $GKE_PROJECT \
	--member=serviceAccount:$SA_EMAIL \
	--role=roles/container.admin \
	--role=roles/storage.admin
 
# Download a JSON keyfile
gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL
 
export GKE_SA_KEY=$(cat key.json | base64)
```
{% endraw %}

#### (Optional) Set up `kustomize`
Kustomize is an optional tool used for managing YAML specs. After  [setting up](https://github.com/kubernetes-sigs/kustomize#usage) a kustomization file, the workflow below can be used to dynamically set fields of the image and pipe in the result to `kubectl`:

{% raw %}
```bash{:copy}
kustomize edit set image \
gcr.io/PROJECT_ID/IMAGE:TAG=gcr.io/$PROJECT_ID/$IMAGE:$GITHUB_SHA
 
kustomize build . | kubectl apply -f -
```
{% endraw %}

### Workflow

Now that the prerequisite steps are done, consider the following workflow, which will build and push a container image to GCR, and then use Kubernetes native tools like `kubectl` and `kustomize` to pull this image into the cluster deployment.

{% raw %}
```yaml{:copy}
name: Build and Deploy to GKE
 
on:
  release:
    types: [created]
 
env:
  PROJECT_ID: ${{ secrets.GKE_PROJECT }}
  GKE_CLUSTER: cluster-1    # TODO: update to cluster name
  GKE_ZONE: us-central1-c   # TODO: update to cluster zone
  DEPLOYMENT_NAME: gke-test # TODO: update to deployment name
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
The following additional resources may also be of use:

1.  [GKE starter workflow](https://github.com/actions/starter-workflows/blob/master/ci/google.yml) for the full starter workflow
2.  [Google GitHub actions example workflows](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/) for more starter workflows and accompanying code
3.  [Kustomize](https://kustomize.io/), the Kubernetes YAML customization engine
4.  [Deploying a containerized web application](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app) 