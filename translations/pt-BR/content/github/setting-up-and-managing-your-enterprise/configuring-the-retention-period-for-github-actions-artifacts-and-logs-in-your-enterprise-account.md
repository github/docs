---
title: Configurar o período de retenção para artefatos e registros do GitHub Actions na sua conta corporativa
intro: 'Os proprietários de empresas podem configurar o período de retenção para artefatos e registros de {% data variables.product.prodname_actions %} de uma conta corporativa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
topics:
  - Enterprise
---

{% data reusables.actions.about-artifact-log-retention %}

## Definir o período de retenção para uma empresa

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
