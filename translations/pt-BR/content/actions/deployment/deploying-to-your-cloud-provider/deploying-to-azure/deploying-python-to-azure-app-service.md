---
title: Implementando o Python no Azure App Service
intro: Você pode fazer a implantação do seu projeto Python no Azure App Service como parte de seus fluxos de trabalho de implantação contínua (CD).
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

## Introdução

Este guia explica como usar {% data variables.product.prodname_actions %} para criar e implantar um projeto Python no [Azure App Service](https://azure.microsoft.com/services/app-service/).

{% ifversion fpt or ghec or ghae-issue-4856 %}

{% note %}

**Observação**: {% data reusables.actions.about-oidc-short-overview %} e "[Configurando OpenID Connect no Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)."

{% endnote %}

{% endif %}

## Pré-requisitos

Antes de criar seu fluxo de trabalho de {% data variables.product.prodname_actions %}, primeiro você precisa concluir as etapas de configuração a seguir:

{% data reusables.actions.create-azure-app-plan %}

1. Crie um aplicativo web.

   Por exemplo, você pode usar o CLI do Azure para criar um aplicativo web do com o tempo de execução do Python:

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "python|3.8"
   ```

   No comando acima, substitua os parâmetros pelos seus próprios valores, em que `MY_WEBAPP_NAME` é um novo nome para o aplicativo web.

{% data reusables.actions.create-azure-publish-profile %}

1. Adicione uma configuração do aplicativo chamado `SCM_DO_BUILD_DURING_DEPLOYMENT` e defina o valor como `1`.

5. Opcionalmente, configure um ambiente de implantação. {% data reusables.actions.about-environments %}

## Criar o fluxo de trabalho

Depois de preencher os pré-requisitos, você pode prosseguir com a criação do fluxo de trabalho.

O exemplo a seguir mostra como criar e implantar um projeto Python no Azure App Service quando há um push para o branch `principal`.

Certifique-se de definir `AZURE_WEBAPP_NAME` na chave de fluxo de trabalho `env` como o nome do aplicativo web que você criou. Se você usa uma versão do Python diferente de `3.8`, altere o `PYTHON_VERSION` para a versão que você usa.

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
      - uses: actions/checkout@v2

      - name: Set up Python version
        uses: actions/setup-python@v2.2.2
        with:
          python-version: {% raw %}${{ env.PYTHON_VERSION }}{% endraw %}

      - name: Create and start virtual environment
        run: |
          python -m venv venv
          source venv/bin/activate

      - name: Set up dependency caching for faster installs
        uses: actions/cache@v2
        with:
          path: ~/.cache/pip
          key: {% raw %}${{ runner.os }}-pip-${{ hashFiles('**/requirements.txt') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-pip-{% endraw %}

      - name: Install dependencies
        run: pip install -r requirements.txt

      # Optional: Add a step to run tests here (PyTest, Django test suites, etc.)

      - name: Upload artifact for deployment jobs
        uses: actions/upload-artifact@v3
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
        uses: actions/download-artifact@v3
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

## Recursos adicionais

Os seguintes recursos também podem ser úteis:

* Para o fluxo de trabalho inicial original, consulte [`azure-webapps-python.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-python.yml) no repositório `starter-workflows` de {% data variables.product.prodname_actions %}.
* A ação usada para fazer a implantação do aplicativo web é a ação oficial [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) do Azure.
* Para obter mais exemplos de fluxos de trabalho do GitHub Action que fazem a implantação no Azure, consulte o repositório [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
