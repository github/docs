---
title: Azure App Service에 Docker 배포
intro: CD(지속적인 배포) 워크플로의 일부로 Docker 컨테이너를 Azure App Service에 배포할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Containers
  - Docker
  - Azure App Service
ms.openlocfilehash: 019a14b170419ac400c0ce97357fca72e8837234
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098414'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 {% data variables.product.prodname_actions %}를 사용하여 Docker 컨테이너를 빌드하고 [Azure App Service](https://azure.microsoft.com/services/app-service/)에 배포하는 방법을 설명합니다.

{% ifversion fpt or ghec or ghes > 3.4 %}

{% note %}

**참고**: {% data reusables.actions.about-oidc-short-overview %} 및 “[Azure에서 OpenID Connect 구성](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure).”

{% endnote %}

{% endif %}

## 필수 조건

{% data variables.product.prodname_actions %} 워크플로를 만들기 전에 먼저 다음 설정 단계를 완료해야 합니다.

{% data reusables.actions.create-azure-app-plan %}

1. 웹앱 만들기

   예를 들어 Azure CLI를 사용하여 Azure AppService 웹앱을 만들 수 있습니다.

   ```bash{:copy}
   az webapp create \
       --name MY_WEBAPP_NAME \
       --plan MY_APP_SERVICE_PLAN \
       --resource-group MY_RESOURCE_GROUP \
       --deployment-container-image-name nginx:latest
   ```

   위의 명령에서 매개 변수를 고유한 값으로 바꿉니다. 여기서 `MY_WEBAPP_NAME`은 웹앱의 새 이름입니다.

{% data reusables.actions.create-azure-publish-profile %}

1. 웹앱에 대한 레지스트리 자격 증명을 설정합니다.

   범위와 함께 `repo` `read:packages` {% 데이터 variables.product.pat_v1 %}을(를) 만듭니다. 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)"를 참조하세요.

   리포지토리를 소유하는 `https://ghcr.io``DOCKER_REGISTRY_SERVER_USERNAME` GitHub 사용자 이름 또는 조직 및 `DOCKER_REGISTRY_SERVER_PASSWORD` 위의 {% 데이터 variables.product.pat_generic %}로 설정합니다`DOCKER_REGISTRY_SERVER_URL`. 이렇게 하면 워크플로가 새로 빌드된 이미지를 레지스트리에 푸시한 후 컨테이너 이미지를 끌어올 수 있도록 웹앱 자격 증명이 부여됩니다. 다음 Azure CLI 명령을 사용하여 수행할 수 있습니다.

   ```shell
    az webapp config appsettings set \
        --name MY_WEBAPP_NAME \
        --resource-group MY_RESOURCE_GROUP \
        --settings DOCKER_REGISTRY_SERVER_URL=https://ghcr.io DOCKER_REGISTRY_SERVER_USERNAME=MY_REPOSITORY_OWNER DOCKER_REGISTRY_SERVER_PASSWORD=MY_PERSONAL_ACCESS_TOKEN
```

5. 필요에 따라 배포 환경을 구성합니다. {% data reusables.actions.about-environments %}

## 워크플로 만들기

필수 구성 요소를 완료한 후에는 워크플로 만들기를 진행할 수 있습니다.

다음 예제 워크플로는 `main` 분기에 푸시가 있을 때 Docker 컨테이너를 빌드하고 Azure App Service에 배포하는 방법을 보여 줍니다.

워크플로 `env` 키에서 `AZURE_WEBAPP_NAME`을 만든 웹앱의 이름으로 설정했는지 확인합니다.

{% data reusables.actions.delete-env-key %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Build and deploy a container to an Azure Web App

env:
  AZURE_WEBAPP_NAME: MY_WEBAPP_NAME   # set this to your application's name

on:
  push:
    branches:
      - main

permissions:
  contents: 'read'
  packages: 'write'

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1

      - name: Log in to GitHub container registry
        uses: docker/login-action@v1.10.0
        with:
          registry: ghcr.io
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}

      - name: Lowercase the repo name
        run: echo "REPO=${GITHUB_REPOSITORY,,}" >>${GITHUB_ENV}

      - name: Build and push container image to registry
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: ghcr.io/{% raw %}${{ env.REPO }}{% endraw %}:{% raw %}${{ github.sha }}{% endraw %}
          file: ./Dockerfile

  deploy:
    runs-on: ubuntu-latest

    needs: build

    environment:
      name: 'production'
      url: {% raw %}${{ steps.deploy-to-webapp.outputs.webapp-url }}{% endraw %}

    steps:
      - name: Lowercase the repo name
        run: echo "REPO=${GITHUB_REPOSITORY,,}" >>${GITHUB_ENV}

      - name: Deploy to Azure Web App
        id: deploy-to-webapp
        uses: azure/webapps-deploy@0b651ed7546ecfc75024011f76944cb9b381ef1e
        with:
          app-name: {% raw %}${{ env.AZURE_WEBAPP_NAME }}{% endraw %}
          publish-profile: {% raw %}${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}{% endraw %}
          images: 'ghcr.io/{% raw %}${{ env.REPO }}{% endraw %}:{% raw %}${{ github.sha }}{% endraw %}'
```

## 추가 리소스

다음 리소스도 유용할 수 있습니다.

* 원래의 시작 워크플로는 {% data variables.product.prodname_actions %} `starter-workflows` 리포지토리의 [`azure-container-webapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-container-webapp.yml)을 참조하세요.
* 웹앱을 배포하는 데 사용되는 작업은 공식 Azure [`Azure/webapps-deploy`](https://github.com/Azure/webapps-deploy) 작업입니다.
* Azure에 배포하는 GitHub Actions 워크플로에 대한 자세한 예제는 [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) 리포지토리를 참조하세요.
