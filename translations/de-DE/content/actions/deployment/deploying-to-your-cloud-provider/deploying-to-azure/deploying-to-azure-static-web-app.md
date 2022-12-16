---
title: Bereitstellen in Azure Static Web Apps
intro: Du kannst deine Web-App in Azure Static Web Apps im Rahmen deines Continuous Deployment- Workflows (CD) bereitstellen.
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410547'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}


## Einführung

In diesem Leitfaden wird erläutert, wie {% data variables.product.prodname_actions %} zum Erstellen und Bereitstellen einer Web-App für [Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/) verwendet wird.

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

{% note %}

**Hinweis**: {% data reusables.actions.about-oidc-short-overview %} und [Konfigurieren von OpenID Connect in Azure](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure).

{% endnote %}

{% endif %}

## Voraussetzungen

Bevor du deinen {% data variables.product.prodname_actions %}-Workflow erstellst, musst du die folgenden Einrichtungsschritte ausführen:

1. Erstelle eine Azure Static Web Apps-Instanz mit der Option „Sonstige“ für die Bereitstellungsquelle. Weitere Informationen findest du in der Azure-Dokumentation unter [Schnellstart: Erstellen deiner ersten statischen Website im Azure-Portal](https://docs.microsoft.com/azure/static-web-apps/get-started-portal). 

2. Erstelle ein Geheimnis namens `AZURE_STATIC_WEB_APPS_API_TOKEN` mit dem Wert des Bereitstellungstokens deiner statischen Web-App. Weitere Informationen zum Suchen deines Bereitstellungstokens findest du in der Azure-Dokumentation unter [Zurücksetzen von Bereitstellungstoken in Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/deployment-token-management).

## Erstellen des Workflows

Wenn die Voraussetzungen erfüllt sind, kannst du mit dem Erstellen des Workflows fortfahren.

Der folgende Beispielworkflow zeigt, wie eine statische Azure-Web-App erstellt und bereitgestellt wird, wenn ein Push zum `main`-Branch erfolgt oder ein an `main` gerichteter Pull Request geöffnet, synchronisiert oder erneut geöffnet wird. Der Workflow beseitigt auch die entsprechende Pre-Production-Bereitstellung, wenn ein an `main` gerichteter Pull Request geschlossen wird.

Ändere unter dem Workflowschlüssel `env` die folgenden Werte:
- `APP_LOCATION` in den Speicherort des Clientcodes.
- `API_LOCATION` in den Speicherort deines API-Quellcodes. Wenn `API_LOCATION` nicht relevant ist, kannst du die Variable löschen und ebenso die Zeilen, in denen sie verwendet wird.
- `APP_ARTIFACT_LOCATION` in den Speicherort der Clientcodebuildausgabe.

Weitere Informationen zu diesen Werten findest du in der Azure-Dokumentation unter [Build-Konfiguration für Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/build-configuration?tabs=github-actions).

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

## Zusätzliche Ressourcen

Die folgenden Ressourcen können ebenfalls nützlich sein:

* Den ursprünglichen Startworkflow findest du unter [`azure-staticwebapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-staticwebapp.yml) im {% data variables.product.prodname_actions %}-Repository `starter-workflows`.
* Die zum Bereitstellen der Web-App verwendete Aktion ist die offizielle Azure-Aktion [`Azure/static-web-apps-deploy`](https://github.com/Azure/static-web-apps-deploy).
* Weitere Beispiele für GitHub Action-Workflows, die in Azure bereitgestellt werden können, findest du im Repository [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples).
