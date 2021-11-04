---
title: Implantar no Azure App Service
intro: Você pode fazer a implantação no Azure App Service como parte dos fluxos de trabalho com implantação contínua (CD).
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
shortTitle: Implantar no Azure App Service
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Introdução

Este guia explica como usar {% data variables.product.prodname_actions %} para criar, testar e publicar um aplicativo no [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/).

O Azure App Service pode executar aplicativos web em várias linguagens, mas este guia mostra a implantação de um projeto Node.js existente.

{% ifversion fpt or ghec or ghae-issue-4856 %}

{% note %}

**Note**: {% data reusables.actions.about-oidc-short-overview %} and "[Configuring OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)."

{% endnote %}

{% endif %}

## Pré-requisitos

Antes de criar seu fluxo de trabalho de {% data variables.product.prodname_actions %}, primeiro você precisa concluir as etapas de configuração a seguir:

1. Crie um plano do Azure App Service.

   Por exemplo, você pode usar o CLI do Azure para criar um novo plano de App Service:

   ```bash{:copy}
   az appservice plan create \
       --resource-group MY_RESOURCE_GROUP \
       --name MY_APP_SERVICE_PLAN \
       --is-linux
   ```

   No comando acima, substitua `MY_RESOURCE_GROUP` pelo seu Grupo de Recursos do Azure pré-existente, e `MY_APP_SERVICE_PLAN` por um novo nome para o plano do App Service.

   Para obter mais informações, consulte a documentação do Azure usando o [CLI do Azure](https://docs.microsoft.com/en-us/cli/azure/):

   * Para autenticação, consulte "[Efetuar login com o CLI do Azure](https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli)".
   * Se você precisar criar um novo grupo de recursos, consulte "[grupo az](https://docs.microsoft.com/en-us/cli/azure/group?view=azure-cli-latest#az_group_create)".

2. Crie um aplicativo web.

   Por exemplo, você pode usar o CLI do Azure para criar um aplicativo web do Azure App Service com um tempo de execução de nó:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "node|10.14"
   ```

   No comando acima, substitua os parâmetros pelos seus próprios valores, em que `MY_WEBAPP_NAME` é um novo nome para o aplicativo web.

3. Configure um perfil de publicação do Azure e crie um segredo de `AZURE_WEBAPP_PUBLISH_PROFILE`.

   Gere suas credenciais de implantação do Azure usando um perfil de publicação. Para obter mais informações, consulte "[Gerar credenciais de implantação](https://docs.microsoft.com/en-us/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)" na documentação do Azure.

   No seu repositório {% data variables.product.prodname_dotcom %}, crie um segredo denominado `AZURE_WEBAPP_PUBLISH_PROFILE` que contém o conteúdo do perfil de publicação. Para obter mais informações sobre a criação de segredos, consulte "[Segredos criptografados](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)".

4. Para aplicativos Linux, adicione uma configuração de aplicativo denominada `WEBSITE_WEBDEPLOY_USE_SCM` e defina-a como verdadeiro no seu aplicativo. Para obter mais informações, consulte "[Configurar aplicativos no portal](https://docs.microsoft.com/en-us/azure/app-service/configure-common#configure-app-settings)" na documentação do Azure.

{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
5. Opcionalmente, configure um ambiente de implantação. {% data reusables.actions.about-environments %}
{% endif %}

## Criar o fluxo de trabalho

Depois de preencher os pré-requisitos, você pode prosseguir com a criação do fluxo de trabalho.

O fluxo de trabalho a seguir demonstra como criar, testar e implantar o Node.js, o projeto para o Azure App Service quando há um push para o branch `principal`.

Certifique-se de definir `AZURE_WEBAPP_NAME` na chave de fluxo de trabalho `env` como o nome do aplicativo web que você criou. Você também pode alterar `AZURE_WEBAPP_PACKAGE_PATH` se o caminho para o seu projeto não for a raiz do repositório e `NODE_VERSION` se você quiser usar uma versão de nó diferente de `10.x`.

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

## Recursos adicionais

Os seguintes recursos também podem ser úteis:

* Para o fluxo de trabalho inicial original, consulte [`azure.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure.yml) no repositório `starter-workflows` de {% data variables.product.prodname_actions %}.
* A ação usada para fazer a implantação do aplicativo web é a ação oficial [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) do Azure.
* Para obter mais exemplos de fluxos de trabalho do GitHub Action que fazem a implantação no Azure, consulte o repositório [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
* O início rápido de "[Criar um aplicativo web Node.js no Azure](https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs)" na documentação do aplicativo web do Azure mostra como usar o VS Code com a [extensão do Azure App Service](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice).
