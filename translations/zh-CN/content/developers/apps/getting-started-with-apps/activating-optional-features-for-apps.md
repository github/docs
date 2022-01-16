---
title: 激活应用程序的可选功能
intro: 'You can test new optional features for your {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}.'
redirect_from:
  - /developers/apps/activating-beta-features-for-apps
  - /developers/apps/activating-optional-features-for-apps
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
topics:
  - GitHub Apps
shortTitle: 激活可选功能
---

{% warning %}

**警告：** {% ifversion ghes < 3.1 %} 测试版 {% else %} 可选 {% endif %} 功能可能会变动。

{% endwarning %}

## 激活 {% data variables.product.prodname_github_apps %} 的 {% ifversion ghes < 3.1 %} 测试版 {% else %} 可选 {% endif %} 功能

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
3. 选择您要为其启用 {% ifversion ghes < 3.1 %} 测试版 {% else %} 可选 {% endif %} 功能的 {% data variables.product.prodname_github_app %}。
{% data reusables.apps.optional_feature_activation %}

## 激活 {% data variables.product.prodname_oauth_apps %} 的 {% ifversion ghes < 3.1 %} 测试版 {% else %} 可选 {% endif %} 功能

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.apps.optional_feature_activation %}
