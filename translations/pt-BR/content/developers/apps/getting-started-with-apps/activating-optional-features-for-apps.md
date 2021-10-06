---
title: Ativar funcionalidades opcionais para os aplicativos
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
shortTitle: Ativar funcionalidades opcionais
---

{% warning %}

**Aviso:** {% ifversion ghes < 3.1 %} Beta de {% else %} Funcionalidades opcionais {% endif %} estão sujeitos a alterações.

{% endwarning %}

## Ativar {% ifversion ghes < 3.1 %} {% else %} funcionalidades opcionais de beta {% endif %} para {% data variables.product.prodname_github_apps %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
3. Selecione o {% data variables.product.prodname_github_app %} que você deseja habilitar {% ifversion ghes < 3.1 %} um recurso beta {% else %} opcional {% endif %}.
{% data reusables.apps.optional_feature_activation %}

## Ativar {% ifversion ghes < 3.1 %} {% else %} funcionalidades opcionais de beta {% endif %} para {% data variables.product.prodname_oauth_apps %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.apps.optional_feature_activation %}
