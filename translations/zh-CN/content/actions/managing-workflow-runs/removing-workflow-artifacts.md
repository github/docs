---
title: 删除工作流程构件
intro: '您可以在构件于 {% data variables.product.product_name %} 上过期之前删除它们，回收已经使用的 {% data variables.product.prodname_actions %} 存储。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove workflow artifacts
ms.openlocfilehash: e5fe2bb21f72785f55d22fffd9ba46420d791fce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199800'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 删除构件

{% warning %}

警告：工件一旦删除，便无法恢复。

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. 在“工件”下，单击要删除的工件旁边的 {% octicon "trash" aria-label="The trash icon" %} 。
    
    ![删除构件下拉菜单](/assets/images/help/repository/actions-delete-artifact-updated.png)
    

## 设置构件的保留期

可在仓库、组织和企业级配置构件和日志的保留期。 有关详细信息，请参阅{% ifversion fpt or ghec or ghes %}“[使用情况限制、计费和管理](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)”。{% elsif ghae %}“[为存储库管理 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)”、“[为组织中的工件和日志配置 {% data variables.product.prodname_actions %} 的保留期](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)”或“[为企业中的 {% data variables.product.prodname_actions %} 强制实施政策](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)”。{% endif %}

也可以在工作流中使用 `actions/upload-artifact` 操作自定义个别工件的保留期。 有关详细信息，请参阅“[将工作流数据存储为工件](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period)”。

## 查找构件的到期日期

您可以使用 API 确认构件计划删除的日期。 有关详细信息，请参阅“[列出存储库的工件](/rest/reference/actions#artifacts)返回的 `expires_at` 值”。
