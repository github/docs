---
title: 部署到 Azure Static Web App
intro: 作为持续部署 (CD) 工作流程的一部分，可以将 Web 应用部署到 Azure Static Web App。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CD
  - Azure Static Web Apps
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}


## 简介

本指南说明如何使用 {% data variables.product.prodname_actions %} 构建 Web 应用并将其部署到 [Azure Static Web App](https://azure.microsoft.com/services/app-service/static/)。

{% ifversion fpt or ghec or ghae-issue-4856 %}

{% note %}

**注意**：{% data reusables.actions.about-oidc-short-overview %} 和“[在 Azure 中配置 OpenID Connect](/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-azure)”。

{% endnote %}

{% endif %}

## 基本要求

在创建 {% data variables.product.prodname_actions %} 工作流程之前，首先需要完成以下设置步骤：

1. 对部署源使用“Other（其他）”选项创建 Azure Static Web App。 更多信息请参阅 Azure 文档中的“[快速入门：在 Azure 门户中构建第一个静态站点](https://docs.microsoft.com/azure/static-web-apps/get-started-portal)”。

2. 使用静态 Web 应用部署令牌的值创建名为 `AZURE_STATIC_WEB_APPS_API_TOKEN` 的机密。 有关如何查找部署令牌的详细信息，请参阅 Azure 文档中的“[在 Azure 静态 Web 应用中重置部署令牌](https://docs.microsoft.com/azure/static-web-apps/deployment-token-management)”。

## 创建工作流程

完成先决条件后，可以继续创建工作流程。

以下示例工作流程演示了在推送到 `main` 分支时，或者在打开、同步或重新打开面向 `main` 的拉取请求时，如何生成和部署 Azure 静态 Web 应用。 当面向 `main` 的拉取请求关闭时，工作流程还会破坏相应的预生产部署。

在工作流程 `env` 键下，更改以下值：
- 将 `APP_LOCATION` 更改为客户端代码的位置
- 将 `API_LOCATION` 更改为 API 源代码的位置。 如果 `API_LOCATION` 不相关，则可以删除该变量以及使用它的行。
- 将 `APP_ARTIFACT_LOCATION` 更改为客户端代码构建输出的位置

有关这些值的详细信息，请参阅 Azure 文档中的“[Azure 静态 Web 应用的构建配置](https://docs.microsoft.com/azure/static-web-apps/build-configuration?tabs=github-actions)”。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

jobs:
  build_and_deploy:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy
    steps:
      - uses: actions/checkout@v2
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

## 其他资源

以下资源也可能有用：

* 有关原始入门工作流程，请参阅 {% data variables.product.prodname_actions %} `starter-workflows` 仓库中的 [`azure-staticwebapp.yml`](https://github.com/actions/starter-workflows/blob/main/deployments/azure-staticwebapp.yml)。
* 用于部署 Web 应用的操作是正式的 Azure [`Azure/static-web-apps-deploy`](https://github.com/Azure/static-web-apps-deploy) 操作。
* 有关部署到 Azure 的 GitHub 操作工作流程的更多示例，请参阅 [actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) 存储库。
