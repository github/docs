---
title: '使用限制、计费和管理'
intro: '{% data variables.product.prodname_actions %} 工作流程有使用限制。 使用费适用于超出仓库免费分钟数和存储空间量的仓库。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - 计费，帐单
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 关于 {% data variables.product.prodname_actions %} 的计费

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.github-actions.actions-billing %} 更多信息请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)”。
{% else %}
GitHub Actions 使用对
使用自托管运行器的 {% data variables.product.prodname_ghe_server %} 免费。
{% endif %}

### 使用限制

{% if currentVersion == "free-pro-team@latest" %}
当
使用 {% data variables.product.prodname_dotcom %} 托管的运行器时，{% data variables.product.prodname_actions %} 的使用有一些限制。 这些限制可能会有变动。

{% note %}

**注：**对于自托管的运行器，适用不同的使用限制。 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”。

{% endnote %}

- **作业执行时间** - 工作流程中的每个作业最多可以运行 6 个小时。 如果作业达到此限制，该作业将会终止而无法完成。
{% data reusables.github-actions.usage-workflow-run-time %}
{% data reusables.github-actions.usage-api-requests %}
- **并发作业** - 您的帐户中可并发运行的作业数量，具体取决于您的 GitHub 计划，如下表所示。 如果超出，任何额外的作业都会排队。

  | GitHub 计划 | 同时运行的作业总数 | MacOS 作业同时运行的最大数量 |
  | --------- | --------- | ----------------- |
  | 免费        | 20        | 5                 |
  | Pro       | 40        | 5                 |
  | 团队        | 60        | 5                 |
  | 企业        | 180       | 50                |
- **作业矩阵** - {% data reusables.github-actions.usage-matrix-limits %}
{% else %}
使用限制适用于自托管运行器。 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 使用策略
除了使用限制外，您还必须确保按照

[GitHub 服务条款](/articles/github-terms-of-service/)使用 {% data variables.product.prodname_actions %}。 有关 {% data variables.product.prodname_actions %} 特定条款的更多信息，请参阅 [GitHub 附加产品条款](/github/site-policy/github-additional-product-terms#a-actions-usage)。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### 构件和日志保留策略

您可以为仓库、组织或企业帐户配置构件和日志保留期。

{% data reusables.actions.about-artifact-log-retention %}

更多信息请参阅：

- [为仓库中构件和日志的 {% data variables.product.prodname_actions %} 配置保留期](/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)
- [为组织中构件和日志的 {% data variables.product.prodname_actions %} 配置保留期](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)
- [为企业中构件和日志的 {% data variables.product.prodname_actions %} 配置保留期](/github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account)
{% endif %}

### 禁用或限制仓库或组织的 {% data variables.product.prodname_actions %}

{% data reusables.github-actions.disabling-github-actions %}

更多信息请参阅：
- "[对仓库禁用或限制 {% data variables.product.prodname_actions %}](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)"
- "[对组织禁用或限制 {% data variables.product.prodname_actions %}](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"{% if currentVersion == "free-pro-team@latest" %}
- "[在企业帐户中实施 {% data variables.product.prodname_ghe_cloud %} 的 {% data variables.product.prodname_actions %} 策略](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)"{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### 禁用和启用工作流程

您可以在 {% data variables.product.prodname_dotcom %} 上启用和禁用仓库中的个别工作流程。

{% data reusables.actions.scheduled-workflows-disabled %}

更多信息请参阅“[禁用和启用工作流程](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)。
{% endif %}
