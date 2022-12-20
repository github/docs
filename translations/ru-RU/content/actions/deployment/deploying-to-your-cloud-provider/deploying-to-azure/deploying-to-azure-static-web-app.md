---
title: Развертывание статического веб-приложения Azure
intro: Веб-приложение можно развернуть в статическом веб-приложении Azure в рамках рабочих процессов непрерывного развертывания (CD).
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410550'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## Введение

Это руководство объясняет, как использовать {% data variables.product.prodname_actions %} для сборки и развертывания веб-приложения в [Статических веб-приложениях Azure](https://azure.microsoft.com/services/app-service/static/).

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Примечание**. {% data reusables.actions.about-oidc-short-overview %} и [Настройка OpenID Connect в Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure).

{% endnote %}

{% endif %}

## Предварительные требования

Перед созданием рабочего процесса {% data variables.product.prodname_actions %} сначала нужно выполнить следующие действия по настройке:

1. Создайте статическое веб-приложение Azure, используя параметр "Другое" для источника развертывания. Дополнительные сведения см. в разделе [Краткое руководство. Создание первого статического сайта на портале Azure](https://docs.microsoft.com/azure/static-web-apps/get-started-portal) в документации Azure. 

2. Создайте секрет с именем `AZURE_STATIC_WEB_APPS_API_TOKEN` со значением токена развертывания статического веб-приложения. Дополнительные сведения о том, как найти токен развертывания, см. в разделе [Сброс токенов развертывания в Статических веб-приложениях Azure](https://docs.microsoft.com/azure/static-web-apps/deployment-token-management) в документации Azure.

## Создание рабочего процесса

Выполнив предварительные требования, можно приступить к созданию рабочего процесса.

В следующем примере рабочего процесса показано, как собрать и развернуть статическое веб-приложение Azure при отправке в ветвь `main` или при открытии, синхронизации или повторном открытии запроса на вытягивание, нацеленного на `main`. Рабочий процесс также удаляет соответствующее предварительное развертывание при закрытии запроса на вытягивание, нацеленного на `main`.

Под ключом `env` рабочего процесса измените следующие значения:
- `APP_LOCATION` в расположение кода клиента
- `API_LOCATION` на расположение исходного кода API. Если `API_LOCATION` не имеет значения, можно удалить переменную и строки, в которых она используется.
- `APP_ARTIFACT_LOCATION` на расположение вывода сборки кода клиента

Дополнительные сведения об этих значениях см. в разделе [Конфигурация сборки для Статических веб-приложений Azure](https://docs.microsoft.com/azure/static-web-apps/build-configuration?tabs=github-actions) в документации Azure.

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

## Дополнительные ресурсы

Следующие ресурсы также содержат полезные сведения на эти темы:

* Исходный начальный рабочий процесс см. в [`azure-staticwebapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-staticwebapp.yml) из репозитория `starter-workflows` {% data variables.product.prodname_actions %}.
* Действие, используемое для развертывания веб-приложения, является официальным действием [`Azure/static-web-apps-deploy`](https://github.com/Azure/static-web-apps-deploy) Azure.
* Дополнительные примеры рабочих процессов GitHub Actions, которые развертываются в Azure, см. в репозитории [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
