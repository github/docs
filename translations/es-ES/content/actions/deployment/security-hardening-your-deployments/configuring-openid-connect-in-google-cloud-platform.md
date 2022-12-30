---
title: Configurar OpenID Connect en Google Cloud Platform
shortTitle: Configuring OpenID Connect in Google Cloud Platform
intro: Utiliza OpenID Connect con tus flujos de trabajo para autenticarte con Google Cloud Platform.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: f8b2c63d442fb5dc5758a6f33bb9db5c2a49c9cc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145093132'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Información general

OpenID Connect (OIDC) permite que tus flujos de trabajo de {% data variables.product.prodname_actions %} accedan a recursos en la Plataforma de Google Cloud (GCP) sin necesidad de almacenar sus credenciales como secretos de {% data variables.product.prodname_dotcom %} de larga duración. 

En esta guía se proporciona un resumen de cómo configurar GCP para que confíe en el OIDC de {% data variables.product.prodname_dotcom %} como una entidad federada y se incluye un ejemplo de flujo de trabajo para la acción [`google-github-actions/auth`](https://github.com/google-github-actions/auth) en el que se usan tokens para autenticarse en GCP y acceder a los recursos.

## Prerrequisitos

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Agregar un proveedor de identidad de Google Cloud Workload

Para configurar el proveedor de identidad de OIDC en GCP, necesitarás llevar a cabo la siguiente configuración. Para obtener instrucciones sobre cómo realizar estos cambios, consulte [la documentación de GCP](https://github.com/google-github-actions/auth).

1. Crear un grupo de identidad nuevo.
2. Configura el mapeo y agrega las condiciones.
3. Conecta el grupo nuevo a una cuenta de servicio. 

Orientación adicional para configurar el proveedor de identidad:

- Para fortalecer la seguridad, asegúrese de que ha revisado ["Configuración de la confianza de OIDC con la nube"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud). Para obtener un ejemplo, vea ["Configuración del asunto en el proveedor de nube"](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-subject-in-your-cloud-provider).
- Para que la cuenta de servicio esté disponible para la configuración, debe asignarse al rol `roles/iam.workloadIdentityUser`. Para más información, vea [la documentación de GCP](https://cloud.google.com/iam/docs/workload-identity-federation?_ga=2.114275588.-285296507.1634918453#conditions).
- La dirección URL del emisor que se va a usar: {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}

## Actualizar tu flujo de trabajo de {% data variables.product.prodname_actions %}

Para actualizar tus flujos de trabajo para ODIC, necesitarás hacer dos cambios a tu YAML:
1. Agregar ajustes de permisos para el token.
2. Use la acción [`google-github-actions/auth`](https://github.com/google-github-actions/auth) para intercambiar el token de OIDC (JWT) por un token de acceso a la nube.

### Agregar ajustes de permisos

 {% data reusables.actions.oidc-permissions-token %}

### Solicitar el token de acceso

La acción `google-github-actions/auth` recibe un JWT del proveedor de OIDC de {% data variables.product.prodname_dotcom %} y luego solicita un token de acceso a GCP. Para más información, vea [la documentación](https://github.com/google-github-actions/auth) de GCP.

Este ejemplo tiene un trabajo llamado `Get_OIDC_ID_token` que utiliza acciones para solicitar una lista de servicios a GCP.

- `<example-workload-identity-provider>`: reemplace esto por la ruta al proveedor de identidades en GCP. por ejemplo, `projects/<example-project-id>/locations/global/workloadIdentityPools/<name-of-pool/providers/<name-of-provider>`
- `<example-service-account>`: reemplace esto por el nombre de la cuenta de servicio en GCP.
- `<project-id>`: reemplace esto por el id. del proyecto de GCP.

Esta acción intercambia un token de OIDC de {% data variables.product.prodname_dotcom %} por un token de acceso de Google Cloud mediante la [federación de identidades de carga de trabajo](https://cloud.google.com/iam/docs/workload-identity-federation).

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
