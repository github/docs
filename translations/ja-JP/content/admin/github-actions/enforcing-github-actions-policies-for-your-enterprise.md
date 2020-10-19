---
title: Enforcing GitHub Actions policies for your enterprise
intro: 'Enterprise administrators can manage access to {% data variables.product.prodname_actions %} in an enterprise.'
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### About {% data variables.product.prodname_actions %} permissions for your enterprise

When you enable {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_server %}, it is enabled for all organizations in your enterprise. You can choose to disable {% data variables.product.prodname_actions %} for all organizations in your enterprise, or only allow specific organizations. You can also limit the use of public actions, so that people can only use local actions that exist in an organization.

### Managing {% data variables.product.prodname_actions %} permissions for your enterprise

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configuring the private fork policy for your enterprise

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
