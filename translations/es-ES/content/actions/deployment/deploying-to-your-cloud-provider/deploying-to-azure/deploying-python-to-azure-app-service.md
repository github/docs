---
title: Desplegar Python a Azure App Service
intro: Puedes desplegar tu proyecto de Python a Azure App Service como parte de tus flujos de trabajo de despliegue continuo (DC).
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Python
  - Azure App Service
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te explica cómo utilizar las {% data variables.product.prodname_actions %} para compilar y desplegar un proyecto de Python hacia [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Nota**: {% data reusables.actions.about-oidc-short-overview %} y "[Configurar OpenID Connect en Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)".

{% endnote %}

{% endif %}

## Prerrequisitos

Antes de crear tu flujo de trabajo de {% data variables.product.prodname_actions %}, primero necesitarás completar los siguientes pasos de configuración:

{% data reusables.actions.create-azure-app-plan %}

1. Crea una app web.

   Por ejemplo, puedes utilizar el CLI de Azure para crear una app web de Azure App Service con el tiempo de ejecución de Python:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "python|3.8"
   ```

   En este comando, reemplaza los parámetros con tus propios valores, en donde `MY_WEBAPP_NAME` es un nombre nuevo para la app web.

{% data reusables.actions.create-azure-publish-profile %}

1. Agrega un ajuste de la app llamado `SCM_DO_BUILD_DURING_DEPLOYMENT` y configura su valor en `1`.

5. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}

## Crear un flujo de trabajo

Una vez que hayas completado los prerequisitos, puedes proceder con la creación del flujo de trabajo.

El siguiente flujo de trabajo de ejemplo demuestra cómo compilar y desplegar un proyecto de Python a Azure App Service cuando existe una subida a la rama `main`.

Asegúrate de configurar a `AZURE_WEBAPP_NAME` en la clave `env` del flujo de trabajo con el nombre de la app web que creaste. Si utilizas una versión de Python diferente a la `3.8`, cambia la `PYTHON_VERSION` a la versión que utilices.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Build and deploy Python app to Azure Web App

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name
  PYTHON_VERSION: '3.8'               # set this to the Python version to use

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Python version
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: {% raw %}${{ env.PYTHON_VERSION }}{% endraw %}

      - name: Create and start virtual environment
        run: |
          python -m venv venv
          source venv/bin/activate

      - name: Set up dependency caching for faster installs
        uses: {% data reusables.actions.action-cache %}
        with:
          path: ~/.cache/pip
          key: {% raw %}${{ runner.os }}-pip-${{ hashFiles('**/requirements.txt') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-pip-{% endraw %}

      - name: Install dependencies
        run: pip install -r requirements.txt

      # Optional: Add a step to run tests here (PyTest, Django test suites, etc.)

      - name: Upload artifact for deployment jobs
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: python-app
          path: |
            .
            !venv/
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
          name: python-app
          path: .

      - name: 'Deploy to Azure Web App'
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
```

## Recursos adicionales

Los siguientes recursos también pueden ser útiles:

* Para encontrar el flujo de trabajo inicial original, consulta el archivo [`azure-webapps-python.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-python.yml) en el repositorio `starter-workflows` de {% data variables.product.prodname_actions %}.
* La acción que se utilizó para desplegar la app web es la acción oficial [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) de Azure.
* Para encontrar más ejemplos de flujos de trabajo de GitHub Actions que desplieguen a Azure, consulta el repositorio [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
