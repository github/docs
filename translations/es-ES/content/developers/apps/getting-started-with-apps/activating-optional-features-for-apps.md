---
title: Activar las características opcionales para las apps
intro: 'Puedes probar las características nuevas para tus {% data variables.product.prodname_github_apps %} y {% data variables.product.prodname_oauth_app %}s.'
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

**Advertencia:** {% if currentVersion ver_lt "enterprise-server@3.1" %} Las características beta {% else %} Las características opcionales {% endif %} están sujetas a cambios.

{% endwarning %}

### Activar las características {% if currentVersion ver_lt "enterprise-server@3.1" %} beta {% else %} opcionales{% endif %} para {% data variables.product.prodname_github_apps %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
3. Selecciona la {% data variables.product.prodname_github_app %} par ala cual quieras habilitar {% if currentVersion ver_lt "enterprise-server@3.1" %} un beta {% else %} una característica opcional {% endif %}.
{% data reusables.apps.optional_feature_activation %}

### Activar características {% if currentVersion ver_lt "enterprise-server@3.1" %} beta {% else %} opcionales{% endif %} para las {% data variables.product.prodname_oauth_app %}s

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.apps.optional_feature_activation %}
