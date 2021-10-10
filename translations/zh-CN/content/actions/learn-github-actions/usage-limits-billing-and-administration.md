---
title: 使用限制、计费和管理
intro: '{% data variables.product.prodname_actions %} 工作流程有使用限制。 使用费适用于超出仓库免费分钟数和存储空间量的仓库。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Billing
shortTitle: 工作流程计费和限制
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于 {% data variables.product.prodname_actions %} 的计费

{% ifversion fpt %}
{% data reusables.github-actions.actions-billing %} 更多信息请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。
{% else %}
GitHub Actions usage is free for {% data variables.product.prodname_ghe_server %}s that use self-hosted runners.
{% endif %}

## 使用限制

{% ifversion fpt %}
There are some limits on {% data variables.product.prodname_actions %} usage when using {% data variables.product.prodname_dotcom %}-hosted runners. 这些限制可能会有变动。

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
{% data reusables.github-actions.usage-workflow-queue-limits %}

{% else %}
使用限制适用于自托管运行器。 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”。
{% endif %}

{% ifversion fpt %}
## 使用策略

除了使用限制外，还必须确保使用 [GitHub 服务条款](/articles/github-terms-of-service/) 中的 {% data variables.product.prodname_actions %}。 有关 {% data variables.product.prodname_actions %} 特定条款的更多信息，请参阅 [GitHub 附加产品条款](/github/site-policy/github-additional-product-terms#a-actions-usage)。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 %}
## Billing for reusable workflows

If you reuse a workflow, billing is always associated with the caller workflow. For more information see, "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."
{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae %}
## 构件和日志保留策略

您可以为仓库、组织或企业帐户配置构件和日志保留期。

{% data reusables.actions.about-artifact-log-retention %}

更多信息请参阅：

- "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)"
- "[Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your organization](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)"
- "[Configuring the retention period for {% data variables.product.prodname_actions %} for artifacts and logs in your enterprise](/github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account)"
{% endif %}

## 禁用或限制仓库或组织的 {% data variables.product.prodname_actions %}

{% data reusables.github-actions.disabling-github-actions %}

更多信息请参阅：
- "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)"
- "[对组织禁用或限制 {% data variables.product.prodname_actions %}](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"{% ifversion fpt %}
- "[在企业帐户中实施 {% data variables.product.prodname_ghe_cloud %} 的 {% data variables.product.prodname_actions %} 策略](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)"{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae %}
## 禁用和启用工作流程

您可以在 {% data variables.product.prodname_dotcom %} 上启用和禁用仓库中的个别工作流程。

{% data reusables.actions.scheduled-workflows-disabled %}

更多信息请参阅“[禁用和启用工作流程](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)。
{% endif %}
