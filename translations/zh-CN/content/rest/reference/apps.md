---
title: 应用
redirect_from:
  - /v3/apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

GitHub 应用程序 API 使您能够获取有关 GitHub 应用程序的高层次信息以及有关应用程序安装设施的特定信息。 要了解有关 GitHub 应用程序的更多信息，请参阅“[验证为 GitHub 应用程序](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)”。

{% data reusables.apps.general-apps-restrictions %}

本页列出了验证为 GitHub 应用程序后可访问的端点。 更多信息请参阅“[验证为 GitHub 应用程序](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)”。

验证为 GitHub 应用程序后，GitHub 应用程序 API 使您能够获取有关 GitHub 应用程序的高层次信息以及有关应用程序安装的特定信息。

验证为 GitHub 应用程序后，您可以访问 REST API v3 端点。 这些端点带有“备注”部分，即“与 GitHub 应用程序结合使用”。 验证为用户后也可以访问这些端点。

某些 REST API v3 端点需要验证为 GitHub 应用程序安装设施。 有关这些端点的列表，请参阅[安装设施](/v3/apps/installations/)。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## OAuth 应用程序 API

您可以使用此 API 来管理 OAuth 应用程序用于管理用户的 {% data variables.product.prodname_dotcom %} 帐户的 OAuth 令牌。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'oauth-applications' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 安装设施

安装设施 API 使您能够获取有关 GitHub 应用程序安装设施的信息并在这些安装设施中执行操作。 _安装设施_是指已安装该应用程序的任何用户或组织帐户。 有关如何验证为安装设施和限制访问特定仓库的信息，请参阅“[验证为安装设施](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)”。

要列出组织的所有 GitHub 应用程序安装设施，请参阅“[列出组织的应用程序安装设施](/v3/orgs/#list-app-installations-for-an-organization)”。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'installations' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Marketplace

有关 {% data variables.product.prodname_marketplace %} 的更多信息，请参阅“[GitHub Marketplace](/marketplace/)”。

{% data variables.product.prodname_marketplace %} API 允许您查看哪些客户正在使用定价计划，查看客户的购买情况，以及查看帐户是否具有有效订阅。

### 使用存根端点进行测试

此 API 包括允许您使用**存根数据**测试 {% data variables.product.prodname_github_app %} 的端点。 存根数据是硬编码的假数据，不会根据实际订阅而更改。

要使用存根数据进行测试，请使用存根端点代替其对应的生产端点。 这允许您在 {% data variables.product.prodname_marketplace %} 上列出 {% data variables.product.prodname_github_app %} 之前测试 API 逻辑是否成功。

在部署您的 {% data variables.product.prodname_github_app %} 之前，请务必将存根端点替换为生产端点。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'marketplace' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
