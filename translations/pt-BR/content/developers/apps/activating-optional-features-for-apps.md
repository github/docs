---
title: Ativar funcionalidades opcionais para os aplicativos
intro: 'Você pode testar novas funcionalidades opcionais para os seus {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_app %}s.'
redirect_from:
  - /developers/apps/activating-beta-features-for-apps
versions:
  free-pro-team: '*'
  github-ae: '*'
  enterprise-server: '>=2.22'
topics:
  - aplicativos github
---

{% warning %}

**Aviso:** {% if currentVersion ver_lt "enterprise-server@3.1" %} Beta de {% else %} Funcionalidades opcionais {% endif %} estão sujeitos a alterações.

{% endwarning %}

### Ativar {% if currentVersion ver_lt "enterprise-server@3.1" %} {% else %} funcionalidades opcionais de beta {% endif %} para {% data variables.product.prodname_github_apps %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
3. Selecione o
{% data variables.product.prodname_github_app %} para o qual você deseja habilitar {% if currentVersion ver_lt "enterprise-server@3.1" %} uma funcionalidade opcional de beta {% else %} {% endif %}.
{% data reusables.apps.optional_feature_activation %}

### Ativar {% if currentVersion ver_lt "enterprise-server@3.1" %} {% else %} funcionalidades opcionais de beta {% endif %} para {% data variables.product.prodname_oauth_app %}s

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.apps.optional_feature_activation %}
