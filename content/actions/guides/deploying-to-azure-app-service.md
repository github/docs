---
title: Deploying to Azure App Service
intro: You can deploy to Azure App Service as part of your continuous deployment (CD) workflows.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introduction
[Azure App Service](https://azure.microsoft.com/en-us/services/app-service/) is a Platform-as-a-Service (PaaS) offering from Microsoft, a “fully managed platform for building, deploying and scaling your web apps”. It is a great way to run web apps in several languages including JavaScript, which will be shown here.

This guide assumes you are in the directory of an existing [Node.js](https://nodejs.org/en/) project.

### Prerequisites
To adopt this workflow, you will first need to complete the following setup steps:

#### Create an App Service plan
For example, after [authenticating](https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli) with `az`, the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/):

{% raw %}
```bash{:copy}
az appservice plan create \
    --resource-group $AZ_RESOURCE_GROUP \
    --name $AZ_APP_SERVICE_PLAN \
    --is-linux
```
{% endraw %}

where `$AZ_RESOURCE_GROUP` is a pre-existing Azure Resource Group and `$AZ_APP_SERVICE_PLAN` is a name of your choosing. If you need to set up a new Resource Group, follow [these instructions](https://docs.microsoft.com/en-us/cli/azure/group?view=azure-cli-latest#az_group_create).

#### Create a Web App
Create an [App Service Web App](https://azure.microsoft.com/en-us/services/app-service/web/) with a [node runtime](https://docs.microsoft.com/en-us/cli/azure/webapp?view=azure-cli-latest#az_webapp_list_runtimes), for example, using the Azure CLI:

{% raw %}
```bash{:copy}
az webapp create \
    --name $AZURE_WEBAPP_NAME \
    --plan $AZ_APP_SERVICE_PLAN \
    --resource-group $AZ_RESOURCE_GROUP \
    --runtime "node|10.14"
```
{% endraw %}

where `$AZURE_WEBAPP_NAME` is a webapp name of your choosing.

#### Configure publish profile and store as `AZURE_WEBAPP_PUBLISH_PROFILE` secret
Next, we will generate Azure deployment credentials via a publish profile using [these instructions](https://docs.microsoft.com/en-us/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials), adding them as a [GitHub repository secret](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets) named `AZURE_WEBAPP_PUBLISH_PROFILE`.

### Workflow
Now that the prerequisite steps are done, consider the following workflow, which will build, test, and deploy the Node.js project to Azure App Service.

{% raw %}
```bash{:copy}
on:
  release:
    types: [created]

env:
  AZURE_WEBAPP_NAME: your-app-name    # set this to your application's name
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

### Additional resources
The following additional resources may also be of use:

1. [Azure App Service starter workflow](https://github.com/actions/starter-workflows/blob/master/ci/azure.yml) for the full starter workflow
1. [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy), the Azure action used
1. [App Service quickstart -- Node.js](https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs) for a quickstart using the [VSCode Azure App Service extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice)
