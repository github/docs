---
title: Activating optional features for apps
intro: 'You can test new optional features for your {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_app %}s.'
redirect_from:
  - /developers/apps/activating-beta-features-for-apps
  - /developers/apps/activating-optional-features-for-apps
versions:
  free-pro-team: '*'
  github-ae: '*'
  enterprise-server: '>=2.22'
topics:
  - GitHub Apps
---
{% warning %}

**Warning:** {% if currentVersion ver_lt "enterprise-server@3.1" %} Beta {% else %} Optional {% endif %} features are subject to change.

{% endwarning %}

### Activating {% if currentVersion ver_lt "enterprise-server@3.1" %} beta {% else %} optional {% endif %} features for {% data variables.product.prodname_github_apps %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
3. Select the {% data variables.product.prodname_github_app %} you want to enable {% if currentVersion ver_lt "enterprise-server@3.1" %} a beta {% else %} an optional {% endif %} feature for.
{% data reusables.apps.optional_feature_activation %}

### Activating {% if currentVersion ver_lt "enterprise-server@3.1" %} beta {% else %} optional {% endif %} features for {% data variables.product.prodname_oauth_app %}s

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.apps.optional_feature_activation %}
