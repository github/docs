---
title: Configurar el periodo de retención de los artefactos y las bitácoras de las GitHub Actions en tu cuenta empresarial
intro: 'Los propietarios de las empresas pueden configurar el periodo de retención para los artefactos y las bitácoras de las {% data variables.product.prodname_actions %} en una cuenta empresarial.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
topics:
  - empresa
---

{% data reusables.actions.about-artifact-log-retention %}

## Configurar el periodo de retención para una empresa

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
