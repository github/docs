---
title: Azure Static Web Apps에 배포
intro: CD(지속적인 배포) 워크플로의 일부로 웹앱을 Azure Static Web App에 배포할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure Static Web Apps
ms.openlocfilehash: 3e5b9a90e91e237fbd1b5679624ed3cdb3865856
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410549'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## 소개

이 가이드에서는 {% data variables.product.prodname_actions %}를 사용하여 웹앱을 빌드하고 [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/)에 배포하는 방법을 설명합니다.

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**참고**: {% data reusables.actions.about-oidc-short-overview %} 및 “[Azure에서 OpenID Connect 구성](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure).”

{% endnote %}

{% endif %}

## 필수 조건

{% data variables.product.prodname_actions %} 워크플로를 만들기 전에 먼저 다음 설정 단계를 완료해야 합니다.

1. 배포 원본에 대한 ‘기타’ 옵션을 사용하여 Azure Static Web App을 만듭니다. 자세한 내용은 Azure 설명서의 “[빠른 시작: Azure Portal에서 첫 번째 정적 사이트 빌드](https://docs.microsoft.com/azure/static-web-apps/get-started-portal)”를 참조하세요. 

2. 정적 웹앱 배포 토큰 값으로 `AZURE_STATIC_WEB_APPS_API_TOKEN`이라는 비밀을 만듭니다. 배포 토큰을 찾는 방법에 대한 자세한 내용은 Azure 설명서의 “[Azure Static Web Apps 배포 토큰 재설정](https://docs.microsoft.com/azure/static-web-apps/deployment-token-management)”을 참조하세요.

## 워크플로 만들기

필수 구성 요소를 완료한 후에는 워크플로 만들기를 진행할 수 있습니다.

다음 예제 워크플로는 `main` 분기에 대한 푸시가 있거나 `main`를 대상으로 하는 끌어오기 요청이 열리거나, 동기화되거나, 다시 열릴 때 Azure 정적 웹앱을 빌드하고 배포하는 방법을 보여 줍니다. 또한 워크플로는 `main`을 대상으로 하는 끌어오기 요청이 닫힐 때 해당하는 사전 프로덕션 배포를 해제합니다.

워크플로 `env` 키에서 다음 값을 바꿉니다.
- `APP_LOCATION`을 클라이언트 코드의 위치로 바꿉니다.
- `API_LOCATION`을 API 원본 코드의 위치로 바꿉니다. `API_LOCATION`이 관련이 없으면 변수와 변수가 사용되는 행을 삭제할 수 있습니다.
- `APP_ARTIFACT_LOCATION`을 클라이언트 코드 빌드 출력의 위치로 바꿉니다.

이러한 값에 대한 자세한 내용은 Azure 설명서의 “[Azure Static Web Apps 빌드 구성](https://docs.microsoft.com/azure/static-web-apps/build-configuration?tabs=github-actions)”을 참조하세요.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Deploy web app to Azure Static Web Apps

env:
  APP_LOCATION: "/" # location of your client code
  API_LOCATION: "api" # location of your api source code - optional
  APP_ARTIFACT_LOCATION: "build" # location of client code build output

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

permissions:
  issues: write
  contents: read

jobs:
  build_and_deploy:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          submodules: true
      - name: Build And Deploy
        uses: Azure/static-web-apps-deploy@1a947af9992250f3bc2e68ad0754c0b0c11566c9
        with:
          azure_static_web_apps_api_token: {% raw %}${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}{% endraw %}
          repo_token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          action: "upload"
          app_location: {% raw %}${{ env.APP_LOCATION }}{% endraw %}
          api_location: {% raw %}${{ env.API_LOCATION }}{% endraw %}
          app_artifact_location: {% raw %}${{ env.APP_ARTIFACT_LOCATION }}{% endraw %}

  close:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close
    steps:
      - name: Close
        uses: Azure/static-web-apps-deploy@1a947af9992250f3bc2e68ad0754c0b0c11566c9
        with:
          azure_static_web_apps_api_token: {% raw %}${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}{% endraw %}
          action: "close"
```

## 추가 리소스

다음 리소스도 유용할 수 있습니다.

* 원래의 시작 워크플로는 {% data variables.product.prodname_actions %} `starter-workflows` 리포지토리의 [`azure-staticwebapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-staticwebapp.yml)을 참조하세요.
* 웹앱을 배포하는 데 사용되는 작업은 공식 Azure [`Azure/static-web-apps-deploy`](https://github.com/Azure/static-web-apps-deploy) 작업입니다.
* Azure에 배포하는 GitHub Actions 워크플로에 대한 자세한 예제는 [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) 리포지토리를 참조하세요.
