---
title: Deploying Node.js to Azure App Service
intro: You can deploy your Node.js project to Azure App Service as part of your continuous deployment (CD) workflows.
redirect_from:
  - /actions/guides/deploying-to-azure-app-service
  - /actions/deployment/deploying-to-azure-app-service
  - /actions/deployment/deploying-to-your-cloud-provider/deploying-to-azure-app-service
  - /actions/deployment/deploying-to-your-cloud-provider/deploying-to-azure/deploying-nodejs-to-azure-app-service
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Node
  - JavaScript
  - Azure App Service
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide explains how to use {% data variables.product.prodname_actions %} to build, test, and deploy a Node.js project to [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% note %}

**Note**: {% data reusables.actions.about-oidc-short-overview %} and "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)."

{% endnote %}

## Prerequisites

Before creating your {% data variables.product.prodname_actions %} workflow, you will first need to complete the following setup steps:

{% data reusables.actions.create-azure-app-plan %}

1. Create a web app.

   For example, you can use the Azure CLI to create an Azure App Service web app with a Node.js runtime:

   ```bash copy
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "NODE|14-lts"
   ```

   In the command above, replace the parameters with your own values, where `MY_WEBAPP_NAME` is a new name for the web app.

{% data reusables.actions.create-azure-publish-profile %}

1. Optionally, configure a deployment environment. {% data reusables.actions.about-environments %}

## Creating the workflow

Once you've completed the prerequisites, you can proceed with creating the workflow.

The following example workflow demonstrates how to build, test, and deploy the Node.js project to Azure App Service when there is a push to the `main` branch.

Ensure that you set `AZURE_WEBAPP_NAME` in the workflow `env` key to the name of the web app you created. If the path to your project is not the repository root, change `AZURE_WEBAPP_PACKAGE_PATH`  to your project path. If you use a version of Node.js other than `10.x`, change `NODE_VERSION` to the version that you use.

{% data reusables.actions.delete-env-key %}

```yaml copy
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
      uses: azure/webapps-deploy@85270a1854658d167ab239bce43949edb336fa7c
      with:
        app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
        publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
        package: {% raw %}${{ env.AZURE_WEBAPP_PACKAGE_PATH }}{% endraw %}
```

## Additional resources

The following resources may also be useful:

* For the original workflow template, see [`azure-webapps-node.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-node.yml) in the {% data variables.product.prodname_actions %} `starter-workflows` repository.
* The action used to deploy the web app is the official Azure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) action.
* For more examples of GitHub Action workflows that deploy to Azure, see the [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) repository.
* The "[Create a Node.js web app in Azure](https://docs.microsoft.com/azure/app-service/quickstart-nodejs)" quickstart in the Azure web app documentation demonstrates using {% data variables.product.prodname_vscode %} with the [Azure App Service extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice).
