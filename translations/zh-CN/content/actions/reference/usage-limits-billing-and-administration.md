---
title: 'Usage limits, billing, and administration'
intro: 'There are usage limits for {% data variables.product.prodname_actions %} workflows. Usage charges apply to repositories that go beyond the amount of free minutes and storage for a repository.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于 {% data variables.product.prodname_actions %} 的计费

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.github-actions.actions-billing %} 更多信息请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)”。
{% else %}
GitHub Actions usage is free for
{% data variables.product.prodname_ghe_server %} that use self-hosted runners.
{% endif %}

### 使用限制

{% if currentVersion == "free-pro-team@latest" %}
There are some limits on
{% data variables.product.prodname_actions %} usage when using {% data variables.product.prodname_dotcom %}-hosted runners. 这些限制可能会有变动。

{% note %}

**Note:** For self-hosted runners, different usage limits apply. 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”。

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
Usage limits apply to self-hosted runners. 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 使用策略
In addition to the usage limits, you must ensure that you use

{% data variables.product.prodname_actions %} within the [GitHub Terms of Service](/articles/github-terms-of-service/). 有关 {% data variables.product.prodname_actions %} 特定条款的更多信息，请参阅 [GitHub 附加产品条款](/github/site-policy/github-additional-product-terms#a-actions-usage)。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Artifact and log retention policy

You can configure the artifact and log retention period for your repository, organization, or enterprise account.

{% data reusables.actions.about-artifact-log-retention %}

更多信息请参阅：

- [Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your repository](/github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)
- [Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your organization](/github/setting-up-and-managing-organizations-and-teams/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)
- [Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your enterprise](/github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account)
{% endif %}

### Disabling or limiting {% data variables.product.prodname_actions %} for your repository or organization

{% data reusables.github-actions.disabling-github-actions %}

更多信息请参阅：
- "[Disabling or limiting {% data variables.product.prodname_actions %} for a repository](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)"
- "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)"{% if currentVersion == "free-pro-team@latest" %}
- "[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account)" for {% data variables.product.prodname_ghe_cloud %}{% endif %}

### Disabling and enabling workflows

You can enable and disable individual workflows in your repository on {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

For more information, see "[Disabling and enabling a workflow](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)."
