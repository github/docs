---
title: 在企业中为个人访问令牌实施策略
intro: '企业所有者可以控制是否允许 {% data variables.product.pat_v2 %} 和 {% data variables.product.pat_v1_plural %}，并且可以要求批准 {% data variables.product.pat_v2 %}。'
versions:
  feature: pat-v2-enterprise
shortTitle: '{% data variables.product.pat_generic_caps %} policies'
ms.openlocfilehash: 6252f7ac67fe77cbe20ab85ff2cbd6f04ac17905
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107003'
---
{% note %}

注意：{% data reusables.user-settings.pat-v2-beta %}

在 beta 版期间，企业必须选择加入 {% data variables.product.pat_v2 %}。 如果企业尚未选择加入，执行以下步骤时，系统会提示你选择加入并设置策略。

即使企业未选择加入 {% data variables.product.pat_v2 %}，企业拥有的组织仍然可以选择加入。 即使企业未选择加入 {% data variables.product.pat_v2 %}，所有用户（包括 {% data variables.product.prodname_emus %}）都可以创建 {% data variables.product.pat_v2 %}，它可以访问用户拥有的资源（例如在其帐户下创建的存储库）。

{% endnote %}

## 限制 {% data variables.product.pat_v2 %} 的访问

企业所有者可以阻止 {% data variables.product.pat_v2 %} 访问企业拥有的专用资源和内部资源。 {% data variables.product.pat_v2_caps %} 仍可以访问组织中的公共资源。 此设置仅控制 {% data variables.product.pat_v2 %} 的访问，而不限制 {% data variables.product.pat_v1_plural %} 的访问。 详细了解限制 {% data variables.product.pat_v1_plural %} 的访问，请参阅此页上的“[限制 {% data variables.product.pat_v1_plural %} 的访问](#restricting-access-by-personal-access-tokens-classic)”。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. 单击 {% octicon "law" aria-label="The law icon" %}“策略”下的“组织” 。
1. 选择“通过 {% data variables.product.pat_v2 %} 的限制访问”下满足需求的选项：
   - 允许组织配置访问要求：每个企业拥有的组织可以决定是否限制 {% data variables.product.pat_v2 %} 的访问。
   - 通过 {% data variables.product.pat_v2 %} 的限制访问：{% data variables.product.pat_v2_caps %} 不能访问企业拥有的组织。 由 {% data variables.product.pat_v2 %} 创建的 SSH 密钥将继续工作。 组织不能替代此设置。
   - 允许通过 {% data variables.product.pat_v2 %} 的访问：{% data variables.product.pat_v2_caps %} 可以访问企业拥有的组织。 组织不能替代此设置。
1. 单击“ **保存**”。

## 为 {% data variables.product.pat_v2 %} 实施策略

企业所有者可以提出以下要求：企业拥有的所有组织必须批准每个 {% data variables.product.pat_v2 %}，它可以访问组织。 无需批准，{% data variables.product.pat_v2_caps %} 仍可以读取组织中的公共资源。 相反，在事先未经批准的情况下，企业所有者可以允许 {% data variables.product.pat_v2 %} 访问企业中的组织。 企业所有者还可以允许企业中的每个组织选择自己的审批设置。

{% note %}

注意：只有 {% data variables.product.pat_v2 %} 经受审批，{% data variables.product.pat_v1_plural %} 不需要审批。 如果组织或企业没有限制 {% data variables.product.pat_v1_plural %} 的访问，否则任何 {% data variables.product.pat_v1 %} 都可以访问组织资源而无需事先批准。 详细了解限制 {% data variables.product.pat_v1_plural %}，请参阅此页上的“[限制 {% data variables.product.pat_v1_plural %} 的访问](#restricting-access-by-personal-access-tokens-classic)”和“[为组织设置 {% data variables.product.pat_generic %} 策略](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)”。

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. 单击 {% octicon "law" aria-label="The law icon" %}“策略”下的“组织” 。
1. 选择“要求批准 {% data variables.product.pat_v2 %}”下满足需求的选项：
   - 允许组织配置审批要求：每个企业拥有的组织可以决定是否要求批准 {% data variables.product.pat_v2 %}，它可以访问组织。
   - 要求组织使用审批流：企业拥有的所有组织必须批准每个 {% data variables.product.pat_v2 %}，它可以访问组织。 由组织所有者创建的 {% data variables.product.pat_v2_caps %} 不需要审批。 组织不能替代此设置。
   - 禁用所有组织中的审批流：无需事先批准，由组织成员创建的 {% data variables.product.pat_v2_caps %} 可以访问企业拥有的组织。 组织不能替代此设置。
1. 单击“ **保存**”。

## 限制 {% data variables.product.pat_v1_plural %} 的访问

企业所有者可以阻止 {% data variables.product.pat_v1_plural %} 访问企业拥有的企业和组织。 {% data variables.product.pat_v1_caps_plural %} 仍可以访问组织中的公共资源。 此设置仅控制 {% data variables.product.pat_v1_plural %} 的访问，而不限制 {% data variables.product.pat_v2 %} 的访问。 详细了解限制 {% data variables.product.pat_v2 %} 的访问，请参阅此页上的“[限制 {% data variables.product.pat_v2 %} 的访问](#restricting-access-by-fine-grained-personal-access-tokens)”。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
1. 单击 {% octicon "law" aria-label="The law icon" %}“策略”下的“组织” 。
1. 选择“限制 {% data variables.product.pat_v1_plural %} 访问组织”下满足需求的选项：
   - 允许组织配置 {% data variables.product.pat_v1_plural %} 访问要求：每个企业所有的组织可以决定是否限制 {% data variables.product.pat_v1_plural %} 的访问。
   - 限制通过 {% data variables.product.pat_v1_plural %} 的访问：{% data variables.product.pat_v1_caps_plural %} 无法访问企业或企业拥有的组织。 由 {% data variables.product.pat_v1_plural %} 创建的 SSH 密钥可以继续使用。 组织不能替代此设置。
   - 允许通过 {% data variables.product.pat_v1_plural %} 的访问：{% data variables.product.pat_v1_caps_plural %} 可以访问企业或企业拥有的组织。 组织不能替代此设置。
1. 单击“保存” 。
