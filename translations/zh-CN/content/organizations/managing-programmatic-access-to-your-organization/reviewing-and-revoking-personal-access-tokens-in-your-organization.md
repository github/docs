---
title: 查看和撤销组织中的个人访问令牌
intro: '组织所有者可以查看能访问其组织的 {% data variables.product.pat_v2 %}。 他们还可以撤销特定 {% data variables.product.pat_v2 %} 的访问权限。'
versions:
  feature: pat-v2
shortTitle: Review token access
ms.openlocfilehash: b45401441473f892ba61cf199852588e2a3b3d67
ms.sourcegitcommit: d309541e8f0e28bc1ec333a85b00218627e54fe1
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/03/2022
ms.locfileid: '148131375'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## 关于查看和撤销 {% data variables.product.pat_v2 %}

组织所有者可以查看所有能访问组织所拥有资源的 {% data variables.product.pat_v2 %}。 组织所有者还可以撤销 {% data variables.product.pat_v2 %} 的访问权限。 撤销 {% data variables.product.pat_v2 %} 时，由令牌创建的 SSH 密钥将继续起作用，并且令牌仍然可以读取组织内的公共资源。

撤销令牌时，创建令牌的用户将收到电子邮件通知。

组织所有者仅能查看和撤销 {% data variables.product.pat_v2 %}，而非 {% data variables.product.pat_v1_plural %}。 除非组织 {% ifversion ghec or ghes or ghae %} 或企业 {% endif %} 已限制 {% data variables.product.pat_v1_plural %} 的访问，否则在令牌过期前，任何 {% data variables.product.pat_v1 %} 都可以访问组织资源。 有关限制 {% data variables.product.pat_v1_plural %} 的访问的详细信息，请参阅“[为组织设置 {% data variables.product.pat_generic %} 策略](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)”{% ifversion ghec or ghes or ghae %} 和“[在企业中为 {% data variables.product.pat_generic %} 强制执行策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)”{% endif %}。

{% ifversion ghec %}组织所有者还可以查看和撤销 {% data variables.product.pat_v1_plural %}，如果其组织需要 SAML 单一登录的话。 有关详细信息，请参阅“[查看和管理用户对企业的 SAML 访问权限](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-authorized-credentials)”。 有关使用 REST API 执行此操作的详细信息，请参阅“[列出组织的 SAML SSO 授权](/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization)”和“[删除组织的 SAML SSO 授权](/rest/orgs/orgs#remove-a-saml-sso-authorization-for-an-organization)”。{% endif %}

## 查看和撤销 {% data variables.product.pat_v2 %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 请在左侧边栏的“{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}”下，单击“活动令牌” 。 将显示任何可以访问组织的 {% data variables.product.pat_v2 %}。
1. 请单击要查看或撤销的令牌的名称。
1. 查看令牌具有的访问权限和其他权限。
1. 若要撤消令牌对组织的访问权限，请单击“撤销”。

或者，可以同时撤销多个令牌：

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 请在左侧边栏的“{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}”下，单击“活动令牌” 。 将显示任何可以访问组织的 {% data variables.product.pat_v2 %}。
{% data reusables.user-settings.patv2-filters %}
1. 请选择要撤销的每个令牌。
1. 请选择“所选令牌…”下拉菜单，然后单击“撤销…” 。
