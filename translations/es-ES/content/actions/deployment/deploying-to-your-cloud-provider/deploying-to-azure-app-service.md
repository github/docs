---
title: Desplegar a Azure App Service
intro: Puedes desplegar hacia Azure App Service como parte de tus flujos de trabajo de despliegue continuo (DC).
redirect_from:
  - /actions/guides/deploying-to-azure-app-service
  - /actions/deployment/deploying-to-azure-app-service
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Containers
  - Azure App Service
shortTitle: Desplegar hacia el Servicio de Azure App
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Introducción

Esta guía te explica cómo utilizar {% data variables.product.prodname_actions %} para crear, probar y desplegar una aplicación en [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/).

Azure App Service puede ejecutar apps web en varios lenguajes de programación, pero esta guía demuestra el despliegue en un proyecto existente que se encuentra en Node.js.

{% ifversion fpt or ghec or ghae-issue-4856 %}

{% note %}

**Note**: {% data reusables.actions.about-oidc-short-overview %} and "[Configuring OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)."

{% endnote %}

{% endif %}

## Prerrequisitos

Antes de crear tu flujo de trabajo de {% data variables.product.prodname_actions %}, primero necesitarás completar los siguientes pasos de configuración:

1. Crear un plan de Azure App Service.

   Por ejemplo, puedes utilizar el CLI de Azure para crear un plan de App Service nuevo:

   ```bash{:copy}
   az appservice plan create \
       --resource-group MY_RESOURCE_GROUP \
       --name MY_APP_SERVICE_PLAN \
       --is-linux
   ```

   En el comando anterior, reemplaza `MY_RESOURCE_GROUP` con tu Grupo de Recursos de Azure preexistente y `MY_APP_SERVICE_PLAN` con un nombre nuevo para el plan de App Service.

   Consulta la documentación de Azure para obtener más información sobre cómo utilizar el [CLI de Azure](https://docs.microsoft.com/en-us/cli/azure/):

   * Para la autenticación, consulta "[Iniciar sesión con Azure CLI](https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli)".
   * Si necesitas crear un grupo de recursos nuevo, consulta lasección "[grupo az](https://docs.microsoft.com/en-us/cli/azure/group?view=azure-cli-latest#az_group_create)".

2. Crea una app web.

   Por ejemplo, puedes utilizar el CLI de Azure para crear una app web de Azure App Service con un tiempo de ejecución de nodo:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "node|10.14"
   ```

   En este comando, reemplaza los parámetros con tus propios valores, en donde `MY_WEBAPP_NAME` es un nombre nuevo para la app web.

3. Configura un perfil de publicación de Azure y crea un secreto de `AZURE_WEBAPP_PUBLISH_PROFILE`.

   Genera tus credenciales de despliegue de Azure utilizando un perfil de publicación. Para obtener más información, consulta la sección "[Generar credenciales de despliegue](https://docs.microsoft.com/en-us/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)" en la documentación de Azure.

   En tu repositorio de {% data variables.product.prodname_dotcom %}, crea un secreto que se llame `AZURE_WEBAPP_PUBLISH_PROFILE` que tenga el contenido del perfil de publicación. Para obtener más información sobre cómo crear secretos, consulta la sección "[Secretos cifrados](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)".

4. Para las apps de Linux, agrega un ajuste de app llamado `WEBSITE_WEBDEPLOY_USE_SCM` y configúralo en "true" en tu app. Para obtener más información, consulta la sección "[Configurar apps en el portal](https://docs.microsoft.com/en-us/azure/app-service/configure-common#configure-app-settings)" en la documentación de Azure.

{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
5. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}
{% endif %}

## Crear un flujo de trabajo

Una vez que hayas completado los prerequisitos, puedes proceder con la creación del flujo de trabajo.

El siguiente flujo de trabajo de ejemplo demuestra cómo crear, probar y desplegar el proyecto de Node.js a Azure App Service cuando haya una subida a la rama `main`.

Asegúrate de configurar a `AZURE_WEBAPP_NAME` en la clave `env` del flujo de trabajo con el nombre de la app web que creaste. También puedes cambiar el `AZURE_WEBAPP_PACKAGE_PATH` si la ruta de tu proyecto no es la raíz del repositorio y `NODE_VERSION` si quieres utilizar una versión de nodo diferente a `10.x`.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  push:
    branches:
      - main

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  AZURE_WEBAPP_PACKAGE_PATH: '.'      # set this to the path to your web app project, defaults to the repository root
  NODE_VERSION: '10.x'                # set this to the node version to use

jobs:
  build-and-deploy:
    name: Build and Deploy
    runs-on: ubuntu-latest
    environment: production

    steps:
      - uses: actions/checkout@v2

      - name: Use Node.js {% raw %}${{ env.NODE_VERSION }}{% endraw %}
        uses: actions/setup-node@v2
        with:
          node-version: {% raw %}${{ env.NODE_VERSION }}{% endraw %}

      - name: npm install, build, and test
        run: |
          # Build and test the project, then
          # deploy to Azure Web App.
          npm install
          npm run build --if-present
          npm run test --if-present

      - name: 'Deploy to Azure WebApp'
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
          package: {% raw %}${{ env.AZURE_WEBAPP_PACKAGE_PATH }}{% endraw %}
```

## Recursos adicionales

Los siguientes recursos también pueden ser útiles:

* Para encontrar el flujo de trabajo inicial original, consulta el archivo [`azure.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure.yml) en el repositorio `starter-workflows` de {% data variables.product.prodname_actions %}.
* La acción que se utilizó para desplegar la app web es la acción oficial [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) de Azure.
* Para encontrar más ejemplos de flujos de trabajo de GitHub Actions que desplieguen a Azure, consulta el repositorio [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
* La guía rápida de "[Crear una app web de Node.js en Azure](https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs)" dentro de la documentación de la app web de Azure demuestra cómo utilizar VS Code con la [Extensión de Azure App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice).
