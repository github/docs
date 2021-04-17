---
title: Enterprise アカウント内の GitHub Actions アーティファクトとログの保持期間を設定する
intro: 'Enterprise オーナーは、{% data variables.product.prodname_actions %} アーティファクトの保持期間を設定して Enterprise アカウントにログインできます。'
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

## Enterprise の保持期間を設定する

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
