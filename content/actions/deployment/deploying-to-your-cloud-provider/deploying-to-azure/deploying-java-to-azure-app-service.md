---
title: Deploying Java to Azure App Service
intro: You can deploy your Java project to Azure App Service as part of your continuous deployment (CD) workflows.
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
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide explains how to use {% data variables.product.prodname_actions %} to build and deploy a Java project to [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghes %}

{% note %}

**Note**: {% data reusables.actions.about-oidc-short-overview %} and "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)."

{% endnote %}

{% endif %}

## Prerequisites

Before creating your {% data variables.product.prodname_actions %} workflow, you will first need to complete the following setup steps:

{% data reusables.actions.create-azure-app-plan %}

1. Create a web app.

   For example, you can use the Azure CLI to create an Azure App Service web app with a Java runtime:

   ```bash copy
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "JAVA|11-java11"
   ```

   In the command above, replace the parameters with your own values, where `MY_WEBAPP_NAME` is a new name for the web app.

{% data reusables.actions.create-azure-publish-profile %}

1. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}

## Creating the workflow

Once you've completed the prerequisites, you can proceed with creating the workflow.

The following example workflow demonstrates how to build and deploy a Java project to Azure App Service when there is a push to the `main` branch.

Ensure that you set `AZURE_WEBAPP_NAME` in the workflow `env` key to the name of the web app you created. If you want to use a Java version other than `11`, change `JAVA_VERSION`.

{% data reusables.actions.delete-env-key %}

```yaml copy
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
        uses: azure/webapps-deploy@85270a1854658d167ab239bce43949edb336fa7c
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
          package: '*.jar'
```

## Additional resources

The following resources may also be useful:

- For the original starter workflow, see [`azure-webapps-java-jar.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-java-jar.yml) in the {% data variables.product.prodname_actions %} `starter-workflows` repository.
- The action used to deploy the web app is the official Azure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) action.
- For more examples of GitHub Action workflows that deploy to Azure, see the [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) repository.
