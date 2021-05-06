---
title: アプリケーションのオプション機能を有効化する
intro: 'リリースされた新しいアプリケーションの機能を、{% data variables.product.prodname_github_apps %} および {% data variables.product.prodname_oauth_app %} でテストできます。'
redirect_from:
  - /developers/apps/activating-beta-features-for-apps
versions:
  free-pro-team: '*'
  github-ae: '*'
  enterprise-server: '>=2.22'
topics:
  - GitHub Apps
---

{% warning %}

**警告:** {% if currentVersion ver_lt "enterprise-server@3.1" %}ベータ版{% else %}オプション{% endif %}機能は変更される場合があります。

{% endwarning %}

### {% data variables.product.prodname_github_apps %} の{% if currentVersion ver_lt "enterprise-server@3.1" %}ベータ版{% else %}オプション{% endif %}機能を有効化する

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
3. {% if currentVersion ver_lt "enterprise-server@3.1" %}ベータ版{% else %}オプション{% endif %}機能を有効化する {% data variables.product.prodname_github_app %} を選択します。
{% data reusables.apps.optional_feature_activation %}

### {% data variables.product.prodname_oauth_app %} の{% if currentVersion ver_lt "enterprise-server@3.1" %}ベータ版{% else %}オプション{% endif %}機能を有効化する

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.apps.optional_feature_activation %}
