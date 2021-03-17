---
title: Desplegar a Google Kubernetes Engine
intro: Puedes desplegar hacia Google Kubernetes Engine como parte de tus flujos de trabajo de despliegue continuo (DC).
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
topics:
  - 'CD'
  - 'Containers'
  - 'Google Kubernetes Engine'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introducción

Esta guía te explica cómo utilizar {% data variables.product.prodname_actions %} para crear una aplicación contenerizada, subirla al Registro de Contenedor de Google (GCR), y desplegarla hacia Google Kubernetes Engine (GKE).

GKE es un agrupamiento administrado de Kubernetes de Google Cloud que puede hospedar tus cargas de trabajo contenerizadas en la nube o en tu propio centro de datos. Para obtener más información, consulta la página de [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine).

### Prerrequisitos

Antes de proceder con la creación del flujo de trabajo, necesitarás completar los siguientes pasos par tu proyecto de Kubernetes. Esta guía asume que la raíz de tu proyecto ya tiene un `Dockerfile` y un archivo de configuración para el despliegue de Kubernetes. Para encontrar un ejemplo, consulta [google-github-actions](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/gke).

#### Crear un agrupamiento de GKE

Para crear un agrupamiento de GKE, primero necesitarás autenticarte utilizando el CLI de `gcloud`. Para obtener más información sobre este paso, consulta los siguientes artículos:
- [`gcloud auth login`](https://cloud.google.com/sdk/gcloud/reference/auth/login)
- [`gcloud` CLI](https://cloud.google.com/sdk/gcloud/reference)
- [`gcloud` CLI y Cloud SDK](https://cloud.google.com/sdk/gcloud#the_gcloud_cli_and_cloud_sdk)

Por ejemplo:

{% raw %}
```bash{:copy}
$ gcloud container clusters create $GKE_CLUSTER \
    --project=$GKE_PROJECT \
    --zone=$GKE_ZONE
```
{% endraw %}

#### Habilitar las API

Habilita las API de Kubernetes Engine y del Registro de Contenedor. Por ejemplo:

{% raw %}
```bash{:copy}
$ gcloud services enable \
    containerregistry.googleapis.com \
    container.googleapis.com
```
{% endraw %}

#### Configurar una cuenta de servicio y almacenar sus crendenciales

Este procedimiento demuestra cómo crear la cuenta de servicio para tu integración con GKE. Aquí se explica cómo crear la cuenta, agregarle los roles, recuperar su claves y almacenarlos como un [secreto de repositorio cifrado](/actions/reference/encrypted-secrets) cifrado en base64 con el nombre de `GKE_SA_KEY`.

1. Crea una cuenta de servicio nueva:
  {% raw %}
  ```
  $ gcloud iam service-accounts create $SA_NAME
  ```
  {% endraw %}
1. Recupera la dirección de correo electrónico en la cuenta de servicio que acabas de crear:
  {% raw %}
  ```
  $ gcloud iam service-accounts list
  ```
  {% endraw %}
1. Agrega roles a la cuenta de servicio. Nota: Aplica roles más restrictivos para que se acoplen a tus requisitos.
  {% raw %}
  ```
  $ gcloud projects add-iam-policy-binding $GKE_PROJECT \
    --member=serviceAccount:$SA_EMAIL \
    --role=roles/container.admin \
    --role=roles/storage.admin
  ```
  {% endraw %}
1. Descarga el archivo de llave JSON para la cuenta de servicio:
  {% raw %}
  ```
  $ gcloud iam service-accounts keys create key.json --iam-account=$SA_EMAIL
  ```
  {% endraw %}
1. Almacena la ID de proyecto como un secreto que se llame `GKE_PROJECT`:
  {% raw %}
  ```
  $ export GKE_SA_KEY=$(cat key.json | base64)
  ```
  {% endraw %}

#### (Opcional) Configurar kustomize
Kustomize es una herramietna opcional que se utiliza para administrar las especificaciones YAML. Después de crear un archivo de _kustomization_, el flujo de trabajo que se muestra a continuación puede utilizarse para configurar dinámicamente los campos de la imagen y agregar el resultado a `kubectl`. Para obtener más información, consulta la sección [uso de kustomize](https://github.com/kubernetes-sigs/kustomize#usage).

### Crear un flujo de trabajo

Una vez que hayas completado los prerequisitos, puedes proceder con la creación del flujo de trabajo.

El siguiente flujo de trabajo demuestra cómo crear una imagen de contenedor y cómo subirla a GCR. Utiliza entonces las herramientas de Kubernetes (tales como `kubectl` y `kustomize`) para extraer la imagen en el despliegue del agrupamiento.

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

### Recursos adicionales

Para obtener más información sobre las herramientas que se utilizan en estos ejemplos, consulta la siguiente documentación:

* Para encontrar un flujo de trabajo inicial completo, consulta el [flujo de trabajo de "Crear y Desplegar hacia GKE"](https://github.com/actions/starter-workflows/blob/master/ci/google.yml).
* Para ver más flujos de trabajo iniciales y el código que los acompaña, consulta los [Flujos de trabajo de ejemplo de {% data variables.product.prodname_actions %}](https://github.com/google-github-actions/setup-gcloud/tree/master/example-workflows/) de Google.
* El motor de personalización de YAML de Kubernetes: [Kustomize](https://kustomize.io/).
* "[Desplegar una aplicación web contenerizada](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app)" en la documentación de Google Kubernetes Engine.
