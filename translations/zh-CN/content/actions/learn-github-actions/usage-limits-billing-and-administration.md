---
title: 使用限制、计费和管理
intro: '{% data variables.product.prodname_actions %} 工作流程有使用限制。 使用费适用于超出仓库免费分钟数和存储空间量的仓库。'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Billing
shortTitle: 工作流程计费和限制
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于 {% data variables.product.prodname_actions %} 的计费

{% data reusables.repositories.about-github-actions %} For more information, see "[Understanding {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}."{% elsif ghes or ghec %}" and "[About {% data variables.product.prodname_actions %} for enterprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."{% endif %}

{% ifversion fpt or ghec %}
{% data reusables.actions.actions-billing %} 更多信息请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。
{% else %}
GitHub Actions usage is free for {% data variables.product.prodname_ghe_server %} instances that use self-hosted runners. 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”。
{% endif %}


{% ifversion fpt or ghec %}

## 可用性

{% data variables.product.prodname_actions %} is available on all {% data variables.product.prodname_dotcom %} products, but {% data variables.product.prodname_actions %} is not available for private repositories owned by accounts using legacy per-repository plans. {% data reusables.gated-features.more-info %}

{% endif %}

## 使用限制

{% ifversion fpt or ghec %}
There are some limits on {% data variables.product.prodname_actions %} usage when using {% data variables.product.prodname_dotcom %}-hosted runners. 这些限制可能会有变动。

{% note %}

**注：**对于自托管的运行器，适用不同的使用限制。 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”。

{% endnote %}

- **作业执行时间** - 工作流程中的每个作业最多可以运行 6 个小时。 如果作业达到此限制，该作业将会终止而无法完成。
{% data reusables.actions.usage-workflow-run-time %}
{% data reusables.actions.usage-api-requests %}
- **并发作业** - 您的帐户中可并发运行的作业数量，具体取决于您的 GitHub 计划，如下表所示。 如果超出，任何额外的作业都会排队。

  | GitHub 计划 | 同时运行的作业总数 | MacOS 作业同时运行的最大数量 |
  | --------- | --------- | ----------------- |
  | 免费        | 20        | 5                 |
  | Pro       | 40        | 5                 |
  | 团队        | 60        | 5                 |
  | 企业        | 180       | 50                |
- **作业矩阵** - {% data reusables.actions.usage-matrix-limits %}
{% data reusables.actions.usage-workflow-queue-limits %}

{% else %}
使用限制适用于自托管运行器。 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)”。
{% endif %}

{% ifversion fpt or ghec %}
## 使用策略

除了使用限制外，还必须确保使用 [GitHub 服务条款](/free-pro-team@latest/github/site-policy/github-terms-of-service/) 中的 {% data variables.product.prodname_actions %}。 有关 {% data variables.product.prodname_actions %} 特定条款的更多信息，请参阅 [GitHub 附加产品条款](/free-pro-team@latest/github/site-policy/github-additional-product-terms#a-actions-usage)。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}
## Billing for reusable workflows

{% data reusables.actions.reusable-workflows-ghes-beta %}

If you reuse a workflow, billing is always associated with the caller workflow. Assignment of {% data variables.product.prodname_dotcom %}-hosted runners is always evaluated using only the caller's context. The caller cannot use {% data variables.product.prodname_dotcom %}-hosted runners from the called repository.

For more information see, "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."
{% endif %}

## 构件和日志保留策略

您可以为仓库、组织或企业帐户配置构件和日志保留期。

{% data reusables.actions.about-artifact-log-retention %}

更多信息请参阅：

- “[管理仓库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)”
- “[配置 {% data variables.product.prodname_actions %} 构件和日志在您的组织中的保留期](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)”
- "[在企业中执行 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## 禁用或限制仓库或组织的 {% data variables.product.prodname_actions %}

{% data reusables.actions.disabling-github-actions %}

更多信息请参阅：
- “[管理仓库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)”
- "[对组织禁用或限制 {% data variables.product.prodname_actions %}](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"
- "[在企业中执行 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## 禁用和启用工作流程

您可以在 {% data variables.product.prodname_dotcom %} 上启用和禁用仓库中的个别工作流程。

{% data reusables.actions.scheduled-workflows-disabled %}

更多信息请参阅“[禁用和启用工作流程](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)。
