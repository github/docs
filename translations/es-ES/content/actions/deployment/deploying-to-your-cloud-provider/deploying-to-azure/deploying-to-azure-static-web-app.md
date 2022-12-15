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
ms.openlocfilehash: 3e5b9a90e91e237fbd1b5679624ed3cdb3865856
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410551'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## Introducción

En esta guía se explica cómo usar {% data variables.product.prodname_actions %} para compilar e implementar una aplicación web en [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Nota**: {% data reusables.actions.about-oidc-short-overview %} y "[Configuración de OpenID Connect en Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)".

{% endnote %}

{% endif %}

## Prerrequisitos

Antes de crear tu flujo de trabajo de {% data variables.product.prodname_actions %}, primero necesitarás completar los siguientes pasos de configuración:

1. Crea una Azure Static Web App utilizando la opción 'Other' como fuente de despliegue. Para más información, vea "[Inicio rápido: Creación del primer sitio estático en Azure Portal](https://docs.microsoft.com/azure/static-web-apps/get-started-portal)" en la documentación de Azure. 

2. Cree un secreto llamado `AZURE_STATIC_WEB_APPS_API_TOKEN` con el valor del token de implementación de la aplicación web estática. Para más información sobre cómo encontrar el token de implementación, vea "[Restablecimiento de tokens de implementación en Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/deployment-token-management)" en la documentación de Azure.

## Crear un flujo de trabajo

Una vez que hayas completado los prerequisitos, puedes proceder con la creación del flujo de trabajo.

En el siguiente flujo de trabajo de ejemplo se muestra cómo compilar e implementar una aplicación web estática de Azure cuando se produce una inserción en la rama `main` o cuando se abre, se sincroniza o se vuelve a abrir una solicitud de incorporación de cambios destinada a `main`. El flujo de trabajo también desglosa la implementación de pre-producción correspondiente cuando se cierra una solicitud de incorporación de cambios destinada a `main`.

Debajo de la clave `env` del flujo de trabajo, cambie los valores siguientes:
- `APP_LOCATION` por la ubicación del código de cliente
- `API_LOCATION` por la ubicación del código fuente de la API. Si `API_LOCATION` no es relevante, puedes borrar la variable y las líneas en las que se usa.
- `APP_ARTIFACT_LOCATION` por la ubicación de la salida de compilación del código de cliente

Para más información sobre estos valores, vea "[Configuración de compilación para Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/build-configuration?tabs=github-actions)" en la documentación de Azure.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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

* Para obtener el flujo de trabajo de inicio original, vea [`azure-staticwebapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-staticwebapp.yml) en el repositorio `starter-workflows` de {% data variables.product.prodname_actions %}.
* La acción que se usa para implementar la aplicación web es la acción [`Azure/static-web-apps-deploy`](https://github.com/Azure/static-web-apps-deploy) oficial de Azure.
* Para obtener más ejemplos de flujos de trabajo de acción de GitHub que se implementan en Azure, vea el repositorio [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
