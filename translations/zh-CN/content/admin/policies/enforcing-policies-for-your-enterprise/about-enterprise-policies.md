---
title: 关于企业策略
intro: 使用企业策略，可以管理企业拥有的所有组织的策略。
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Policies
ms.openlocfilehash: d452a6f24b3108b915e20b673ebd317a409ac8ae
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718115'
---
为了帮助你实施业务规则和法规合规性，策略为企业帐户拥有的所有组织提供单个管理点。 

{% data reusables.enterprise.about-policies %}

例如，使用“基本权限”策略，可以允许组织所有者为其组织配置“基本权限”策略，也可以为企业中的所有组织强制实施特定的基本权限级别，例如“读取”。

默认情况下，不会强制实施企业策略。 要确定应强制实施以满足业务独特需求的策略，建议从存储库管理策略开始，查看企业帐户中所有可用的策略。 有关详细信息，请参阅“[在企业中强制实施存储库管理策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)”。

配置企业策略时，如需了解更改每个策略所产生的影响，可以查看企业拥有的组织的当前配置。

{% ifversion ghes %} 在企业中强制实施标准的另一种方法是使用预接收挂钩（即在 {% data variables.product.product_location %} 上运行的脚本）来实现质量检查。 有关详细信息，请参阅“[使用预接收挂钩强制实施策略](/admin/policies/enforcing-policy-with-pre-receive-hooks)”。
{% endif %}

## 延伸阅读

- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”
