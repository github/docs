---
title: 下载工作流程构件
intro: 您可以在存档的构件自动过期之前下载它们。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% if currentversion == "free-proteam@latest" or currentversion ver_gt "enterprise-server@2. 2" %} 默认情况下，{% data variables.product.product_name %} 存储 90 天内的构建日志和构件，并且您可以根据仓库类型自定义此保留期。 更多信息请参阅“[配置 GitHub Actions 构件和日志在您的仓库中的保留期](/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)”。{% endif %}
{% if currentVersion == "enterprise-server@2.22" %} {% data variables.product.product_name %} 存储 90 天的完整构建日志和构件。{% endif %}

{% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. 在**构件**下，单击您想要下载的构件。
    {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
    ![下载构件下拉菜单](/assets/images/help/repository/artifact-drop-down-updated.png)
    {% else %}
    ![下载构件下拉菜单](/assets/images/help/repository/artifact-drop-down.png)
    {% endif %}
