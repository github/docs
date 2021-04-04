---
title: 激活应用程序的可选功能
intro: '您可以测试 {% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_app %} 新的可选功能。'
redirect_from:
  - /developers/apps/activating-beta-features-for-apps
versions:
  free-pro-team: '*'
  github-ae: '*'
  enterprise-server: '>=2.22'
topics:
  - github apps
---

{% warning %}

**警告：** {% if currentVersion ver_lt "enterprise-server@3.1" %} 测试版 {% else %} 可选 {% endif %} 功能可能会变动。

{% endwarning %}

### 激活 {% data variables.product.prodname_github_apps %} 的 {% if currentVersion ver_lt "enterprise-server@3.1" %} 测试版 {% else %} 可选 {% endif %} 功能

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
3. 选择
您要为其启用 {% if currentVersion ver_lt "enterprise-server@3.1" %} 测试版 {% else %} 可选 {% endif %} 功能的 {% data variables.product.prodname_github_app %}。
{% data reusables.apps.optional_feature_activation %}

### 激活 {% data variables.product.prodname_oauth_app %} 的 {% if currentVersion ver_lt "enterprise-server@3.1" %} 测试版 {% else %} 可选 {% endif %} 功能

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.apps.optional_feature_activation %}
