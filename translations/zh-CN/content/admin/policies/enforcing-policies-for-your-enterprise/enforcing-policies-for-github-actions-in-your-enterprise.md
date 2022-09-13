---
title: 在企业中为 GitHub Actions 实施策略
intro: '您可以为企业组织内的 {% data variables.product.prodname_actions %} 执行策略，或者允许在每个组织中设置策略。'
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
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
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
ms.openlocfilehash: 21b2cfa73ef84ba6635f05b9fc25bb48df2b87cb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147400336'
---
{% data reusables.actions.enterprise-beta %}

## 关于企业中 {% data variables.product.prodname_actions %} 的策略

{% data variables.product.prodname_actions %} 可帮助您的企业成员在 {% data variables.product.product_name %} 上自动执行软件开发工作流程。 有关详细信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)”。

{% ifversion ghes %}如果启用 {% data variables.product.prodname_actions %}，则 {% data variables.product.product_location %} 上的任何{% else %}任何{% endif %} 组织都可以使用 {% data variables.product.prodname_actions %}。 你可以强制实施策略来控制 {% data variables.product.product_name %} 上的企业成员如何使用 {% data variables.product.prodname_actions %}。 默认情况下，组织所有者可以管理成员使用 {% data variables.product.prodname_actions %} 的方式。 有关详细信息，请参阅“[为组织禁用或限制 {% data variables.product.prodname_actions %}](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)”。

## 强制实施策略以限制企业中 {% data variables.product.prodname_actions %} 的使用

您可以选择对企业中的所有组织禁用 {% data variables.product.prodname_actions %}，或只允许特定的组织。 还可以限制公共操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}的使用，让用户只能使用企业中现有的本地操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. 在“Policies（策略）”下选择选项。

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {%- ifversion ghes or ghae %} {% note %}

   注意：若要启用对公共操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}的访问，首先必须配置 {% data variables.product.product_location %}，以连接到 {% data variables.product.prodname_dotcom_the_website %}。 有关详细信息，请参阅“[使用 GitHub Connect 启用对 GitHub.com 操作的自动访问](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”。

   {% endnote %} {%- endif %} {% ifversion actions-workflow-policy %}![启用、禁用或限制该企业帐户的操作](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png){%- else %}![启用、禁用或限制该企业帐户的操作](/assets/images/help/organizations/enterprise-actions-policy.png){%- endif %}
1. 单击“ **保存**”。

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. 在“策略”下，选择 {% data reusables.actions.policy-label-for-select-actions-workflows %} 并向列表添加所需操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}。
   {% ifversion actions-workflow-policy %}![将操作和可重用工作流添加到允许列表](/assets/images/help/organizations/enterprise-actions-policy-allow-list-with-workflows.png){%- elsif ghes or ghae %}![将操作添加到允许列表](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png){%- elsif ghae %}![将操作添加到允许列表](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png){%- endif %}

## 在企业中实施构件和日志保留策略

{% data variables.product.prodname_actions %} 可以存储构件和日志文件。 有关详细信息，请参阅“[下载工作流工件](/actions/managing-workflow-runs/downloading-workflow-artifacts)”。

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

## 在企业中实施复刻拉取请求的策略

您可以实施策略以控制当企业成员{% ifversion ghec %} 或外部协作者{% endif %}从复刻运行工作流程时 {% data variables.product.prodname_actions %} 对 {% data variables.product.product_location %} 的行为方式。

{% ifversion ghec %}

### 实施用于批准来自外部协作者的拉取请求的策略

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

### 在私有仓库中实施复刻拉取请求的策略

{% data reusables.actions.private-repository-forks-overview %}

如果为企业启用了某个策略，可以在单个组织或存储库中选择性禁用该策略。 如果为企业禁用了某个策略，则单个组织或存储库无法启用该策略。

{% data reusables.actions.private-repository-forks-options %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.private-repository-forks-configure %}

{% ifversion ghec or ghes or ghae %}

## 在企业中实施工作流程权限策略

{% data reusables.actions.workflow-permissions-intro %}

可以在企业、组织或存储库的设置中为 `GITHUB_TOKEN` 设置默认权限。 如果你在企业设置中选择受限制的选项作为默认值，这将防止在组织或存储库设置中选择更宽松的设置。

{% data reusables.actions.workflow-permissions-modifying %}

### 配置默认 `GITHUB_TOKEN` 权限

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}默认情况下，当你创建新企业时，`GITHUB_TOKEN` 仅对 `contents` 范围具有读取权限。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. 在“工作流权限”下，选择是要让 `GITHUB_TOKEN` 对所有范围具有读写访问权限，还是仅对 `contents` 范围具有读取访问。

   ![为此企业设置 GITHUB_TOKENN 权限](/assets/images/help/settings/actions-workflow-permissions-enterprise{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)
1. 单击“保存”以应用设置。

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### 阻止 {% data variables.product.prodname_actions %} 创建或批准拉取请求

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

默认情况下，创建新的企业时，不允许工作流创建或批准拉取请求。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. 在“工作流权限”下，使用“允许 GitHub Actions 创建和批准拉取请求”设置配置 `GITHUB_TOKEN` 是否可以创建和批准拉取请求。

   ![为此企业设置 GITHUB_TOKENN 权限](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)
1. 单击“保存”以应用设置。

{% endif %} {% endif %}

{% ifversion actions-cache-policy-apis %}

## 在企业中强制实施缓存存储策略

{% data reusables.actions.cache-default-size %} {% data reusables.actions.cache-eviction-process %}

但是，可以设置企业策略来自定义每个存储库的默认总缓存大小，以及存储库允许的最大总缓存大小。 例如，你可能希望每个存储库的默认总缓存大小为 5 GB，但也允许存储库管理员根据需要配置最大 15 GB 的总缓存大小。

对存储库具有管理员访问权限的人员可以将其存储库的总缓存大小设置为企业策略设置允许的最大缓存大小。

{% data variables.product.prodname_actions %} 缓存存储的策略设置目前只能使用 REST API 进行修改：

* 若要查看当前企业策略设置，请参阅“[获取企业的 GitHub Actions 缓存使用策略](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)”。
* 若要更改企业策略设置，请参阅“[设置企业的 GitHub Actions 缓存使用策略](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)”。

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
