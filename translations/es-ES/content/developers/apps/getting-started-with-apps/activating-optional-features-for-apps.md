---
title: Activar las características opcionales para las apps
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
shortTitle: Activar las características opcionales
---

{% warning %}

**Advertencia:** {% ifversion ghes < 3.1 %} Las características beta {% else %} Las características opcionales {% endif %} están sujetas a cambios.

{% endwarning %}

## Activar las características {% ifversion ghes < 3.1 %} beta {% else %} opcionales{% endif %} para {% data variables.product.prodname_github_apps %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
3. Selecciona la {% data variables.product.prodname_github_app %} par ala cual quieras habilitar {% ifversion ghes < 3.1 %} un beta {% else %} una característica opcional {% endif %}.
{% data reusables.apps.optional_feature_activation %}

## Activar las características {% ifversion ghes < 3.1 %} beta {% else %} opcionales{% endif %} para {% data variables.product.prodname_oauth_apps %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.apps.optional_feature_activation %}
