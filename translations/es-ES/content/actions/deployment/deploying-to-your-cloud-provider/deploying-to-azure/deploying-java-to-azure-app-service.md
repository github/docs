---
title: Desplegar Java a Azure App Service
intro: Puedes desplegar tu proyecto de Java a Azure App Service como parte de tus flujos de trabajo de despliegue continuo (DC).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Java
  - Azure App Service
ms.openlocfilehash: ede24c0173cfe0493ad529b2f5d8a03f97ade7b9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410103'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En esta guía se explica cómo usar {% data variables.product.prodname_actions %} para compilar e implementar un proyecto de Java en [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Nota**: {% data reusables.actions.about-oidc-short-overview %} y "[Configuración de OpenID Connect en Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)".

{% endnote %}

{% endif %}

## Requisitos previos

Antes de crear tu flujo de trabajo de {% data variables.product.prodname_actions %}, primero necesitarás completar los siguientes pasos de configuración:

{% data reusables.actions.create-azure-app-plan %}

1. Crear una aplicación web.

   Por ejemplo, puedes utilizar el CLI de Azure para crear una app web de Azure App Service con un tiempo de ejecución de Java:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "JAVA|11-java11"
   ```

   En el comando anterior, reemplace los parámetros con valores propios, donde `MY_WEBAPP_NAME` es un nombre nuevo para la aplicación web.

{% data reusables.actions.create-azure-publish-profile %}

1. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}

## Crear un flujo de trabajo

Una vez que hayas completado los prerequisitos, puedes proceder con la creación del flujo de trabajo.

En el flujo de trabajo de ejemplo siguiente se muestra cómo compilar e implementar un proyecto de Java en Azure App Service cuando se realice una inserción en la rama `main`.

Asegúrese de establecer `AZURE_WEBAPP_NAME` en la clave `env` del flujo de trabajo en el nombre de la aplicación web que ha creado. Si quiere usar una versión de Java distinta de `11`, cambie `JAVA_VERSION`.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Build and deploy JAR app to Azure Web App

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  JAVA_VERSION: '11'                  # set this to the Java version to use

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Java version
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: {% raw %}${{ env.JAVA_VERSION }}{% endraw %}
          cache: 'maven'

      - name: Build with Maven
        run: mvn clean install

      - name: Upload artifact for deployment job
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: java-app
          path: '{% raw %}${{ github.workspace }}{% endraw %}/target/*.jar'

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
          name: java-app

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
          package: '*.jar'
```

## Recursos adicionales

Los siguientes recursos también pueden ser útiles:

* Para obtener el flujo de trabajo de inicio original, vea [`azure-webapps-java-jar.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-java-jar.yml) en el repositorio `starter-workflows` de {% data variables.product.prodname_actions %}.
* La acción que se usa para implementar la aplicación web es la acción [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) oficial de Azure.
* Para obtener más ejemplos de flujos de trabajo de acción de GitHub que se implementan en Azure, vea el repositorio [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
