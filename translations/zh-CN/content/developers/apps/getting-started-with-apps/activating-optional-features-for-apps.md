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

**Warning:**  Optional features are subject to change.

{% endwarning %}

## Activating optional features for {% data variables.product.prodname_github_apps %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
3. Select the {% data variables.product.prodname_github_app %} you want to enable an optional feature for.
{% data reusables.apps.optional_feature_activation %}

## Activating optional features for {% data variables.product.prodname_oauth_apps %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.apps.optional_feature_activation %}
