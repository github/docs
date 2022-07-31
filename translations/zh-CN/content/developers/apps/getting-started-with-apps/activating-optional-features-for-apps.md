---
title: 激活应用程序的可选功能
intro: '您可以测试 {% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_apps %} 的新可选功能。'
redirect_from:
  - /developers/apps/activating-beta-features-for-apps
  - /developers/apps/activating-optional-features-for-apps
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: 激活可选功能
---

{% warning %}

**警告：**可选功能可能会更改。

{% endwarning %}

## 激活 {% data variables.product.prodname_github_apps %} 的可选功能

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
3. 选择您要为其启用可选功能的 {% data variables.product.prodname_github_app %}。
{% data reusables.apps.optional_feature_activation %}

## 激活 {% data variables.product.prodname_oauth_apps %} 的可选功能

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.apps.optional_feature_activation %}
