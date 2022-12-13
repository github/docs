---
title: Desplegar .NET al Azure App Service
intro: Puedes desplegar tu proyecto de .NET para el Azure App Service como parte de tus flujos de trabajo de despliegue continuo (DC).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure App Service
ms.openlocfilehash: cb71e0016157d7d1fdd366819840ea90d104e8dc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410040'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En esta guía se explica cómo usar {% data variables.product.prodname_actions %} para compilar e implementar un proyecto de .NET en [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Nota**: {% data reusables.actions.about-oidc-short-overview %} y "[Configuración de OpenID Connect en Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)".

{% endnote %}

{% endif %}

## Prerrequisitos

Antes de crear tu flujo de trabajo de {% data variables.product.prodname_actions %}, primero necesitarás completar los siguientes pasos de configuración:

{% data reusables.actions.create-azure-app-plan %}

2. Crear una aplicación web.

   Por ejemplo, puedes utilizar el CLI de Azure para crear una app web de Azure App Service con un tiempo de ejecución de .NET:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "DOTNET|5.0"
   ```

   En el comando anterior, reemplace los parámetros con valores propios, donde `MY_WEBAPP_NAME` es un nombre nuevo para la aplicación web.

{% data reusables.actions.create-azure-publish-profile %}

5. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}

## Crear un flujo de trabajo

Una vez que hayas completado los prerequisitos, puedes proceder con la creación del flujo de trabajo.

En el flujo de trabajo de ejemplo siguiente se muestra cómo compilar e implementar un proyecto de .NET en Azure App Service cuando se realice una inserción a la rama `main`.

Asegúrese de establecer `AZURE_WEBAPP_NAME` en la clave `env` del flujo de trabajo en el nombre de la aplicación web que ha creado. Si la ruta de acceso al proyecto no es la raíz del repositorio, cambie `AZURE_WEBAPP_PACKAGE_PATH`.  Si usa una versión de .NET distinta de `5`, cambie `DOTNET_VERSION`.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Build and deploy ASP.Net Core app to an Azure Web App

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  AZURE_WEBAPP_PACKAGE_PATH: '.'      # set this to the path to your web app project, defaults to the repository root
  DOTNET_VERSION: '5'                 # set this to the .NET Core version to use

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up .NET Core
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ env.DOTNET_VERSION }}{% endraw %}

      - name: Set up dependency caching for faster builds
        uses: {% data reusables.actions.action-cache %}
        with:
          path: ~/.nuget/packages
          key: {% raw %}${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-nuget-{% endraw %}

      - name: Build with dotnet
        run: dotnet build --configuration Release

      - name: dotnet publish
        run: dotnet publish -c Release -o {% raw %}${{env.DOTNET_ROOT}}{% endraw %}/myapp

      - name: Upload artifact for deployment job
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: .net-app
          path: {% raw %}${{env.DOTNET_ROOT}}{% endraw %}/myapp

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
          name: .net-app

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
          package: {% raw %}${{ env.AZURE_WEBAPP_PACKAGE_PATH }}{% endraw %}
```

## Recursos adicionales

Los siguientes recursos también pueden ser útiles:

* Para obtener el flujo de trabajo de inicio original, vea [`azure-webapps-dotnet-core.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-dotnet-core.yml) en el repositorio `starter-workflows` de {% data variables.product.prodname_actions %}.
* La acción que se usa para implementar la aplicación web es la acción [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) oficial de Azure.
* Para obtener más ejemplos de flujos de trabajo de acción de GitHub que se implementan en Azure, vea el repositorio [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
