---
title: 管理组织中对个人访问令牌的请求
intro: '组织所有者可以批准或拒绝请求访问其组织的 {% data variables.product.pat_v2 %}。'
versions:
  feature: pat-v2
shortTitle: Manage token requests
ms.openlocfilehash: 3925b74ad29268ec80eca8dd5355c58987e52843
ms.sourcegitcommit: d309541e8f0e28bc1ec333a85b00218627e54fe1
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/03/2022
ms.locfileid: '148131383'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## 关于 {% data variables.product.pat_v2 %} 请求

当组织成员创建 {% data variables.product.pat_v2 %} 来访问组织拥有的资源时，如果组织要求获得对 {% data variables.product.pat_v2 %} 的批准，则组织所有者需要先批准令牌，然后使用者才能使用它访问非公开资源。 有关详细信息，请参阅“[为组织设置 {% data variables.product.pat_generic %} 策略](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)”。

{% data variables.product.company_short %} 将每天通过电子邮件向组织所有者通知正在等待审批的所有 {% data variables.product.pat_v2 %}。 当令牌被拒绝或批准时，创建令牌的用户将收到电子邮件通知。

{% note %}

注意：只有{% data variables.product.pat_v2 %}需要审批，{% data variables.product.pat_v1_plural %}不需要审批。 除非组织已限制 {% data variables.product.pat_v1_plural %} 的访问，否则无需事先批准，任何 {% data variables.product.pat_v1 %} 都可以访问组织资源。 有关详细信息，请参阅“[为组织设置 {% data variables.product.pat_generic %} 策略](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)”。

{% endnote %}

## 管理 {% data variables.product.pat_v2 %} 请求

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 请在左侧边栏的“{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}”下，单击“挂起的请求” 。 如果组织有任何令牌等待批准，将显示它们。
1. 请单击要批准或拒绝的令牌的名称。
1. 查看令牌正在请求的访问权限和其他权限。
1. 若要授予令牌对组织的访问权限，请单击“批准”。 若要拒绝令牌对组织的访问权限，请单击“拒绝”。
1. 如果拒绝了请求，请选择在确认框中输入拒绝令牌的原因。 此原因将共享在发送给令牌所有者的通知中。 然后单击“拒绝”。

或者，可以一次性批准或拒绝多个令牌：

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 请在左侧边栏的“{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}”下，单击“挂起的请求” 。 如果组织有任何令牌等待批准，将显示它们。
{% data reusables.user-settings.patv2-filters %}
1. 选择要批准或拒绝的每个令牌。
1. 选择“选择的请求...”下拉菜单，然后单击“批准...”或“拒绝...”  。
