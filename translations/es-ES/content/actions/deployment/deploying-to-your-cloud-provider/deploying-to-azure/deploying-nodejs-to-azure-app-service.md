---
title: Desplegar Node.js a Azure App Service
intro: Puedes desplegar tu proyecto de Node.js a Azure App Service como parte de tus flujos de trabajo de despliegue continuo (DC).
redirect_from:
  - /actions/guides/deploying-to-azure-app-service
  - /actions/deployment/deploying-to-azure-app-service
  - /actions/deployment/deploying-to-your-cloud-provider/deploying-to-azure-app-service
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Node
  - JavaScript
  - Azure App Service
ms.openlocfilehash: d4b5a5f19098d2b84b63ae56791814eadb0fcb72
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410175'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En esta guía se explica cómo usar {% data variables.product.prodname_actions %} para compilar, probar e implementar un proyecto de Node.js en [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Nota**: {% data reusables.actions.about-oidc-short-overview %} y "[Configuración de OpenID Connect en Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)".

{% endnote %}

{% endif %}

## Prerrequisitos

Antes de crear tu flujo de trabajo de {% data variables.product.prodname_actions %}, primero necesitarás completar los siguientes pasos de configuración:

{% data reusables.actions.create-azure-app-plan %}

2. Crear una aplicación web.

   Por ejemplo, puedes utilizar el CLI de Azure para crear una app web de Azure App Service con un tiempo de ejecución de Node.js:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "NODE|14-lts"
   ```

   En el comando anterior, reemplace los parámetros con valores propios, donde `MY_WEBAPP_NAME` es un nombre nuevo para la aplicación web.

{% data reusables.actions.create-azure-publish-profile %}

5. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}

## Crear un flujo de trabajo

Una vez que hayas completado los prerequisitos, puedes proceder con la creación del flujo de trabajo.

En el flujo de trabajo de ejemplo siguiente se muestra cómo compilar, probar e implementar un proyecto de Node.js en Azure App Service cuando se realice una inserción a la rama `main`.

Asegúrese de establecer `AZURE_WEBAPP_NAME` en la clave `env` del flujo de trabajo en el nombre de la aplicación web que ha creado. Si la ruta al proyecto no es la raíz del repositorio, cambia `AZURE_WEBAPP_PACKAGE_PATH` por la ruta al proyecto. Si usas una versión de Node.js distinta de `10.x`, cambia `NODE_VERSION` por la versión que utilices.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

on:
  push:
    branches:
      - main

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  AZURE_WEBAPP_PACKAGE_PATH: '.'      # set this to the path to your web app project, defaults to the repository root
  NODE_VERSION: '14.x'                # set this to the node version to use

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: {% data reusables.actions.action-checkout %}

    - name: Set up Node.js
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ env.NODE_VERSION }}{% endraw %}
        cache: 'npm'

    - name: npm install, build, and test
      run: |
        npm install
        npm run build --if-present
        npm run test --if-present
    - name: Upload artifact for deployment job
      uses: {% data reusables.actions.action-upload-artifact %}
      with:
        name: node-app
        path: .

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: 'production'
      url: {% raw %}${{ steps.deploy-to-webapp.outputs.webapp-url }}{% endraw %}

    steps:
    - name: Download artifact from build job
      uses: {% data reusables.actions.action-download-artifact %}
      with:
        name: node-app

    - name: 'Deploy to Azure WebApp'
      id: deploy-to-webapp 
      uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
      with:
        app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
        publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
        package: {% raw %}${{ env.AZURE_WEBAPP_PACKAGE_PATH }}{% endraw %}
```

## Recursos adicionales

Los siguientes recursos también pueden ser útiles:

* Para obtener el flujo de trabajo de inicio original, vea [`azure-webapps-node.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-node.yml) en el repositorio `starter-workflows` de {% data variables.product.prodname_actions %}.
* La acción que se usa para implementar la aplicación web es la acción [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) oficial de Azure.
* Para obtener más ejemplos de flujos de trabajo de acción de GitHub que se implementan en Azure, vea el repositorio [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
* El inicio rápido "[Creación de una aplicación web de Node.js en Azure](https://docs.microsoft.com/azure/app-service/quickstart-nodejs)" en la documentación de la aplicación web de Azure muestra el uso de {% data variables.product.prodname_vscode %} con la [extensión Azure App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice).
