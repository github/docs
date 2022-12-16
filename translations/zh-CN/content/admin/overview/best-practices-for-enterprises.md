---
title: 企业最佳做法
shortTitle: Best practices
intro: '了解 {% data variables.product.company_short %} 针对企业的建议做法。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 9c9ccfb0437b451188f8180dcf5ae29a6030f72d
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163428'
---
{% ifversion ghec %}
## 确定企业的最佳身份验证方法

{% data reusables.enterprise.ghec-authentication-options %}

有关确定最能满足需求的身份验证方法的帮助，请参阅“[关于企业身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”。 {% endif %}

## 使用策略

建议使用策略来强制实施业务规则和法规符合性。 

{% data reusables.enterprise.about-policies %} 有关详细信息，请参阅“[关于企业策略](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)”。

## 最大程度地减少组织数量

大型企业通常需要多个组织，但尽量创建较少的组织以概要性地反映公司部门。 少数组织鼓励内部资源做法，并允许更广泛的受众参与讨论。

相反，你可以通过使用团队在每个组织中以更精细的级别管理存储库访问和安全需求。 有关详细信息，请参阅“[关于团队](/organizations/organizing-members-into-teams/about-teams)”。

## 避免在用户拥有的存储库中广泛协作

建议尽可能在组织拥有的存储库中协作，并最大程度地减少用户拥有的存储库中的协作。 组织拥有的存储库具有更复杂的安全和管理功能，即使企业成员身份发生变化，它们仍然可访问。

## 使用用户可读的用户名

{% ifversion ghec %}如果控制企业成员的用户名，请{% else %}使用{% endif %}用户可读的用户名，并避免使用用户难以读取的计算机生成的 ID。

可以管理企业专用存储库中用户名的显示。 有关详细信息，请参阅“[管理组织中成员名称的显示](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization)”。

## 进一步阅读

- “[存储库最佳做法](/repositories/creating-and-managing-repositories/best-practices-for-repositories)”
- “[组织最佳做法](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)”
