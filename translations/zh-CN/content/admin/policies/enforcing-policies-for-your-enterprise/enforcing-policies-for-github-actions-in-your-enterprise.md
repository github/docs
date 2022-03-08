---
title: Enforcing policies for GitHub Actions in your enterprise
intro: 'You can enforce policies for {% data variables.product.prodname_actions %} within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_actions %} in an enterprise.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: GitHub Actions policies
---

{% data reusables.actions.enterprise-beta %}

## 关于企业中 {% data variables.product.prodname_actions %} 的策略

{% data variables.product.prodname_actions %} helps members of your enterprise automate software development workflows on {% data variables.product.product_name %}. For more information, see "[Understanding {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)."

{% ifversion ghes %}If you enable {% data variables.product.prodname_actions %}, any{% else %}Any{% endif %} organization on {% data variables.product.product_location %} can use {% data variables.product.prodname_actions %}. 您可以执行策略来控制 {% data variables.product.product_name %} 上的企业成员如何使用 {% data variables.product.prodname_actions %}。 By default, organization owners can manage how members use {% data variables.product.prodname_actions %}. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)."

## Enforcing a policy to restrict the use of actions in your enterprise

您可以选择对企业中的所有组织禁用 {% data variables.product.prodname_actions %}，或只允许特定的组织。 您还可以限制公共操作的使用，以使人们只能使用您的企业中存在的本地操作。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}
1. 单击 **Save（保存）**。

{% ifversion ghec or ghes or ghae %}

### Allowing select actions to run

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. 在 **Policies（策略）**下，选择 **Allow select actions（允许选择操作）**并将所需操作添加到列表中。
   {%- ifversion ghes or ghae-issue-5094 %}
   ![添加操作到允许列表](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)
   {%- elsif ghae %}
   ![添加操作到允许列表](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png)
   {%- endif %}
{% endif %}

{% ifversion ghec or ghes or ghae %}

## Enforcing a policy for artifact and log retention in your enterprise

{% data variables.product.prodname_actions %} can store artifact and log files. For more information, see "[Downloading workflow artifacts](/actions/managing-workflow-runs/downloading-workflow-artifacts)."

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.change-retention-period-for-artifacts-logs  %}

{% endif %}

## Enforcing a policy for fork pull requests in your enterprise

You can enforce policies to control how {% data variables.product.prodname_actions %} behaves for {% data variables.product.product_location %} when members of your enterprise{% ifversion ghec %} or outside collaborators{% endif %} run workflows from forks.

{% ifversion ghec %}

### Enforcing a policy for approval of pull requests from outside collaborators

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

### Enforcing a policy for fork pull requests in private repositories

{% data reusables.actions.private-repository-forks-overview %}

If a policy is enabled for an enterprise, the policy can be selectively disabled in individual organizations or repositories. If a policy is disabled for an enterprise, individual organizations or repositories cannot enable it.

{% data reusables.actions.private-repository-forks-options %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.private-repository-forks-configure %}

{% endif %}

{% ifversion ghec or ghes > 3.1 or ghae %}

## Enforcing a policy for workflow permissions in your enterprise

{% data reusables.actions.workflow-permissions-intro %}

您可以在企业、组织或仓库的设置中为 `GITHUB_TOKEN` 设置默认权限。 如果您在企业设置中选择受限制的选项为默认值，这将防止在组织或仓库设置中选择更多的允许设置。

{% data reusables.actions.workflow-permissions-modifying %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. 在 **Workflow permissions（工作流程权限）**下，选择您是否想要 `GITHUB_TOKENN` 读写所有范围限， 或者只读`内容`范围。 ![为此企业设置 GITHUB_TOKENN 权限](/assets/images/help/settings/actions-workflow-permissions-enterprise.png)
1. 单击 **Save（保存）**以应用设置。

{% endif %}
