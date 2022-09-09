---
title: 在企业中实施依赖性见解的策略
intro: 您可以在企业组织内执行依赖性见解策略，或允许在每个组织中设置策略。
permissions: Enterprise owners can enforce policies for dependency insights in an enterprise.
redirect_from:
  - /articles/enforcing-a-policy-on-dependency-insights
  - /articles/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Dependencies
  - Enterprise
  - Organizations
  - Policies
shortTitle: Policies for dependency insights
ms.openlocfilehash: 6862a5d1210eda7d9c14d77eabf21e7a9a5a25b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098033'
---
## 关于企业中的依赖性见解策略

依赖性见解显示企业组织内的存储库所依赖的所有包。 依赖性见解包括有关安全公告和许可的汇总信息。 有关详细信息，请参阅“[查看组织的见解](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)”。

## 实施依赖性见解的可见性策略

在企业拥有的所有组织中，您可以控制组织成员是否可以查看依赖性见解。 您还可以允许所有者在组织级别管理设置。 有关详细信息，请参阅[更改组织依赖项洞察的可见性](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. 在左侧边栏中，单击“组织”。
  ![企业边栏中的“组织”选项卡](/assets/images/help/business-accounts/settings-policies-org-tab.png)
4. 在“Organization policies”（组织政策）下。审查有关更改设置的信息。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. 在“Organization projects”（组织项目）下，使用下拉菜单并选择策略。
  ![带有组织策略选项的下拉菜单](/assets/images/help/business-accounts/organization-policy-drop-down.png)
