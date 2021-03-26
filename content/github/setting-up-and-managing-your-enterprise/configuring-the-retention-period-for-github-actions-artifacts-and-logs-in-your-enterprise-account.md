---
title: Configuring the retention period for GitHub Actions artifacts and logs in your enterprise account
intro: 'Enterprise owners can configure the retention period for {% data variables.product.prodname_actions %} artifacts and logs in an enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
topics:
  - enterprise
---

{% data reusables.actions.about-artifact-log-retention %}

## Setting the retention period for an enterprise

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
