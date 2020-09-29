---
title: 禁用或限制仓库的 GitHub 操作
intro: '仓库所有者可禁用、启用和限制特定仓库的 {% data variables.product.prodname_actions %}。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于仓库的 {% data variables.product.prodname_actions %} 权限

{% data reusables.github-actions.disabling-github-actions %} 有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)”。

您可以对您的仓库启用 {% data variables.product.prodname_actions %}。 {% data reusables.github-actions.enabled-actions-description %} 您可以对您的仓库完全禁用 {% data variables.product.prodname_actions %}。 {% data reusables.github-actions.disabled-actions-description %}

此外，您可以在您的仓库中启用 {% data variables.product.prodname_actions %}，但限制工作流程可以运行的操作。 {% data reusables.github-actions.enabled-local-github-actions %}

### 管理仓库的 {% data variables.product.prodname_actions %} 权限

{% note %}

**注：**如果您的组织有覆盖策略或由具有覆盖策略的企业帐户管理，则可能无法管理这些设置。 更多信息请参阅“[禁用或限制组织的 {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)”或“[在企业帐户中实施 {% data variables.product.prodname_actions %} 策略](/github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account)”。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
4. 在“Actions permissions（操作权限）”下，选择一个选项。 ![启用、禁用或限制此仓库的操作](/assets/images/help/repository/enable-repo-actions.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Enabling workflows for private repository forks

{% data reusables.github-actions.private-repository-forks-overview %}

#### Configuring the private fork policy for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
