---
title: Desplegar a Azure App Service
intro: Puedes desplegar hacia Azure App Service como parte de tus flujos de trabajo de despliegue continuo (DC).
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'DC'
  - 'Contenedores'
  - 'Azure App Service'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introducción

Esta guía te explica cómo utilizar {% data variables.product.prodname_actions %} para crear, probar y desplegar una aplicación en [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/).

Azure App Service puede ejecutar apps web en varios lenguajes de programación, pero esta guía demuestra el despliegue en un proyecto existente que se encuentra en Node.js.

### Prerrequisitos

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

### Crear un flujo de trabajo

Una vez que hayas completado los prerequisitos, puedes proceder con la creación del flujo de trabajo.

El siguiente flujo de trabajo de ejemplo demuestra cómo crear, probar y desplegar el proyecto de Node.js en Azura App Service.

Asegúrate de configurar a `AZURE_WEBAPP_NAME` en la clave `env` del flujo de trabajo con el nombre de la app web que creaste.

{% raw %}
```yaml{:copy}
on:
  release:
    types: [created]

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  AZURE_WEBAPP_PACKAGE_PATH: '.'      # set this to the path to your web app project, defaults to the repository root
  NODE_VERSION: '10.x'                # set this to the node version to use

jobs:
  build-and-deploy:
    name: Build and Deploy
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Use Node.js ${{ env.NODE_VERSION }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: npm install, build, and test
        run: |
          # Build and test the project, then
          # deploy to Azure Web App.
          npm install
          npm run build --if-present
          npm run test --if-present

      - name: 'Deploy to Azure WebApp'
        uses: azure/webapps-deploy@v2
        with:
          app-name: ${{ env.AZURE_WEBAPP_NAME }}
          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
          package: ${{ env.AZURE_WEBAPP_PACKAGE_PATH }}
```
{% endraw %}

### Recursos adicionales

Los siguientes recursos también pueden ser útiles:

* Para el flujo de trabajo inicial original, consulta el archivo [`azure.yml`](https://github.com/actions/starter-workflows/blob/master/ci/azure.yml) en el repositorio `starter-workflows` de {% data variables.product.prodname_actions %}.
* La acción que se utilizó para desplegar la app web es la acción oficial [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) de Azure.
* La guía rápida de "[Crear una app web de Node.js en Azure](https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs)" dentro de la documentación de la app web de Azure demuestra cómo utilizar VS Code con la [Extensión de Azure App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice).
