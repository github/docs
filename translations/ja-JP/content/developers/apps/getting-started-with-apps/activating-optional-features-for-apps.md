---
title: アプリケーションのオプション機能を有効化する
intro: 'リリースされた新しいアプリケーションの機能を、{% data variables.product.prodname_github_apps %} および {% data variables.product.prodname_oauth_apps %} でテストできます。'
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
shortTitle: オプション機能の有効化
---

{% warning %}

**警告:** {% ifversion ghes < 3.1 %}ベータ版{% else %}オプション{% endif %}機能は変更される場合があります。

{% endwarning %}

## {% data variables.product.prodname_github_apps %} の{% ifversion ghes < 3.1 %}ベータ版{% else %}オプション{% endif %}機能を有効化する

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
3. {% ifversion ghes < 3.1 %}ベータ版{% else %}オプション{% endif %}機能を有効化する {% data variables.product.prodname_github_app %} を選択します。
{% data reusables.apps.optional_feature_activation %}

## {% data variables.product.prodname_oauth_apps %} の{% ifversion ghes < 3.1 %}ベータ版{% else %}オプション{% endif %}機能を有効化する

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.apps.optional_feature_activation %}
