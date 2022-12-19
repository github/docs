---
title: Azure App Service에 Python 배포
intro: CD(지속적인 배포) 워크플로의 일부로 Azure App Service에 Python 프로젝트를 배포할 수 있습니다.
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
ms.openlocfilehash: c9f1bc719068a250aaabfbb8dcb3581335dabdb1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409461'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 {% data variables.product.prodname_actions %}를 사용하여 Python 프로젝트를 빌드하고 배포하여 [Azure App Service](https://azure.microsoft.com/services/app-service/) 방법을 설명합니다.

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**참고**: {% data reusables.actions.about-oidc-short-overview %} 및 “[Azure에서 OpenID Connect 구성](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure).”

{% endnote %}

{% endif %}

## 필수 조건

{% data variables.product.prodname_actions %} 워크플로를 만들기 전에 먼저 다음 설정 단계를 완료해야 합니다.

{% data reusables.actions.create-azure-app-plan %}

1. 웹앱 만들기

   예를 들어 Azure CLI를 사용하여 Python 런타임으로 Azure App Service 웹앱을 만들 수 있습니다.

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --runtime "python|3.8"
   ```

   위의 명령에서 매개 변수를 고유한 값으로 바꿉니다. 여기서 `MY_WEBAPP_NAME`은 웹앱의 새 이름입니다.

{% data reusables.actions.create-azure-publish-profile %}

1. `SCM_DO_BUILD_DURING_DEPLOYMENT`라는 앱 설정을 추가하고 값을 `1`로 설정합니다.

5. 필요에 따라 배포 환경을 구성합니다. {% data reusables.actions.about-environments %}

## 워크플로 만들기

필수 구성 요소를 완료한 후에는 워크플로 만들기를 진행할 수 있습니다.

다음 예제 워크플로는 `main` 분기에 푸시가 있을 때 Python 프로젝트를 빌드하고 Azure App Service에 배포하는 방법을 보여 줍니다.

워크플로 `env` 키에서 `AZURE_WEBAPP_NAME`을 만든 웹앱의 이름으로 설정했는지 확인합니다. `3.8` 이외의 Python 버전을 사용하는 경우 `PYTHON_VERSION`을 사용 중인 버전으로 변경합니다.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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

## 추가 리소스

다음 리소스도 유용할 수 있습니다.

* 원래의 시작 워크플로는 {% data variables.product.prodname_actions %} `starter-workflows` 리포지토리의 [`azure-webapps-python.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-webapps-python.yml)을 참조하세요.
* 웹앱을 배포하는 데 사용되는 작업은 공식 Azure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) 작업입니다.
* Azure에 배포하는 GitHub Actions 워크플로에 대한 자세한 예제는 [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) 리포지토리를 참조하세요.
