---
title: 禁用或限制组织的 GitHub Actions
intro: 组织所有者可禁用、启用和限制组织的 GitHub Actions。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Disable or limit actions
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b72b1e412906b1a2ec7520a9c939d5adefee7dd7
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147064680'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于组织的 {% data variables.product.prodname_actions %} 权限

{% data reusables.actions.disabling-github-actions %} 有关 {% data variables.product.prodname_actions %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)”。

您可以对组织中的所有仓库启用 {% data variables.product.prodname_actions %}。 {% data reusables.actions.enabled-actions-description %} 你可以对组织中的所有存储库禁用 {% data variables.product.prodname_actions %}。 {% data reusables.actions.disabled-actions-description %}

或者，可以对组织中的所有存储库启用 {% data variables.product.prodname_actions %}，但限制工作流可以运行的操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}。

## 管理组织的 {% data variables.product.prodname_actions %} 权限

可以选择对组织中的所有存储库禁用 {% data variables.product.prodname_actions %}，或仅允许特定存储库。 还可以限制公共操作{% ifversion actions-workflow-policy %} 和可重用工作流{% endif %}的使用，让用户只能使用{% ifversion ghec or ghes or ghae %}企业{% else %}组织{% endif %}中现有的本地操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}。

{% note %}

注意：如果组织由具有替代策略的企业管理，则可能无法管理这些设置。 有关详细信息，请参阅“[在企业中强制实施 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)”。

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. 在“Policies（策略）”下，选择一个选项。

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![为此组织设置操作策略](/assets/images/help/organizations/actions-policy-with-workflows.png) {%- else %} ![为此组织设置操作策略](/assets/images/help/organizations/actions-policy.png) {%- endif %}
1. 单击“ **保存**”。

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. 在“策略”下，选择 {% data reusables.actions.policy-label-for-select-actions-workflows %} 并向列表添加所需操作 {% ifversion actions-workflow-policy %} 和可重用工作流 {% endif %}。

   {% ifversion actions-workflow-policy %} ![将操作和可重用工作流添加到允许列表](/assets/images/help/organizations/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![将操作添加到允许列表](/assets/images/help/organizations/actions-policy-allow-list.png) {%- else %} ![将操作添加到允许列表](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png) {%- endif %}
1. 单击“ **保存**”。

{% ifversion fpt or ghec %}
## 配置公共复刻工作流程所需的批准

{% data reusables.actions.workflow-run-approve-public-fork %}

您可以使用以下程序为组织配置此行为。 修改此设置会覆盖企业级别的配置集。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## 为私有仓库复刻启用工作流程

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}如果对企业禁用了某个策略，则无法对组织启用该策略。{% endif %} 如果对组织禁用了某个策略，则无法对仓库启用该策略。 如果组织启用了某个策略，则可以对个别仓库禁用该策略。

{% data reusables.actions.private-repository-forks-options %}

### 为组织配置私有复刻策略

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %} {% endif %}

## 为组织设置 `GITHUB_TOKEN` 的权限

{% data reusables.actions.workflow-permissions-intro %}

可以在组织或存储库的设置中为 `GITHUB_TOKEN` 设置默认权限。 如果你在组织设置中选择受限制的选项为默认值，那么在组织内的存储库设置中也会选择相同选项，并禁用允许选项。 如果你的组织属于 {% data variables.product.prodname_enterprise %} 帐户，并且在企业设置中选择了更受限制的默认值，则你将无法在组织设置中选择更宽松的默认值。

{% data reusables.actions.workflow-permissions-modifying %}

### 配置默认 `GITHUB_TOKEN` 权限

{% ifversion allow-actions-to-approve-pr-with-ent-repo  %} 默认情况下，当你创建新组织时，`GITHUB_TOKEN` 仅对 `contents` 范围具有读取权限。
{% endif %}

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. 在“工作流权限”下，选择是要让 `GITHUB_TOKEN` 对所有范围具有读写访问权限，还是仅对 `contents` 范围具有读取访问。

   ![为此组织设置 GITHUB_TOKENN 权限](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. 单击“保存”以应用设置。

{% ifversion allow-actions-to-approve-pr %}
### 防止 {% data variables.product.prodname_actions %} {% ifversion allow-actions-to-approve-pr-with-ent-repo %}创建或{% endif %}审批拉取请求

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

默认情况下，创建新组织时，不允许工作流{% ifversion allow-actions-to-approve-pr-with-ent-repo %}创建或{% endif %}审批拉取请求。

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. 在“工作流权限”下，使用“允许 GitHub Actions {% ifversion allow-actions-to-approve-pr-with-ent-repo %}创建和{% endif %}审批拉取请求”设置，以配置 `GITHUB_TOKEN` 是否可以{% ifversion allow-actions-to-approve-pr-with-ent-repo %}创建和{% endif %}审批拉取请求。

   ![为此组织设置 GITHUB_TOKEN 拉取请求审批权限](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. 单击“保存”以应用设置。

{% endif %}
