---
title: 为组织设置个人访问令牌策略
intro: '组织所有者可以控制是否允许{% data variables.product.pat_v2 %}和{% data variables.product.pat_v1_plural %}，并且可以要求对{% data variables.product.pat_v2 %}进行审批。'
versions:
  feature: pat-v2
shortTitle: Set a token policy
ms.openlocfilehash: 6e05b65ae6814ef9101ed91fdd4a68435e4ba291
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106467'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## 限制{% data variables.product.pat_v2 %}的访问

组织所有者可以阻止{% data variables.product.pat_v2 %}访问组织拥有的资源。 {% data variables.product.pat_v2_caps %}仍可以读取组织中的公共资源。 此设置仅控制{% data variables.product.pat_v2 %}的访问，而不控制{% data variables.product.pat_v1_plural %}的访问。 有关限制{% data variables.product.pat_v1_plural %}的访问的详细信息，请参阅此页上的“[限制{% data variables.product.pat_v1_plural %}的访问](#restricting-access-by-personal-access-tokens-classic)”。

{% ifversion ghec or ghes or ghae %} 如果你的组织归企业所有，并且企业所有者已限制{% data variables.product.pat_v2 %}的访问，那么你将无法替代组织中的策略。 有关详细信息，请参阅“[在企业中强制实施{% data variables.product.pat_generic %}的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)”。{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在左侧栏中的“{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}”下，单击“设置” 。
1. 在“{% data variables.product.pat_v2_caps %}”下，选择满足需求的选项：
   - **允许通过{% data variables.product.pat_v2 %}进行访问**：{% data variables.product.pat_v2_caps %} 可以访问组织拥有的资源。
   - **限制通过{% data variables.product.pat_v2 %}进行访问**：{% data variables.product.pat_v2_caps %} 无法访问组织拥有的资源。 由{% data variables.product.pat_v2 %}创建的 SSH 密钥将继续有效。
1. 单击“ **保存**”。

## 为{% data variables.product.pat_v2 %}实施审批策略

组织所有者可以要求对可以访问组织的每个{% data variables.product.pat_v2 %}进行审批。 {% data variables.product.pat_v2_caps %}仍可以读取组织中的公共资源，无需审批。 由组织所有者创建的{% data variables.product.pat_v2_caps %}不需要审批。

{% ifversion ghec or ghes or ghae %} 如果组织归企业所有，并且企业所有者为{% data variables.product.pat_v2 %}设置了审批策略，那么你将无法替代组织中的策略。 有关详细信息，请参阅“[在企业中强制实施{% data variables.product.pat_generic %}的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)”。{% endif %}

{% note %}

注意：只有{% data variables.product.pat_v2 %}需要审批，{% data variables.product.pat_v1_plural %}不需要审批。 除非组织已限制{% data variables.product.pat_v1_plural %}的访问，否则无需事先批准，任何{% data variables.product.pat_v1 %}都可以访问组织资源。 有关详细信息，请参阅此页面上的“[限制{% data variables.product.pat_v1_plural %}的访问](#restricting-access-by-personal-access-tokens-classic)”。

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在左侧栏中的“{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}”下，单击“设置” 。
1. 在“需要批准{% data variables.product.pat_v2 %}”下，选择满足需求的选项：
   - **需要管理员批准**：组织所有者必须审批可以访问组织的每个{% data variables.product.pat_v2 %}。 由组织所有者创建的{% data variables.product.pat_v2_caps %}不需要审批。
   - **不需要管理员批准**：由组织成员创建的{% data variables.product.pat_v2_caps %}可以在未经事先批准的情况下访问组织中的资源。
1. 单击“ **保存**”。

## 限制{% data variables.product.pat_v1_plural %}的访问

组织所有者可以阻止{% data variables.product.pat_v1_plural %}访问组织拥有的资源。 {% data variables.product.pat_v1_caps_plural %}仍可以读取组织中的公共资源。 此设置仅控制{% data variables.product.pat_v1_plural %}的访问，而不控制{% data variables.product.pat_v2 %}的访问。 有关限制{% data variables.product.pat_v2 %}的访问的详细信息，请参阅此页上的“[限制{% data variables.product.pat_v2 %}的访问](#restricting-access-by-fine-grained-personal-access-tokens)”。

{% ifversion ghec or ghes or ghae %} 如果你的组织归企业所有，并且企业所有者已限制{% data variables.product.pat_v1_plural %}的访问，那么你将无法替代组织中的策略。 有关详细信息，请参阅“[在企业中强制实施{% data variables.product.pat_generic %}的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)”。{% endif %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在左侧栏中的“{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}”下，单击“设置” 。
1. 在“{% data variables.product.pat_v1_caps %}”下，选择满足需求的选项：
   - **允许通过{% data variables.product.pat_v1_plural %}进行访问**：{% data variables.product.pat_v1_caps_plural %}可以访问组织拥有的资源。
   - **限制通过{% data variables.product.pat_v1_plural %}进行访问**：{% data variables.product.pat_v1_caps_plural %}无法访问组织拥有的资源。 由{% data variables.product.pat_v1_plural %}创建的 SSH 密钥将继续有效。
1. 单击“保存” 。
