---
title: Configurar OpenID Connect en Google Cloud Platform
shortTitle: Configurar OpenID Connect en Google Cloud Platform
intro: Utiliza OpenID Connect con tus flujos de trabajo para autenticarte con Google Cloud Platform.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghae: issue-4856
  ghec: '*'
type: tutorial
topics:
  - Security
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Resumen

OpenID Connect (OIDC) permite que tus flujos de trabajo de {% data variables.product.prodname_actions %} accedan a recursos en la Plataforma de Google Cloud (GCP) sin necesidad de almacenar sus credenciales como secretos de {% data variables.product.prodname_dotcom %} de larga duración.

Esta guía te proporciona un resumen de cómo configurar GCP para que confíe en el OIDC de {% data variables.product.prodname_dotcom %} como una entidad federada e incluye un ejemplo de flujo de trabajo para la acción [`google-github-actions/auth`](https://github.com/google-github-actions/auth) que utiliza tokens para autenticarse al GCP para acceder a los recursos.

## Prerrequisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Agregar un proveedor de identidad de Google Cloud Workload

Para configurar el proveedor de identidad de OIDC en GCP, necesitarás llevar a cabo la siguiente configuración. Para obtener las instrucciones de cómo hacer estos cambios, refiérete a la [documentación de GCP](https://github.com/google-github-actions/auth).

1. Crear un grupo de identidad nuevo.
2. Configura el mapeo y agrega las condiciones.
3. Conecta el grupo nuevo a una cuenta de servicio.

Orientación adicional para configurar el proveedor de identidad:

- Para fortalecer la seguridad, asegúrate de haber revisado la sección ["Configurar la confianza de OIDC con la nube"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud). Por ejemplo, consulta ["Configurar el tema en tu proveedor de servicios en la nube"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- Para que la cuenta de servicio esté disponible para su configuración, esta necesita estar asignada al rol `roles/iam.workloadIdentityUser`. Para obtener más información, consulta la "[Documentación de GCP](https://cloud.google.com/iam/docs/workload-identity-federation?_ga=2.114275588.-285296507.1634918453#conditions)".
- La URL emisora a utilizar: `https://token.actions.githubusercontent.com`

## Actualizar tu flujo de trabajo de {% data variables.product.prodname_actions %}

Para actualizar tus flujos de trabajo para ODIC, necesitarás hacer dos cambios a tu YAML:
1. Agregar ajustes de permisos para el token.
2. Utiliza la acción [`google-github-actions/auth`](https://github.com/google-github-actions/auth) para intercambiar el token (JWT) de OIDC por un token de acceso a la nube.

### Agregar ajustes de permisos

 {% data reusables.actions.oidc-permissions-token %}

### Solicitar el token de acceso

La acción `google-github-actions/auth` recibe un JWT desde el proveedor de OIDC de {% data variables.product.prodname_dotcom %} y luego solicita un token de acceso desde GCP. Para obtener más información, consulta la [documentación](https://github.com/google-github-actions/auth) de GCP.

Este ejemplo tiene un job llamado `Get_OIDC_ID_token` que utiliza acciones para solicitar una lista de servicios de GCP.

- `<example-workload-identity-provider>`: Reemplaza esto con la ruta a tu proveedor de identidad en GCP. Por ejemplo, `projects/<example-project-id>/locations/global/workloadIdentityPools/<name-of-pool/providers/<name-of-provider>`
- `<example-service-account>`: Reemplaza esto con el nombre de tu cuenta de servicio en GCP.
- `<project-id>`: Reemplaza esto con la ID de tu proyecto de GCP.

Esta acción intercambia un token de OIDC de {% data variables.product.prodname_dotcom %} por un token de acceso a Google Cloud, utilizando la [Federación de Identidad de Carga de Trabajo](https://cloud.google.com/iam/docs/workload-identity-federation).

{% raw %}
```yaml{:copy}
name: List services in GCP
on:
  pull_request:
    branches:
      - main

permissions:
  id-token: write

jobs:
  Get_OIDC_ID_token:
    runs-on: ubuntu-latest
    steps:
    - id: 'auth'
      name: 'Authenticate to GCP'
      uses: 'google-github-actions/auth@v0.3.1'
      with:
          create_credentials_file: 'true'
          workload_identity_provider: '<example-workload-identity-provider>'
          service_account: '<example-service-account>'
    - id: 'gcloud'
      name: 'gcloud'
      run: |-
        gcloud auth login --brief --cred-file="${{ steps.auth.outputs.credentials_file_path }}"
        gcloud services list
```
{% endraw %}
