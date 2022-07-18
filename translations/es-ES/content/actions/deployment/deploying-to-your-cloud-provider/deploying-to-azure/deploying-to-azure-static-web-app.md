---
title: Desplegar a Azure Static Web App
intro: Puedes desplegar tu app web a Azure Static Web App como parte de tus flujos de trabajo de despliegue continuo (DC).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure Static Web Apps
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}


## Introducción

Esta guía te explica cómo utilizar las {% data variables.product.prodname_actions %} para compilar y desplegar una app web a [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Nota**: {% data reusables.actions.about-oidc-short-overview %} y "[Configurar OpenID Connect en Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)".

{% endnote %}

{% endif %}

## Prerrequisitos

Antes de crear tu flujo de trabajo de {% data variables.product.prodname_actions %}, primero necesitarás completar los siguientes pasos de configuración:

1. Crea una Azure Static Web App utilizando la opción 'Other' como fuente de despliegue. Para obtener más información, consulta la sección "[Guía de inicio rápido: Crear tu primer sitio en el portal de Azure](https://docs.microsoft.com/azure/static-web-apps/get-started-portal)" en la documentación de Azure.

2. Crea un secreto llamado `AZURE_STATIC_WEB_APPS_API_TOKEN` con el valor de tu token de despliegue de aplicación web estática. Para obtener más información sobre cómo encontrar tu token de despliegue, consulta la sección "[Restablecer los tokens de despliegue en Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/deployment-token-management)" en la documentación de Azure.

## Crear un flujo de trabajo

Una vez que hayas completado los prerequisitos, puedes proceder con la creación del flujo de trabajo.

El siguiente flujo de trabajo de ejemplo demuestra cómo compilar y desplegar una aplicación web estática de Azure cuando exite una subida a la rama `main` o cuando se abre, sincroniza o vuelve a abrir una solicitud de cambios que apunta a `main`. El flujo de trabajo también derriba el despliegue de pre-producción correspondiente cuando se cierra una solicitud de cambios que apunta a `main`.

Debajo del flujo de trabajo de la clave `env`, cambia los siguientes valores:
- `APP_LOCATION` a la ubicación de tu código de cliente
- `API_LOCATION` a la ubicación de tu código fuente de la API. Si `API_LOCATION` no es relevante, puedes borrar la variable y las líneas en las que se utilizó.
- `APP_ARTIFACT_LOCATION` a la ubicación de tu salida de compilación de código de cliente

Para obtener más información sobre estos valores, consulta la sección "[Configuración de compilación para las Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/build-configuration?tabs=github-actions)" en la documentación de Azure.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Deploy web app to Azure Static Web Apps

env:
  APP_LOCATION: "/" # location of your client code
  API_LOCATION: "api" # location of your api source code - optional
  APP_ARTIFACT_LOCATION: "build" # location of client code build output

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

permissions:
  issues: write
  contents: read

jobs:
  build_and_deploy:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          submodules: true
      - name: Build And Deploy
        uses: Azure/static-web-apps-deploy@1a947af9992250f3bc2e68ad0754c0b0c11566c9
        with:
          azure_static_web_apps_api_token: {% raw %}${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}{% endraw %}
          repo_token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          action: "upload"
          app_location: {% raw %}${{ env.APP_LOCATION }}{% endraw %}
          api_location: {% raw %}${{ env.API_LOCATION }}{% endraw %}
          app_artifact_location: {% raw %}${{ env.APP_ARTIFACT_LOCATION }}{% endraw %}

  close:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close
    steps:
      - name: Close
        uses: Azure/static-web-apps-deploy@1a947af9992250f3bc2e68ad0754c0b0c11566c9
        with:
          azure_static_web_apps_api_token: {% raw %}${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}{% endraw %}
          action: "close"
```

## Recursos adicionales

Los siguientes recursos también pueden ser útiles:

* Para encontrar el flujo de trabajo inicial original, consulta el archivo [`azure-staticwebapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-staticwebapp.yml) en el repositorio `starter-workflows` de {% data variables.product.prodname_actions %}.
* La acción que se utiliza para desplegar la app web es la acción [`Azure/static-web-apps-deploy`](https://github.com/Azure/static-web-apps-deploy) oficial de Azure.
* Para encontrar más ejemplos de flujos de trabajo de GitHub Actions que desplieguen a Azure, consulta el repositorio [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
